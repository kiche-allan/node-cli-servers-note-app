import { insertDB, saveDB, getDB} from "./db";

// create a new note
export const newNote = async(note, tags) => {
    const newNote = {
        tags,
        id: Date.now(),
        content: note
    }

    await insertDB(newNote)
}