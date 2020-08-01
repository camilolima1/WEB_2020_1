import React, { Component } from 'react';

class EstudanteClass extends Component{
    render() {
      return (
        <li className="list-group-item">
          Nome: {this.props.nome};
          Curso: {' '+ this.props.curso};
          Cidade: {' '+ this.props.cidade}.
        </li>
      );
    };
}

export default EstudanteClass;