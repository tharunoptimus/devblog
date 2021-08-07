import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import styles from "../../components/blogStyleOne.module.css";
import BlogHeading from "../../components/BlogHeading";
import CodeSnippet from "../../components/CodeSnippet";

function blog() {
	return (
		<div className="blogBody">
			<Header title={"Centering a Div"} />
			<div className={styles.mainImageContainer}>
				<Image
					src="/images/blogs/center-a-div-using-css/centeredDiv.webp"
					height="391"
					width="626"
				/>
			</div>
			<div className={styles.mainContent}>
				<BlogHeading heading={"Centering a Div"} />

				<p className={styles.mainContentDescription}>
					The most difficult thing a web developer ever has to do is
					center a div both horizontally and vertically with CSS.
					There are hundreds of ways to get the job done we are going
					to see three ways to do it.
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					The Classic Approach: (absolute positioning)
				</p>

				<p className={styles.mainContentDescription}>
					The classic approach is to use absolute positioning then
					move it down into the right by 50% by the top and left
					properties then move it back the other direction by
					translating it 50%. This confusing hack was the gold
					standard.
				</p>

                <CodeSnippet >
                    <div className={styles.actualCodeContainer}>
                        <p className={styles.codeContainerParagraph}> <span className={styles.green}> .wrapper &#123; </span> </p>

                        <p className={styles.codeContainerParagraph}>
                            <span className={styles.purple}>&emsp;&emsp; position </span> <span className={styles.white}>:</span>
                            <span className={styles.red}>&nbsp;absolute </span> <span className={styles.white}>;</span>
                        </p>

                        <p className={styles.codeContainerParagraph}>
                            <span className={styles.purple}>&emsp;&emsp; top</span> <span className={styles.white}>:</span>
                            <span className={styles.red}>&nbsp;50% </span> <span className={styles.white}>;</span>
                        </p>

                        <p className={styles.codeContainerParagraph}>
                            <span className={styles.purple}>&emsp;&emsp; left</span> <span className={styles.white}>:</span>
                            <span className={styles.red}>&nbsp;50% </span> <span className={styles.white}>;</span>
                        </p>

                        <p className={styles.codeContainerParagraph}>
                            <span className={styles.purple}>&emsp;&emsp; transform</span> <span className={styles.white}>:</span>
                            <span className={styles.blue}>&nbsp;translate</span> 
                            <span className={styles.red}>&nbsp;(-50%, -50%) </span> <span className={styles.white}>;</span>
                        </p>

                        <p className={styles.codeContainerParagraph}> <span className={styles.green}>&#125;</span> </p>
                    </div>
                </CodeSnippet>


			</div>
			<Footer />
		</div>
	);
}

export default blog;
