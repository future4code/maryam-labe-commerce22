import React from "react";
import styled from "styled-components";

export class Filtros extends React.Component{
    render(){
        return(
            <div>
                <h1>Filtro</h1>
                <label form="valorMinimo">Valor Mínimo: </label>
                <input type="number" name="valorMinimo"></input><br/>
                <label form="valorMaximo">Valor Máximo: </label>
                <input type="number" name="valorMaximo"></input><br/>
                <label form="nomeProduto">Buscar Paneta: </label>
                <select type="text" name="nomeProduto">
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Jupiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>
                    <option>Plutão</option>
                </select>
                
            </div>
        )
    }
}
export default Filtros;