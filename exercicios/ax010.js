var nome = 'ana'
var sexo = 'm'

if( nome ){
    console.log("Nome da pessoa é: " + nome)
}else{
    console.log('Precisa preencher o campo \n')
}

if( sexo == 'm' ){
    console.log('Sexo é: ' + 'Masculino')
}else if(sexo == 'f'){
    console.log('Sexo é: ' + 'Feminino')
}else{
    console.log('Por favor preencher o campo')
}