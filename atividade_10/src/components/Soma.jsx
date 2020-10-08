import React, { Component } from 'react';
import Card from './Card';

import { connect } from 'react-redux';

class Soma extends Component {

    Somar(){
        let resultado = 0;
        resultado = this.props.numero1 + this.props.numero2
        return resultado
    }

    render() {
        return (
            <Card title='Soma' blue>
                {this.Somar()}
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

export default connect(mapStateToProps)(Soma);