import React from "react"
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar"
import Split from 'react-split'
import { nanoid } from 'nanoid'


export default function App() {

    const splitParams = {className: "split", sizes: [30,70], minSize: 100,
        expandToMin: false, gutterSize: 10, gutterAlign: "center", snapOffset: 30,
        dragInterval: 1, direction: "horizontal", cursor: "col-resize"}


    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ''
    )

    function addNewNote() {
        const newNote = {
            body: `# Type a title here`,
            id: nanoid()
        }
        setNotes(prevState => [newNote, ...prevState])
        setCurrentNoteId(newNote.id)
    }

    function assignCurrentNote(noteId) {
        setCurrentNoteId(noteId)
    }

    function findCurrentNote() {
        return notes.filter(note => note.id === currentNoteId)[0]
    }

    function updateNote(text) {
        const oldNotes = notes.filter(note => note.id !== currentNoteId)
        let currentNote = notes.filter(note => note.id === currentNoteId)[0]
        currentNote = {...currentNote, body: text}

        setNotes([currentNote, ...oldNotes])
    }

    return(
        notes[0]
            ? <Split {...splitParams}>

                <Sidebar
                    notes={notes}
                    currentNoteId={currentNoteId}
                    addNote={addNewNote}
                    assignCurrentNote={assignCurrentNote}
                />

                <Editor
                    currentNote={findCurrentNote()}
                    updateNote={updateNote}
                />
            </Split>

            : <div className="no-notes">
                <h1>You have no notes</h1>

                <button
                    className="first-note"
                    onClick={addNewNote}
                >
                    Create one note
                </button>
            </div>


    )
}