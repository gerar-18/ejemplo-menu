import React from 'react';
import logo from '../img/Menus/Ohana/logo.png';
import crepaDulce from '../img/Menus/Ohana/crepaDulce.jpg';
import crepaSalada from '../img/Menus/Ohana/crepaSalada.jpg';
import waffles from '../img/Menus/Ohana/waffles.jpg';
import postres from '../img/Menus/Ohana/postres.jpg';
import bebidasFrias from '../img/Menus/Ohana/bebidasFrias.jpg';
import bebidasCalientes from '../img/Menus/Ohana/bebidasCalientes.jpg';

export const MenuOhana = () => {

    return (
        <section>
            <img src={logo} width="300" height="300"  className="rounded mx-auto d-block mt-4 mb-3" alt="logo" loading="lazy"/>
            <div className="container text-light">
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Menú</span></h1>
                <p className="text-center">Crepas, Waffles, Pasteles, Café y algo más...</p>
                <div className="card border-dark shadow">
                    <img src={crepaDulce} className="card-img" alt="Crepas Dulces" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Crepas Dulces</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Crepa con 1 ingrediente</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Crepa con 2 ingredientes</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Crepa con 3 ingredientes</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Crepa con 4 ingredientes</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <br/>
                <div className="card border-dark shadow">
                    <img src={waffles} className="card-img" alt="Waffles" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Waffles</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Waffles con 1 ingrediente</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$35</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Waffles con 2 ingredientes</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$40</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Waffles con 3 ingredientes</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Waffles con 4 ingredientes</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <br/>
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
                <div className="card border-dark shadow">
                    <img src={crepaSalada} className="card-img" alt="Crepas Salasas" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Crepas Saladas</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Jamón con queso</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Hawaiana</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Atún</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">3 quesos</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <br/>
                <div className="card border-dark shadow">
                    <img src={postres} className="card-img" alt="Postres" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Postres</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Cubilete de queso</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pay de limón</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$30</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Gelatina de mosaico</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$30</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pastel de chocolate</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <br/>
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
                <h1 className="text-center mt-5 mb-3"><span className="texto-naranja-degradado font-weight-bold">Ubicación</span></h1>
                <div className="embed-responsive embed-responsive-16by9 mb-5">
                    <iframe
                        title="Mapa"
                        className="embed-responsive-item mx-auto"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBtaMxmFKRzS4x1iXQoSl_Zs61ZyQ3sIXo&q=Ohana+-+Crepes+%26+Coffee" allowFullScreen>
                    </iframe>
                </div>
            </div>
        </section>
    )
}