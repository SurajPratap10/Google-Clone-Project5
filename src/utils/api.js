import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyDdvzg51CtIhYYxvSfS5f8yrtt2q1KWXwU",
    cx: "2366bbc786395456d",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};





// Extra Keys

//  key = AIzaSyBwvl00_RVz6XoemCcLv3GCFbX1h7tnaj8
// cx = e67977b8ecf264829