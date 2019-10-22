import React from 'react'
import ThisIsMe from '../../ThisIsMe.json'
const Projects = ()=>{
    const me = ThisIsMe;
    return (
        <React.Fragment>
            <div className="all">
                <div className="view view-tenth">
                  <img src={me.mdlinks.img} />
                  <div className="mask">

                    <h2>BB-MDLinks</h2>
                    <p>{me.mdlinks.description}</p>
                    <a href={me.mdlinks.url} className="info">Ver Más</a>
                  </div>
                </div>

                <div className="view view-tenth">
                  <img src={me.NoMoreCommunity.img} alt="" />
                  <div className="mask">
                    <h2>NoMoreCommunity</h2>
                    <p>{me.NoMoreCommunity.description}</p>
                    <a href={me.NoMoreCommunity.url} className="info">Ver Más</a>
                  </div>
                </div>

                <div className="view view-tenth">
                  <img src={me.Pinterest.img} alt="" />
                  <div className="mask">
                    <h2>Pinterest</h2>
                    <p>{me.Pinterest.description}</p>
                    <a href={me.Pinterest.url} className="info">Ver Más</a>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={me.PopCornMovie.img} alt="" />
                  <div className="mask">
                    <h2>PopCornMovie</h2>
                    <p>{me.PopCornMovie.description}</p>
                    <a href={me.PopCornMovie.url} className="info">Ver Más</a>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={me.BurgerQueen.img} alt="" />
                  <div className="mask">
                    <h2>BurgerQueen</h2>
                    <p>{me.BurgerQueen.description}</p>
                    <a href={me.BurgerQueen.url} className="info">Ver Más</a>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={me.MeMuevo.img} alt="" />
                  <div className="mask">
                    <h2>MeMuevo</h2>
                    <p>{me.MeMuevo.description}</p>
                    <a href={me.MeMuevo.url} className="info">Ver Más</a>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={me.WinnerLegends.img} alt="" />
                  <div className="mask">
                    <h2>WinnerLegends</h2>
                    <p>{me.WinnerLegends.description}</p>
                    <a href={me.WinnerLegends.url} className="info">Ver Más</a>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={me.CasanovaLabs.img} alt="" />
                  <div className="mask">
                    <h2>CasanovaLabs</h2>
                    <p>{me.CasanovaLabs.description}</p>
                    <a href={me.CasanovaLabs.url} className="info">Ver Más</a>
                  </div>
                </div>
             
              </div>




        </React.Fragment>
    )
}

export default Projects;