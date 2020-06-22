import axios from "axios";

export default class UserService {

    /**
     * method to handle login of user
     * 
     * @param {array} data 
     */
    login(data) {
        //    / debugger;
        return axios.post('/api/login', data)
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('fundootoken', response.data.token);
                    localStorage.setItem('username', response.data.userdetails.firstname + ' ' + response.data.userdetails.lastname);
                }
                return response;
            }
            ).catch((error) => {
                // /console.log('rereerrors',error);
                return error;
            });

    }

    /**
     * method to handle register service
     * 
     * @param {array} data 
     */
    register(data) {
        
        return axios.post('/api/register', data)
            .then((response) => {
                console.log("respspspsp", response);
                return response;
            }
            ).catch((error) => {
                console.log('errors', error);
                return error;
            });

    }

    /**
     * method to call api for getting userdata of the logged in user from the database
     * 
     * @returns response promise
     */
    getUserData() {
        var AuthStr = "Bearer ".concat(localStorage.getItem('fundootoken'));
        // console.log(AuthStr);

        return axios.get('/api/userdetails', { headers: { Authorization: AuthStr } })
            .then((response) => {
                return response;
            }
            ).catch((error) => {
                return error;
            });
    }

    /**
     * method to logout the user from the app 
     * 
     * @returns response
     */
    logout() {
        var AuthStr = "Bearer ".concat(localStorage.getItem('fundootoken'));
        return axios.get('/api/logout', { headers: { Authorization: AuthStr } })
            .then((response) => {
                localStorage.removeItem('fundootoken');
                return response;
            }
            ).catch((error) => {
                return error;
            });
    }   
}