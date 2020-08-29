const DisciplinaModel = require('../models/DisciplinaModel');

let disciplinas = [
    {
        _id: 0,
        nome: 'CSGBD',
        curso: 'SI',
        capacidade: 40
    },
    {
        _id: 1,
        nome: 'Web',
        curso: 'ES',
        capacidade: 38
    },
    {
        _id: 2,
        nome: 'FBD',
        curso: 'CC',
        capacidade: 50
    },
];
let _id = 3;

class DisciplinaService{
    //post
    static register(data){
        let disciplina = new DisciplinaModel(
            _id++,
            data.nome,
            data.curso,
            data.capacidade
        );
        disciplinas.push(disciplina);
        return disciplina;
    }

    static list(){
        return disciplinas;
    }

    static update(id, data){
        for(let disciplina of disciplinas){
            if(disciplina._id == id){
                disciplina.nome = data.nome;
                disciplina.curso = data.curso;
                disciplina.capacidade = data.capacidade;
                return disciplina;   
            }
        }
        return null;
    }

    static delete(id){
        for(let i = 0; i < disciplinas.length; i++){
            if(disciplinas[i]._id == id){
                disciplinas.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static retrieve(id){
        for(let i = 0; i < disciplinas.length; i++){
            if(disciplinas[i]._id == id){
                return disciplinas[i];
            }
        }
        return {};
    }

}

module.exports = DisciplinaService;