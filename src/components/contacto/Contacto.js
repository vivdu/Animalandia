import React from 'react';
import './contacto.css';

function Contact() {
    return (
        <div class="contactoform">

            <section id="formulario">

                <form name="form" action="index.html" method="get" target="_self" autocomplete="autocomplete" novalidate>
                    <h2>Registra tus datos para contactarnos contigo</h2>
                    <div class="cajaform">
                        <label for="name" class="label">Nombre </label>
                        <input name="nombre" id="nombre" type="text" placeholder="Ingresar nombre"/>

                            <label for="telefono" class="label">Ingresa tu teléfono móvil</label>
                            <input name="telefono" id="telefono" type="text" placeholder="Número celular"/>

                                <label for="email" class="label">Correo electrónico</label>
                                <input type="email" name="email" id="email" placeholder="ingrese su correo"/>

                                    <label for="ciudad1" class="label">Selecciona un municipio</label>
                                    <select name="ciudad1" id="ciudad1">
                                        <option value="0" selected>Elige un municipio</option>
                                        <optgroup label="Bogotá">
                                            <option value="1">Norte</option>
                                            <option value="2">Centro</option>
                                            <option value="3">Sur</option>
                                        </optgroup>
                                        <optgroup label="Municipio aledaño">
                                            <option value="4">Soacha</option>
                                            <option value="5">Chía</option>
                                            <option value="6">Mosquera</option>
                                        </optgroup>
                                        <optgroup label="Otros municipios">
                                            <option value="7">En Cundinamarca</option>
                                            <option value="8">Resto del país</option>
                                        </optgroup>
                                    </select>
                                    <label for="observacion">Observaciones</label>
                                    <textarea rows="3" cols="30" name="observaciones"></textarea>
                                    <input id="botonf" type="submit" value="Enviar"/>
                                        <input id="botonf" type="reset" value="Restablecer"/>
                                        </div>
                                    </form>

                                </section>
                                <section id="contacto">
                                    <article class="infocontacto">
                                        <h1>¿Como encontrarnos?</h1>
                                        <p><strong>Dirección: </strong>Carrera 19 #20-21 sur / Bogotá, Colombia</p>
                                        <p><strong>Teléfono: </strong>6012120282</p>
                                        <p><strong>Email: </strong>contacto@animalandia.com</p>
                                    </article>
                                    <article class="mapa">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.056880467706!2d-74.10588205038748!3d4.583811343921763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f98de8b2cdf01%3A0xcb94d4852598b934!2sKuepa%20-%20Restrepo!5e0!3m2!1ses!2sco!4v1646398874749!5m2!1ses!2sco"
                                            width="300" height="300" style="border:2px solid #c4c4c4;" allowfullscreen=""
                                            loading="lazy"></iframe>
                                    </article>

                                </section>
        </div>
    )
}
export default Contact;