import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Logo from "./assets/wgSqbpi0_400x400-removebg-preview-removebg-preview.png"
import rick from "./assets/rick.png"
import ecommerce1 from "./assets/ecommerce1.png"
import ecommerce2 from "./assets/ecommerce2.png"
import wikipoke from "./assets/pokeapi.png"
import crudusers from "./assets/userscrud.png"
import climass from "./assets/climaapp.png"
function App() {

  return (
    <div className="App">
        <nav className='nav-bar'>
          <ul className='navvv'>
            <li className='logo-nav'><a href="https://www.maracaibo.gob.ve/tag/gobernacion-del-zulia/" target="_blank"><img src={Logo} alt="" /></a></li>
            <li><a href="#carta">Sobre mi</a></li>
            <li><a href="#curricu">Curriculum</a></li>
          </ul>
        </nav>

        <section className='about-me'>
          <article className='presentacion'>
          <h2>Mi nombre es Bryan David Sanabria Azuaje</h2>
          <p>CI: <span>31708535</span> edad: <span>18</span> años num: <span>04146235893</span></p>
          </article>

        <article className='carta' id='carta'>
        <ul>
          <li>Gobernacion del Zulia/acaldia de Maracaibo</li>
          <li>29/11/22</li>
          <li>Maracaibo</li>
        </ul>
    <h5>Solicitud de Beca </h5>
<p>Estimados miembros de la alcaldia:

Mi nombre es Bryan David Sanabria Azuaje portador de la cedula: <span>31708535</span> y me encuentro estudiando de manera independiente desarrollo de software y web por mis propios medios,redacto esta carta con la finalidad de obtener una beca estudiantil con la cual  podria estudiar ingeniera de software en una universidad privada como urbe o uru ya que el factor economico no me permiten tal Prioridad como lo es la educacion Universitaria,

Soy una persona sobresaliente en cada ambito que me manejo y estaria muy contento de poder estudiar una carrera como la que describi de manera universitaria para progresar aun mas en mi meta de ser un ingeniero de software, espero  cumplir los requisitos y expectativas para participar en el Programa de becas.

Les garantizo que tendre un excelente desempeño escolar y pondré muy en alto el nombre del Zulia.</p>

<p>Atentamente,
Bryan David Sanabaria Azuaje
CI:<span>31708535</span>
</p>


</article>
 </section>

<article className='proyectos' id='curricu'>
  <h4>Proyectos que he hecho para demostrar mis habilidades</h4>
 <ul className='proyectos-ull'>
    <li> <a href="https://wikipedia-rick-and-morty.netlify.app/">Wikipedia de rick and morty</a>  <a href="https://wikipedia-rick-and-morty.netlify.app/" target="_blank"><img src={rick} width="280px" alt="" /></a></li>
    <li> <a href="https://pokewikii.netlify.app/" target="_blank">Wikipedia de pokemon</a>  <a href="https://pokewikii.netlify.app/" target="_blank"><img src={wikipoke} width="280px" alt=""/></a></li>
    <li> <a href="https://userscrudd.netlify.app/" target="_blank">users-crud</a>   <a href="https://userscrudd.netlify.app/" target="_blank"><img src={crudusers} width="280px" alt="" /></a></li>
    <li> <a href="https://clima-app-bryansss1.netlify.app/" target="_blank">app del clima</a>  <a href="https://clima-app-bryansss1.netlify.app/" target="_blank"><img src={climass} width="280px" alt="" /></a></li>
    <li> <a href="https://ecommercebryansss1.netlify.app/" target="_blank">Ecommerce 1</a>  <a href="https://ecommercebryansss1.netlify.app/" target="_blank"><img src={ecommerce1} width="280px" alt="" /></a></li>
    <li> <a href="https://ecommerce2y.netlify.app/" target="_blank">Ecommerce 2</a>  <a href="https://ecommerce2y.netlify.app/" target="_blank"><img src={ecommerce2} width="280px" alt="" /></a></li>
  </ul>
  </article>

    </div>
  )
}

export default App
