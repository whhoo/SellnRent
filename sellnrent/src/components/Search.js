import Select from 'react-select';
import { useState } from 'react';

const options = [
  { value: 'yerevan', label: 'Yerevan' },
  { value: 'gyumri', label: 'Gyumri' },
  { value: 'vanadzor', label: 'Vanadzor' },
  { value: 'stepanavan', label: 'Stepanavan' },
  { value: 'spitak', label: 'Spitak'},
  { value: 'dilijan', label: 'Dilijan'},
  { value: 'sevan', label: 'Sevan'},
  { value: 'vagharshapat', label: 'Vagharshapat'},
  { value: 'vedi', label: 'Vedi'},
  { value: 'artashat', label: 'Artashat'},
  { value: 'jermuk', label: 'Jermuk'},
  { value: 'goris', label: 'Goris'},
  { value: 'sisian', label: 'Sisian'},
  { value: 'kapan', label: 'Kapan'},
  { value: 'meghri', label: 'Meghri'}
]

export default function Search() {

  const [location, setLocation] = useState('');


  function urlChange() {
    if (!location) window.location = `/search/${location}`;
    else return;
  }

  function handleChange(e) {
    setLocation(e.value)
  }

  return (<div className="search">
    <Select options={options} placeholder="Search" onChange={handleChange} className="select" />
    <button className="sbutt"onClick={urlChange}>Search</button>
  </div>);
}