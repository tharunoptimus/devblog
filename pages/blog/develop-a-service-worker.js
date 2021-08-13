import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import styles from "../../components/blogStyleOne.module.css";
import BlogHeading from "../../components/BlogHeading";
import CodeSnippet from "../../components/CodeSnippet";
import BackToHome from "../../components/BackToHome";
import Code from "../../components/Code";

function blog() {
	return (
		<div className="blogBody">
			<Header title={"Developing a Service Worker"} />
			<div className={styles.mainImageContainer}>
				<Image
					src="/images/developASWBlogImage.png"
					height="391"
					width="626"
				/>
			</div>
			<div className={styles.mainContent}>
				<BlogHeading
					heading={
						"Develop a service worker to cache all assets and make it online first sw"
					}
				/>

				<p className={styles.mainContentDescription}>
					Whenever you wanted to speed up the loading of your web app or to make your app run offline or to qualify as a PWA,
					you could use a service worker. A typical service worker
					will cache all the assets that are needed to render the
					page. This means that the service worker will be able to
					serve the page without having to load the assets from the
					server.
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					What is a Service Worker?
				</p>

				<p className={styles.mainContentDescription}>
					A service worker is a script which runs your browser,
					separated from a web page, and which allows the door to
					access functions which do not require a web page or a user
					interaction. Today, capabilities like as push and background
					sync already exist. Other things such as periodic sync or
					geofencing could be supported in future by service workers.
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					Let's begin!
				</p>

				<p className={styles.mainContentDescription}>
					In this blog, we will create a service worker to cache all
					the static files and serve them when it is requested. It
					also shows an offline page when the requested resource is
					not in the cache and there is no internet connection.
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					Core Events of a Service Worker:
				</p>

				<p className={styles.mainContentDescription}>
					There are three main events that a service worker can
					handle:
				</p>

				<ul>
					<li>
						<Code>install</Code>
					</li>
					<li>
						<Code>activate</Code>
					</li>
					<li>
						<Code>fetch</Code>
					</li>
				</ul>

				<p className={styles.mainContentDescriptionSubHeading}>
					Install (event):
				</p>

				<p className={styles.mainContentDescription}>
					The install event is called when the service worker is
					installed. When this event is called the service worker is
					registered and it starts cacheing the mentioned assets. A
					typical install event will look something like this
				</p>

				<CodeSnippet>
					<div className={styles.actualCodeContainer}>
						<p className={styles.codeContainerParagraph}>
							{""}
							<span className={styles.green}>
								{""}
								{
									' self.addEventListener("install", (event) => {'
								}
								{""}
							</span>
							{""}
						</p>

						<p className={styles.codeContainerParagraph}>
							<span className={styles.purple}>
								&emsp;&emsp; // do something with the event{""}
							</span>
							{""}
						</p>

						<p className={styles.codeContainerParagraph}>
							{""}
							<span className={styles.green}>&#125;</span>
							{""}
						</p>
					</div>
				</CodeSnippet>

				<p className={styles.mainContentDescriptionSubHeading}>
					Activate (event):
				</p>

				<p className={styles.mainContentDescription}>
					The activate event is called when the service worker is
					activated. The activate event will be called when the
					service worker is installed and the cache is ready to be
					used. It also manages the cache destruction when a new
					version of the service worker is installed or assets are
					changed.
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					Fetch (event):
				</p>

				<p className={styles.mainContentDescription}>
					The fetch event is called when a request is made to the
					service worker. The fetch event looks for a cached version
					of the requested resource and if it is found, it will return
					the cached version. Else it will return the response from
					the server. We will create the sw in such a way that it will
					cache all the static files and serve them when it is
					requested only when there is no internet connection.
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					Let's actually start coding!
				</p>

				<p className={styles.mainContentDescription}>
					Let's start by creating a folder called <Code>sw</Code> in
					the root directory of the project. Add your index.html page
					in the folder and write some HTML.
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					<Code>index.html</Code>
				</p>

				<web-code>
					<pre className={styles.preLanguage}>
						<code className={styles.language}>
							{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
</head>
<body>
    <h1>This is the home page.</h1>
</body>
</html>`}
						</code>
					</pre>
				</web-code>

				<p className={styles.mainContentDescription}>
					And then we create a JS file named{" "}
					<Code>serviceworker.js</Code>
				</p>

				<p className={styles.mainContentDescription}>
					In the file, we tell service worker the static assets we
					need it to cache.
				</p>

				<web-code>
					<pre className={styles.preLanguage}>
						<code className={styles.language}>
							{`const CACHE = "content-v1"; // name of the current cache
const OFFLINE = "/offline.html"; // URL to offline HTML document

const AUTO_CACHE = [
    // URLs of assets to immediately cache
    OFFLINE,
    "/",
    "/serviceworker.js"
];`}
						</code>
					</pre>
				</web-code>

				<p className={styles.mainContentDescription}>
					We can add the files needed to be cached in the{" "}
					<Code>AUTO_CACHE</Code> and it will cache it in the{" "}
					<Code>activate</Code> event. But to keep it simple, we add
					the things we need.
				</p>
				<p className={styles.mainContentDescription}>
					If you have noticed, we did not create a{" "}
					<Code>offline.html</Code> file but asked the service worker
					to cache it. So, we will create the{" "}
					<Code>offline.html</Code>. This page will be shown to the
					user if the service worker cannot serve the assets from
					cache while there is no internet connectivity.
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					<Code>offline.html</Code>
				</p>

				<web-code>
					<pre className={styles.preLanguage}>
						<code className={styles.language}>
							{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're Offline!</title>
</head>
<body>
    <h1>You're offline. Please check your internet connection!</h1>
</body>
</html>`}
						</code>
					</pre>
				</web-code>

				<p className={styles.mainContentDescription}>
					Now that our files are ready, let handle the install event
					of the service worker. In the <Code>serviceworker.js</Code>{" "}
					add this
				</p>

				<web-code>
					<pre className={styles.preLanguage}>
						<code className={styles.language}>
							{` self.addEventListener("install", (event) => {
     event.waitUntil(
         caches
             .open(CACHE)
             .then((cache) => cache.addAll(AUTO_CACHE))
             .then(self.skipWaiting())
     );
});`}
						</code>
					</pre>
				</web-code>

				<p className={styles.mainContentDescription}>
					On the install event it iterates AUTO_CACHE and add cache
					for each entry. This is where the cacheing happens.
					<br></br>
					<br></br>
					Now that we have handled the install event, we will code for
					the <Code>activate</Code> event. <br></br>
					In the <Code>serviceworker.js</Code> add the following.
				</p>

				<web-code>
					<pre className={styles.preLanguage}>
						<code className={styles.language}>
							{` self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return cacheNames.filter((cacheName) => CACHE !== cacheName);
            })
            .then((unusedCaches) => {
                console.log("DESTROYING CACHE", unusedCaches.join(","));
                return Promise.all(
                    unusedCaches.map((unusedCache) => {
                        return caches.delete(unusedCache);
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});`}
						</code>
					</pre>
				</web-code>

				<p className={styles.mainContentDescription}>
					Here, after the <Code>activate</Code> event is fired, it
					will check for the cache version and will delete unused or
					inapplicable caches
				</p>

				<p className={styles.mainContentDescriptionSubHeading}>
					<Code>fetch</Code> event:
				</p>

				<p className={styles.mainContentDescription}>
					The whole working of the service worker is the fetch event.
					It is the event that is fired when a user requests a
					resource.
				</p>

				<web-code>
					<pre className={styles.preLanguage}>
						<code className={styles.language}>
							{`self.addEventListener("fetch", (event) => {
    if (
        !event.request.url.startsWith(self.location.origin) ||
        event.request.method !== "GET"
    ) {
        // External request, or POST, ignore
        return void event.respondWith(fetch(event.request));
    }

    event.respondWith(
        // Always try to download from server first
        fetch(event.request)
            .then((response) => {
                // When a download is successful cache the result
                caches.open(CACHE).then((cache) => {
                    cache.put(event.request, response);
                });
                // And of course display it
                return response.clone();
            })
            .catch((_err) => {
                // A failure probably means network access issues
                // See if we have a cached version
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        // We did have a cached version, display it
                        return cachedResponse;
                    }

                    // We did not have a cached version, display offline page
                    return caches.open(CACHE).then((cache) => {
                        const offlineRequest = new Request(OFFLINE);
                        return cache.match(offlineRequest);
                    });
                });
            })
    );
});`}
						</code>
					</pre>
				</web-code>

				<p className={styles.mainContentDescription}>
					The first thing it does is check if the request is from the
					server or from the client. If it is from the client, it will
					return the response. And it also makes sure that the request
					is a GET request. It will not handle POST requests or
					request to external urls. After it gets the response,{" "}
					<Code>fetch(event.request)</Code>, the <Code>fetch</Code>{" "}
					function will try to download the resource from the server.
					It always try to download from the server first regardless
					of what is cached. If there is no network connectivity, it
					will try to find the requested assets in the cache. If it
					finds it, it will return the cached version. If it does not
					find it, it will return the offline page.
				</p>

				<p className={styles.mainContentDescription}>
					Now, all we have to do is make the browser to find and
					install the service worker. Since, the home page is{" "}
					<Code>index.html</Code> we will make the install call there.{" "}
					<br></br>
					In the <Code>index.html</Code> add the following before the
					end of the <Code>{`</body>`}</Code>.
				</p>

				<web-code>
					<pre className={styles.preLanguage}>
						<code className={styles.language}>
							{`if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('serviceworker.js')
            .then((reg) => console.log('Success: ', reg.scope))
            .catch((err) => console.log('Failure: ', err));
    })
}`}
						</code>
					</pre>
				</web-code>

				<p className={styles.mainContentDescription}>
					First, the <Code>if</Code> statement checks if the browser
					supports service workers. If it does, it will register the
					service worker. <br></br>
					The <Code>register</Code> function takes a path to the
					service worker file. In this case, it is{" "}
					<Code>serviceworker.js</Code>
					<br></br>
					This function returns a promise. It will resolve when the
					service worker is registered and reject if it fails.{" "}
					<br></br>
					<Code>reg.scope</Code> returns the scope of the service
					worker. This is the url that the service worker will
					control. <br></br>
				</p>

				<p className={styles.mainContentDescription}>
					That's all! If we try to access the page when the device is
					offline, it will still load the page! And if it requests a
					resource which is not cached, it will show the offline page!
				</p>

				<p className={styles.mainContentDescription}>
					The code for this example can be found at{" "}
					<a
						className="github"
						aria-label="Link to the Source Code"
						href="https://github.com/tharunoptimus/blog-sw-code"
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
