// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
                </Head>
                <body className="custom_class">
                  
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;