import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    // a função onSeeDetailsClick funciona da seguinte forma: Ela recebe uma query string com os parâmetros title e description da task, e navega para a página /task com esses parâmetros na URL.

    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => ( 
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => props.onTaskClick(task.id)} 
                        className={`bg-slate-400 
                            text-left w-full text-white p-2 rounded-md list-none 
                            ${task.isCompleted && 'line-through opacity-50'
                        }`}
                    >
                        {task.title}
                    </button>
                    <button onClick={() => {
                        onSeeDetailsClick(task);
                    }} className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
}
  
export default Tasks;