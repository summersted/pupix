const axios = require('axios').default;
const __base_url = 'https://api.tvmaze.com/';
const _herokuUrl_ = 'https://pupix-server.herokuapp.com';
const _mongoAuthAPI_ = '/api/auth';
const _mongoLikedShowsAPi_ = '/api/update';
const _mongoUsersAPI_ = '/api/users';
const _mongoTestsAPI_ = '/api/tests';

export const getShows = async (page) => {
    try {
        const res = await axios
            .get(`${__base_url}shows?page=${page}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getShowbyId = async (id) => {
    try {
        const res = await axios
            .get(`${__base_url}shows/${id}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getHumanbyId = async (id) => {
    try {
        const res = await axios
            .get(`${__base_url}people/${id}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getSeasons = async (id) => {
    try {
        const res = await axios
            .get(`${__base_url}shows/${id}/seasons`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getEpisodes = async (id) => {
    try {
        const res = await axios
            .get(`${__base_url}shows/${id}/episodes`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getResByQuerry = async (querry) => {
    try {
        const res = await axios
            .get(`${__base_url}/search/shows?q=${querry}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getPeople = async (querry) => {
    try {
        const res = await axios
            .get(`${__base_url}/search/people?q=${querry}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const loginQuerry = async (body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoAuthAPI_}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
        console.log(error);
    }
}

// export const loginQuerry = async (body) => {
//     try {
//         const res = await axios({
//             method: 'POST',
//             url: `${_herokuUrl_}${_mongoAuthAPI_}/login`,
//             data: JSON.stringify(body)
//         })
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const registerQuerry = async (body) => {
//     try {
//         const res = await fetch(`${_herokuUrl_}${_mongoAuthAPI_}/register`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(body)
//         })
//             .then(val => val.json())
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// }


export const registerQuerry = async (body) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${_herokuUrl_}${_mongoAuthAPI_}/register`,
            headers: {'Content-Type': 'application/json'},
            data: JSON.stringify(body)
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getLikedShows = async (body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoLikedShowsAPi_}/likedShowsId`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}
export const addLikedshowId = async (body, id) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoLikedShowsAPi_}/add/likedShowsId:${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}
export const delLikedshowId = async (body, id) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoLikedShowsAPi_}/del/likedShowsId:${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const addAsignment = async (body, id) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/add/asignment/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}
export const delAsignment = async (body, id) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/del/asignment/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const getUserData = async (body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoAuthAPI_}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const getAllUsers = async () => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoUsersAPI_}/all`, {
            method: 'GET',
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}
export const getAllQuestions = async () => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/questions`, {
            method: 'GET',
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}
export const getAllTests = async () => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/test`, {
            method: 'GET',
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const getUsersByQuerry = async (querry) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoUsersAPI_}/user/${querry}`, {
            method: 'GET',
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const getTestsByQuerry = async (querry) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/test/${querry}`, {
            method: 'GET',
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const getQuestionsByQuerry = async (querry) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/questions/${querry}`, {
            method: 'GET',
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const getTestById = async (id) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/test/${id}`, {
            method: 'GET',
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}
export const getQuestionById = async (id) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/question/${id}`, {
            method: 'GET',
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}
export const getQuestionsById = async (body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/tests-by-id`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const createQuestion = async (body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/question`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}
export const createTest = async (body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/test`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const deleteTest = async (id) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/test/${id}`, {
            method: 'DELETE'
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const deleteQuestion = async (id) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/question/${id}`, {
            method: 'DELETE'
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const editQuestion = async (id, body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/question/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const editTest = async (id, body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoTestsAPI_}/question/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}

export const asignTest = async (testId, userId) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoAuthAPI_}/asign-test`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({testId, userId})
        })
            .then(val => val.json())
        return res;
    } catch (error) {
    }
}


