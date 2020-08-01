import React from 'react';

export default props => 
    <ul>
        <li>
            Nome: {props.nome};
            Curso: {' '+ props.curso };
            Cidade: {' '+ props.cidade}.
        </li>
    </ul>