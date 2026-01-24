import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import {v4} from "uuid"; // Importa a função v4 do pacote uuid para gerar IDs únicos

function App() {
  // Conceito de states (Estados)
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  ); // O state é um Hook que permite adicionar variáveis de estado em componentes funcionais. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo.

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // O useEffect é um Hook que permite executar efeitos colaterais em componentes funcionais. Nesse caso, ele está salvando as tasks no localStorage sempre que o componente for montado. O array vazio [] como segundo argumento indica que esse efeito só deve ser executado uma vez, quando o componente for montado.

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=30", {
        method: "GET"
      });
      const data = await response.json();
      
      setTasks(data);
    } 
    fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) =>{
      // Preciso atualizar a task que foi clicada
      if(task.id === taskId){
        return { ...task, isCompleted: !task.isCompleted }; // Retorna uma nova task com o isCompleted invertido    
      }

      return task; // Retorna a task original se não for a clicada
    })
    setTasks(newTasks); // Atualiza o state com as novas tasks
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId); // Aqui eu não usei o map, porque não quero atualizar uma task específica, e sim remover ela da lista. O filter cria um novo array com todos os elementos que passam no teste implementado pela função fornecida. O que essa linha faz é criar um novo array com todas as tasks que não possuem o id igual ao taskId passado como parâmetro.
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), // Gera um ID único para a nova tarefa
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask]); // Esse ...tasks é o operador spread, que espalha os elementos do array tasks dentro de um novo array, e depois adiciona a newTask no final desse novo array.
  }

  

  return (
    <div className="w-screen h-screen bg-slate-500 flex  justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;