function CodeSnippet({ children }) {
    return (
        <div className="codeSnippetContainer">
            <div className="codeSnippetHeader">
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>
            </div>

            <div className="actualCode">{ children }</div>

            <style jsx>
                {`
                    .codeSnippetContainer {
                        display: flex;
                        flex-direction: column;
                        width: fit-content;
                        margin: 0 auto;
                        background-color: #151718;
                        padding: 13px;
                        border-radius: 5px;
                    }
                    .codeSnippetHeader {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }
                    .actualCode {
                        display: flex;
                        flex-direction: column;
                        margin-top: 8px;
                    }
                `}
            </style>
        </div>
    )
}

export default CodeSnippet
