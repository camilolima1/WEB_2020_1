export function alterarNumeros(novoNumero1, novoNumero2){
    return{
        type: 'NOVO_NUMERO',
        payloadNumero1: novoNumero1,
        payloadNumero2: novoNumero2
    }
}