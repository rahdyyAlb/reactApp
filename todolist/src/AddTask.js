import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [name, setName] = useState('');

    const handleAdd = () => {
        if (name.trim() !== '') {
            onAdd(name);
            setName('');
        }
    };

    return (
        <div className="d-flex justify-content-center mb-2">
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleAdd}>Ajouter</button>
        </div>
    );
};

export default AddTask;
