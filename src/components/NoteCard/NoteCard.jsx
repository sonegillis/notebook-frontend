import { useEffect, useState } from 'react';
import { getNotesPlainTextFromBlocks } from '../../helpers/utils';

const NoteCard = ({ handleDelete, handleEdit, note, onClick }) => {
  const [showAction, setShowAction] = useState(false);
  let [formattedNote, setFormattedNote] = useState({
    header: '',
    body: '',
  });
  useEffect(() => {
    setFormattedNote(getNotesPlainTextFromBlocks(note.blocks));
  }, [note]);
  const handleAction = (event, handler) => {
    event.stopPropagation();
    handler();
  };

  const actionPopOverClickHandler = (event) => {
    event.stopPropagation();
    setShowAction(!showAction);
  };

  return (
    <div className="card overflow-visible cursor-pointer" onClick={onClick}>
      <div className="flex justify-between">
        <h3
          className={
            'text-white text-lg ' + (!formattedNote.header ? 'opacity-40' : '')
          }
        >
          {formattedNote?.header ? formattedNote.header : 'No title'}
        </h3>
        <div
          onClick={actionPopOverClickHandler}
          className="text-gray-300 cursor-pointer hover:bg-dark-100 hover:rounded-md h-fit relative"
        >
          <svg
            dataslot="icon"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-5"
          >
            <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
          </svg>
          {showAction && (
            <div className="absolute top-5 right-0 border border-gray-700 rounded-lg bg-dark-200 p-2 min-w-32">
              <div
                className="text-gray-500 flex item-center z-50"
                onClick={(event) => handleAction(event, handleEdit)}
              >
                <svg
                  dataslot="icon"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-5"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
                  />
                </svg>
                <span className="pl-2 text-sm">Edit</span>
              </div>
              <div
                onClick={(event) => handleAction(event, handleDelete)}
                className="text-red-500 flex items-center mt-3"
              >
                <svg
                  dataslot="icon"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-5"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                  />
                </svg>
                <span className="pl-2 text-sm">Delete</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="text-gray-300 text-xs mt-3">{formattedNote.body}</p>
      </div>
    </div>
  );
};

export default NoteCard;
