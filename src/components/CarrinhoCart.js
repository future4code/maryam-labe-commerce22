import React from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";

const CartCarrinho = styled.div`
display: grid;
gap: 10px;

`

export class CarrinhoCart extends React.Component {
    calculaValorTotal = () =>{
        let valorTotal = 0
        for (let produto of this.props.produtoNoCarrinho){
            valorTotal += produto.price * produto.quantity
        }
        return valorTotal
    }
    render(){
        return(
          <div>
              <h1>Carrinho</h1>
              <CartCarrinho> 
                  {this.props.produtoNoCarrinho.map((produto)=>{
                      return <Carrinho
                      itemCard = {produto}
                      removerProdutoDoCarrinho = {this.props.removerProdutoDoCarrinho}
                      ></Carrinho>
                  })}
              </CartCarrinho>
              <p>Valor total: R${this.calculaValorTotal()},00</p>
          </div>
        )
    }
}