import React, { Component } from 'react';
import './Nosotros.css'

class Nosotros extends Component {
    render() {
        return(
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros" />
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor sodales dolor sollicitudin malesuada. Vivamus lacus purus, blandit sit amet placerat eget, pulvinar sit amet nulla. Donec blandit vestibulum eros ut pellentesque. Quisque nec aliquam massa. Nullam et leo elit. Sed dapibus elit at elit blandit, eu fermentum elit condimentum. Mauris nec tempor mauris. Phasellus sit amet nulla orci.

Proin a massa tincidunt, gravida orci vel, commodo ligula. Morbi tristique semper volutpat. Nunc sollicitudin, risus eu vehicula laoreet, enim felis condimentum urna, et tristique ex neque quis nisl. Etiam bibendum aliquam risus, eget auctor tortor vulputate vel. Etiam congue sem lorem, vel auctor turpis tempus ut. Nullam non ligula volutpat, vulputate lectus a, suscipit metus. Integer pharetra lectus ut felis feugiat fermentum auctor sit amet nibh. Nunc sed dolor vitae quam consectetur dictum. In hac habitasse platea dictumst. Curabitur malesuada nisl sit amet enim sodales, et eleifend mauris condimentum. Praesent tristique suscipit lacus, nec tempus mi condimentum et.

Morbi vehicula mattis venenatis. Duis maximus, nunc ac imperdiet venenatis, tortor est facilisis orci, non consectetur risus sapien id justo. Suspendisse finibus malesuada metus consectetur egestas. Donec posuere tincidunt consectetur. Nullam augue mauris, dictum nec purus et, eleifend vestibulum justo. Curabitur luctus aliquet justo. Ut tempus elit non fermentum hendrerit. Maecenas sed dictum magna, et mattis dolor. Ut vel lorem sed ligula dictum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in cursus dolor, ut hendrerit turpis. </p>
                </div>
            </div>
        )
    }
}

export default Nosotros;