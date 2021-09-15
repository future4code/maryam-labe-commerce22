import React from 'react';
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtros";
import Home from "./components/Home";
import styled from 'styled-components';

const Header = styled.header`
background-image: url('https://img.ibxk.com.br/2019/06/20/20210037158108.jpg?w=1120&h=420&mode=crop&scale=both');
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10px;
`
const FrenteDoSite = styled.div`
display: flex;
` 
const DivDoFiltroCarrinho = styled.div`
min-width: 250px;
background-color:lightblue ;
height: 93vh;
padding: 0 10px;
`
const Imagem = styled.img`
width: 30px;
margin: 0 8px;
`
const RedesSociais = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: white;
`
const IconeSite = styled.img`
width: 60px;
margin-right: 10px;
`
const IconeENomeSite = styled.div`
display: flex;
align-items: center;
color: white;
`

class App extends React.Component{
  render(){
    return (
      <div>
        <Header>
          <IconeENomeSite>
            <IconeSite src="https://www.pngall.com/wp-content/uploads/5/Astronaut-Helmet-PNG.png" />
            <h1>Planet Shirt</h1>
          </IconeENomeSite>
          <RedesSociais>
              <p>Siga-nos nas redes sociais.</p>
            <div>
            <a href="https://www.instagram.com/" target="_blank"><Imagem src="https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon-1.png"></Imagem></a>
            <a href="https://twitter.com/" target="_blank"><Imagem src="https://cdn-icons-png.flaticon.com/512/124/124021.png"></Imagem></a>
            <a href="https://www.facebook.com/" target="_blank"><Imagem src="https://imagepng.org/wp-content/uploads/2017/09/facebook-icone-icon.png"></Imagem></a>
            </div>
          </RedesSociais>
        </Header>
        <FrenteDoSite>
          <DivDoFiltroCarrinho>
            <div>
              filtro
            </div>
            <div>
              carrinho
            </div>
          </DivDoFiltroCarrinho>
          <div>resto do site</div>
        </FrenteDoSite>
      </div>
    );
  }

}

export default App;
