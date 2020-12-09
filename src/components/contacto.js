import React from 'react';


export const Contacto = props => {
    const numeros = props.telefonos;
    const listItems = numeros.map((number) =>
        <li>
            {number}
        </li>
    );
    const links = () => {
        if (props.facebook.length !== 0 || props.twitter.length !== 0 || props.instagram.length !== 0) {
            const facebookItems = props.facebook.map((link) =>
                
                <a target="_blank" rel="noopener noreferrer" href={link}><i class="fab fa-facebook-square fa-9x"></i></a>
            );
            const instagramItems = props.instagram.map((link) =>
                <a target="_blank" rel="noopener noreferrer" href={link}><i class="fab fa-instagram fa-9x"></i></a>
            );
            const twitterItems = props.twitter.map((link) =>
                <a target="_blank" rel="noopener noreferrer" href={link}><i class="fab fa-twitter fa-9x"></i></a>
            );
            return (
                <section>
                    <h2 className="text-center">Enlaces.</h2>
                    <div>{facebookItems}</div>
                    <div>{instagramItems}</div>
                    <div>{twitterItems}</div>
                </section>
            );

        }
    }
    return (
        <section>
            <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Contacto.</span></h1>
            <h2 className="text-center">Telefono.</h2>
            <ul>{listItems}</ul>
            <div className="text-center">
                {links()}
            </div>
        </section>
    )
}