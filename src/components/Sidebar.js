import React from "react"

export default function Sidebar(props) {

    const notesTitles = props.notes.map(note => (
        <div
            key={note.id}
            className={`title ${(props.currentNoteId === note.id)
                    ? "selected-note"
                    : ""}
            `}
            onClick={()=> props.findCurrentNote(note.id)}
        >
            <p className="text-snippet">{note.body}</p>
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