
import axios from 'axios';



const AppApi = axios.create({
    baseURL: '/api'
});


export default AppApi;


