import React, { Component } from 'react';

import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext';
import FirebaseService from '../services/FirebaseService';

const ListPage = () => (
    <FirebaseContext.Consumer>
        { contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props) {
        super(props)
        this._isMounted = false
        this.state = { disciplinas: [], loading: false }
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {
        this._isMounted = true
        this.setState({loading:true})
        FirebaseService.list(
            this.props.firebase.getFirestore(),
            (disciplinas) => {
                if(disciplinas){
                    if(this._isMounted){
                        this.setState({disciplinas:disciplinas, loading:false})
                    }
                }
            }
        )
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    montarTabela() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina, i) => {
                return <TableRow disciplina={disciplina}
                    key={i}
                    apagarElementoPorId={this.apagarElementoPorId}
                    firebase={this.props.firebase}
                />
            }
        )
    }

    apagarElementoPorId(id) {
        let tempDisciplinas = this.state.disciplinas
        for (let i = 0; i < tempDisciplinas.length; i++) {
            if (tempDisciplinas[i]._id === id) {
                tempDisciplinas.splice(i, 1)
            }
        }
        this.setState({ disciplinas: tempDisciplinas })
    }

    gerearConteudo() {
        if (this.state.loading) {
            return (
                <tr>
                    <td colSpan='6' style={{textAlign:"center"}}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>

            )
        } else {
            return this.montarTabela()
        }
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Listar disciplinas</h3>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan='2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.gerearConteudo()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPage;