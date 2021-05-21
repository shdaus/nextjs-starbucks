import Layout from '../../components/layout'
import { getPeople } from '../../lib/api'
import { getPeopleSlugs, getPeopleBySlug } from '../../lib/api'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from '../../components/paragraph'
import Heading from '../../components/heading'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'

export async function getStaticPaths() {

    const allSlugs = await getPeopleSlugs()

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

    const peopleData = await getPeopleBySlug(params.id)

    return {
        props: {
            peopleData
        }
    }

}

export default function People({ peopleData }) {

    const { emailAddress , jobTitle} = peopleData.personInformation;

    const { title, featuredImage, content } = peopleData;

    const { sourceUrl, mediaDetails, altText } = featuredImage.node;

    const { width , height } = mediaDetails;

    const {relatedLocations} = peopleData;


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
            <Paragraph>
                {jobTitle} <br />
                <Link href="mailto:{`${emailAddress}`" >
                {emailAddress} 
            </Link>
            </Paragraph>
            
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <Heading type="h2">Work Locations</Heading>

            {relatedLocations.employees.map((locationsEmployee) => {
                const { title , slug } = locationsEmployee;
                const { streetAddress} = locationsEmployee.locationInformation;
                const {sourceUrl , mediaDetails , altText} = locationsEmployee.featuredImage.node;
                const { width , height } = mediaDetails;

                return  <Section> <Image
                        src={sourceUrl}
                        width={width}
                        height={height}
                        alt={altText}
                        />
                        <Link href={`/locations/${slug}`}>
                            <a>
                            <Heading type="h3"> {title} </Heading>
                            </a>
                        </Link>
                        <Heading type="h4"> {streetAddress}</Heading>
                        
                        </Section>
             })}
            
        </Layout>
    )
}