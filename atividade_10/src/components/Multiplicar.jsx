import React, { Component } from 'react';
import Card from './Card';

import { connect } from 'react-redux';

class Multiplicar extends Component {

    Multiplicar(){
        let resultado = '';
        resultado = this.props.numero1 * this.props.numero2
        return resultado
    }

    render() {
        return (
            <Card title='Multiplicar' blue>
                {this.Multiplicar()}
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        numero1: state.numeros.numero1,
        numero2: state.numeros.numero2
    }
}

export default connect(mapStateToProps)(Multiplicar);