import React from 'react';

export const Mapa = props => {
    return (
        <section>
            <h1 className="text-center mt-5 mb-3"><span className="texto-naranja-degradado font-weight-bold">Ubicación</span></h1>
            <div className="embed-responsive embed-responsive-16by9 mb-5">
                <iframe title="Mapa"
                    src={props.ubicacion}
                    width="600" height="450" frameborder="0" style={{ border: 0 }}
                    allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe>
            </div>
        </section>
    )
}