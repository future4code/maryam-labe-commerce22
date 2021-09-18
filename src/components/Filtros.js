import React from "react";
import Home from "./Home";
import styled from "styled-components";

export class Filtros extends React.Component{
   
   
    render(){
        
        
        return(
            <div>
                <h1>Filtro</h1>
                <label htmlFor="valorMinimo">Valor Mínimo: </label>
                <input type="number" value={this.props.filtroMin} onChange={this.props.atualizarFiltroMin}></input><br/>
                <label htmlFor="valorMaximo">Valor Máximo: </label>
                <input type="number" value={this.props.filtroMax}  onChange={this.props.atualizarFiltroMax}></input><br/>
                <label htmlFor="nomeProduto">Buscar Paneta: </label>
                <select value={this.props.filtroNome} onChange={this.props.atualizarFiltroNome}>
                    <option>Camiseta</option>
                    <option>Planeta</option>
                    <option>planeta-Anão</option>
                    <option>Planeta Rochoso</option>
                    <option>Planeta Gasoso</option>
                </select> <br/>
              
            </div>
        )
    }
}
export default Filtros;