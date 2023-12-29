import React from 'react'
// import { Webp } from 'react-image-webp';
import snow from './assets/snow.webp';
import Draggable from 'react-draggable';
import { useState } from 'react';


function EditText() {
    const backgroundStyle = {
        backgroundImage: `url(${snow})`,
        backgroundSize: '4rem', // Set the size of the background image
      };
      const [text, setText] = useState('Sample Text');
      const [fontSize, setFontSize] = useState(16);
      const [fontFamily, setFontFamily] = useState('Arial');
      const [fontColor, setFontColor] = useState('#000000');

    //   functions
    const handleDrag = (e, data) => {
        // Implement drag functionality if needed
        console.log(data);
      };
    
      const handleTextChange = (event) => {
        setText(event.target.value);
      };
    
      const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
      };
    
      const handleFontFamilyChange = (event) => {
        setFontFamily(event.target.value);
      };
    
      const handleFontColorChange = (event) => {
        setFontColor(event.target.value);
      };
    
      const fontFamilies = [
        'Arial',
        'Times New Roman',
        'Courier New',
        'Verdana',
        'Georgia',
        'Helvetica',
        'Trebuchet MS',
        // Add more font options as needed
      ];
  return (
    <div className=''>
       <nav className='bg-emerald-800 fixed top-0 h-9 w-full bg-repeat z-50' style={backgroundStyle}>
        <div className='flex justify-center text-white font-semibold text-[0.7rem] mmobile:text-sm mt-2 smobile:mt-0 sm:text-lg align-middle'>
            Special Holiday Offer. Use CELEB20 to get Flat 20% disocunt.
        </div>
       </nav>
       <div className='flex-wrap sm:flex  mt-9 '>
            {/* text to be displayed */}
            <div className='bg-slate-400 h-[50vh]  sm:h-[calc(100vh-36px)] w-[100vw] sm:w-[69vw] flex justify-center items-center'>
                <div className=' bg-white w-[85vw] sm:w-[65vw] h-[45vh] sm:h-[85vh] absolute editor-container rounded-lg  '>
                    <Draggable onDrag={handleDrag} bounds=".editor-container" >
                            <div className=' border-2 border-dashed border-gray-400 rounded-lg p-2 overflow-hidden whitespace-pre-line  w-auto max-w-[15rem] sm:max-w-sm lg:max-w-md  text-center  '  
                            style={{
                                fontSize: `${fontSize}px`,
                                fontFamily: fontFamily,
                                color: fontColor,
                            }}>{text}</div>
                    </Draggable>
                </div>
            </div>
            {/* Edit text */}
            <div className='bg-white w-[100vw] sm:w-[30vw] sm:h-[calc(100vh-36px)] my-5 sm:my-0'>
                <p  className='flex justify-center text-red-900 text-lg font-semibold  '>Edit Your Text</p>
                <div>

                    <div className='flex justify-center mt-3 '>
                        <div className=''>
                            <p className='mb-3'>
                                Text:
                            </p>
                            <textarea
                            className="flex h-10 w-[75vw] sm:w-[25vw] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            value={text}
                            onChange={handleTextChange}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-3 '>
                        <div className=''>
                            <p className='mb-3'>
                                Font Size:
                            </p>
                            <input
                            className="flex h-10 w-[75vw] sm:w-[25vw] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="number"
                            value={fontSize}
                            onChange={handleFontSizeChange}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-3'>
                            <div>
                                <div className='mb-3'>
                                    <p>Font Family:</p>
                                </div>
                            <div>
                                <select
                                className="flex h-10 w-[75vw] sm:w-[25vw] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                value={fontFamily} onChange={handleFontFamilyChange}>
                                {fontFamilies.map((font) => (
                                    <option key={font} value={font}>
                                    {font}
                                    </option>
                                ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-3'>
                            <div>
                                <div className='mb-3'>
                                    <p>Font Color:</p>
                                </div>
                            <div>
                            <input
                             className="flex h-10 w-[75vw] sm:w-[25vw] rounded-full border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="color"
                                value={fontColor}
                                onChange={handleFontColorChange}
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
       </div>
    </div>
  )
}

export default EditText