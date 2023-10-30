import React, { useState } from 'react';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const ViewTasks = ({ tasks, onDelete, onEdit }) => {
    const [editingTask, setEditingTask] = useState(null);

    const handleEdit = (taskId, newName) => {
        onEdit(taskId, newName);
        setEditingTask(null);
    };

    return (
        <div className="d-flex justify-content-center">
            <table className="table table-striped table-bordered rounded-3 border-dark table-hover table-sm align-middle w-50">
                <thead className='text-center'>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <th scope="row">{task.id}</th>
                        <td>
                            {editingTask === task.id ? (
                                <EditTask
                                    taskId={task.id}
                                    initialName={task.name}
                                    onSave={handleEdit}
                                />
                            ) : (
                                task.name
                            )}
                        </td>
                        <td className="d-flex justify-content-around">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => onDelete(task.id)}
                            >
                                Supprimer
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => setEditingTask(task.id)}
                            >
                                Modifier
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewTasks;
