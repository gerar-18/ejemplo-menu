import React from 'react';
import logo from '../img/Menus/BonAppetit/logo.png';
import hamburguesa from '../img/Menus/BonAppetit/hamburguesa.jpeg';
import sincronizadas from '../img/Menus/BonAppetit/sincronizadas.png'
import papas from '../img/Menus/BonAppetit/papas.jpg'
import hotdogs from '../img/Menus/BonAppetit/hotdogs.jpeg'
import enchiladas from '../img/Menus/BonAppetit/enchiladas.jpg'
import higiene from '../img/Menus/BonAppetit/higiene.png';
import domicilio from '../img/Menus/BonAppetit/domicilio.png';
import comunicar from '../img/Menus/BonAppetit/comunicar.png';

export const MenuBonAppetit = () => {

    return (
        <section>
            <h1 className="text-center"><font color="white">La Casa Bon Appetit</font></h1>
            <img src={logo} width="300" height="300" className="rounded mx-auto d-block mt-4 mb-3" alt="logo" loading="lazy" />
            <div className="container text-light">
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Bienvenido</span></h1>
                <h4 className="text-center">Consiente tu paladar probando nuestros deliciosos alimentos y para ese apetito feroz té ofrecemos:</h4>
                <div className="card border-dark shadow">
                    <img src={hamburguesa} className="card-img" alt="hamburguesa" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Hamburguesas</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Sencilla</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$40</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Hawaiana</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={sincronizadas} className="card-img" alt="sincronizadas" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Sincronizadas</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Sincronizadas</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$35</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={papas} className="card-img" alt="papas" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Papas a la francesa</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Papas a la francesa</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$30</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={hotdogs} className="card-img" alt="hotdogs" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Hot Dogs</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Hot dogs</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$19</p></div>
                </div>
                <br />
                <div className="card border-dark shadow">
                    <img src={enchiladas} className="card-img" alt="enchiladas" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Enchiladas potosinas</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Enchiladas potosinas</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$40</p></div>
                </div>
                <br />
                <br/>
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