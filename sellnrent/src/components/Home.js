import Header from './Header';
import Search from './Search';
import Checkbox from './Checkbox'
import { useState } from 'react';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [searchBuy, setSearchBuy] = useState(false);
    const [searchRent, setSearchRent] = useState(false);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Search />
            <Checkbox setSearchBuy={setSearchBuy} setSearchRent={setSearchRent} />
        </>
    )
}