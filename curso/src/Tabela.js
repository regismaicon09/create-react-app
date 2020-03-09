import React, { Component } from 'react';

const TableHead = () => {

    return (
        <thead>
            <tr>
                <th>Codigo Empresa</th>
                <th>Nome Fantasia</th>
                <th>Razão Social</th>
            </tr>
        </thead>

    );

}
const TableBody = props => {
    const linhas = props.empresas.map((linha, index) => {

        return (
            <tr key={index}>
                <td>{linha.CodigoEmpresa}</td>
                <td>{linha.NomeFantasia}</td>
                <td>{linha.RazaoSocial}</td>
                <td><button onClick={() => { props.removeEmpresa(index) }}>Remover</button></td>
            </tr>
        );

    });
    return (
        <tbody>{linhas}</tbody>

    );

}
class Tabela extends Component {



    render() {
        const { empresas, removeEmpresa } = this.props;
        return (
            <table>
                <TableHead />
                <TableBody empresas={empresas} removeEmpresa={removeEmpresa} />
            </table>
        )

    }

}

export default Tabela;