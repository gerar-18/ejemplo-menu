import React from 'react';
import logo from '../img/Menus/Amelia/logo.png';
import desayuno from '../img/Menus/Amelia/desayuno.jpeg';
import omelette from '../img/Menus/Amelia/omelette.jpg';
import chilaquiles from '../img/Menus/Amelia/chilaquiles.jpg';
import enchilada from '../img/Menus/Amelia/enchiladas.jpg';
import mollete from '../img/Menus/Amelia/molletes.jpg';
import sincronizada from '../img/Menus/Amelia/sincronizada.jpg';
import hotcake from '../img/Menus/Amelia/hotcakes.jpg';
import sandwich from '../img/Menus/Amelia/sandwich.jpg';
import pan from '../img/Menus/Amelia/pan.jpeg';
import bebida from '../img/Menus/Amelia/bebidas.png';
import fruta from '../img/Menus/Amelia/frutas.jpg';
import ensalada from '../img/Menus/Amelia/ensaladas.jpeg';
import comidaCorrida from '../img/Menus/Amelia/comidaCorrida.jpeg';
import jarra from '../img/Menus/Amelia/jarra.jpg';
import comidaCarta from '../img/Menus/Amelia/comidaCarta.jpeg';
import postre from '../img/Menus/Amelia/postres.jpg';
import pozole from '../img/Menus/Amelia/pozole.jpg'
import pancita from '../img/Menus/Amelia/pancita.jpg';
import { Encabezado } from "./encabezado";
import { Seccion } from "./seccion";
import { Mapa } from "./mapa";

