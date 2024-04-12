import React, { useState, useEffect, useContext } from 'react';
import './blog.css';
import Notes from '../components/Notes';
import { Notescontext } from '../context/Notescontext';

const Blog = () => {
    const [showCreateBox, setShowCreateBox] = useState(false);
    const [notes, setNotes] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [editingNoteId, setEditingNoteId] = useState(null);
    const [traka, setTraka] = useState(false);
    let i = -1;


    
    const {global, setGlobal} = useContext(Notescontext)
    console.log(global)
    
    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        if (storedNotes) {
            setNotes(storedNotes);
        }
        setGlobal(true)
    }, []);

    useEffect(() => {
        if (traka) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (editingNoteId !== null) {
                updateNote();
            } else {
                createNote();
            }
        }
    }

    const handleCreateClick = () => {
        setShowCreateBox(true);
        setEditingNoteId(null);
        setUserInput('');
    }

    const handleEditClick = (id, text) => {
        setEditingNoteId(id);
        setUserInput(text);
        setShowCreateBox(true);
    }

    const color = () => {
        const randomColors = ["pink", "blue", "green", "white"];
        if (i === randomColors.length) {
            i = 0;
        } else if (i < randomColors.length) {
            i++;
        }
        return randomColors[i];
    }

    const createNote = () => {
        if (userInput.trim() !== '') {
            const newNote = {
                id: Date.now(),
                text: userInput,
                color: color()
            };
            setNotes([...notes, newNote]);
            setUserInput('');
            setShowCreateBox(false);
        }
    }

    const updateNote = () => {
        const updatedNotes = notes.map(note => {
            if (note.id === editingNoteId) {
                return { ...note, text: userInput };
            }
            return note;
        });
        setNotes(updatedNotes);
        setUserInput('');
        setShowCreateBox(false);
        setEditingNoteId(null);
    }

    const deleteNote = (id) => {
        console.log('llego a el delte')
        setNotes(notes.filter(note => note.id !== id));
        // setNotes([ ])
    }

    return (
        <div className="container">
            <div className="notes">
                {notes.map((note, index) => (
                    // <div className="note" key={note.id} style={{ background: note.color }}>
                    //     <div className="details">
                    //         {editingNoteId === note.id ? (
                    //             <textarea
                    //                 value={userInput}
                    //                 onChange={(e) => setUserInput(e.target.value)}
                    //                 onKeyDown={handleKeyDown}
                    //                 maxLength="160"
                    //             />
                    //         ) : (
                    //             <h3>{note.text}</h3>
                    //         )}
                    //     </div>
                    //     {editingNoteId !== note.id && (
                    //         <span className="editNote" onClick={() => handleEditClick(note.id, note.text)}>
                    //             double click to edit this note
                    //         </span>
                    //     )}
                    //     <span className="removeNote" onClick={() => deleteNote(note.id)}>
                    //         double click to remove this note
                    //     </span>
                    // </div>
                    <Notes value={note.text} key={index} deleteNote={deleteNote} noteid={note.id}/>
                ))}
            </div>
            <div id="create" onClick={handleCreateClick}>
                <i className="fa-solid fa-plus"></i>
                {showCreateBox && (
                    <div className="createBox">
                        <div className="innerCreateBox">
                            <textarea
                                placeholder="Write Here .  .  ."
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                maxLength="160"
                            />
                            <button onClick={editingNoteId !== null ? updateNote : createNote}>
                                {editingNoteId !== null ? 'Update' : 'Create'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Blog;
