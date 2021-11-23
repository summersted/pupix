const __base_url = 'https://api.tvmaze.com/';
const _herokuUrl_ = 'https://pupix-server.herokuapp.com';
const _mongoAuthAPi_ = '/api/auth';
const _mongoLikedShowsAPi_ = '/api/update';

export const getShows = async (page) => {
    try {
        const res = await fetch(`${__base_url}shows?page=${page}`)
            .then(val => val.json());
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getShowbyId = async (id) => {
    try {
        const res = await fetch(`${__base_url}shows/${id}`)
            .then(val => val.json())
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getHumanbyId = async (id) => {
    try {
        const res = await fetch(`${__base_url}people/${id}`)
            .then(val => val.json())
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getSeasons = async (id) => {
    try {
        const res = await fetch(`${__base_url}shows/${id}/seasons`)
            .then(val => val.json())
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getEpisodes = async (id) => {
    try {
        const res = await fetch(`${__base_url}shows/${id}/episodes`)
            .then(val => val.json())
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const getResByQuerry = async (querry) => {
    try {
        const res = await fetch(`${__base_url}/search/shows?q=${querry}`)
            .then(val => val.json())
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const getPeople = async (querry) => {
    try {
        const res = await fetch(`${__base_url}/search/people?q=${querry}`)
            .then(val => val.json())
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const loginQuerry = async (body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoAuthAPi_}/login`, {
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
export const registerQuerry = async (body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoAuthAPi_}/register`, {
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
export const delLikedshowId = async (body,id) => {
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
export const getUserData = async (body) => {
    try {
        const res = await fetch(`${_herokuUrl_}${_mongoAuthAPi_}/user`, {
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

