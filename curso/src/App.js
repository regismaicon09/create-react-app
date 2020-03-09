import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './Tabela';
//import { render } from '@testing-library/react';
import Form from './Formulario';

class App extends Component {
  state = {
    empresas:
      [{
        "CodigoEmpresa": 1,
        "NomeFantasia": "CAMPINEIRA COMERCIO PRODUTOS QUIMICOS FARMACEUTICOS LTDA",
        "RazaoSocial": "CAMPINEIRA COMERCIO PRODUTOS QUIMICOS FARMACEUTICOS LTDA"
      },
      {
        "CodigoEmpresa": 2, "NomeFantasia": "FLAMBOYANT COM DE MEDIC LTDA",
        "RazaoSocial": "FLAMBOYANT COM DE MEDIC LTDA"
      },
      {
        "CodigoEmpresa": 3, "NomeFantasia": "DROGARIA PLUS 24 OUTUBRO",
        "RazaoSocial": "CAMPINEIRA COMERCIO PRODUTOS QUIMICOS FARMACEUTICOS LTDA"
      },],
  };


  // remove
  removeEmpresa = index => {

    const { empresas } = this.state;

    this.setState(
      {
        empresas: empresas.filter((empresas, posAtual) => {
          console.log(index, posAtual);
          return posAtual !== index;

        }),

      }

    );


  }

  escutadorDeSubmit = empresa => {

    this.setState({empresas:[...this.state.empresas,empresa]})

}


  render() {
    return (
      <Fragment>
        <Tabela empresas={this.state.empresas} removeEmpresa={this.removeEmpresa} />
        <Form escutadorDeSubmit={this.escutadorDeSubmit} />
      </Fragment>

    );
  }

}

export default App;
