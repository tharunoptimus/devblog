import Link from "next/link"

function BackToHome() {
    return (
        <div className="backToHome">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
          <style jsx>
              {`
                .backToHome {
                    margin: 3rem 0 0 0;
                }
                .backToHome a {
                    color: #0076ffe6;
                    text-decoration: none;
                }
              `}
          </style>
        </div>
    )
}

export default BackToHome
