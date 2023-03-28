import fundo from '../../assets/fundo_azul.png';
import botaoPesquisar from '../../assets/svg/botao_pesquisar.svg'
import botaoFiltro from '../../assets/svg/botao_filtro.svg'
import blackRectangle from '../../assets/black_rectangle.png'
import logoBranca from '../../assets/white_souv_logo.png'
import paginaErro from '../paginaErro/index'
import './styles.css';

function Header() {
    return (             
        <body>
            <header>
                <div className='souv-header-container'>
                    <img src={fundo} alt="Fundo" />
                </div>
                <div className='souv-header-container-text'>
                    <h3>Cursos</h3>
                </div>
                <div className='souv-header-pesquisa-box'>
                    <div className='souv-header-container-pesquisa'>
                        <img src={botaoPesquisar} alt='Botao Pesquisar' />
                        <h4>Pesquisar</h4>
                    </div>
                    <div className='souv-header-filtro-box'>
                    </div>
                    <div className='souv-header-container-filtro'>
                        <img src={botaoFiltro} alt="Botao Filtro" />
                    </div>
                </div>
            </header>
            <div className="souv-box">
                <div className="souv-box-card">
                    <h3>Cursos</h3>
                    <div className="souv-box-card-black-rectangle">
                        <img src={blackRectangle} alt="Retangulo Preto" />
                        <div className="souv-box-card-black-rectangle-logo">
                            <img src={logoBranca} alt="Logo Branca Souv" />
                        </div>
                    </div>
                    <div className="souv-box-card-text">
                        <h3>12 Módulos</h3>
                        <h1>Introdução ao Jornalismo</h1>
                        <p>Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital.</p>
                    </div>
                    <div className="souv-box-card-botao-acessar"> 
                        <a href="paginaErro">Acessar</a>
                    </div>
                    
                    <div className="souv-box-card2-black-rectangle">
                        <img src={blackRectangle} alt="Retangulo Preto" />
                        <div className="souv-box-card2-black-rectangle-logo">
                            <img src={logoBranca} alt="Logo Branca Souv" />
                        </div>
                    </div>
                    <div className="souv-box-card2-text">
                        <h3>12 Módulos</h3>
                        <h1>Jornalismo Avançado</h1>
                        <p>Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital.</p>
                    </div>
                    <div className="souv-box-card2-botao-acessar"> 
                        <a href="paginaErro">Acessar</a>
                    </div>

                    
                    <div className="souv-box-card3-black-rectangle">
                        <img src={blackRectangle} alt="Retangulo Preto" />
                        <div className="souv-box-card3-black-rectangle-logo">
                            <img src={logoBranca} alt="Logo Branca Souv" />
                        </div>
                    </div>
                    <div className="souv-box-card3-text">
                        <h3>12 Módulos</h3>
                        <h1>Comunicação Digital </h1>
                        <p>Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital.</p>
                    </div>
                    <div className="souv-box-card3-botao-acessar"> 
                        <a href="paginaErro">Acessar</a>
                    </div>

                    <div className="souv-box-card4-black-rectangle">
                        <img src={blackRectangle} alt="Retangulo Preto" />
                        <div className="souv-box-card4-black-rectangle-logo">
                            <img src={logoBranca} alt="Logo Branca Souv" />
                        </div>
                    </div>
                    <div className="souv-box-card4-text">
                        <h3>12 Módulos</h3>
                        <h1>Jornalismo Digital</h1>
                        <p>Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital.</p>
                    </div>
                    <div className="souv-box-card4-botao-acessar"> 
                        <a href="paginaErro">Acessar</a>
                    </div>

                    <div className="souv-box-card5-black-rectangle">
                        <img src={blackRectangle} alt="Retangulo Preto" />
                        <div className="souv-box-card5-black-rectangle-logo">
                            <img src={logoBranca} alt="Logo Branca Souv" />
                        </div>
                    </div>
                    <div className="souv-box-card5-text">
                        <h3>12 Módulos</h3>
                        <h1>Introdução ao Jornalismo</h1>
                        <p>Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital.</p>
                    </div>
                    <div className="souv-box-card5-botao-acessar"> 
                        <a href="paginaErro">Acessar</a>
                    </div>

                    <div className="souv-box-card6-black-rectangle">
                        <img src={blackRectangle} alt="Retangulo Preto" />
                        <div className="souv-box-card6-black-rectangle-logo">
                            <img src={logoBranca} alt="Logo Branca Souv" />
                        </div>
                    </div>
                    <div className="souv-box-card6-text">
                        <h3>12 Módulos</h3>
                        <h1>Jornalismo Avançado</h1>
                        <p>Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital.</p>
                    </div>
                    <div className="souv-box-card6-botao-acessar"> 
                        <a href="paginaErro">Acessar</a>
                    </div>

                    <div className="souv-box-card7-black-rectangle">
                        <img src={blackRectangle} alt="Retangulo Preto" />
                        <div className="souv-box-card7-black-rectangle-logo">
                            <img src={logoBranca} alt="Logo Branca Souv" />
                        </div>
                    </div>
                    <div className="souv-box-card7-text">
                        <h3>12 Módulos</h3>
                        <h1>Comunicação Digital</h1>
                        <p>Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital.</p>
                    </div>
                    <div className="souv-box-card7-botao-acessar"> 
                        <a href="paginaErro">Acessar</a>
                    </div>

                    <div className="souv-box-card8-black-rectangle">
                        <img src={blackRectangle} alt="Retangulo Preto" />
                        <div className="souv-box-card8-black-rectangle-logo">
                            <img src={logoBranca} alt="Logo Branca Souv" />
                        </div>
                    </div>
                    <div className="souv-box-card8-text">
                        <h3>12 Módulos</h3>
                        <h1>Jornalismo Digital</h1>
                        <p>Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital.</p>
                    </div>
                    <div className="souv-box-card8-botao-acessar"> 
                        <a href="paginaErro">Acessar</a>
                    </div>

                    
                </div>
            </div>
        </body>

    )
}

export default Header;