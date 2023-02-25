const Express = require('express')
const app = Express()
const usuarioController = require('./src/controllers/usuarioController')
const tarefaController = require('./src/controllers/tarefaControllers')



usuarioController.rotas(app)
tarefaController.rotas(app)




app.listen(3500,function(req,res){
    console.log("Rodando servidor")
})
