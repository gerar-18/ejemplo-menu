import React from 'react';
import logo from '../img/Menus/Burreria/logo.png';
import burritoEspecial from '../img/Menus/Burreria/burritoEspecial.jpg';
import burritoSencillo from '../img/Menus/Burreria/burritoSencillo.jpg';
import burritoChampi from '../img/Menus/Burreria/burritoChampi.jpeg';
import combo from '../img/Menus/Burreria/combo.jpg';
import promocion from "../img/Menus/Burreria/promocion.jpg";

export const MenuBurreria = () => {

    return (
        <section>
            <img src={logo} width="500" height="300" className="rounded mx-auto d-block mt-4 mb-3" alt="logo" loading="lazy" />
            <br />
            <div className="container text-light">
                <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Menú</span></h1>
                <p className="text-center">Burritos, tacos y tortas...</p>
                <div className="card border-dark shadow">
                    <img src={burritoSencillo} className="card-img" alt="burritoSencillo" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Burritos Sencillos</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Bistec</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1" ><p className="m-0 p-0">Longaniza</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Campechano</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Enchilada</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Al pastor</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chuleta</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pechuga</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <br/>
                <div className="card border-dark shadow">
                    <img src={burritoEspecial} className="card-img" alt="burritoEspecial" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Burritos Especiales</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-0"><p className="m-0 p-0">Arrachera</p></div>
                    <div className="col-2   m-0 p-0"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-0"><p className="m-0 p-0">Chistorra</p></div>
                    <div className="col-2  m-0 p-0"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-0"><p className="m-0 p-0">Alambre</p></div>
                    <div className="col-2  m-0 p-0"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-0"><p className="m-0 p-0">Vegetariano</p></div>
                    <div className="col-2  m-0 p-0"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-0"><p className="m-0 p-0">(Champiñones, morron, cebolla y queso)</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-0"><p className="m-0 p-0">Americano</p></div>
                    <div className="col-2  m-0 p-0"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-0"><p className="m-0 p-0">(Chistorra y arrachera)</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-0"><p className="m-0 p-0">Jumbo</p></div>
                    <div className="col-2  m-0 p-0"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-0"><p className="m-0 p-0">(Bistec, Longaniza, arrachera, pechuga, morron y cebolla)</p></div>
                </div>
                <br/>
                <div className="card border-dark shadow">
                    <img src={burritoChampi} className="card-img" alt="burritoChampi" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Burritos Champis</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-1"><p className="m-0 p-0">Champi pollo</p></div>
                    <div className="col-2  m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-1"><p className="m-0 p-0">Champi bisteck</p></div>
                    <div className="col-2  m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10  m-0 p-1"><p className="m-0 p-0">Campechano</p></div>
                    <div className="col-2  m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <br/>
                <div className="card border-dark shadow">
                    <img src={combo} className="card-img" alt="Combo" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Combos</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">1 burrito, 1 papas y 1 refresco</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Combo arrachera</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Combo americano</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Combo champipollo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$85</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Combo alambre</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                <br/>
                <div className="card border-dark shadow">
                    <img src={promocion} className="card-img" alt="Combo" loading="lazy" />
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">Promociones</h5>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Diaria: 2 burritos al pastor</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Lunes: 3 tortas</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Martes: 2 burros de pastor y 1 de arrachera</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$105</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Jueves: 6 tacos, 1 refresco de 2 litros</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$105</p></div>
                </div>
                <br />
                <br />
            </div>
        </section>
    )
}