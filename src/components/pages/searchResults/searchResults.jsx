import { useEffect, useState } from "react";
import { getResByQuerry, getPeople, getUsersByQuerry, getTestsByQuerry, getQuestionsByQuerry, getAllUsers, getAllQuestions, getAllTests } from "../../services";
import PeopleList from "../peopleList";
import List from "../List";
import { getUsersData } from "../../../redux/actions/usersActions";

function SearchResults({
    querry,
    qtype,
    selectable = false,
    selectCallback = () => { }
}) {
    const [result, setResult] = useState([]);

    function fetchDataByType(qtype) {
        switch (qtype) {
            case 'users':
                getUsersByQuerry(querry).then(res => setResult(res.users));
                break;
            case 'questions':
                getQuestionsByQuerry(querry).then(res => setResult(res.questions));
                break;
            case 'tests':
                getTestsByQuerry(querry).then(res => setResult(res.tests));
                break;
            case null:
                break;
            default:
                break;
        }
    }

    function fetchAllDataByType(qtype) {
        switch (qtype) {
            case 'users':
                getAllUsers().then(res => setResult(res.users));
                break;
            case 'questions':
                getAllQuestions().then(res => setResult(res.questions));
                break;
            case 'tests':
                getAllTests().then(res => setResult(res.tests));
                break;
            case null:
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        fetchAllDataByType(qtype);
    }, []);

    useEffect(() => {
        if (querry === undefined) {
            fetchDataByType(qtype);
        }
    }, [querry, qtype]);

    if (result) {
        return (
            <>
                {result ? (
                    <List
                        list={result}
                        type={qtype}
                        selectable={selectable}
                        selectCallback={selectCallback}
                    />)
                    : (<h2>Nothing to display.</h2>)}
            </>
        )
    } else {
        return (
            <h2>Nothing to displaya.</h2>
        )
    }
}

export default SearchResults;