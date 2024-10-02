import axios from 'axios';


const service = {
    getPlayer: (username) => 
        axios(`https://api.github.com/users/${username}`)
            .then(({data}) => data)
            .catch((err) => console.log(err)),
    getPlayerStats: (username) => 
        axios(`https://api.github.com/users/${username}/repos?per_page=100`)
            .then(({data}) => data)
            .catch((err) => console.log(err))  
}


export default service;

