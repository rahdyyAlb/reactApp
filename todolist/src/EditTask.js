import React, { useState } from 'react';

const EditTask = ({ taskId, initialName, onSave }) => {
    const [name, setName] = useState(initialName);

    const handleSave = () => {
        onSave(taskId, name);
    };

    return (
        <div className="d-flex">
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSave}>
                Enregistrer
            </button>
        </div>
    );
};

export default EditTask;
