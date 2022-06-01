import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { getAll } from "../../components/perros/Perritos";
import Razas from "../../components/perros/Razas";
import './Perros.css';


function Perros(){
    const perritos=getAll();
return(
    <div className="container-fluid">
        <Header />
        <Navbar />
        <div className="row">
            <h1>Perros</h1>
            {
            perritos.map(perritos=>(
            <div className="col-12 col-md-4" key={perritos.id}>
                <Razas p1={perritos.id} p2={perritos.thumbnail} p3={perritos.raza} p4={perritos.descripcion} p5={perritos.acercade} p6={perritos.imagen}/>
                </div>
                ))
            }
        </div>
        <Footer />
    </div>
    )
}

export default Perros;
