import { GIT_DATA } from "../constants/GitData";
import axios from 'axios';

export function getGitData(searchType, searchArea) {
    return {
        type: GIT_DATA.GET_GIT_DATA,
        payload: axios.get(`https://api.github.com/search/${searchType}?q=${searchArea}&per_page=100`, {})
    }
}
