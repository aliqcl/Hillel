import axios from 'axios';

const API = 'https://66d4964d5b34bcb9ab3efe4c.mockapi.io/dev/todos';

const service = {
    get: () => 
        axios(API)
            .then(({data}) => data)
            .catch((err) => console.log(err)),
    delete: (id) =>
        axios.delete(API+`/${id}`)
            .then(({data}) => data)
            .catch((err) => console.log(err)),
    put: (id, item) =>
        axios.put(API+`/${id}`, item)
            .then(({data}) => data)
            .catch((err) => console.log(err)),
    post: (item) =>
        axios.post(API, item)
            .then(({data}) => data)
            .catch((err) => console.log(err))
}

export default service;

