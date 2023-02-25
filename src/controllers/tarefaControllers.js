/**Criação da classe tarefaController onde só criaram dois métodos
 * Um de rota e outro de listas
 */


class tarefaController{


    //Criação da rota para o app
    static rotas(app){
        app.get("/tarefa", tarefaController.listar)
    }

    //Criação do método listar que irá imprimir o texto na tela
    static listar(req, res){
       res.send("Rota ativada com get e recurso tarefa: lista de tarefas deve ser retornada")
    }
}


//Exportar o modulo no caso ele entende que é a classe

module.exports = tarefaController