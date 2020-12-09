import React from 'react';

export const Seccion = props => {
    return (
        <section>
            <div className="card border-dark shadow">
                <img src={props.imagen} className="card-img" alt={props.titulo} loading="lazy" />
                <div className="card-img-overlay m-0 p-0">
                    <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">{props.titulo}</h5>
                </div>
            </div>
            {
                props.menu.map(producto => (
                    <div className="row m-0 p-0">
                        <div className="col-10 m-0 p-1"><p className="m-0 p-0">{producto.nombre}</p></div>
                        <div className="col-2 m-0 p-1"><p className="m-0 p-0">${producto.precio}</p></div>
                    </div>
                )
                )
            }
        </section>
    )
}
