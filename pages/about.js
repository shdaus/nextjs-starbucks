import Head from 'next/head'
import Link from 'next/link'

//custom compnetsn
import Layout from '../components/layout'

export default function About () {
    return (
        <Layout>
            <Head>
                <title>Porfolio | Stephen Daus</title>
            </Head>
            <h1>About</h1>
            <p>About content goes here</p>
            <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
            </h2>
        </Layout>

    )
}