import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import styles from "../../components/blogStyleOne.module.css";
import BlogHeading from "../../components/BlogHeading";
import CodeSnippet from "../../components/CodeSnippet";
import BackToHome from "../../components/BackToHome";
import Code from "../../components/Code";
import Link from "next/link";

function blog() {

    let firstScript = `<script>
if(location.protocol !== 'https:') {
    let url = 'https://' + location.href.substring(location.protocol.length);
    location.replace(url);
}
</script>`

    let secondScript = `{
    "short_name": "PWA",
    "name": "PWA App Template",
    "description": "Description of PWA",
    "icons": [
        {
            "src": "manifestlogo.png",
            "type": "image/png",
            "sizes": "512x512",
            "purpose": "any maskable"
        }
    ],
    "start_url": "/",
    "background_color": "#3367D6",
    "display": "standalone",
    "theme_color": "#3367D6"
}`


	return (
		<div className="blogBody">
			<Header title={"Developing a Service Worker"} />
			<div className={styles.mainImageContainer}>
				<Image
					src="/images/blogs/convert-to-pwa/pwa.png"
					height="400"
					width="600"
				/>
			</div>
			<div className={styles.mainContent}>
				<BlogHeading
					heading={
						"Add an offline page, a service worker and few logos to make your PWA!"
					}
				/>

				<p className={styles.mainContentDescription}>
					Whenever you wanted your website to be installed as an app
					on mobile devices, add some assets and make it a PWA.
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					What is a PWA?
				</p>

				<p className={styles.mainContentDescription}>
					A progressive web application is a type of application
					software delivered through the web, built using common web
					technologies including HTML, CSS and JavaScript. It is
					intended to work on any platform that uses a
					standards-compliant browser, including both desktop and
					mobile devices
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					Let's begin!
				</p>

				<p className={styles.mainContentDescription}>
					In this blog, we will make an existing website into an
					installable PWA. Get the starter code from{" "}
					<a
                        className="github"
						rel="noopener noreferrer"
						href="https://github.com/tharunoptimus-pd/pwa-starter.git"
					>
						here
					</a>{" "}
					if you don't have an existing website to work with. <br></br>
                    Run <Code>npm install</Code> in the repository to install all the dependencies.
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					Important Aspects of a PWA:
				</p>

				<p className={styles.mainContentDescription}>
					There are many things that make a PWA different from a regular web app. The following aspects of a website allows it to be a PWA:
				</p>

				<ul>
					<li>
						Register a service worker that controls a <Code>start_url</Code>
					</li>
					<li>
						Redirecting HTTP traffic to HTTPS
					</li>
					<li>
						Configure a <Code>manifest.json</Code> file for the splash screen.
					</li>
					<li>
						Sets a <Code>theme_color</Code> in the home page.
					</li>
					<li>
						Content is sized correctly on all devices.
					</li>
					<li>
						Provide a valid <Code>apple-touch-icon</Code> to run it on ios devices.
					</li>
					<li>
						Include a <Code>{"<meta name='viewport'>"}</Code> tag with <Code>width</Code> or <Code>initial-scale</Code>
					</li>
					<li>
						A maskable icon for all devices
					</li>
				</ul>

				<p className={styles.mainContentDescriptionSubHeading}>
					Registering a service worker that controls a <Code>start_url</Code>
				</p>
                
                <p className={styles.mainContentDescriptionSubHeading}>
					What is a manifest.json?
				</p>

				<p className={styles.mainContentDescription}>
                    The manifest. json is a simple JSON file in your website that tells the browser about your website on user's mobile device or desktop. That controls the <Code>start_url</Code>, the splash screen and the icons.
				</p>


				

				<p className={styles.mainContentDescriptionSubHeading}>
                    Redirecting HTTP traffic to HTTPS
				</p>

				<p className={styles.mainContentDescription}>
					The redirecting from HTTP to HTTPS can be done at both the server and the client side. While server side might not be easily done, it is quite simple to do it on the client side.
                    Simply adding the few lines of script below in the home page will redirect all the traffic from HTTP to HTTPS. <br></br>
                    In the home page,

				</p>

                <web-code>
					<pre className={styles.preLanguage}>
						<code className={styles.language}>
							{firstScript}
						</code>
					</pre>
				</web-code>

                <p className={styles.mainContentDescription}>
					When the above script gets executed, it will redirect all the traffic from HTTP to HTTPS.
				</p>


				<p className={styles.mainContentDescriptionSubHeading}>
					Creating a <Code>manifest.json</Code> file:
				</p>

				<p className={styles.mainContentDescription}>
					We will need to create a manifest.json file in the root of the website. The manifest.json file will tell the browser about the splash screen, the icons and the theme color. So, let us select the icon and the theme color and add them to the manifest.json file.
                    Create a logo for your website and go to <a rel="noopener noreferrer" href="https://favicon.io/favicon-converter/">Favicon.io</a> to convert the icon to different sizes according to the needs of our PWA.  The theme color is the color that will appear on the notification bar of the PWA on devices where our PWA is installed.
                    And the <Code>start_url</Code> will tell the browser where the starting page of the PWA is.
                    Let's combine all the information we got from the Favicon.io and the <Code>start_url</Code> to the manifest.json file.
				</p>

                <web-code>
					<pre className={styles.preLanguage}>
						<code className={styles.language}>
							{secondScript}
						</code>
					</pre>
				</web-code>

                <p className={styles.mainContentDescription}>
					Let's break it down. 
                    <ul>
                        <li>The <Code>short_name</Code> is the name of the app on the home screen of the device.</li>
                        <li>The <Code>name</Code> is the name of the PWA </li>
                        <li>The <Code>description</Code> is similar to the <Code>{"<meta name='description'>"}</Code> </li>
                        <li>The <Code>icons</Code> array contains all the icons available from the download from favicon.io, a large icon with <Code>{'"purpose": "any masakble"'}</Code> is acceptable but giving more icons for the PWA enhances the display of the icon on different devices </li>
                        <li>The <Code>start_url</Code> will tell the browser where the starting page of the PWA is and the app will show this page if the user opens the PWA from their home screen. </li>
                        <li>The <Code>background_color</Code> will tell what color will be shown in the splash screen of the app while loading</li>
                        <li>The <Code>display</Code> will tell how to display website in the browser. Options are fullscreen, minimul-ui, standalone, or browser. "standalone" will display as normal with statusbar and "fullscreen" will display in fullscreen. </li>
                    </ul>
				</p>

                <p className={styles.mainContentDescriptionSubHeading}>
					Add the meta description to viewport
				</p>

                <p className={styles.mainContentDescription}>
                    Add the lines before the <Code>{"<title>"}</Code> tag in the head section of the html.
                </p>

                <web-code>
					<pre className={styles.preLanguage}>
						<code className={styles.language}>
							{`<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">`}
						</code>
					</pre>
				</web-code>

                <p className={styles.mainContentDescription}>
                    All this does it to make sure the content is displayed correctly on different view ports. And the apple-touch-icon will show the icon on ios devices. Although the logo from favicon.io is good, you might consider a logo of size <Code>180x180</Code> <br></br><br></br>
                    And that is all, your website is now a PWA! The browser will look for all the vitals and important aspects and will prompt the user to install the PWA.
                </p>








				

				<p className={styles.mainContentDescription}>
					The code for this example can be found at{" "}
					<a
						className="github"
						aria-label="Link to the Source Code"
						href="https://github.com/tharunoptimus-pd/pwa-starter.git"
					>
						Github
					</a>
				</p>

				<BackToHome />
			</div>

			<Footer />

			<style jsx>
				{`
					.github {
						color: #0076ffe6;
						text-decoration: none;
					}
				`}
			</style>
		</div>
	);
}

export default blog;
