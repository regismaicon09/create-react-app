import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataTable from './DataTable';

class Clientes extends Component {

    constructor(props) {
        super(props);

        this.state = {

            clientes: [
                {
                    nome: 'Regis',
                    cpf: '3739908989'

                }, 
                {
                    nome: 'Thiago',
                    cpf: '5449908989'

                }, {
                    nome: 'Fernando',
                    cpf: '3739558989'

                }
            ],
            titulo: 'Clientes'

        }

    }

    render() {
        return (

            <Fragment>
                <Header />
                <div className='container'> 
                <h1> Página de clientes</h1>
                    <DataTable dados={this.state.clientes} titulo={this.state.titulo} colunas={['nome']} />
                </div>
            </Fragment>
        )

    }

}
export default Clientes;