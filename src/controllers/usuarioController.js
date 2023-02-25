/**Criação da classe usuarioController onde só criaram dois métodos
 * Um de rota e outro de listas
 */
class usuarioController {
    static rotas(app) {
        //Criação da rota para o app
        app.get('/usuario', usuarioController.listar)
    }
    static rotasHome(app) {
        //Criação da rota para o app
        app.get('/', usuarioController.listarHome)
    }


    //Criação do método listar que irá imprimir o texto na tela
    static listar(req, res) {
        res.send('Rota ativada com GET e recurso usuario: lista de usuarios deve ser retornada')
    }
    static listarHome(req, res) {
        res.send('Rota ativada com GET para a página home')

}
}

//Exportar o modulo no caso ele entende que é a classe
module.exports = usuarioController