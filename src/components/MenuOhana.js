import React from 'react';
import logo from '../img/Menus/Ohana/logo.png';
import crepaDulce from '../img/Menus/Ohana/crepaDulce.jpg';
import crepaSalada from '../img/Menus/Ohana/crepaSalada.jpg';
import waffles from '../img/Menus/Ohana/waffles.jpg';
import postres from '../img/Menus/Ohana/postres.jpg';
import bebidasFrias from '../img/Menus/Ohana/bebidasFrias.jpg';
import bebidasCalientes from '../img/Menus/Ohana/bebidasCalientes.jpg';
import { Encabezado } from "./encabezado";
import { Seccion } from "./seccion";
import { Mapa } from "./mapa";
import { Contacto } from "./contacto";

export const MenuOhana = () => {
    const crepasDulces = [
        { nombre: "Crepa con 1 ingrediente" , precio: 45 },
        { nombre: "Crepa con 2 ingrediente" , precio: 50 },
        { nombre: "Crepa con 3 ingrediente" , precio: 55 },
        { nombre: "Crepa con 4 ingrediente" , precio: 60 }
    ];
    const productosWaffles = [
        { nombre: "Waffles con 1 ingrediente" , precio: 35 },
        { nombre: "Waffles con 2 ingrediente" , precio: 40 },
        { nombre: "Waffles con 3 ingrediente" , precio: 45 },
        { nombre: "Waffles con 4 ingrediente" , precio: 50 }
    ];
    const crepasSaladas = [
        { nombre: "Jamon con queso" , precio: 45 },
        { nombre: "Hawaiana" , precio: 50 },
        { nombre: "Átun" , precio: 50 },
        { nombre: "3 quesos" , precio: 50 }
    ];
    const productosPostre = [
        { nombre: "Cubilete de queso" , precio: 20 },
        { nombre: "Pay de limón" , precio: 30 },
        { nombre: "Gelatina de mosaico" , precio: 30 },
        { nombre: "Pastel de chocolate" , precio: 55 }
    ];
    const telefonos = ["7752058754", "7751252085"];
    const linksFacebook = ["https://es.reactjs.org/docs/faq-functions.html"];
    const linksInstagram = ["https://www.w3schools.com/tags/tag_div.ASP"];
    const linksTwitter = ["https://disenowebakus.net/enlaces-hipervinculos-tag-ancla-html.php"];
    return (
        <section>
            <Encabezado titulo="" logo={logo}/>
            <div className="container text-light">
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Menú</span></h1>
                <p className="text-center">Crepas, Waffles, Pasteles, Café y algo más...</p>
                <Seccion menu={crepasDulces} imagen={crepaDulce} titulo="Crepas dulces" />
                <Seccion menu={productosWaffles} imagen={waffles} titulo="Waffles" />
                <div className="dropdown-divider"></div>
                    <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Ingredientes</span></h3>
                    <div className="row m-0 p-0">
                        <div className="col-md-12 col-lg-4">
                            <ul className="m-0 p-0 pb-3 list-unstyled">
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Queso Philadelphia</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Nutella</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Cajeta</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Lechera</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Mermelada de fresa</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Mermelada de zarzamora</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Mermelada de durazno</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Mermelada de mango</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Mermelada de piña</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Miel</li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <ul className="m-0 p-0 pb-3 list-unstyled">
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Fresa</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Durazno</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Mango</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Piña</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Plátano</li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <ul className="m-0 p-0 pb-3 list-unstyled">
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Nuez</li>
                                <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Almendra</li>
                            </ul>
                        </div>
                    </div>
                <div className="dropdown-divider"></div>
                <Seccion menu={crepasSaladas} imagen={crepaSalada} titulo="Crepas Saladas" />
                <Seccion menu={productosPostre} imagen={postres} titulo="Postres" />
                <div className="card border-dark shadow">
                    <img src={bebidasFrias} className="card-img" alt="Bebidas Frias" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Bebidas Frías</h5>
                    </div>
                </div>
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Malteadas</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chocolate</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Fresa</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Vainilla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Mango</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Mazapán</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <br/>
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Esquimos</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chocolate</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Fresa</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Vainilla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Capuchino</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Café</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Moka</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$30</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Rompope</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$30</p></div>
                </div>
                <br/>
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Frappé</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chocolate</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Fresa</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Vainilla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Café</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Moka</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Cajeta</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <br/>
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Té helado</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Limón</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Manzanilla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Verde</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Frutos rojos</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <br/>
                <div className="card border-dark shadow">
                    <img src={bebidasCalientes} className="card-img" alt="Bebidas Calientes" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Bebidas Calientes</h5>
                    </div>
                </div>
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Café</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Americano</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$30</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Capuchino</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$40</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Moka</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Cajeta</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <br/>
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Chocolates</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chocolate Mexicano</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$40</p></div>
                </div>
                <br/>
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Té</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Limón</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Manzanilla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Verde</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Frutos rojos</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <br/>
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Té latte</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chai</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Limón</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Manzanilla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Verde</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Frutos rojos</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <br/>
                <p className="m-0 p-0">Por $5 cambia a leche deslactosada o leche deslactosada light.</p>
                <Contacto telefonos={telefonos} facebook={linksFacebook} twitter={linksTwitter} instagram={linksInstagram}/>
                <Mapa ubicacion="https://www.google.com/maps/embed/v1/place?key=AIzaSyBtaMxmFKRzS4x1iXQoSl_Zs61ZyQ3sIXo&q=Ohana+-+Crepes+%26+Coffee" />
            </div>
        </section>
    )
}