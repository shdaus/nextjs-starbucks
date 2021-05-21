import Layout from '../../components/layout'
import { getLocation } from '../../lib/api'
import { getLocationSlugs, getLocationBySlug } from '../../lib/api'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from '../../components/paragraph'
import Heading from '../../components/heading'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'

export async function getStaticPaths() {

    const allSlugs = await getLocationSlugs()

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

    const locationData = await getLocationBySlug(params.id)

    return {
        props: {
            locationData
        }
    }

}

export default function Location({ locationData }) {

    const { title, featuredImage, content } =locationData;

    const { city, phoneNumber, state, streetAddress, zipCode } = locationData.locationInformation;

    const { sourceUrl, mediaDetails, altText } = featuredImage.node;

    const { width , height } = mediaDetails;

    const {relatedPeople} = locationData;

    const {menuTypes} = locationData;

    return (
        <Layout>
            <Row m1>
                <Col>
                    <Link href="/people">
                        <a>Back to People</a>
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
            <Paragraph> {streetAddress} <br></br>
                {city} , {state} {zipCode} <br></br>
                {phoneNumber}
            </Paragraph>
            

            <div dangerouslySetInnerHTML={{ __html: content }} />

    
            { menuTypes.edges.map(edge => {
                    const { name, items } = edge.node;
                    return <Section title= {name}>
                    <Row justifyContentCenter>
                        {items.edges.map((edge, index) => {
                            const {node} = edge;
                            return <Col sm={6} md={4} lg={3} key={index} >
                                <Card node={node} parentPath="menu"/>
                            </Col>
                })}
                </Row>
            </Section>
            }) }

            <Heading type="h2">Staff</Heading>
            
            {relatedPeople.employees.map((locationsEmployee) => {
                const { title , slug } = locationsEmployee;
                const { jobTitle} = locationsEmployee.personInformation;
                const {sourceUrl , mediaDetails , altText} = locationsEmployee.featuredImage.node;
                const { width , height } = mediaDetails;

                return  <Section> <Image
                        src={sourceUrl}
                        width="250"
                        height="250"
                        alt={altText}
                        />
                        <Link href={`/people/${slug}`}>
                            <a>
                            <Heading type="h3"> {title} </Heading>
                            </a>
                        </Link>
                        <Heading type="h4"> {jobTitle} </Heading>
                        
                        
                        
                        </Section>
             })}
            

        </Layout>
    )
}