import { useState } from "react";
import { InputGroup, FormControl, DropdownButton, Dropdown } from "react-bootstrap";
import SearchResults from "../searchResults";
import './search.css';
// import Preloader from "../preloader";
function Search() {
    const [querry, setQuerry] = useState(null);
    const [qType, setQType] = useState(null);

    return (
        <main>
            <InputGroup className="d-flex search-panel">
                <FormControl
                    type="search"
                    placeholder="What are you looking for?"
                    className="mr-2"
                    aria-label="Search"
                    onChange={(e) => setQuerry(e.target.value)}
                />
                <DropdownButton
                    variant="secondary"
                    title="Dropdown"
                    id="input-group-dropdown-2"
                    align="end"
                >
                    <Dropdown.Item onClick={() => setQType('search')}>Default search</Dropdown.Item>
                    <Dropdown.Item onClick={() => setQType('people')}>People</Dropdown.Item>
                </DropdownButton>
            </InputGroup >
            <SearchResults querry={querry} qtype={qType}/>
        </main>
    )
}
export default Search;