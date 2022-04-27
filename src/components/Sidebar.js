import React from "react"

export default function Sidebar(props) {

    const notesTitles = props.notes.map(note => (
        <div
            key={note.id}
            className={`title ${(props.currentNoteId === note.id)
                    ? "selected-note"
                    : ""}
            `}
            onClick={()=> props.assignCurrentNote(note.id)}
        >
            <p className="text-snippet">
                {note.body.split('\n')[0].match(/[a-z\s0-9]/ig)}
            </p>
        </div>
    ))

    console.log(props.currentNoteId)

    return(
        <aside className="sidebar">
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