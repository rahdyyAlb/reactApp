import React from 'react';
import DeleteTask from './deleteTaches';

const ViewTasks = ({ tasks, onDelete }) => {
    return (
        <table className="table table-dark table-hover table-sm align-middle w-50">
            <thead>
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
                    <td>{task.name}</td>
                    <td>
                        <DeleteTask taskId={task.id} onDelete={onDelete} />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ViewTasks;
