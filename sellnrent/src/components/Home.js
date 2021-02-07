import Header from './Header';
import Search from './Search';
import Checkbox from './Checkbox'
import { useState } from 'react';

export default function Home(props) {
    const [searchBuy, setSearchBuy] = useState(false);
    const [searchRent, setSearchRent] = useState(false);

    debugger

    return (
        <>
            <Header user={props.user} setUser={props.setUser} />
            <Search />
            <Checkbox setSearchBuy={setSearchBuy} setSearchRent={setSearchRent} />
        </>
    )
}