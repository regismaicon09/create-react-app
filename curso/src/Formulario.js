import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.stateIncial = {
            CodigoEmpresa: '',
            NomeFantasia: '',
            RazaoSocial: '',
        }
        this.state = this.stateIncial;

    }


    escutadorDeInput = event => {
        const {name, value} = event.target;
        
        this.setState({
            [name] : value
        });
    }
    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateIncial);
    }
   
    render() {

        const { CodigoEmpresa, NomeFantasia, RazaoSocial } = this.state;

        return (
            <form>
                <label htmlFor="CodigoEmpresa">CodigoEmpresa</label>
                <input
                    id="CodigoEmpresa"
                    type="text"
                    name="CodigoEmpresa"
                    value={CodigoEmpresa}
                    onChange = {this.escutadorDeInput}
                />

                <label htmlFor="NomeFantasia">NomeFantasia</label>
                <input
                    id="NomeFantasia"
                    type="text"
                    name="NomeFantasia"
                    value={NomeFantasia}
                    onChange = {this.escutadorDeInput}
                />

                <label htmlFor="RazaoSocial">RazaoSocial</label>
                <input
                    id="RazaoSocial"
                    type="text"
                    name="RazaoSocial"
                    value={RazaoSocial}
                    onChange = {this.escutadorDeInput}
                />

                <button onClick = {this.submitFormulario} type="button">Salvar</button>
            </form>

        );


    }


}
export default Formulario;