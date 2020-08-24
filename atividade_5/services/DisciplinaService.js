const DisciplinaModel = require('../models/DisciplinaModel');

let disciplinas = [];
let _id = 0;
let nome = "teste";
let curso = "teste";
let capacidade = 50;

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

    static update(_id, data){
        for(let disciplina of disciplinas){
            if(disciplina._id == _id){
                disciplina.nome = data.nome;
                disciplina.curso = data.curso;
                disciplina.capacidade = data.capacidade;
                return disciplina;   
            }
        }
        return null;
    }

    static delete(_id){
        for(let i = 0; i < disciplinas.length; i++){
            if(disciplinas[i]._id == _id){
                disciplinas.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static retrieve(_id){
        for(let i = 0; i < disciplinas.length; i++){
            if(disciplinas[i]._id == _id){
                return disciplinas[i];
            }
        }
        return {};
    }

}

module.exports = DisciplinaService;