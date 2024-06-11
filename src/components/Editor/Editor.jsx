import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

import { useEffect, useRef } from 'react';
import LoadingButton from '../LoadingButton/LoadingButton';
import { notifyError } from '../Notification/Notification';

// Let the start of new not be a header with 'Your title'
const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Your title',
        level: 1,
      },
    },
  ],
};

const Editor = ({ handleClose, handleSave, note }) => {
  const ejInstance = useRef();
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  });

  const saveNote = async () => {
    const outputData = await ejInstance.current.save();
    if (outputData.blocks.length) {
      if (outputData.blocks[0].type !== 'header') {
        outputData.blocks.unshift({
          type: 'header',
          data: {
            text: 'No title',
            level: 1,
          },
        });
      }
    } else {
      notifyError('Error!!! Cannot Save, Notes is empty');
    }
    await handleSave(outputData);
  };

  const initEditor = () => {
    const editor = new EditorJS({
      holder: 'editorjs',
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      data: note ? note : DEFAULT_INITIAL_DATA,
      placeholder: 'Tell a Story',
      tools: {
        header: {
          class: Header,
          config: {
            levels: [1, 2, 3, 4],
            defaultLevel: 3,
          },
        },
      },
    });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-dark-300 bg-opacity-70 flex items-center justify-center">
        <div className="bg-white w-2/3 h-2/3 relative rounded-sm flex flex-col">
          <svg
            onClick={handleClose}
            dataslot="icon"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-8 cursor-pointer self-end mr-4"
          >
            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
          </svg>
          <div className="overflow-y-scroll w-full h-4/5 mt-2">
            <div id="editorjs" className="mt-10"></div>
          </div>
          <div className="flex w-full justify-end">
            <LoadingButton
              onClick={saveNote}
              className={'btn btn-primary text-white mr-12 mt-8'}
            >
              Submit
            </LoadingButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
