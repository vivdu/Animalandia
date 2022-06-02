import golden from '../../img/golden.jpg';

function Iniciobanner() {
    return (
        <section class="baner">
			<article class="cita">
				<h3>AGENDA UNA CITA AHORA PARA RECLAMAR TU PRIMER BAÑO GRATIS</h3>
				<p>Queremos que conozcas nuestra propuesta para baño de mascotas, donde tenemos espacios dedicados para
					evitar la contaminacion cruzada. Aplica de lunes a viernes para mascotas que visitan la clinica por
					primera vez</p>
				<h4>RECUERDA QUE NUESTRO EQUIPO MÉDICO TE CONFIRMARÁ LA CITA</h4>
				<button class="b-morado">Registrarse</button>
			</article>
			<article class="promo">
				<h2>GRATIS PRIMER BAÑO</h2>
				<img src={golden} alt="perritu"/></article>
		</section>
    )
}
export default Iniciobanner;