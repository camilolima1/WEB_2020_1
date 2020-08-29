import React, { Component } from 'react';
export default class Home extends Component {
    render() {
        return (
            <div >
                <section className='col-md-5'>
                <h3>Descrição:</h3>
                    <h4>Atividade 6</h4>
                    <p>A atividade 6 consiste agora em unir o que já foi implementado nas atividades 3 e 4 (aplicação React) com o servidor
                    express puro, atividade 5.
                    </p>
                    <div style={{'font-style': 'oblique'}}>Obs.: A pasta atividade_6 possui apenas a aplicação react,
                        o servidor express puro esta na pasta da atividade 5: <a href="https://github.com/camilolima1/WEB_2020_1/tree/master/atividade_5">Link(servidor express puro)</a>.
                    </div>
                </section>
            </div>
        )
    }
}