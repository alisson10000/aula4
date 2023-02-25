class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/usuario', usuarioController.listar)
    }

    static listar(req, res){
        res.send('Rota ativada com GET e recurso usuario: lista de usuarios deve ser retornada')
    }
}

module.exports = usuarioController