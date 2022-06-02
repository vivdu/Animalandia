import veterinario from '../../img/veterinario.png'
import paciente from '../../img/paciente.png'
import vacunacion from '../../img/vacunacion.png'
function Servicios() {
    return (
        
        <section id="servicios">
            
			<article class="servicio">
				<img src={paciente} alt="paciente"/>
				<h3>Pacientes</h3>
				<p>Lorem ipsum dolor sit ame consectetur</p>
			</article>
			<article class="servicio">
				<img src={veterinario} alt="veterinario"/>
				<h3>Veterinario</h3>
				<p>Lorem ipsum dolor sit ame consectetur</p>
			</article>
			<article class="servicio">
				<img src={vacunacion} alt="vacunacion"/>
				<h3>Vacunacion</h3>
				<p>Lorem ipsum dolor sit ame consectetur</p>
			</article>
            </section>
    )
}
export default Servicios;