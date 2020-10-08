import React, { Component } from 'react';

import Card from './Card';
import './Navigate.css';

import { connect }from 'react-redux';
import { alterarNumeros } from '../store/actions/numeroActionCreator'

class Navigate extends Component {

    // constructor(props){
    //     super(props)
    //     this.props.alterarNumero(25, 10)
    // }

    setNumero1(e){
        this.setState({numero1: e.target.value})
    }

    render() {
        return (
            <Card title='Valores'>
                <div className='navigate'>
                    <input value={this.props.numero1} onChange={this.setNumero1} ontype="number"></input>
                    <input value={this.props.numero2} type="number"></input>
                </div>
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

function mapActionCreatorToProps(dispatch){
    return{
        alterarNumero(novoNumero1, novoNumero2){
            const action = alterarNumeros(novoNumero1, novoNumero2)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Navigate);