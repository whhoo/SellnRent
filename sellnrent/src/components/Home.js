import Search from './Search';
import Checkbox from './Checkbox'
import { useState } from 'react';

export default function Home(props) {
    const [searchBuy, setSearchBuy] = useState(false);
    const [searchRent, setSearchRent] = useState(false);



    return (
        <>
            <Search />
            <Checkbox setSearchBuy={setSearchBuy} setSearchRent={setSearchRent} />
        </>
    )
}