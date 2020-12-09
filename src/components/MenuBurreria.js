import React from 'react';
import logo from '../img/Menus/Burreria/logo.png';
import burritoEspecial from '../img/Menus/Burreria/burritoEspecial.jpg';
import burritoSencillo from '../img/Menus/Burreria/burritoSencillo.jpg';
import burritoChampi from '../img/Menus/Burreria/burritoChampi.jpeg';
import combo from '../img/Menus/Burreria/combo.jpg';
import promocion from "../img/Menus/Burreria/promocion.jpg";
import { Encabezado } from "./encabezado";
import { Seccion } from "./seccion";

export const MenuBurreria = () => {
    const burritosSencillos = [
        { nombre: "Bistec" , precio: 45},
        { nombre: "Longaniza" , precio: 45 },
        { nombre: "Campechano" , precio: 45 },
        { nombre: "Enchilada" , precio: 45 },
        { nombre: "Al pastor" , precio: 45 },
        { nombre: "Chuleta" , precio: 45 },
        { nombre: "Pechuga" , precio: 45 }
    ];
    const burritosEspeciales = [
        { nombre: "Arrachera" , precio: 55},
        { nombre: "Chistorra" , precio: 50 },
        { nombre: "Alambre" , precio: 50 },
        { nombre: "Vegetariano (Champiñones, morron, cebolla y queso)" , precio: 60 },
        { nombre: "Americano (Chistorra y arrachera)" , precio: 55 },
        { nombre: "Jumbo (Bistec, longaniza, arrachera, pechuga, morron y cebollla)" , precio: 70 }
    ];
    const burritosChampis = [
        { nombre: "Champi pollo" , precio: 60},
        { nombre: "Champi bisteck" , precio: 60 },
        { nombre: "Campechano" , precio: 45 }
    ];
    const combos = [
        { nombre: "1 burrito, 1 papas y 1 refresco" , precio: 70},
        { nombre: "Combo arrachera" , precio: 80 },
        { nombre: "Combo americano" , precio: 80 },
        { nombre: "Combo champipollo" , precio: 85 },
        { nombre: "Combo alambre" , precio: 75 }
    ];
    const promociones = [
        { nombre: "Diaria: 2 burritos al pastor" , precio: 60},
        { nombre: "Lunes: 3 tortas" , precio: 75 },
        { nombre: "Martes: 2 burros de pastor y 1 de arrachera" , precio: 105 },
        { nombre: "Jueves: 6 tacos y 1 refresco de 2 listros" , precio: 105 }
    ];
    return (
        <section>
            <Encabezado titulo="Burreria" logo={logo}/>
            <div className="container text-light">
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Menú</span></h1>
                <p className="text-center">Burritos, tacos y tortas...</p>
                <Seccion menu={burritosSencillos} imagen={burritoSencillo} titulo="Burritos Sencillos" />
                <Seccion menu={burritosEspeciales} imagen={burritoEspecial} titulo="Burritos Especiales" />
                <Seccion menu={burritosChampis} imagen={burritoChampi} titulo="Burritos Champis" />
                <Seccion menu={combos} imagen={combo} titulo="Combos" />
                <Seccion menu={promociones} imagen={promocion} titulo="Promociones" />
            </div>
        </section>
    )
}