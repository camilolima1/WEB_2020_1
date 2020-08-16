import React, { Component } from 'react';
export default class Home extends Component {
    render() {
        return (
            <div >
                <h3>Descrição:</h3>
                <section>
                    <h4>Atividade 3</h4>
                    <p>A tarefa de vocês, é criar EXATAMENTE a mesma coisa, só que para a entidade Disciplina. Uma
                        Disciplina tem as seguintes informações:
                    </p>
                    <ul>
                        <li>nome</li>
                        <li>curso</li>
                        <li>capacidade (quantidade máxima de alunos)</li>
                    </ul>
                    <p>Sendo assim, vocês devem implementar:</p>
                    <ul>
                        <li>
                            Um menu principal, com os links Home, Inserir e Listar (ainda não funcionando, apenas
                            exibe uma página em branco).
                        </li>
                        <li>
                            Um formulário onde o usuário entra com os dados da disciplina (listados acima) e os insere
                            dentro de uma base Json-Server.
                        </li>
                        <li>
                            A implementação de vocês deve usar Routes para os links e Bootstrap, tal qual os vídeos.
                        </li>
                        <li>
                            O trabalho só estará completo se eu puder inserir uma disciplina no Json-Server.
                        </li>
                    </ul>
                </section>

                <section>
                    <h4>Atividade 4</h4>
                    <p>A tarefa de vocês CONTINUAR a Atividade 3, com as funcionalidades LISTAR, EDITAR e
                        APAGAR
                    </p>
                </section>
            </div>
        )
    }
}