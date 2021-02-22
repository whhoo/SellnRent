import Select from 'react-select';
import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const options = [
    { value: 'yerevan', label: 'Yerevan' },
    { value: 'gyumri', label: 'Gyumri' },
    { value: 'vanadzor', label: 'Vanadzor' }
]

export default function Home(props) {
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('')

    function handleStatusChange(e) {
        if(e.target.checked) setStatus(status + e.target.value);
        else setStatus(status.replace(e.target.value, ''));
    }

    function urlChange() {
        debugger
        if (location && status) window.location = `/search/${location}/${status}`;
        else return;
    }

    function handleChange(e) {
        setLocation(e.value)
    }

    return (
        <>
            <div className="search">
                <Select options={options} placeholder="Search" onChange={handleChange} className="select" />
                <button className="sbutt" onClick={urlChange}>Search</button>
            </div>
            <ToggleButtonGroup type="checkbox" className="mb-2" >
                <ToggleButton value="buy" onChange={handleStatusChange}>Buy</ToggleButton>
                <ToggleButton value="rent" onChange={handleStatusChange}>Rent</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}
