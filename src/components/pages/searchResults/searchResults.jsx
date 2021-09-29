import { useEffect, useState } from "react";
import { getResByQuerry, getPeople } from "../../services";
import PeopleList from "../peopleList";
import List from "../List";

function SearchResults({ querry, qtype }) {
    const [result, setResult] = useState([]);

    function fetchDataByType(qtype) {
        switch (qtype) {
            case 'people':
                getPeople(querry).then(res => setResult(res.map((item) => item.person)));
                break;
            case 'search':
                getResByQuerry(querry).then(res => setResult(res.map((item) => item.show)));
                break;
            case null:
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        fetchDataByType(qtype);
    }, [querry, qtype]);

    switch (qtype) {
        case 'search':
            return (
                <>
                    {result ? (
                            <List moviesList={result} />)
                        : (<h2>Nothing to display.</h2>)}
                </>
            );
        case 'people':
            return (
                <>
                    {result ? <PeopleList list={result} /> : 'popa'}
                </>
            );

        default:
            return (
                <h2>Nothing to display.</h2>
            )
    }
}

export default SearchResults;