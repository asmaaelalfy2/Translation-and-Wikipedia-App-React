import React, { useState } from 'react';
import Accordion from './components/Accordion';
import DropDown from './components/DropDown';
import Search from './components/Search';
import Translate from './components/Translate';
import Routes from './components/Routes';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'the color red',
    value: 'red',
  },
  {
    label: 'the color green',
    value: 'green',
  },
  {
    label: 'the color blue',
    value: 'blue',
  },
];
function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div>
      <Header />
      <Routes path='/'>
        <Accordion items={items} />
      </Routes>
      <Routes path='/list'>
        <Search />
      </Routes>
      <Routes path='/dropdown'>
        <DropDown
          selected={selected}
          setSelected={setSelected}
          options={options}
          label='Select Color'
        />
      </Routes>
      <Routes path='/translate'>
        <Translate />
      </Routes>

      {/* <button
    className='btn primary'
    onClick={() => {
      setShowDropDown(!showDropDown);
    }}
  >
    Show Dropdown
  </button>
  {
    showDropDown?
    <DropDown 
      selected={selected}
      setSelected={setSelected}
      options={options}/>:null
  }
       */}
      {/* <Translate /> */}
    </div>
  );
}

export default App;
