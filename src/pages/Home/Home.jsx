import './Home.css';
import NoteCard from '../../components/NoteCard/NoteCard';
import Editor from '../../components/Editor/Editor';
import { useEffect, useState } from 'react';
import { addNote, editNote, deleteNote, getNotes } from '../../api/notes';
import Notification, {
  notifyError,
  notifySuccess,
} from '../../components/Notification/Notification';

const Home = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [selectedNote, setSelectedNote] = useState();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes(async (response) => {
      const data = await response.json();
      setNotes(data.results);
    });
  }, []);
  const handleEdit = (note) => {
    setSelectedNote(note);
    setShowEditor(true);
  };

  const handleDelete = (note) => {
    deleteNote(
      note.id,
      (_) => {
        setNotes([...notes.filter((_note) => _note.id !== note.id)]);
        notifySuccess(`Success!!! Deleted Note ${note.id}`);
      },
      (error) => notifyError('Something Went Wrong!!!')
    );
  };

  const handleNewNote = () => {
    setSelectedNote(null);
    setShowEditor(true);
  };

  const handleSave = async (data) => {
    let response;

    if (selectedNote) {
      editNote(
        selectedNote.id,
        data,
        async (response) => {
          const edittedNote = await response.json();
          const updatedNotes = notes.map((note) =>
            note.id === selectedNote.id ? edittedNote : note
          );
          setNotes([...updatedNotes]);
          notifySuccess('Success!!! Edited Note successfully');
        },
        (error) => notifyError('Something Went Wrong')
      ).finally(() => setShowEditor(false));
    } else {
      addNote({ note: data }, async (response) => {
        const newNote = await response.json();
        setNotes([...notes, newNote]);
        notifySuccess('Success!!! Saved Note successfully');
      }).finally(() => setShowEditor(false));
    }
    return response;
  };

  return (
    <>
      <Notification />
      <div className="font-body bg-dark-100 h-full mx-10 mt-10 md:mx-40 md:mt-40 lg:mx-96">
        <div className="flex flex-col md:flex-row md:justify-between text-white">
          <h2 className="text-4xl mb-5 md:mb-0">Notes</h2>
          <div className="flex">
            <button className="btn btn-primary ml-4">
              <svg
                dataslot="icon"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5"
              >
                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
              </svg>
              <span onClick={handleNewNote} className="pl-1">
                Add a new note
              </span>
            </button>
          </div>
        </div>
        <main className="mt-8">
          {notes.map((note) => (
            <div className="mb-6" key={note.id}>
              <NoteCard
                note={note.note}
                onClick={() => handleEdit(note)}
                handleEdit={() => handleEdit(note)}
                handleDelete={() => handleDelete(note)}
              ></NoteCard>
            </div>
          ))}
          {showEditor && (
            <Editor
              note={selectedNote?.note}
              handleClose={() => setShowEditor(false)}
              handleSave={async (note) => await handleSave(note)}
            ></Editor>
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
