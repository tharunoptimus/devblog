function BlogHeading(props) {
    return (
        <div>
            <h1 className="blogHeading">
                {props.heading}
            </h1>

            <style jsx>
                {`
                    .blogHeading {
                        font-size: 44px;
                        color: #202124;
                        margin-bottom: 11px;
                        padding-top: 56px;
                    }

                    @media (max-width: 480px) {
                        .blogHeading {
                            font-size: 36px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default BlogHeading
