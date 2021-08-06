import Image from 'next/image'
import Link from 'next/link'

function blogCard(props) {

    return (

        <div className="blogCard">
            <div className="blogCardImageContainer">
                <Link href={props.blog.url}>
                    <Image src={props.blog.image} alt="Blog Image" width="300px" height="200px" />
                </Link>
            </div>
            <div className="blogCardContent">
                <Link href={props.blog.url}>
                    <a>{props.blog.heading}</a>
                </Link>
                <p>{props.blog.description}</p>
            </div>

            <style jsx>{`
                .blogCard {
                    display: flex;
                    flex-direction: column;
                    justify-content: stretch;
                    max-width: 150px;
                    margin: 2px;
                    padding: 20px;
                    border-radius: 5px;
                    max-width: 100%;
                }
                .blogCard:hover {
                    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
                }
                .blogCardContent {
                    margin-top: 10px;
                }
                .blogCardContent p{
                    font-size: 1rem;
                    color: #5F6368
                }
                .blogCardContent a{

                    color: #202124;
                    font-size: 24px;
                    text-decoration: none;
                }
                .blogCardImageContainer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                @media (max-width: 480px) {
                    .blogCard {
                        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
                    }
                }
            
            `}</style>

        </div>
    )
}

export default blogCard