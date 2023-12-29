import React, { useState } from 'react';
import Draggable from 'react-draggable';

const TextEditor = () => {
  const [text, setText] = useState('Sample Text');
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontColor, setFontColor] = useState('#000000');

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

    <Draggable onDrag={handleDrag}>
      <div
        style={{
          position: 'absolute',
        }}
      >
        <div className=' border-2 border-dashed border-gray-400 rounded-lg p-2 w-[20vw] text-center  '  
        style={{
            // fontSize: `${fontSize}px`,
            fontFamily: fontFamily,
            color: fontColor,
          }}>{text}</div>
          
      </div>
    </Draggable>
        <textarea
          value={text}
          onChange={handleTextChange}
          className=''
        />
        <div>
          <label>
            Font Size:
            <input
              type="number"
              value={fontSize}
              onChange={handleFontSizeChange}
            />
          </label>
        </div>
        <div>
          <label>
            Font Family:
            <select value={fontFamily} onChange={handleFontFamilyChange}>
              {fontFamilies.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Font Color:
            <input
              type="color"
              value={fontColor}
              onChange={handleFontColorChange}
            />
          </label>
        </div>
    </div>
  );
};
export default TextEditor;