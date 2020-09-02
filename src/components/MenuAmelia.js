import React from 'react';
import logo from '../img/Menus/Amelia/logo.png';
import desayuno from '../img/Menus/Amelia/desayuno.jpeg';
import omelette from '../img/Menus/Amelia/omelette.jpg';
import chilaquiles from '../img/Menus/Amelia/chilaquiles.jpg';
import enchiladas from '../img/Menus/Amelia/enchiladas.jpg';
import molletes from '../img/Menus/Amelia/molletes.jpg';
import sincronizada from '../img/Menus/Amelia/sincronizada.jpg';
import hotcakes from '../img/Menus/Amelia/hotcakes.jpg';
import sandwich from '../img/Menus/Amelia/sandwich.jpg';
import pan from '../img/Menus/Amelia/pan.jpeg';
import bebidas from '../img/Menus/Amelia/bebidas.png';
import frutas from '../img/Menus/Amelia/frutas.jpg';
import ensaladas from '../img/Menus/Amelia/ensaladas.jpeg';
import comidaCorrida from '../img/Menus/Amelia/comidaCorrida.jpeg';
import jarra from '../img/Menus/Amelia/jarra.jpg';
import comidaCarta from '../img/Menus/Amelia/comidaCarta.jpeg';
import postres from '../img/Menus/Amelia/postres.jpg';
import pozole from '../img/Menus/Amelia/pozole.jpg'
import pancita from '../img/Menus/Amelia/pancita.jpg';

