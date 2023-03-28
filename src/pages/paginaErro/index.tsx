import React from "react";
import './styles.css';

export default function PaginaErro(){

    return(
            <div className="color">

                <div className="text">
                    <h1>Oops!</h1>
                    <h2>Error 404</h2>
                    <p>A página solicitada não está finalizada.<br/>
                        Estamos trabalhando nisso!</p>
                </div>

                <div className="button">
                    <a href="../SideBar">Voltar</a>
                </div>

            </div>
    )

}