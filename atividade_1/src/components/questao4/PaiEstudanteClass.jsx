import React from 'react';

import EstudanteClass from './EstudanteClass';

export default() =>
    <div className="card">
        <div className="card-header">
            Estudante
        </div>
        <ul className="list-group list-group-flush" >
            <EstudanteClass nome='Camilo Lima' curso='Sistemas de Informação' cidade='Canindé' />
        </ul>
        
    </div>