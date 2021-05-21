import Layout from '../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'
import Section from '../../components/section'

import { getMenuTypesAndMenuItems } from '../../lib/api.js'

export async function getStaticProps() {
    
    const menuTypes = await getMenuTypesAndMenuItems()
    
    return {
        props: { menuTypes }
    }
}

export default function Menu( { menuTypes } ) {
    return (
        <Layout>
                <h1>Menu</h1>
                <p>Menu intro here</p>
                { menuTypes.edges.map(edge => {
                    const { name, items } = edge.node;
                    return <Section title= {name}>
                    <Row justifyContentCenter>
                        {items.edges.map((edge, index) => {
                            const {node} = edge;
                            return <Col sm={6} md={4} lg={3} key={index} size >
                                <Card node={node} parentPath="menu" />
                            </Col>
                        })}
                    </Row>
                    </Section>
                }) }
                <section>
                    
                </section>
        </Layout>
    )
}

