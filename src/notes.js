import { insertDB, saveDB, getDB} from "./db";

// create a new note
export const newNote = async(note, tags) => {
    const newNote = {
        tags,
        id: Date.now(),
        content: note
    }

    await insertDB(newNote)
    return newNote
}

//get all notes
export const getAllNotes = async () => {
    const {notes} = await getDB()
    return notes
}

// find notes
export const findNotes = async (filter) => {
    const {notes} = await getDB()
    return notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()))

}

export const removeNote = async id => {
    const notes = await getDB()
    const match = notes.find(note => note.id = id)

    if (match) {
        const newNotes = notes.filter(note => note.id != id)
    }
}