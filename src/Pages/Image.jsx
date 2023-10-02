import { useState } from 'react';


function App() {
  const [imagePosition, setImagePosition] = useState({ top: 0, left: 0 });

  const moveImageToButton = (buttonId) => {
    const buttonElement = document.getElementById(buttonId);
    if (buttonElement) {
      const buttonRect = buttonElement.getBoundingClientRect();
      setImagePosition({
        top: buttonRect.top,
        left: buttonRect.left,
      });
    }
  };

  return (
    <div className="relative">
      <h1 className="text-3xl text-center shadow-md p-4 font-bold relative">
        Assistant Help
      </h1>
      <div className="flex justify-between gap-6 m-4 shadow-sm flex-wrap py-3 px-6">
        <button
          id="openTabButton"
          className="px-4 py-2 hover:bg-blue-300 bg-green-800 text-white"
          onClick={() => moveImageToButton('openTabButton')}
        >
          open new Tab
        </button>
        <button
          id="prevPageButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('prevPageButton')}
        >
          previous page
        </button>
        <button
          id="nextPageButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('nextPageButton')}
        >
          Next page
        </button>
        <button
          id="shareContentButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('shareContentButton')}
        >
          share content
        </button>
        <button
          id="saveFileButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('saveFileButton')}
        >
          Save file
        </button>
        <button
          id="saveWorkButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('saveWorkButton')}
        >
          save work
        </button>
      </div>
      <img
        src={
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNzaXN0YW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60'
        }
        className="h-[30vw] w-[30vw] rounded-full object-fit bottom-[-400px] relative"
        style={{ top: imagePosition.top + 'px', left: imagePosition.left + 'px' }}
      />
    </div>
  );
}

export default App;
