import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

async function generate() {
    const fontPath = path.join(process.cwd(), 'src/fonts');
    const fontBold = fs.readFileSync(path.join(fontPath, 'Inter-Bold.woff'));
    const fontRegular = fs.readFileSync(path.join(fontPath, 'Inter-Regular.woff'));

    const title = 'Vasyapp';
    const description = 'The Telegram Client for Deep Focus';
    const logoUrl = 'https://vasya.app/vasyapp.png';

    const svg = await satori(
        {
            type: 'div',
            props: {
                children: [
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
                                                    src: logoUrl,
                                                    width: 220,
                                                    height: 220,
                                                    style: {
                                                        borderRadius: '50px',
                                                        boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
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
                                                        fontSize: '100px',
                                                        fontWeight: 700,
                                                        color: 'white',
                                                        marginBottom: '10px',
                                                        lineHeight: 1.1,
                                                    },
                                                    children: title,
                                                },
                                            },
                                            {
                                                type: 'p',
                                                props: {
                                                    style: {
                                                        fontSize: '42px',
                                                        color: '#b0c4de',
                                                        maxWidth: '900px',
                                                        lineHeight: 1.4,
                                                    },
                                                    children: description,
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    type: 'div',
                                    props: {
                                        style: {
                                            position: 'absolute',
                                            bottom: '60px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            color: '#3390ec',
                                            fontSize: '28px',
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

    fs.writeFileSync(path.join(process.cwd(), 'public/og.png'), pngBuffer);
    console.log('✅ OG image generated at public/og.png');
}

generate().catch(console.error);
