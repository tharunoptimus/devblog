import Head from "next/head";

function Header(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            ></meta>
            <meta name="description" content="Blogs for Web Devs."></meta>
            <link rel="icon" href="/favicon.ico" />
            <link
            rel="preload"
            href="/font/sans.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
    )
}

export default Header