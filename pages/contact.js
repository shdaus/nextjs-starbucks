import Head from 'next/head'
import Link from 'next/link'

//custom compnetsn
import Layout from '../components/layout'

export default function Contact () {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <h1>Contact</h1>
            <p>Contact content goes here</p>
            <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
            </h2>
        </Layout>

    )
}