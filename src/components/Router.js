import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Error from './Error/Error';
import infoProductos from  '../datos/datos.json';
import Header from './Header';
import SingleProducto from './SingleProducto/SingleProducto';
import Navegacion from './Navegacion/Navegacion';
import Contacto from './Contacto/Contacto';

class Router extends Component {

    state = {
        productos: [],
        terminoBusqueda: ''
    }

    componentWillMount() {
        this.setState({
            productos: infoProductos
        })
    }

    busquedaProducto = (busqueda) => {
        if(busqueda.lenght > 3) {
            this.setState({
                terminoBusqueda: busqueda
            })
        } else {

        }
    }

    render() {
        return(
            <BrowserRouter>
                <Header/>
                <Navegacion/>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Productos
                            productos={this.state.productos}
                            busquedaProducto={this.busquedaProducto}
                        />
                    )} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route exact path="/productos" render={() => (
                        <Productos
                            productos={this.state.productos}
                        />
                    )} />
                    <Route exact path="/producto/:productoId" render={(props) => {
                        let idProducto = props.location.pathname.replace('/producto/', '');
                        return(
                            <SingleProducto producto={this.state.productos[idProducto]} />
                        )
                    }} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;