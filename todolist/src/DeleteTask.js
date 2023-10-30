import React from 'react';

const DeleteTask = ({ taskId, onDelete }) => {
    return (
        <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete(taskId)}
        >
            Supprimer
        </button>
    );
};

export default DeleteTask;
