import React from "react";
import styled from "styled-components";
 
export class Carrinho extends React.Component{
    render(){
        return(
            <div>
                <h1>Carrinho</h1>
                <p>2x{this.props.quatity} camiseta_jupiter{this.props.name} <button>remover</button></p>
                <p>Valor total:R${this.props.soma}200,00</p>
            </div>
        )
    }
}
export default Carrinho;