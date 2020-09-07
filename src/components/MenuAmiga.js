import React from 'react';
import logo from '../img/Menus/Amiga/logo.png';
import platillos from '../img/Menus/Amiga/platillos.jpg';
import postre from '../img/Menus/Amiga/postre.jpg';
import desayuno from '../img/Menus/Amiga/desayuno.jpeg';
import carta from '../img/Menus/Amiga/carta.jpg';
import taco from '../img/Menus/Amiga/taco.jpg';

export const MenuAmiga = () => {

    return (
        <section>
            <h1 className="text-center"><font color="white">COCINA AMIGA</font></h1>
            <img src={logo} width="300" height="300" className="rounded mx-auto d-block mt-4 mb-3" alt="logo" loading="lazy" />
            <div className="container text-light">
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">MENÚ DEL DÍA</span></h1>
                <h4 className="text-center">INCLUYE:</h4>
                <div align="center" >
                    <ul className="m-0 p-0 pb-3 list-unstyled">
                        <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Sopa de día</li>
                        <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Arroz o espagueti</li>
                        <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Frijoles refritos</li>
                        <li><i className="far fa-arrow-alt-circle-right texto-naranja-degradado"></i> Agua de sabor</li>
                    </ul>
                </div>
                <div className="card border-dark shadow">
                    <img src={platillos} className="card-img" alt="platillos" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">PLATILLOS A ESCOGER</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Bistec en salsa verde con nopales</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Albondigas</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pollo con mole rojo/verde</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Tortas de Champiñones o pollo en salsa verde</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Picadillo (En guisado o tostadas)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Croquetas de papa con atún</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Tortas de papa con queso</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Papas con longaniza</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Ensalada Rusa</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chuleta frita en salsa roja o verde con nopales</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chuleta frita en salsa hawaiana, BBQ o tamarindo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Costilla en salsa roja o verde con papas</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Costilla en salsa de chile pasilla, hawaiana o mole verde</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Nopal asado con jamón y queso gratinado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Rollos de jamón y queso empanizado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Bolitas de carne en salsa de tamarindo, hawaiana o BBQ</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Verduras al vapor con jamón y queso gratinado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pollo en salsa verde o roja con papas</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pollo en salsa de pasilla o hawaiana</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Tacos dorados de pollo, cochinita pibil, papa, queso o carne</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Tortas de platano macho rellenas de queso bañadas con crema</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chimichanga</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Carne de hamburguesa con ensalada</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Longaniza en salsa verde o roja con papas</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Alambre</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Higado encebollado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Carne molida con nopales y queso gratinado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Tostadas de tinga</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Salchipulpos</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <br />
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chile relleno de queso panea capeado o sin capear</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Cochinita Pibil</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Muslo empanizado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pollo a la crema con chipotle</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Lasagna a la boloñesa</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={postre} className="card-img" alt="postre" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">POSTRES</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Nieve de limon</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Helado napolitano</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Arroz con leche</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Duraznos en almibar con crema y lechera</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={desayuno} className="card-img" alt="desayuno" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">DESAYUNOS</h5>
                    </div>
                </div>
                <p className="text-center"><strong><em>Huevos al gusto acompañados de frijoles y café</em></strong></p>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos con jamón</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos con longaniza</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos consalchicha</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos recien casados</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos a la mexicana</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$90</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos rancheros</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos divorciados</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$110</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Huevos motuleños</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Molletes (Incluye café)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$85</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Sincronizadas (Incluye café)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Hot cakes (Incluye café)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pan con mantequilla y lechera</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$10</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={carta} className="card-img" alt="carta" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">A LA CARTA</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Quesadillas de tinga, picadillo, chicharron, champiñones o queso</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pambazoz (Por la mañana)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Enchiladas verdes o de mole</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Milanesa de pollo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pechuga rellena de jamón y queso al horno bañada con crema de chipotle y champiñones</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chilaquiles con pollo deshebrado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$65</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chilaquiles con milanesa de pollo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Milanesa de res</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Bisteck asado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Filete de pescado</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={taco} className="card-img" alt="taco" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">TACO AMIGO</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Bisteck</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Longaniza</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Milanesa</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chuleta</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$20</p></div>
                </div>
                <p className="text-center"><strong><em>Acompañados de papas o nopales</em></strong></p>
                <br />
                
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Contamos con servicio para llevar y a domicilio con la misma calidad y atención de siempre.</span></h1>
                <h2 className="text-center"><u>¡Gracias por su preferencia!</u></h2>
                <br />
            </div>
        </section>
    )
}