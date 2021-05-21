import Layout from '../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'
import Section from '../../components/section'
import Heading from '../../components/heading'
import Image from 'next/image'
import Link from 'next/link'

import { getPeople } from '../../lib/api.js'

export async function getStaticProps() {
    
    const peoples = await getPeople()
    
    return {
        props: { peoples }
    }
}
export default function People( { peoples }) {
    return (
        <Layout>
            <h1>Staff</h1>
            { peoples.edges.map(edge => {
                    const { title, featuredImage , personInformation} = edge.node;
                    const {node} = edge;
                    
                    return <Section>
                        <Row rowReverse>
                            <Col sm={3}>
                            <Card node={node} parentPath="people" />
                            <Heading type="h4">{personInformation.jobTitle}</Heading>
                            </Col>
                        </Row>
                    </Section>
                    
                }) }
        </Layout>
    )
}