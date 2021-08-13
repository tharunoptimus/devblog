import styles from "./blogStyleOne.module.css";

function Code({ children }) {
    return (
        <code className="codeTag">
            { children }

            <style jsx>
                {`
                    .codeTag {
                        background: #f7f7f7;
                        border: 1px solid #dadce0;
                        color: #202124;
                        font: 1rem/1.5em SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;
                        hyphens: none;
                        tab-size: 2;
                        text-align: left;
                        word-spacing: normal;
                        margin: 0 .25em;
                        padding: .125em .25em;
                    }
                `}
            </style>

        </code>
    )
}

export default Code
