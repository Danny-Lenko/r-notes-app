import React from "react"
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar"
import Split from 'react-split'
import { nanoid } from 'nanoid'


export default function App() {

    const [notes, setNotes] = React.useState([])

    // function addFirstNote() {
    //     console.log('btn clicked')
    //     setNotes(prevState => {
    //         prevState.
    //     })
    // }

    function addNewNote() {
        const newNote = {
            body: "# Type a title here",
            id: nanoid()
        }
        setNotes(prevState => [newNote, ...prevState])
    }

    console.log(notes)

    const splitParams = {className: "split", sizes: [30,70], minSize: 100,
        expandToMin: false, gutterSize: 10, gutterAlign: "center", snapOffset: 30,
        dragInterval: 1, direction: "horizontal", cursor: "col-resize"}

    return(
        notes[0]
            ? <Split {...splitParams}>

                <Sidebar
                    notes={notes}
                />

                <Editor />
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