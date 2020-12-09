import React from 'react';

export const Elementos = props => {
    return (
        <section>
            {
                props.menu.map(elemento => (
                    <div className="row m-0 p-0">
                        <div className="col-10 m-0 p-1"><p className="m-0 p-0"><strong>{elemento.titulo} </strong>{elemento.descripcion}</p></div>
                    </div>
                )
                )
            }
        </section>
    )
}