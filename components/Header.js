import Head from "next/head";

function Header(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            ></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Header