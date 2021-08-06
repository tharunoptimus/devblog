function homeHeader() {
	return (
		<div className="homeHeaderContainer">
			<div className="homeHeader">
				<h1 className="title">Blog</h1>
				<h3 className="title subTitle">Tips for Web Devs</h3>
			</div>

			<style jsx>{`
				.homeHeaderContainer {
					padding: 24px 24px 0 24px;
				}

				.homeHeader {
					height: 288px;
					padding: 48px 32px 0px 32px;
				}

				@media (max-width: 480px) {
					.homeHeader {
						padding: 36px 24px 28px 24px;
					}
				}

				.title {
					text-align: center;
					margin: 0;
					font-size: 56px;
					margin-bottom: 11px;
				}

				.subTitle {
					font-size: 1rem;
					margin-bottom: 12px;
				}
			`}</style>
		</div>
	);
}

export default homeHeader;
