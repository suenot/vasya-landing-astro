// Build-time GitHub Releases data for the landing site.
//
// Pulls the latest release (version + downloadable assets) and the full release
// list (for the changelog) from the GitHub API while Astro builds the static
// site, so the version, download links, and changelog always track the repo's
// real releases. Falls back to `constants.ts` if GitHub is unreachable.

const REPO = 'suenot/vasya';
const API = `https://api.github.com/repos/${REPO}/releases`;

export interface ReleaseAsset {
  name: string;
  url: string;
}

export interface ReleaseInfo {
  version: string; // "0.8.0"
  tag: string; // "v0.8.0"
  htmlUrl: string;
  date: string; // "2026-06-13"
  body: string; // markdown release notes
  assets: ReleaseAsset[];
}

let cache: ReleaseInfo[] | null | undefined;

async function fetchReleases(): Promise<ReleaseInfo[] | null> {
  if (cache !== undefined) return cache;
  try {
    const res = await fetch(`${API}?per_page=30`, {
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'vasya-landing' },
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const raw = (await res.json()) as any[];
    cache = raw
      .filter((r) => !r.draft)
      .map((r) => ({
        version: String(r.tag_name || '').replace(/^v/, ''),
        tag: String(r.tag_name || ''),
        htmlUrl: String(r.html_url || ''),
        date: String(r.published_at || r.created_at || '').slice(0, 10),
        body: String(r.body || ''),
        assets: (r.assets || []).map((a: any) => ({ name: a.name, url: a.browser_download_url })),
      }));
  } catch (e) {
    console.warn('[releases] GitHub fetch failed, using static fallback:', (e as Error).message);
    cache = null;
  }
  return cache;
}

export async function getReleases(): Promise<ReleaseInfo[] | null> {
  return fetchReleases();
}

/** Newest non-draft release (GitHub returns them newest-first). */
export async function getLatest(): Promise<ReleaseInfo | null> {
  const all = await fetchReleases();
  return all && all.length ? all[0] : null;
}

/** First asset whose filename matches `re`, else undefined. */
export function pickAsset(assets: ReleaseAsset[], re: RegExp): string | undefined {
  return assets.find((a) => re.test(a.name))?.url;
}

/** Minimal Markdown → HTML for GitHub release bodies (headings, lists, bold,
 *  inline code, links). The bodies are authored in-repo so this is trusted. */
export function mdToHtml(md: string): string {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = (s: string) =>
    esc(s)
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');

  const out: string[] = [];
  let inList = false;
  const closeList = () => {
    if (inList) {
      out.push('</ul>');
      inList = false;
    }
  };
  for (const rawLine of md.replace(/\r/g, '').split('\n')) {
    const line = rawLine.trimEnd();
    if (!line.trim()) {
      closeList();
      continue;
    }
    const h = line.match(/^#{2,4}\s+(.*)$/);
    if (h) {
      closeList();
      out.push(`<h3 class="changeGroupTitle">${inline(h[1])}</h3>`);
      continue;
    }
    const li = line.match(/^\s*[-*]\s+(.*)$/);
    if (li) {
      if (!inList) {
        out.push('<ul class="changeList">');
        inList = true;
      }
      out.push(`<li>${inline(li[1])}</li>`);
      continue;
    }
    closeList();
    out.push(`<p>${inline(line)}</p>`);
  }
  closeList();
  return out.join('\n');
}
