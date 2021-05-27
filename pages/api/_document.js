import Document, {Html, Head, Main, NextScript} from 'next/document'
class MyDocument extends Document {
    render(){
        return(
            <Html lang="fr">
                
                <Head>
                    <meta name= "description" content="Dev At Ecommerce" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
                    </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument