import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute } from 'astro';

const fontBold = fs.readFileSync(path.resolve('./src/fonts/Inter-Bold.woff'));
const fontRegular = fs.readFileSync(path.resolve('./src/fonts/Inter-Regular.woff'));

export const GET: APIRoute = async ({ url }) => {
    const title = url.searchParams.get('title') || 'Vasyapp';
    const description = url.searchParams.get('description') || 'The Telegram Client for Deep Focus';

    const svg = await satori(
        {
            type: 'div',
            props: {
                children: [
                    // Background Gradient
                    {
                        type: 'div',
                        props: {
                            style: {
                                display: 'flex',
                                height: '100%',
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                background: 'linear-gradient(135deg, #0f171e 0%, #17212b 100%)',
                                padding: '40px',
                            },
                            children: [
                                // Logo Section
                                {
                                    type: 'div',
                                    props: {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '40px',
                                        },
                                        children: [
                                            {
                                                type: 'img',
                                                props: {
                                                    src: 'https://vasya.app/vasyapp.png',
                                                    width: 180,
                                                    height: 180,
                                                    style: {
                                                        borderRadius: '40px',
                                                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                // Text Section
                                {
                                    type: 'div',
                                    props: {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                        },
                                        children: [
                                            {
                                                type: 'h1',
                                                props: {
                                                    style: {
                                                        fontSize: '85px',
                                                        fontWeight: 700,
                                                        color: 'white',
                                                        marginBottom: '20px',
                                                        lineHeight: 1.1,
                                                    },
                                                    children: title,
                                                },
                                            },
                                            {
                                                type: 'p',
                                                props: {
                                                    style: {
                                                        fontSize: '36px',
                                                        color: '#b0c4de',
                                                        maxWidth: '800px',
                                                        lineHeight: 1.4,
                                                    },
                                                    children: description,
                                                },
                                            },
                                        ],
                                    },
                                },
                                // Footer
                                {
                                    type: 'div',
                                    props: {
                                        style: {
                                            position: 'absolute',
                                            bottom: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            color: '#3390ec',
                                            fontSize: '24px',
                                            fontWeight: 600,
                                        },
                                        children: [
                                            { type: 'span', props: { children: 'vasya.app' } }
                                        ]
                                    }
                                }
                            ],
                        },
                    },
                ],
                style: {
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                },
            },
        },
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'Inter',
                    data: fontBold,
                    weight: 700,
                    style: 'normal',
                },
                {
                    name: 'Inter',
                    data: fontRegular,
                    weight: 400,
                    style: 'normal',
                },
            ],
        }
    );

    const resvg = new Resvg(svg, {
        fitTo: {
            mode: 'width',
            value: 1200,
        },
    });

    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(pngBuffer, {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
};
