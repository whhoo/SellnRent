import Select from 'react-select';
import { useState } from 'react';

const options = [
  { value: 'yerevan', label: 'Yerevan' },
  { value: 'gyumri', label: 'Gyumri' },
  { value: 'vanadzor', label: 'Vanadzor' }
]

export default function Search(props) {

  const [location, setLocation] = useState('');


  function urlChange() {
    if (location !== '') window.location = `/search/${location}`;
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