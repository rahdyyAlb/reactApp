import React, { useState } from 'react';
import { todolist } from './Data';
import ViewTasks from './ViewTasks';
import AddTask from './AddTask';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

let nextId = 12;

const App = () => {
    const [tasks, setTasks] = useState(todolist);
    const [editingTask, setEditingTask] = useState(null);

    const handleDelete = id => {
        setTasks(tasks.filter(task => task.id !== id));
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
            <h1 className="text-center">Todo Liste:</h1>
            <ViewTasks tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
            <AddTask onAdd={handleAdd} />
        </div>
    );
};

export default App;
