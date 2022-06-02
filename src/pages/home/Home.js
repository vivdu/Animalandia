import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Iniciobanner from "../../components/banner-index/Indexbanner";
import Servicios from "../../components/servicios/Servicios"
import './Home.css';

function Home(){
return(
    <div>
        <Header />
        <Navbar />
        <Iniciobanner />
        <Servicios />
        <Footer />
    </div>
    )
}

export default Home;
