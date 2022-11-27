import { useState } from "react";
import { InputGroup, FormControl, Button, ButtonGroup } from "react-bootstrap";
import ModalAdd from "../modalAdd";
import SearchResults from "../searchResults";
import './search.css';
// import Preloader from "../preloader";
function Search({
    qType = 'users',
    addable = true,
    selectable = false,
    selectedArray = [],
    selectCallback = () => { } }) {
    const [querry, setQuerry] = useState(null);
    const [value, setValue] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <main>
            <InputGroup className="d-flex search-panel">
                <FormControl
                    type="search"
                    placeholder="What are you looking for?"
                    className="mr-3"
                    aria-label="Search"
                    onChange={(e) => setValue(e.target.value)}
                />
                <ButtonGroup aria-label="Basic example">
                    <Button onClick={() => setQuerry(value)}>Search</Button>
                    {qType !== 'users' && addable ? (
                        <Button
                            variant="secondary"
                            onClick={handleShow}
                        >Add</Button>
                    ) : null}
                </ButtonGroup>
            </InputGroup >
            <SearchResults
                querry={querry}
                qtype={qType}
                addable={addable}
                selectable={selectable}
                selectCallback={selectCallback}
            />
            <ModalAdd
                show={show}
                handleClose={handleClose}
                type={qType} />
        </main>
    )
}
export default Search;