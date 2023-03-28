import React from "react";
import './styles.css';
import logo from '../../assets/logo.png';
import home from '../../assets/svg/icone_home.svg'
import curso from '../../assets/svg/icone_curso.svg'
import meuCurso from '../../assets/svg/icone_meu-curso.svg'
import user from '../../assets/svg/icone_user.svg'
import ajuda from '../../assets/svg/fundo-ajuda.svg'
import interrogacao from '../../assets/svg/interrog.svg'


export default function Home() {

    return (
        <div className="souv-sidebar">
            <div>
                <img src={logo} alt="Logo Souv Academy Preta" />
            </div>
            <div className="souv-sidebar-geral">
                <h3>Geral</h3>
            </div>    
            <div className="souv-sidebar-button-home"> 
                <img src={home} alt="Icone home"/>
                <a href="../paginaErro">Home</a><br/>
            </div>

            <div className="souv-sidebar-button-fundoIconCurso"/> 

            <div className="souv-sidebar-button-curso"> 
                <img src={curso} alt="Icone Cursos"/>
                <a href="../paginaErro">Cursos</a><br/>
            </div>

            <div className="souv-sidebar-button-meuCurso"> 
                <img src={meuCurso} alt="Icone Meus Cursos"/>
                <a href="../paginaErro">Meus Cursos</a><br/>
            </div>

            <div className="souv-sidebar-button-perfil">
                <img src={user} alt="Icone Perfil"/>
                <a href="../paginaErro">Perfil</a><br/>
            </div>

            <div className="souv-sidebar-fundoAjuda">
                <img src={ajuda} alt="Fundo para acessar duviddas"/>
            </div>

            <div className="souv-sidebar-inrrogacao">
                <img src={interrogacao} alt="Interrogacao da Ajuda"/>
            </div>

            <div className="souv-sidebar-textoAjuda">
                <h3>Precisa de Ajuda?</h3>
            </div>

            <div className="souv-sidebar-textoAjuda2">
                <p>Acesse nossa documentação</p>
            </div>

            <div className="souv-sidebar-button-acessar">
                <a href="../paginaErro">Acessar</a><br/>
            </div>

                
                

        </div>

    )

}