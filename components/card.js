import Image from 'next/image'
import { getAllMenuItemSlugs } from '../lib/api';
import { getLocationSlugs } from '../lib/api'
import { getPeopleSlugs } from '../lib/api'
import Link from 'next/link'
import Heading from './heading'
import styles from './card.module.scss'


export default function Card ({ node , parentPath }) {
    
    const { title, slug, featuredImage, uri } = node;
    
    const { sourceUrl, mediaDetails, altText } = featuredImage.node;

    const { width , height } = mediaDetails;


    return (
        <div className="card">
            <Image
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
                />
            
            <Heading type="h3">
                <Link href={`/${parentPath}/${slug}`}>
                    <a>
                        {title}
                    </a>
                </Link>
            </Heading>

            
        </div>
    )
}