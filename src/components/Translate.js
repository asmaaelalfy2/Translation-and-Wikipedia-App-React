import React, { useState } from 'react';
import Convert from './Convert';
import DropDown from './DropDown';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];
function Translate() {
  const [Language, setLanguage] = useState(options[0]);
  const [Text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input
            type='text'
            value={Text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <DropDown
        label='Select Language'
        selected={Language}
        setSelected={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>

      <Convert Language={Language} Text={Text} />
    </div>
  );
}

export default Translate;
