import React from 'react';
import logo from '../img/Menus/BonAppetit/logo.png';
import hamburguesa from '../img/Menus/BonAppetit/hamburguesa.jpeg';
import sincronizada from '../img/Menus/BonAppetit/sincronizadas.png'
import papas from '../img/Menus/BonAppetit/papas.jpg'
import hotdog from '../img/Menus/BonAppetit/hotdogs.jpeg'
import enchilada from '../img/Menus/BonAppetit/enchiladas.jpg'
import higiene from '../img/Menus/BonAppetit/higiene.png';
import domicilio from '../img/Menus/BonAppetit/domicilio.png';
import comunicar from '../img/Menus/BonAppetit/comunicar.png';
import { Encabezado } from "./encabezado";
import { Seccion } from "./seccion";

export const MenuBonAppetit = () => {
    const hamburguesas = [
        { nombre: "Sencilla" , precio: 40 },
        { nombre: "Hawaiana" , precio: 50 }
    ];
    const sincronizadas = [
        { nombre: "Sincronizadas" , precio: 35 }
    ];
    const papasFrancesa = [
        { nombre: "Papas a la francesa" , precio: 30 }
    ];
    const hotdogs = [
        { nombre: "Hot dogs" , precio: 19 }
    ];
    const enchiladas = [
        { nombre: "Enchiladas potosinas" , precio: 40 }
    ];
    return (
        <section>
            <Encabezado titulo="La Casa Bon Appetit" logo={logo}/>
            <div className="container text-light">
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Bienvenido</span></h1>
                <h4 className="text-center">Consiente tu paladar probando nuestros deliciosos alimentos y para ese apetito feroz té ofrecemos:</h4>
                <Seccion menu={hamburguesas} imagen={hamburguesa} titulo="Hamburguesas" />
                <Seccion menu={sincronizadas} imagen={sincronizada} titulo="Sincronizadas" />
                <Seccion menu={papasFrancesa} imagen={papas} titulo="Papas a la francesa" />
                <Seccion menu={hotdogs} imagen={hotdog} titulo="Hot Dogs" />
                <Seccion menu={enchiladas} imagen={enchilada} titulo="Enchiladas Potosinas" />
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Preparados con productos de primera calidad e higiene</span></h1>
                <img src={higiene} width="300" height="300" className="rounded mx-auto d-block mt-4 mb-3" alt="higiene" loading="lazy" />
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Unicamente contamos con servicio a domicilio dentro del fraccionamiento sin costo adicional</span></h1>
                <img src={domicilio} width="300" height="300" className="rounded mx-auto d-block mt-4 mb-3" alt="domicilio" loading="lazy" />
                <h2 className="text-center">Comunicate con nosostros via WhatsApp o envia inbox a nuestra página de Facebook "Bon Appetit" deja tu like y síguenos para conocer nuestras promociones</h2>
                <img src={comunicar} width="500" height="300" className="rounded mx-auto d-block mt-4 mb-3" alt="comunicar" loading="lazy" />
                <h2 className="text-center"> Recuerda que nuestro horario de servicio es de <strong>6:00 p.m. a 12:00 a.m.</strong> de viernes a domingo</h2>
                <h2 className="text-center"><u>¡Estamos para servirte!</u></h2>
                <br />
            </div>
        </section>
    )
}