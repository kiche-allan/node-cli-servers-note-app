import { insertDB, saveDB, getDB} from "./db";

// create a new note
export const newNote = async(note, tags)