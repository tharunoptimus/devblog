import Image from 'next/image'
import Link from 'next/link'
import styles from './blogCard.module.css'

function blogCard(props) {
    return (
        <div className={styles.blogCard}>
            <div className={styles.imageContainer}>
                <Link href={props.props.url}>
                    <Image src={props.props.image} alt="Blog Image" width="300px" height="200px" className={styles.image} />
                </Link>
            </div>
            <div className={styles.content}>
                <Link href={props.props.url}>
                    <a>{props.props.heading}</a>
                </Link>
                <p>{props.props.description}</p>
            </div>
        </div>
    )
}


export default blogCard
