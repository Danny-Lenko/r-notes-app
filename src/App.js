import React from "react"
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar"
import Split from 'react-split'
import { nanoid } from 'nanoid'


export default function App() {

    const splitParams = {className: "split", sizes: [30,70], minSize: 100,
        expandToMin: false, gutterSize: 10, gutterAlign: "center", snapOffset: 30,
        dragInterval: 1, direction: "horizontal", cursor: "col-resize"}

    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem('notes')) || []
    )
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ''
    )

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

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
        return notes.find(note => note.id === currentNoteId) || notes[0]
    }

    function updateNote(text) {
        const oldNotes = notes.filter(note => note.id !== currentNoteId)
        let currentNote = notes.find(note => note.id === currentNoteId)
        currentNote = {...currentNote, body: text}

        setNotes([currentNote, ...oldNotes])
    }

    function deleteNote(event, noteId) {
        event.stopPropagation()
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
        console.log('delete note', noteId)
    }

    return(
        <section className="App">
            {notes[0]

                ? <Split {...splitParams}>

                    <Sidebar
                        notes={notes}
                        currentNote={findCurrentNote()}
                        addNote={addNewNote}
                        assignCurrentNote={assignCurrentNote}
                        deleteNote={deleteNote}
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
                </div>}
        </section>


    )
}