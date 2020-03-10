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
        const { name, value } = event.target;

        this.setState({
            [name]: value
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
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="CodigoEmpresa">CodigoEmpresa</label>
                        <input
                            className="validate"
                            id="CodigoEmpresa"
                            type="text"
                            name="CodigoEmpresa"
                            value={CodigoEmpresa}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="NomeFantasia">NomeFantasia</label>
                        <input
                            className="validate"
                            id="NomeFantasia"
                            type="text"
                            name="NomeFantasia"
                            value={NomeFantasia}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="RazaoSocial">RazaoSocial</label>
                        <input
                            className="validate"
                            id="RazaoSocial"
                            type="text"
                            name="RazaoSocial"
                            value={RazaoSocial}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                </div>
                <button onClick={this.submitFormulario} type="button" className='class="waves-effect waves-light  btn'>Adicionar</button>

            </form>

        );


    }


}
export default Formulario;