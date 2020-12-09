import React from 'react';

export const Encabezado = props => {
    return (
        <section>
            <h1 className="text-center"><font color="white">{props.titulo}</font></h1>
            <img src={props.logo} width="300" height="300" className="rounded mx-auto d-block mt-4 mb-3" alt="logo" loading="lazy" />
        </section>
    )
}