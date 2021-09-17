//import Layout from "../components/Layout";
//import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
//import Service from '../components/Service';
import About from '../components/About';
import FeatureElements from "../components/FeatureElements";
//import Footer from '../components/Footer';
import Head from 'next/head';
const Index = () => {
  return (
    
      <>
      <Head>
      <script dangerouslySetInnerHTML={{ __html: `(function () {
        var options = {
            whatsapp: "+33621475504", // WhatsApp number
            call_to_action: "Contactez-nous", // Call to action
            position: "right", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();` }} />
      </Head>
      <Hero />
      <FeatureElements />
      <div className='background'>

      <Feature/>
      
      </div>
      
      
      </>
    
  )
}
export default Index;