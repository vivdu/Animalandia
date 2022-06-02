import banner2 from '../../img/banner2.jpeg';
import vacuna from '../../img/vacuna.png'


function Servicio2(){
    return (
        <main>
        <section id="baner2">
            <img src={banner2} alt="seguro medico"/>


            <h1 class="tituloserv">Servicios</h1>
            </section>
            <section id="servicio">
                <article class="boxservicio">
                    <img src={vacuna} alt="medico"/>
                    <h3>Vacunacion</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus modi placeat, iste nostrum
                        possimus quo, at quia quaerat dolorem magni ad illum neque quam. Aliquam necessitatibus earum
                        non omnis quas!</p>
                </article>
                <article class="boxservicio">
                    <img src={vacuna} alt="medico"/>
                    <h3>Estetica</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas non sequi ratione. Saepe nostrum
                        nisi facilis quasi dolores deleniti quia exercitationem quae dignissimos? Alias velit ipsa cum
                        ea, est cupiditate.</p>
                </article>
                <article class="boxservicio">
                    <img src={vacuna} alt="medico"/>
                    <h3>Cirugia</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores repellendus atque fugiat nobis
                        accusamus nesciunt, laborum cum eaque, adipisci animi iure ipsa in, nostrum itaque. Consectetur
                        dicta molestiae autem ipsam.</p>
                </article>
                <article class="boxservicio">
                    <img src={vacuna} alt="medico"/>
                    <h3>Hospitalizacion</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, ut pariatur sequi placeat
                        dolor reprehenderit delectus suscipit, maxime accusantium tempore nostrum corporis repellat
                        aliquam laudantium earum, rem ea quam et.</p>
                </article>
            </section>
    </main> 
    )
}
export default Servicio2;