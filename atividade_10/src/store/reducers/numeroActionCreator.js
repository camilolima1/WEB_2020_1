const inicialState = {
    numero1: 3,
    numero2: 6
}

export default function(state = inicialState, action){
    switch(action.type){
        case 'NOVO_NUMERO':
            return {
                ...state,
                numero1: action.payloadNumero1,
                numero2: action.payloadNumero2
            }
        default:
            return state
    }
}