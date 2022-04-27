import React from "react"

export default function Sidebar(props) {

    const notesTitles = props.notes.map(note => (
        <div
            key={note.id}
            className={`title ${(props.currentNote.id === note.id)
                    ? "selected-note"
                    : ""}
            `}
            onClick={()=> props.assignCurrentNote(note.id)}
        >
            <p className="text-snippet">
                {note.body.split('\n')[0].match(/[a-z\s0-9]/ig)}
            </p>
            <button
                className="delete-btn"
                onClick={(event) => props.deleteNote(event, note.id)}
            >
                <i className="gg-trash trash-icon"></i>
            </button>
        </div>
    ))

    console.log(props.currentNoteId)

    return(
        <aside className="pane sidebar">
            <header className="sidebar--header">
                <h3>Notes</h3>
                <button
                    className="new-note"
                    onClick={props.addNote}
                >+</button>
            </header>

            {notesTitles}
        </aside>
    )
}