import React, { useState, useEffect } from 'react';
import gif from "../cartoon-573.gif";

function App() {
  const [imagePosition, setImagePosition] = useState({ top: 0, left: 0 });
  const [showText, setShowText] = useState('');
  const [toggle, setToggle] = useState('');
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    const imageWidth = 0.32 * pageWidth;
    const imageHeight = 0.3 * pageHeight;
    const initialLeft = pageWidth - imageWidth;
    const initialTop = pageHeight - imageHeight;

    setImagePosition({ top: initialTop, left: initialLeft });

   
    const availableVoices = window.speechSynthesis.getVoices();
    setSelectedVoice(availableVoices.find(voice => voice.gender === 'en_GB')); // Example: Choose an English (US) voice

    
    window.speechSynthesis.onvoiceschanged = () => {
      const updatedVoices = window.speechSynthesis.getVoices();
      setSelectedVoice(updatedVoices.find(voice => voice.lang === 'en_GB'));
    };
  }, []);

  const moveImageToButton = (buttonId) => {
    setToggle((prc) => !prc)
    const margin = -50;
    const buttonElement = document.getElementById(buttonId);

    if (buttonElement) {
      const buttonText = document.getElementById(buttonId).textContent;
      setShowText(buttonText);

     
      const utterance = new SpeechSynthesisUtterance(buttonText);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
     
      window.speechSynthesis.speak(utterance);

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
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('openTabButton')}
        >
          open new Tab
                <span class="hidden m-2"> button will open new Tab for you</span>
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
                2"> button will take you to the Next page </span>
        </button>
        <button
          id="shareContentButton"
          className="px-4 py-2 hover:bg-blue-300 bg-blue-800 text-white"
          onClick={() => moveImageToButton('shareContentButton')}
        >
          share content
                <span class="hidden m-2"> button will share your content</span>
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
      <div className={`h-[30vw]  bg-white w-[20vw] bg-black image rounded-ful object-fit absolute `}
      style={{ top: imagePosition.top + 'px', left: imagePosition.left + 'px' }}>
<img
        src={
          gif
        }
        className={`h-[30vw] w-[20vw] image inline-block rounded-ful object-fit `}
        styl={{ top: imagePosition.top + 'px', left: imagePosition.left + 'px' }}
      />
      <span className=" md:font-bold p-2 border- border-blue-800 text-center md:text-lg">{showText}</span>
    </div>
    </div>
  );
}

export default App;
