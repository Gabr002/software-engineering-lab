import { useState } from "react";

function AddTasks({onAddTaskSubmit}) { // props é um objeto que contém todas as propriedades passadas para o componente AddTasks. Ele permite que você passe dados de um componente pai para um componente filho.
    // console.log(props); // Isso imprime no console do navegador o objeto props, permitindo que você veja quais propriedades foram passadas para o componente.   

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log(title, description);


    return(
      <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col mb-4">
        <input 
          type="text" 
          placeholder="Digite o título da tarefa" 
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={title} 
          onChange={(event) => setTitle(event.target.value)} // O onChange é um evento que é disparado toda vez que o valor do input muda. A função passada para o onChange recebe um evento como parâmetro, e o valor do input pode ser acessado através de event.target.value.
        />
        <input 
          type="text" 
          placeholder="Digite a descrição da tarefa" 
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={description} 
          onChange={(event) => setDescription(event.target.value)} // Aqui eu usei a abreviação "e" para o evento, mas poderia ser qualquer nome.
        />
        <button 
          onClick={() => {
            if(!title.trim() || !description.trim()) {
              return alert("Por favor, preencha todos os campos antes de adicionar a tarefa.");
            }
            onAddTaskSubmit(title, description)
            setTitle("") // Limpa o campo de título após adicionar a tarefas
            setDescription("") // Limpa o campo de descrição após adicionar a tarefa  
          }}
          className="bg-slate-400 text-white px-4 py-2 rounded-md font-medium"
        >
          Adicionar
        </button>
      </div>
    );
}
  
export default AddTasks;
