import { useState,useEffect } from 'react';
import gif from "../cartoon-573.gif"
function App() {
  
  const [imagePosition, setImagePosition] = useState({ top: 0, left: 0 });
  
  const [showText , setShowText] = useState("")
  const [button , setButton] = useState()

  // Set the initial position of the image to the bottom-right when the component mounts
  useEffect(() => {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    const imageWidth = 0.32 * pageWidth; // Adjust the width as needed
    const imageHeight = 0.3 * pageHeight; // Adjust the height as needed
    const initialLeft = pageWidth - imageWidth; // Position at the right edge
    const initialTop = pageHeight - imageHeight; // Position at the bottom edge

    setImagePosition({ top: initialTop, left: initialLeft });
  }, []);

  const moveImageToButton = (buttonId) => {
    
    
    const margin= -50
    const buttonElement = document.getElementById(buttonId);
    if (buttonElement) {
      setShowText(document.getElementById(buttonId).textContent)
      const buttonRect = buttonElement.getBoundingClientRect();
      setImagePosition({
        
        top: buttonRect.top - margin,
        left: buttonRect.left,
      });
    }
  };

  return (
    <div className="relative ">
      <h1 className="text-2xl text-center shadow-md p-3 font-bold relative">
        Assistant Help
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-4 m-8 shadow-sm flex-wrap py-2 px-4">
  
        <button
          id="openTabButton"
          className="px-4 py-2 hover:bg-blue-300 bg-green-800 text-white"
          onClick={() => moveImageToButton('openTabButton')}
        >
          open new Tab
                <span class="hidden m-2"> button will take you to the open new Tab for you</span>
        </button>
        <button
          id="prevPageButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('prevPageButton')}
        >
          previous page
          
                          <span class="hidden m-2"> button will take you to the previous page </span>
        </button>
        <button
          id="nextPageButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('nextPageButton')}
        >
          Next page
                <span class="hidden m-3
                2">button will take you to the Next page </span>
        </button>
        <button
          id="shareContentButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('shareContentButton')}
        >
          share content
                <span class="hidden m-2">button will share your content</span>
        </button>
        <button
          id="saveFileButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('saveFileButton')}
        >
          Save file
                <span class="hidden m-2"> button will save your files</span>
        </button>
        <button
          id="saveWorkButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('saveWorkButton')}
        >
          save work
                <span class="hidden m-2"> button will save your work</span>
        </button>
      </div>
      <div className={`h-[30vw] w-[20vw] bg-black image rounded-ful object-fit absolute`}
      style={{ top: imagePosition.top + 'px', left: imagePosition.left + 'px' }}>
<img
        src={
          gif
        }
        className={`h-[30vw] w-[20vw] image rounded-ful object-fit `}
        styl={{ top: imagePosition.top + 'px', left: imagePosition.left + 'px' }}
      />
      <span className=" md:font-bold p-2 text-center md:text-lg">{showText}</span>
    </div>
    </div>
  );
}

export default App;
