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
height: 200vh;
padding: 0 10px;
margin-right: 60px;
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
const ProdutosGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 40px;
padding: 20px;
row-gap: 20px;
`
const produtos = [
  {
    id: 1,
    name: 'Camiseta Mercúrio',
    photo: "https://rlv.zcache.com.br/camiseta_planeta_mercury-r538cb4ff4adc494b975748009b2ad941_k2gr0_307.jpg",
    price: 20,
    quantity: "",
  },
  {
    id: 2,
    name: 'Camiseta Vênus',
    photo: "https://rlv.zcache.com.br/camiseta_venus-r4f59a130a60b467a9b2ea1ff67dd6406_k2gr0_307.jpg",
    price: 50,
    quantity: "",
  },
  {
    id: 3,
    name: 'Camiseta Terra',
    photo: "https://rlv.zcache.com.br/camiseta_vintage_space_photo_earth-reba08f2ee5a94b2683653a5e34028e89_k2ggc_307.jpg",
    price: 55,
    quantity: "",
  },
  {
    id: 4,
    name: 'Camiseta Marte',
    photo: "https://rlv.zcache.com.br/camiseta_marte-r40ae55b7722b4d9b898a043499334c0a_k2gm8_307.jpg",
    price: 35,
    quantity: "",
  },
  {
    id: 5,
    name: 'Camiseta Júpiter',
    photo: "https://rlv.zcache.com.br/camiseta_jupiter-rc97bb5d5f5644ae4b3524e88825fb970_k2gm8_1024.jpg?max_dim=325",
    price: 120,
    quantity: "",
  },
  {
    id: 6,
    name: 'Camiseta Saturno',
    photo: "https://rlv.zcache.com.br/camiseta_nasa_bonita_dos_aneis_do_planeta_de_saturn-r9d202129dd4c47f2bb44a54709e62169_k2gm8_1024.jpg?max_dim=325",
    price: 100,
    quantity: "",
  },
  {
    id: 7,
    name: 'Camiseta Urano',
    photo: "https://rlv.zcache.com.br/camiseta_astronomia_planeta_urano-r1bcbde03c39342189dbd10b0c51dbb65_k2gm8_307.jpg",
    price: 70,
    quantity: "",
  },
  {
    id: 8,
    name: 'Camiseta Netuno',
    photo: "https://rlv.zcache.com.br/camiseta_planeta_netuno_com_fundo_da_estrela_sistema-r6085be646cb94dce87761452a0dbb73c_k2gr0_540.jpg",
    price: 68,
    quantity: "",
  },
  {
    id: 9,
    name: 'Camiseta Plutão',
    photo: "https://rlv.zcache.com.br/nunca_se_esqueca_da_camisa_plutao-re99ed9cd775a4b40a59c2434f5a276a6_k2gm8_540.jpg",
    price: 10,
    quantity: "",
  }
]

class App extends React.Component {
  render() {

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
              <Filtro></Filtro>
            </div><br/><hr/>
            <div>
              <Carrinho></Carrinho>
            </div>
          </DivDoFiltroCarrinho>
          <ProdutosGrid>
          {produtos.map(produto => <Home produto={produto} />)}
          
          </ProdutosGrid>
        </FrenteDoSite>
      </div>
    );
  }

}

export default App;
