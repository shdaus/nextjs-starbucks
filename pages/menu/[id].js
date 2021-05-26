import Layout from '../../components/layout'
import { getAllMenuItems } from '../../lib/api'
import { getAllMenuItemSlugs, getMenuItemBySlug } from '../../lib/api'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../../components/heading'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'

export async function getStaticPaths() {

    const allSlugs = await getAllMenuItemSlugs()

    const paths = allSlugs.edges.map( edge => {
        const { slug } = edge.node;
        return {
            params: { 
                id: slug
            }
        }
    })

    return {
        paths , 
        fallback:false
    }

}

export async function getStaticProps({ params }){

    const menuItemData = await getMenuItemBySlug(params.id)

    return {
        props: {
            menuItemData
        }
    }

}

export default function MenuItem({ menuItemData }) {

    const { title, featuredImage, content , showcase} = menuItemData;

    const { price } = menuItemData.menuItemInformation;

    const { sourceUrl, mediaDetails, altText } = showcase.banner;

    const { width , height } = mediaDetails;

    const { nutritionalData} = menuItemData.nutritionalInformation;

    


    return (
        <Layout>
            <Row m1>
                <Col>
                    <Link href="/menu">
                        <a>Back to Menu</a>
                    </Link>
                    </Col>
            </Row>
            <Image 
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <Heading type="h1">{ title }</Heading>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <Row justifyContentCenter>
                <Col>
                    ${price}
                    
                </Col>
                {nutritionalData.map((nD) => {
                    const { property , value} = nD;

                    return <Row justifyContentCenter>
                            <Col>
                                {property}
                            </Col>
                            <Col>
                                {value}
                            </Col>
                        </Row>
                    
                })}
                
            </Row>
            
        </Layout>
    )
}