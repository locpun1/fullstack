import axios from "../axios"

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('http://localhost:8080/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`http://localhost:8080/api/get-all-users?id=${inputId}`)
}
const createNewUserAPI = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/create-new-user', data)
}

const deleteUserAPI = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}

const updateUserAPI = (data) => {
    console.log('check data from service', data)
    return axios.put('/api/edit-user', data)
}

const getAllCodeService = (inputData) => {
    return axios.get(`http://localhost:8080/api/allcode?type=${inputData}`)
}

export { handleLoginApi, getAllUsers, createNewUserAPI, deleteUserAPI, updateUserAPI, getAllCodeService }