import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

function App() {
  // Conceito de states (Estados)
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      title: "Estudar React", 
      description: "Estudar o framework React para construir aplicações web.",
      isCompleted: false
    },
    {
      id: 2, 
      title: "Fazer Exercícios", 
      description: "Praticar exercícios de programação para melhorar as habilidades.",
      isCompleted: false
    },
    { 
      id: 3, 
      title: "Comprar Alimentos", 
      description: "Ir ao supermercado para comprar alimentos para a semana.",
      isCompleted: false
    }
  ]); // O state é um Hook que permite adicionar variáveis de estado em componentes funcionais. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo.

  return (
    <div className="w-screen h-screen bg-slate-500 flex  justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;