import axios from 'axios';


const API = 'https://655655bc84b36e3a431f9829.mockapi.io/countries';

const service = {
    get: (id) => 
        axios(id ? API + `/${id}` : API)
            .then(({data}) => data)
            .catch((err) => console.log(err))
}


export default service;