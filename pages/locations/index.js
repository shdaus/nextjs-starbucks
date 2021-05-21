import Layout from '../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'
import Section from '../../components/section'

import Image from 'next/image'

import { getLocation } from '../../lib/api.js'

export async function getStaticProps() {
    
    const locations = await getLocation()
    
    return {
        props: { locations }
    }
}
export default function Locations( { locations }) {
    return (
        <Layout>
            <h1>Locations</h1>
            { locations.edges.map(edge => {
                    const { title, featuredImage, locationInformation, uri} = edge.node;
                    const {node} = edge;
                    
                    return <Section >
                        <Row rowReverse>
                            <Col sm={3}>
                                <Card node={node} parentPath="locations"/>
                                {locationInformation.streetAddress}
                            </Col>
                        </Row>
                    </Section>
                }) }
        </Layout>
    )
}