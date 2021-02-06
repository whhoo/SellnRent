import { Input, Label } from 'reactstrap';

export default function Checkbox(props) {
    function handleBuyChange(){
        props.setSearchBuy(!props.searchBuy);
    }

    function handleRentChange(){
        props.setSearchRent(!props.searchRent);
    }

    return (<>
    <Label check className="buycheck" >
        <Input type="checkbox" onChange={handleBuyChange}/>
        Buy
    </Label>
    <Label check className="rentcheck">
        <Input type="checkbox" onChange={handleRentChange} />
        Rent
    </Label>
    </>);
}