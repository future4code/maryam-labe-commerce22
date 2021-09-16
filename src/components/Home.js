import React from "react";
import styled from "styled-components";

const CardProdutos = styled.div`
background-color: gray;
`
const InfoProduto = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const PrecoEBotao = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Botao = styled.button`
margin-left: 40px;
`
const Foto = styled.img`
width: 300px;
`

export class Home extends React.Component{
    render(){
        const produto = this.props.produto
        return(
            <CardProdutos>
                <div><Foto src={produto.photo} /></div>
                <InfoProduto>
                    <h2>{produto.name}</h2>
                    <PrecoEBotao>
                    <h4>Preço: R${produto.price},00</h4>
                    <Botao>add ao carrinho</Botao>
                    </PrecoEBotao>
                </InfoProduto>
            </CardProdutos>
        )
    }
    
}
export default Home;