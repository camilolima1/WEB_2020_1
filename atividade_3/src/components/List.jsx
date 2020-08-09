import React, { Component } from 'react';
import axios from 'axios';

import TableRow from './TableRow';

export default class List extends Component {

    constructor(props){
        super(props)
        this.state = { disciplinas: [] }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/disciplinas')
        .then(
            (res) => {
                console.log(res.data)
                this.setState({ disciplinas: res.data })
            }
        )
        .catch(
            (error) => {
                console.log(error)
                // alert(error)
            }
        )
    }

    montarTabela(){
        if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina, i) => {
                return <TableRow disciplina = {disciplina} key={i} />
            }
        )
    }

    render() {
        return (
            <div style={{marginTop:10}}>
                <h3>Listar disciplinas</h3>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Nome</td>
                            <td>Curso</td>
                            <td>Capacidade</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}