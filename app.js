//Carregou os módulos para a minha variável Express que veio do 
// minimalista frameword express
const Express = require('express')
//atribuiu a variável app todos os modulos carregados na variável Express
const app = Express()


//Carregou para este arquivos os módulos usuarioController e tarefaControllers
//para que possam ser usados nesse arquivo
const usuarioController = require('./src/controllers/usuarioController')
const tarefaController = require('./src/controllers/tarefaControllers')


//Utilizou os métodos da classe
// O mesmo só irão funcionar se eu estiver chamado antes os modulos para o arquivo.
usuarioController.rotas(app)
usuarioController.rotasHome(app)
tarefaController.rotas(app)



// Iniciei o servidor
app.listen(3500,function(req,res){
    console.log("Rodando servidor")
})
