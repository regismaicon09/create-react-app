import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
            campo: 'CodigoEmpresa',
            metodo: 'isInt',
            args:[{min: 0, max: 99999 }],
            validoQuando: true,
            mensagem:'Entre com o código da Empresa'
            },
            {
            campo: 'NomeFantasia',
            metodo: 'isEmpty',
            validoQuando: false,
            mensagem:'Entre com o Nome Fantasia'
            },
            {
            campo: 'RazaoSocial',
            metodo: 'isEmpty',
            validoQuando: false,
            mensagem:'Entre com a RazaoSocial'
            }
    ]);

        this.stateIncial = {
            CodigoEmpresa: '',
            NomeFantasia: '',
            RazaoSocial: '',
            validacao:this.validador.valido()
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

        const validacao = this.validador.valida(this.state);

        if (validacao.isValid) {

            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateIncial);
        }else{

            const {CodigoEmpresa,NomeFantasia,RazaoSocial} = validacao;
            const campos = [CodigoEmpresa,NomeFantasia,RazaoSocial];

            const camposInvalidos = campos.filter(elem => {

                return elem.isInvalid;

            });

            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error',campo.message);


            });


        }


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