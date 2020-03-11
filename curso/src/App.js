import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';
import Header from './Header';
import Form from './Formulario';
import PopUp from './PopUp';
import ApiService from './ApiService';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      empresas: [],
    };

  }


  // remove
  removeEmpresa = id => {
    const { empresas } = this.state;
    this.setState(
      {
        empresas: empresas.filter((empresa) => {
          return empresa.id!==id;

        }),

      }

    );
    ApiService.RemoveAutor(id);

    PopUp.exibeMensagem("error", "Empresa removida com sucesso");

  }

  escutadorDeSubmit = empresa => {
    this.setState({ empresas: [...this.state.empresas, empresa] })
    PopUp.exibeMensagem("sucess", "Empresa adicionada com sucesso");
  }
  componentDidMount() {

   ApiService.ListaEmpresas()
      .then(res => this.setState({ empresas: [...this.state.empresas, ...res] }));

  }
  render() {

    const empresas = ApiService.ListaEmpresas();
    console.log(empresas);

    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Drogaria Plus</h1>
          <Tabela empresas={this.state.empresas} removeEmpresa={this.removeEmpresa} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>

    );
  }

}

export default App;
