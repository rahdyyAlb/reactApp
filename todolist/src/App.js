import React, { useState } from 'react';
import { todolist } from './Data';
import ViewTasks from './ViewTasks';
import AddTask from './AddTask';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

let nextId = 12;

const App = () => {
    const [tasks, setTasks] = useState(todolist);

    const handleDelete = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleAdd = name => {
        setTasks([
            ...tasks,
            { id: nextId++, name: name }
        ]);
    };

    const handleEdit = (taskId, newName) => {

        setTasks(tasks.map(task => (task.id === taskId ? { ...task, name: newName } : task)));
    };

    return (
        <div>
            <h1 className="text-center">Todo Liste:</h1>
            <AddTask onAdd={handleAdd} />
            <ViewTasks tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />

        </div>
    );
};

export default App;