export const MenuAmelia = () => {
    const huevos = [
        { nombre: "Huevos Revueltos, en Torta ó Estrellados" , precio: 65 },
        { nombre: "Huevos con Frijoles" , precio: 65 },
        { nombre: "Huevos Divorciados (Dos huevos estrellados, uno bañado en salsa verde y otro en salsa roja, con frijoles refritos)" , precio: 65 },
        { nombre: "Huevos Albañil (Huevo bañado en salsa verde con frijoles refritos)" , precio: 65 },
        { nombre: "Frijoles con Chorizo" , precio: 65 },
        { nombre: "Huevo con Tocino, Revuelto o Americano" , precio: 65 },
        { nombre: "Huevos Rancheros (Sobre tortilla de maíz con frijoles y salsa ranchera)" , precio: 65 },
        { nombre: "Huevos con Nopal Asado (Dos huevos Estrellados sobre un Nopal Asado)" , precio: 50 },
        { nombre: "Huevos con Salchicha" , precio: 65 },
        { nombre: "Huevos con Jamon" , precio: 65 },
        { nombre: "Huevos con Chorizo" , precio: 65 },
        { nombre: "Huevos a la Mexicana" , precio: 65 },
        { nombre: "Huevos en tres salsas (Salsa verde, roja y morita)" , precio: 65 },
        { nombre: "Tacos dorador de Pollo o Zanahoria con Queso" , precio: 65 }
    ];
    const omelettes = [
        { nombre: "Ommelet de un ingrediente (Jamón, Espinacas, Queso, Champiñon, Salchicha Ó chorizo)" , precio: 70 },
        { nombre: "Ommelet de dos Ingrediente (Jamón, Espinacas, Queso, Champiñon, Salchicha Ó chorizo)" , precio: 75 },
        { nombre: "Omelette solo Claras de 1 ingrediente (Jamón, Espinacas, Queso, Champiñon, Salchicha Ó chorizo)" , precio: 75 },
        { nombre: "Omelette solo Claras de 2 Ingredientes (Jamón, Espinacas, Queso, Champiñon, Salchicha Ó chorizo)" , precio: 80 },
        { nombre: "Omelette con Pollo y Queso" , precio: 90 },
        { nombre: "Omelette con Bistec y Queso" , precio: 90 }
    ];
    const chilaquilesVariados = [
        { nombre: "Chilaquiles sencillos (Servidos con Frijoles refritos)" , precio: 65 },
        { nombre: "Chilaquiles con Huevo (Dos Huevos estrellados, revueltos o en torta)" , precio: 75 },
        { nombre: "Chilaquiles Combinados (Huevo con Jamon)(Salchicha)(a la Mexicana" , precio: 90 },
        { nombre: "Chilaquiles con Bistec asado ó Pechuga desmenuzada" , precio: 80 },
        { nombre: "Chilaquiles con Milanesa ó Pechuga Empanizada ó Asada" , precio: 90 },
        { nombre: "Chilaquiles con Costilla" , precio: 90 },
        { nombre: "Bistec Encebollado" , precio: 80 },
        { nombre: "Costilla Asada" , precio: 85 },
        { nombre: "Bistec a la Mexicana" , precio: 80 },
        { nombre: "Fajitas de Pechuga ó Bistec (Encebollado ó a la Mexicana)" , precio: 80 },
        { nombre: "Higado Encebollado" , precio: 65 },
        { nombre: "Enfrijoladas de Huevo" , precio: 65 },
        { nombre: "Enfrijoladas de Pollo" , precio: 65 },
        { nombre: "Enfrijolada Extra" , precio: 20 }
    ];
    const enchiladas = [
        { nombre: "ENCHILADAS VERDER, ROJAS Ó DE MOLE (Con pollo)" , precio: 65 },
        { nombre: "ENCHILADAS DE GUAJILLO (queso, crema, pollo y lechuga)" , precio: 70 },
        { nombre: "ENCHILADAS CON POLLO Y HUEVO AL GUSTO" , precio: 90 },
        { nombre: "ENCHILADAS CON POLLO Y BISTEC Ó COSTILLA" , precio: 95 },
        { nombre: "ENCHILADAS CON POLLO Y ARRACHERA" , precio: 130 },
        { nombre: "GRATINADO DE QUESILLO" , precio: 20 },
        { nombre: "Enchilada Extra" , precio: 65 }
    ];
    const molletes = [
        { nombre: "Molletes (de Jamón, Salchicha ó Chorizo con Quesillo)" , precio: 65 },
        { nombre: "Molletes (de Jamón, Salchicha ó Chorizo con Manchego)" , precio: 70 },
        { nombre: "Mollete Extra con Quesillo" , precio: 70 },
        { nombre: "Mollete extra con Manchego" , precio: 80 }
    ];
    const sincronizadas = [
        { nombre: "Sincronizadas de Champiñones con Queso (tortilla de harina ó maiz)" , precio: 70 },
        { nombre: "Sincronizadas de Jamón y Queso (tortilla de harina ó maiz)" , precio: 70 },
        { nombre: "Sincronizadas de Queso (tortilla de harina ó maiz)" , precio: 65 },
        { nombre: "Sincronizada Extra" , precio: 25 }
    ];
    const hotcakes = [
        { nombre: "Hot Cakes (con mermelada, cajeta, miel y lechera)" , precio: 70 },
        { nombre: "Hot Cakes (con platano y cajeta)" , precio: 75 },
        { nombre: "Hot cakes Huevo con Jamón" , precio: 90 },
        { nombre: "Hot Cake Extra" , precio: 20 },
        { nombre: "Orden de Hot-Cakes SIN COMPLEMENTOS" , precio: 50 }
    ];
    const comidasCorrida = [
        { nombre: "Comida Corrida (De Martes a Domingo a partir de la 1:00 pm. a 6:00 pm y con 3 guisados diferentes a elegir cada dia y siempre Tacos ó Enchiladas: Mole, Verde ó Rojas. Incluye: Sopa del dia o consome, arroz ó espaggueti, guisado a elegir, Jarra de agua y postre del dia)" , precio: 60 },
        { nombre: "Huevo ó Platano Extra" , precio: 5 },
        { nombre: "Consomé (Solo con Verdura)" , precio: 25 },
        { nombre: "Consomé (Con verdura y pechuga deshebrada ó Pieza de Pollo)" , precio: 40 },
        { nombre: "Sopa de Día" , precio: 20 },
        { nombre: "Orden de Arroz" , precio: 20 },
        { nombre: "Orden de Frijoles" , precio: 20 },
        { nombre: "Papas a la Francesa" , precio: 25 },
        { nombre: "TAZA DE CAFÉ O TÉ" , precio: 15 }
    ];
    const tortas = [
        { nombre: "Torta (Jamón, salchicha, perina española, chorizo, queso ó huevo)" , precio: 35 },
        { nombre: "Torta con dos Ingredientes (Jamón, salchicha, chorizo, queso ó huevo)" , precio: 40 },
        { nombre: "Torta (Milanesa ó Pollo)" , precio: 45 },
        { nombre: "Sandwich (Jamón, salchicha, choriz, queso ó huevo)" , precio: 30 },
        { nombre: "Sandwich con dos Ingredientes (Jamón, salchicha, chorizo, queso ó huevo)" , precio: 35 },
        { nombre: "Queso extra en la Torta o Sandwich" , precio: 5 }
    ];
    const panes = [
        { nombre: "Pan con Mantequilla" , precio: 12 },
        { nombre: "Pan de Dulce" , precio: 12 }
    ];
    const frutas = [
        { nombre: "Plato de Fruta Chico (Melón, papaya y piña) de temporada" , precio: 30 },
        { nombre: "Ingrediente adicional (Miel, granola ó yogurt)" , precio: 15 }
    ];
    const bebidas = [
        { nombre: "Café Americano" , precio: 15 },
        { nombre: "Café Soluble" , precio: 20 },
        { nombre: "Café con leche" , precio: 20 },
        { nombre: "Té (manzanilla, canela, hierbabuena, manzana-canela)" , precio: 20 },
        { nombre: "Leche para Nescafe" , precio: 25 },
        { nombre: "Vaso de leche fría ó caliente" , precio: 20 },
        { nombre: "Chocolate frío ó caliente" , precio: 25 },
        { nombre: "Licuado (Fresa, chocolate, platano y vainilla)" , precio: 30 },
        { nombre: "Vaso de jugo grande (Naranja, naranja con papaya o jugo verde)" , precio: 25 },
        { nombre: "Vaso de jugo chico (Naranja, naranja con papaya o jugo verde)" , precio: 20 }
    ];
    const ensaladas = [
        { nombre: "Ensalada de Zanahoria (Zanahoria, lechuga, piña y espinaca)" , precio: 40 },
        { nombre: "Ensalada Amelia (Espinaca, manzana, nuez, arandano y jamón)" , precio: 45 },
        { nombre: "Orden de verduras al vapor" , precio: 35 },
        { nombre: "Atún en pico de gallo con frijoles de la olla" , precio: 45 },
        { nombre: "Extra (Pollo desmenuzado)" , precio: 25 },
        { nombre: "Extra (Pechuga o bistec)" , precio: 70 }
    ];
    const jarras = [
        { nombre: "Jarra de Agua del Día chica" , precio: 25 },
        { nombre: "Jarra de Agua del Día Grande" , precio: 40 },
        { nombre: "Agua Simple Embotellada" , precio: 12 },
        { nombre: "Refresco" , precio: 18 }
    ];
    const postres = [
        { nombre: "Platanos con crema" , precio: 25 },
        { nombre: "Platanos Fritos" , precio: 35 }
    ];
    const pozoleSabados = [
        { nombre: "Puerco ó Pollo" , precio: 70 }
    ];
    const pancitaComplementos = [
        { nombre: "Pancita (Estilo durango, con maiz y chicharrón)" , precio: 70 },
        { nombre: "Orden de crema" , precio: 15 },
        { nombre: "Orden de aguacate" , precio: 20 },
        { nombre: "Media orden de aguacate" , precio: 10 }
    ];
    return (
        <section>
            <Encabezado titulo="Cocina Amelia" logo={logo}/>
            <div className="container text-light">
                <p className="text-center">El verdadero sabor del hogar</p>
                <h3 className="text-center">MARTES A DOMINGO</h3>
                <h4 className="text-center">9:00 am - 6:00 pm</h4>
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">DESAYUNOS COMPLETOS</span></h1>
                <p className="text-center">(Incluye: Café o Té, 1pza. de pan dulce ó 1 Hotcake ó Fruta) Se sirven de 9:00 am. a 1:00 pm.</p>
                <Seccion menu={huevos} imagen={desayuno} titulo="Huevos" />
                <Seccion menu={omelettes} imagen={omelette} titulo="Omeletts" />
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">DESAYUNOS AMELIA</span></h1>
                <p className="text-center">(Incluye: Fruta, Café Americano o Té)</p>
                <Seccion menu={chilaquilesVariados} imagen={chilaquiles} titulo="Chilaquiles" />
                <Seccion menu={enchiladas} imagen={enchilada} titulo="Enchiladas" />
                <Seccion menu={molletes} imagen={mollete} titulo="Molletes" />
                <Seccion menu={sincronizadas} imagen={sincronizada} titulo="Sincronizadas" />
                <Seccion menu={hotcakes} imagen={hotcake} titulo="Hot-Cakes" />
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">COMIDA CORRIDA & A LA CARTA</span></h1>
                <p className="text-center">(De Martes a Domingo)</p>
                <p className="text-center">ESTA COMIDA SE PUEDE TERMINAR ANTES DEL TIEMPO SEÑALADO.</p>
                <Seccion menu={comidasCorrida} imagen={comidaCorrida} titulo="Comida Corrida" />
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
                <Seccion menu={tortas} imagen={sandwich} titulo="Tortas & Sandwiches" />
                <p className="text-center"><strong><em>Nota: Por $25 más incluye pan ó fruta, cafe ó té.</em></strong></p>
                <Seccion menu={panes} imagen={pan} titulo="Pan" />
                <Seccion menu={frutas} imagen={fruta} titulo="Frutas" />
                <Seccion menu={bebidas} imagen={bebida} titulo="Bebidas" />
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">ENSALADAS FRESCAS</span></h1>
                <Seccion menu={ensaladas} imagen={ensalada} titulo="Ensaladas" />
                <p className="text-center"><strong><em>Por $25 más incluye consomé ó sopa, arroz o espagueti, agua y postre.</em></strong></p>
                <Seccion menu={jarras} imagen={jarra} titulo="Bebidas" />
                <Seccion menu={postres} imagen={postre} titulo="Postres" />
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">SABADOS & DOMINGOS</span></h1>
                <Seccion menu={pozoleSabados} imagen={pozole} titulo="Pozole" />
                <Seccion menu={pancitaComplementos} imagen={pancita} titulo="Pancita & Complementos" />
                <Mapa ubicacion="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.9352184350617!2d-99.01010475827024!3d19.586064572955042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ee2a332809a3%3A0xaea5768d2ebc3211!2sCocina!5e0!3m2!1ses!2smx!4v1599084963695!5m2!1ses!2smx" />
            </div>
        </section>
    )
}