// api/userService.js
import axios from 'axios';
import apiConfig from './apiConfig';

const userService = {

    // Function to create a new user
    createUser: async (userData) => {
        try {
            console.log('createUser :: :: ',userData)
            const response = await axios.post(`${apiConfig.baseURL}api/user/create`, userData);
            console.log('response.data ::::',response.data)
            return response.data; // Assuming the server responds with the created user data
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },
     signInUser: async (userData) => {
        try {
            console.log('createUser :: :: signInUser',userData)
            const response = await axios.post(`${apiConfig.baseURL}api/user/sign-up`, userData);
            console.log('response.data ::::',response.data)
            return response.data; // Assuming the server responds with the created user data
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

    // Other user-related API functions...
};

export default userService;
