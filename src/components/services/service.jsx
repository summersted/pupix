const __base_url = 'https://api.tvmaze.com/';

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