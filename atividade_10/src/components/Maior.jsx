import React, { Component } from 'react';
import Card from './Card';

import { connect } from 'react-redux';

class Maior extends Component {

    render() {
        return (
            <Card title='Maior' blue>
                <div>
                    {(this.props.numero1 > this.props.numero2) ? this.props.numero1 : this.props.numero2 }
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

export default connect(mapStateToProps)(Maior);