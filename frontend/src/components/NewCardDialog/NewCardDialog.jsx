import React, { useState } from 'react';
import './NewCardDialog.css'; 
import { useDispatch } from 'react-redux';
import { createCard } from '../../Redux/cardSlice';

const NewCardDialog = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleCreateCard = () => {
        if (title && description) {
            dispatch(createCard({ title, description }));
            onClose();
        } else {
            alert("Please fill in both fields");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="dialog-overlay">
            <div className="dialog-container">
                <h2>Create a new CARD</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="dialog-actions">
                    <button onClick={handleCreateCard}>Submit</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default NewCardDialog;
