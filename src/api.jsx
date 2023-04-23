import axios from "axios";

function searchShows(keyword){
    return axios.get("https://api.tvmaze.com/search/shows?q="+keyword).then(response=>
    response.data.map(item=>item.show))
};

export default searchShows;