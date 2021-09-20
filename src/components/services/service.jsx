const __base_url = 'https://api.tvmaze.com/';

const getShows = async (page) => {
    try {
        const res = await fetch(`${__base_url}shows?page=${page}`)
            .then(val => val.json());
        return res;
    } catch (error) {
        console.log(error);
    }
}

// const get
export default getShows;