export const MenuAmelia = () => {

    return (
        <section>
            <h1 className="text-center"><font color="white">Cocina Amelia</font></h1>
            <img src={logo} width="300" height="300" className="rounded mx-auto d-block mt-4 mb-3" alt="logo" loading="lazy" />
            <div className="container text-light">
                <p className="text-center">El verdadero sabor del hogar</p>
                <h3 className="text-center">MARTES A DOMINGO</h3>
                <h4 className="text-center">9:00 am - 6:00 pm</h4>
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">DESAYUNOS COMPLETOS</span></h1>
                <p className="text-center">(Incluye: Café o Té, 1pza. de pan dulce ó 1 Hotcake ó Fruta) Se sirven de 9:00 am. a 1:00 pm.</p>
                <div className="card border-dark shadow">
                    <img src={desayuno} className="card-img" alt="desayuno" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Huevos</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos Revueltos, en Torta ó Estrellados</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos con Frijoles</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos Divorciadoss</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">(Dos huevos estrellados, uno bañado en salsa verde y otro en salsa roja, con frijoles refritos)</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos Albañil (Huevo bañado en salsa verde con frijoles refritos)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Frijoles con Chorizo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevo con Tocino, Revuelto o Americano</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos Rancheros (Sobre tortilla de maíz con frijoles y salsa ranchera)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos con Nopal Asado (Dos huevos Estrellados sobre un Nopal Asado)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos con Salchicha</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos con Jamon</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos con Chorizo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos a la Mexicana</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos en tres salsas (Salsa verde, roja y morita)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <br />
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Tacos dorador de Pollo o Zanahoria con Queso</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={omelette} className="card-img" alt="omelette" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Omeletts</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Ommelet de un ingrediente</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <p><small>(Jamón, Espinacas, Queso, Champiñon, Salchicha Ó chorizo)</small></p>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Ommelet de dos Ingredientes</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                <p><small>(Jamón, Espinacas, Queso, Champiñon, Salchicha Ó chorizo)</small></p>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Omelette solo Claras de 1 ingrediente</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                <p><small>(Jamón, Espinacas, Queso, Champiñon, Salchicha Ó chorizo)</small></p>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Omelette solo Claras de 2 Ingredientes</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <p><small>(Jamón, Espinacas, Queso, Champiñon, Salchicha Ó chorizo)</small></p>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Omelette con Pollo y Queso</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$90</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Omelette con Bistec y Queso </p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$90</p></div>
                </div>
                <br />
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">DESAYUNOS AMELIA</span></h1>
                <p className="text-center">(Incluye: Fruta, Café Americano o Té)</p>
                <div className="card border-dark shadow">
                    <img src={chilaquiles} className="card-img" alt="chilaquiles" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Chilaquiles</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chilaquiles sencillos (Servidos con Frijoles refritos)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chilaquiles con Huevo (Dos Huevos estrellados, revueltos o en torta)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chilaquiles Combinados (Huevo con Jamon)(Salchicha)(a la Mexicana)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$90</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chilaquiles con Bistec asado ó Pechuga desmenuzada</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chilaquiles con Milanesa ó Pechuga Empanizada ó Asada</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$90</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chilaquiles con Costilla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$90</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chilaquiles con Costilla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$110</p></div>
                </div>
                <br />
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Bistec Encebollado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Costilla Asada</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$85</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Bistec a la Mexicana</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Fajitas de Pechuga ó Bistec (Encebollado ó a la Mexicana)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <br />
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Higado Encebollado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Enfrijoladas de Huevo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Enfrijoladas de Pollo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0"><em>Enfrijolada Extra</em></p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={enchiladas} className="card-img" alt="enchiladas" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Enchiladas</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">ENCHILADAS VERDER, ROJAS Ó DE MOLE (Con pollo)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">ENCHILADAS DE GUAJILLO (queso, crema, pollo y lechuga)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">ENCHILADAS CON POLLO Y HUEVO AL GUSTO</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$90</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">ENCHILADAS CON POLLO Y BISTEC Ó COSTILLA</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$95</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">ENCHILADAS CON POLLO Y ARRACHERA</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$130</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">GRATINADO DE QUESILLO</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0"><em>Enchilada Extra</em> </p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={molletes} className="card-img" alt="molletes" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Molletes</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Molletes (de Jamón, Salchicha ó Chorizo con Quesillo)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Molletes (de Jamón, Salchicha ó Chorizo con Manchego)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Mollete Extra con Quesillo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Mollete extra con Manchego</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={sincronizada} className="card-img" alt="sincronizada" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Sincronizadas</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Sincronizadas de Champiñones con Queso <small>(tortilla de harina ó maiz)</small></p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Sincronizadas de Jamón y Queso <small>(tortilla de harina ó maiz)</small>)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Sincronizadas de Queso <small>(tortilla de harina ó maiz)</small></p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0"><em>Sincronizada Extra</em></p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={hotcakes} className="card-img" alt="hotcakes" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Hot-Cakes</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Hot Cakes <small>(con mermelada, cajeta, miel y lechera)</small></p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Hot Cakes <small>(con platano y cajeta)</small>)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Hot cakes Huevo con Jamón</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$90</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0"><em>Hot Cake Extra</em></p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <br />
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0"><strong>Orden de Hot-Cakes SIN COMPLEMENTOS</strong></p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <br />
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">COMIDA CORRIDA & A LA CARTA</span></h1>
                <p className="text-center">(De Martes a Domingo)</p>
                <div className="card border-dark shadow">
                    <img src={comidaCorrida} className="card-img" alt="comidaCorrida" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Comida Corrida</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">	Comida Corrida (De Martes a Domingo a partir de la 1:00 pm. a 6:00 pm y con 3 guisados diferentes a elegir cada dia y siempre Tacos ó Enchiladas: Mole, Verde ó Rojas.
                    </p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Incluye: Sopa del dia o consome, arroz ó espaggueti, guisado a elegir, Jarra de agua y postre del dia)</p></div>
                </div>
                <p className="text-center">ESTA COMIDA SE PUEDE TERMINAR ANTES DEL TIEMPO SEÑALADO.</p>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevo ó Platano Extra </p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$5</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">POR $15 DISFRUTE DE UNA TAZA DE CAFÉ O TÉ</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Consomé (Solo con Verdura)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Consomé (Con verdura y pechuga deshebrada ó Pieza de Pollo)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$40</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Sopa de Día</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Orden de Arroz</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Orden de Frijoles</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Papas a la Francesa</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={comidaCarta} className="card-img" alt="comidaCarta" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">A la carta</h5>
                    </div>
                </div>
                <h5 className="text-center"><i>Estos platillos tardan aproximadamente de 15 a 25 minutos para su elaboración</i></h5>
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Carnes</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Higado Encebollado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Bistec Asado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Bistec Encebollado ó a la Mexicana</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Fajitas de Bistec a la Mexicana ó Encebollado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Costilla Asada (servida con frijoles refritos, papas y ensalada)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Costilla Amelia (con Cebollitas y Nopales Cambray, Aguacate y Frijoles)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Milanesa de Res </p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Milanesa de Res Gratinada</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Arrachera</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$100</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Arrachera Gratinada</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$115</p></div>
                </div>
                <p className="text-left">ESTOS PLATILLO SE ACOMPAÑAN DE ENSALADA DE LECHUGA, AGUACATE Y FRIJOLES.</p>
                <br />
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Pollo</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pechuga Asada</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pechuga Amelia (con Cebollitas y Nopales Cambray, Aguacate y Frijoles)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pechuga Crunch (Tipo KFC)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pechuga Asada con Espinaca, Queso Panela ó Quesillo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pechuga Rellena de Espinaca y Quesillo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pechug Gratinada (c/Queso Manchego) Se sirve solo con verduras al vapor</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Milanesa de Pollo </p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Nuguets de Pollo (Servidos con papas a la francesa)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$40</p></div>
                </div>
                <p className="text-left">ESTOS PLATILLO SE ACOMPAÑAN DE ENSALADA DE LECHUGA, AGUACATE Y FRIJOLES.</p>
                <br />
                <h3 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Filetes</span></h3>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Filete Asado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Filete Empanizado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Filete Empanizado Gratinado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Filete Asado con Espinaca, Queso Panela ó Quesillo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$90</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Filete al Mojo de Ajo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$85</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Filete Empapelado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <p className="text-left">ESTOS PLATILLO SE ACOMPAÑAN DE ENSALADA DE LECHUGA, AGUACATE Y FRIJOLES.</p>
                <p className="text-center"><strong><em>Por $25 más incluye consomé ó sopa, arros o espagueti, agua y postre.</em></strong></p>
                <br />
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">TORTAS & SANDWICHES</span></h1>
                <div className="card border-dark shadow">
                    <img src={sandwich} className="card-img" alt="sandwich" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Tortas & Sandwiches</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Torta (Jamón, salchicha, perina española, chorizo, queso ó huevo)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$35</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Torta con dos Ingredientes (Jamón, salchicha, chorizo, queso ó huevo)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$40</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Torta (Milanesa ó Pollo)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Sandwich (Jamón, salchicha, choriz, queso ó huevo)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$30</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Sandwich con dos Ingredientes (Jamón, salchicha, chorizo, queso ó huevo)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$35</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0"><strong><em>Queso extra en la Torta o Sandwich</em></strong></p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$5</p></div>
                </div>
                <p className="text-center"><strong><em>Nota: Por $25 más incluye pan ó fruta, cafe ó té.</em></strong></p>
                <br />
                <div className="card border-dark shadow">
                    <img src={pan} className="card-img" alt="pan" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Pan</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pan con Mantequilla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$12</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pan de Dulce</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$12</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={frutas} className="card-img" alt="frutas" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Frutas</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Plato de Fruta Chico (Melón, papaya y piña) de temporada</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$30</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Ingrediente adicional (Miel, granola ó yogurt)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$15</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={bebidas} className="card-img" alt="bebidas" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Bebidas</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Café Americano</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$15</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Café Soluble</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Café con leche</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Té (manzanilla, canela, hierbabuena, manzana-canela)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Leche para Nescafe</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Vaso de leche fría ó caliente</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chocolate frío ó caliente</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Licuado (Fresa, chocolate, platano y vainilla)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$30</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Vaso de jugo grande (Naranja, naranja con papaya o jugo verde)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Vaso de jugo chico (Naranja, naranja con papaya o jugo verde)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <br />
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">ENSALADAS FRESCAS</span></h1>
                <div className="card border-dark shadow">
                    <img src={ensaladas} className="card-img" alt="ensaladas" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Ensaladas</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Ensalada de Zanahoria (Zanahoria, lechuga, piña y espinaca)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$40</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Ensalada Amelia (Espinaca, manzana, nuez, arandano y jamón)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Orden de verduras al vapor</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$35</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Atún en pico de gallo con frijoles de la olla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Extra (Pollo desmenuzado)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Extra (Pechuga o bistec)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <p className="text-center"><strong><em>Por $25 más incluye consomé ó sopa, arroz o espagueti, agua y postre.</em></strong></p>
                <br />
                <div className="card border-dark shadow">
                    <img src={jarra} className="card-img" alt="jarra" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Bebidas</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Jarra de Agua del Día chica</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Jarra de Agua del Día Grande</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$40</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Agua Simple Embotellada</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$12</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Refresco</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$18</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={postres} className="card-img" alt="postres" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Postres</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Platanos con crema</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$25</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Platanos Fritos</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$35</p></div>
                </div>
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">SABADOS & DOMINGOS</span></h1>
                <div className="card border-dark shadow">
                    <img src={pozole} className="card-img" alt="pozole" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Pozole</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Puerco ó Pollo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={pancita} className="card-img" alt="pancita" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Pancita</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0"><strong>Pancita (Estilo durango, con maiz y chicharrón)</strong></p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0"><strong>$70</strong></p></div>
                </div>
                <h6 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Complementos</span></h6>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Orden de crema</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$15</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Orden de aguacate</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Media orden de aguacate</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$10</p></div>
                </div>
                <h1 className="text-center mt-5 mb-3"><span className="texto-naranja-degradado font-weight-bold">Ubicación</span></h1>
                <div className="embed-responsive embed-responsive-16by9 mb-5">
                    <iframe title="Mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.9352184350617!2d-99.01010475827024!3d19.586064572955042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ee2a332809a3%3A0xaea5768d2ebc3211!2sCocina!5e0!3m2!1ses!2smx!4v1599084963695!5m2!1ses!2smx"
                        width="600" height="450" frameborder="0" style={{ border: 0 }}
                        allowfullscreen="" aria-hidden="false" tabindex="0">
                    </iframe>
                </div>
            </div>
        </section>
    )
}