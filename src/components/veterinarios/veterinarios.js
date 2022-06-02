import Equipobanner from '../../img/banner_equipo.svg';
import medico1 from '../../img/medico1.jpg';
import medico2 from '../../img/medico2.jpg';
function Veterinarios() {
    return (
        <main>
		<section id="baner2">
			<img src={Equipobanner}alt="perritu"/>
		</section>

		<h1 class="tituloserv">Nuestro equipo</h1>
		<section id="equipo">
			<article class="boxequipo">
				<img src={medico1} alt="medico"/>
				<h2>Mario Perez</h2>
				<h3>Especialista en aves</h3>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nesciunt nostrum quos ab quisquam odit
					tempora perspiciatis, laudantium temporibus voluptatum officia, unde quo accusantium! Inventore
					corrupti mollitia aperiam ratione alias.</p>
			</article>
			<article class="boxequipo">
				<img src={medico2} alt="medico"/>
				<h2>Claudia Torres</h2>
				<h3>Especialista en aves</h3>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nesciunt nostrum quos ab quisquam odit
					tempora perspiciatis, laudantium temporibus voluptatum officia, unde quo accusantium! Inventore
					corrupti mollitia aperiam ratione alias.</p>
			</article>
			<article class="boxequipo">
				<img src={medico1} alt="medico"/>
				<h2>Mario Perez</h2>
				<h3>Especialista en aves</h3>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nesciunt nostrum quos ab quisquam odit
					tempora perspiciatis, laudantium temporibus voluptatum officia, unde quo accusantium! Inventore
					corrupti mollitia aperiam ratione alias.</p>
			</article>
			<article class="boxequipo">
				<img src={medico2} alt="medico"/>
				<h2>Claudia Torres</h2>
				<h3>Especialista en aves</h3>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nesciunt nostrum quos ab quisquam odit
					tempora perspiciatis, laudantium temporibus voluptatum officia, unde quo accusantium! Inventore
					corrupti mollitia aperiam ratione alias.</p>
			</article>
        </section>
	</main>
    )
}
export default Veterinarios;