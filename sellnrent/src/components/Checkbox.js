import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export default function Checkbox(props) {
    function handleBuyChange(e) {
        console.log(e.target)
        props.setSearchBuy(e.target.checked);
    }

    function handleRentChange() {
        props.setSearchRent(!props.searchRent);
    }

    return (<>
        <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2" aria-required>
            <ToggleButton value={1} onClick={handleBuyChange}>Buy</ToggleButton>
            <ToggleButton value={2} onClick={handleRentChange}>Rent</ToggleButton>
        </ToggleButtonGroup>
    </>);
}