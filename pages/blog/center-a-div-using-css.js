import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import styles from "../../components/blogStyleOne.module.css";
import BlogHeading from "../../components/BlogHeading";
import CodeSnippet from "../../components/CodeSnippet";
import BackToHome from "../../components/BackToHome";

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
					The classic approach is to use <code className={styles.codeTag}>absolute</code> positioning then
					move it down into the right by 50% by the <code className={styles.codeTag}>top</code> and <code className={styles.codeTag}>left</code>
					properties then move it back the other direction by
					translating it 50%. This confusing hack was the gold
					standard.
				</p>

				<CodeSnippet>
					<div className={styles.actualCodeContainer}>
						<p className={styles.codeContainerParagraph}>
							{""}
							<span className={styles.green}>
								{""}
								.wrapper &#123;{""}
							</span>
							{""}
						</p>

						<p className={styles.codeContainerParagraph}>
							<span className={styles.purple}>
								&emsp;&emsp; position{""}
							</span>
							{""}
							<span className={styles.white}>:</span>
							<span className={styles.red}>
								&nbsp;absolute{""}
							</span>
							{""}
							<span className={styles.white}>;</span>
						</p>

						<p className={styles.codeContainerParagraph}>
							<span className={styles.purple}>
								&emsp;&emsp; top
							</span>
							{""}
							<span className={styles.white}>:</span>
							<span className={styles.red}>&nbsp;50% </span>
							{""}
							<span className={styles.white}>;</span>
						</p>

						<p className={styles.codeContainerParagraph}>
							<span className={styles.purple}>
								&emsp;&emsp; left
							</span>
							{""}
							<span className={styles.white}>:</span>
							<span className={styles.red}>&nbsp;50% </span>
							{""}
							<span className={styles.white}>;</span>
						</p>

						<p className={styles.codeContainerParagraph}>
							<span className={styles.purple}>
								&emsp;&emsp; transform
							</span>
							{""}
							<span className={styles.white}>:</span>
							<span className={styles.blue}>&nbsp;translate</span>
							<span className={styles.red}>
								&nbsp;(-50%, -50%){""}
							</span>
							{""}
							<span className={styles.white}>;</span>
						</p>

						<p className={styles.codeContainerParagraph}>
							{""}
							<span className={styles.green}>&#125;</span>
							{""}
						</p>
					</div>
				</CodeSnippet>

				<p className={styles.mainContentDescriptionSubHeading}>
					Flex Box:
				</p>

				<p className={styles.mainContentDescription}>
					When the flex box came around 2009, everything changed when
					we finally had less confusing steps to do. We can make the
					parent div a flexible column or row with the <code className={styles.codeTag}>flex-direction</code>
					property and then align and justify the children with
					<code className={styles.codeTag}>align-items</code> and <code className={styles.codeTag}>justify-center</code>.
				</p>

				<CodeSnippet>
					<div className={styles.actualCodeContainer}>
						<p className={styles.codeContainerParagraph}>
							{""}
							<span className={styles.green}>
								{""}
								.wrapper &#123;{""}
							</span>
							{""}
						</p>

						<p className={styles.codeContainerParagraph}>
							<span className={styles.purple}>
								&emsp;&emsp; display{""}
							</span>
							{""}
							<span className={styles.white}>:</span>
							<span className={styles.red}>&nbsp;flex{""}</span>
							{""}
							<span className={styles.white}>;</span>
						</p>

						<p className={styles.codeContainerParagraph}>
							<span className={styles.purple}>
								&emsp;&emsp; align-items{""}
							</span>
							{""}
							<span className={styles.white}>:</span>
							<span className={styles.red}>&nbsp;center{""}</span>
							{""}
							<span className={styles.white}>;</span>
						</p>

						<p className={styles.codeContainerParagraph}>
							<span className={styles.purple}>
								&emsp;&emsp; justify-content{""}
							</span>
							{""}
							<span className={styles.white}>:</span>
							<span className={styles.red}>&nbsp;center{""}</span>
							{""}
							<span className={styles.white}>;</span>
						</p>

						<p className={styles.codeContainerParagraph}>
							{""}
							<span className={styles.green}>&#125;</span>
							{""}
						</p>
					</div>
				</CodeSnippet>

				<p className={styles.mainContentDescriptionSubHeading}>
					CSS Grids:
				</p>

				<p className={styles.mainContentDescription}>
					If you wanted to do much simpler with even fewer lines using
					CSS Grid. We declare the parent div as div and then tell it
					to place the items in the center with <code className={styles.codeTag}>place-items</code>.
				</p>

				<CodeSnippet>
					<div className={styles.actualCodeContainer}>
						<p className={styles.codeContainerParagraph}>
							{""}
							<span className={styles.green}>
								{""}
								.wrapper &#123;{""}
							</span>
							{""}
						</p>

						<p className={styles.codeContainerParagraph}>
							<span className={styles.purple}>
								&emsp;&emsp; display{""}
							</span>
							{""}
							<span className={styles.white}>:</span>
							<span className={styles.red}>&nbsp;grid{""}</span>
							{""}
							<span className={styles.white}>;</span>
						</p>

						<p className={styles.codeContainerParagraph}>
							<span className={styles.purple}>
								&emsp;&emsp; place-items{""}
							</span>
							{""}
							<span className={styles.white}>:</span>
							<span className={styles.red}>&nbsp;center{""}</span>
							{""}
							<span className={styles.white}>;</span>
						</p>

						<p className={styles.codeContainerParagraph}>
							{""}
							<span className={styles.green}>&#125;</span>
							{""}
						</p>
					</div>
				</CodeSnippet>
				<BackToHome />
			</div>
			
			<Footer />
		</div>
	);
}

export default blog;
