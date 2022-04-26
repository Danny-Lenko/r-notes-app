import React from "react"

export default function Sidebar(props) {

    const notesTitles = props.notes.map(note => (
        <div
            key={note.id}
            className="title"
        >
            <p className="text-snippet">{note.body}</p>
        </div>
    ))

    return(
        <aside className="sidebar">
            <header className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note">+</button>
            </header>

            {notesTitles}
        </aside>
    )
}