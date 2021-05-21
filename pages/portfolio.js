import Head from 'next/head'
import Link from 'next/link'

//custom compnetsn
import Layout from '../components/layout'

export default function Portfolio () {
    return (
        <Layout>
            <Head>
                <title>Porfoltio | Stephen Daus</title>
            </Head>
            <h1>Portfolio</h1>
            <p>Portfolio content goes here</p>
            <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
            </h2>
        </Layout>

    )
}