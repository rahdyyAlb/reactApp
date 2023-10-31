import React, { useState } from 'react';
import { todolist } from './Data';
import ViewTasks from './ViewTasks';
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

let nextId = 12;

const App = () => {
    const [tasks, setTasks] = useState(todolist);
    const [editingTask, setEditingTask] = useState(null);

    const handleDelete = id => {
        const confirmation = window.confirm("Voulez-vous vraiment supprimer cette tâche?");
        if (confirmation) {
            setTasks(tasks.filter(task => task.id !== id));
        }
    };

    const handleAdd = (name, status) => {
        setTasks([
            ...tasks,
            { id: nextId++, name: name, status: status }
        ]);
    };

    const handleEdit = (taskId, newName, newStatus) => {
        setTasks(tasks.map(task => (task.id === taskId ? { ...task, name: newName, status: newStatus } : task)));
        setEditingTask(null);
    };

    return (
        <div>
            <ViewTasks tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
            <AddTask onAdd={handleAdd} />

        </div>
    );
};

export default App;
