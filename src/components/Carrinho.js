import React from "react";
import { CarrinhoCart } from "./CarrinhoCart";
import styled from "styled-components";

 const InfoCartCarrinho = styled.div`
 display: grid;
 grid-auto-flow: column;
 gap: 4px;
 align-items: center;
 p{
 margin: 0;
 }
 `
 
export class Carrinho extends React.Component{
    render(){
        return(
           
            <InfoCartCarrinho>
                <p>{this.props.itemCard.quantity}x </p>
                <p>{this.props.itemCard.name}</p>
                <button onClick={()=> this.props.removerProdutoDoCarrinho(this.props.itemCard.id)}>Remover</button>
            </InfoCartCarrinho>
          
        )
    }
}
export default Carrinho;