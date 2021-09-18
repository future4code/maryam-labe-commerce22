import React from "react";
import Home from "./Home";
import Filtros from "./Filtros";
import styled from "styled-components";
const ProdutoGrid = styled.div`
 display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 40px;
padding: 20px;
row-gap: 20px;
 `
export class PaginaProdutos extends React.Component {
    state = {
        sort: 'DECRESCENTE'
    }
    filtrarEOrdenar = () => {
        return this.props.produtos
            .filter((produto) => this.props.filtroMax ? produto.price < this.props.filtroMax : true)
            .filter((produto) => this.props.filtroMin ? produto.price > this.props.filtroMin : true)
            .filter((produto)=> this.props.filtroNome ? produto.name.includes(this.props.filtroNome) : true)
            .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
    }
    atualizarSort = (event) => {
        this.setState({ sort: event.target.value })
    }

    render() {
        const filtrarEOrdenarLista = this.filtrarEOrdenar()
        { console.log(this.state.sort) }
        return (
            <div>
                <label>
                    Ordenação: 
                <select value={this.state.sort} onChange={this.atualizarSort}>
                    <option value={'CRESCENTE'}>Crescente</option>
                    <option value={'DECRESCENTE'}>Decrescente</option>
                </select>
                </label>
                <ProdutoGrid>
                    {filtrarEOrdenarLista.map((produto) => {
                        return <Home
                            produto={produto}
                            addProdutoNoCarrinho={this.props.addProdutoNoCarrinho}>

                        </Home>

                    })}
                </ProdutoGrid>
            </div>
        )

    }
}
export default PaginaProdutos;