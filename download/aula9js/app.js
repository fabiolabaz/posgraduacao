
export default function app() {
    const tarefa ={id: "T1", descrição: "Estudar React", concluida:true};
/*
if(tarefa.concluida){
   return <p>Tarefa Concluída: {tarefa.descrição}</p>
} else {
    return <p>Tarefa Pendente: {tarefa.descrição}</p>
}
*/

return <p>
    Tarefa{(tarefa.concluida) ? "concluída" : "Pendente"}: {tarefa.descrição}
</p>
}
