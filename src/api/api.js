import * as axios from "axios"

const instance = axios.create({
    // baseURL: 'http://localhost/malfa/api/',
    baseURL: 'https://mantybylak.000webhostapp.com/api/',
    header:{
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
})

export const usersAPI = {
    getData(){
        return instance.get('getData.php')
        .then(response => {
            return response.data
        })
    },
    getSaved(){
        return instance.get('getSaved.php')
        .then(response => {
            return response.data
        })
    },
    getDeleted(){
        return instance.get('getDeleted.php')
        .then(response => {
            return response.data
        })
    },

    getUserData(id_user){
        return instance.post('getUserData.php', JSON.stringify({ id_user }))
        .then(response => {
            return response.data
        })
    },
    getCommetsRatings(id_candidate){
        return instance.post('getCommetsRatings.php', JSON.stringify({ id_candidate }))
        .then(response => {
            return response.data
        })
    },

    getStatuses(){
        return instance.post('getStatuses2.php')
        .then(response => {          
            return response.data
        })
    },
    setStatus(id_candidate, id_status){
        return instance.post('setStatus.php', JSON.stringify({ id_candidate, id_status }))
        .then(response => {           
            return response.data
        })
    },
    addStatus(newStatus){
        return instance.post('addStatus.php', JSON.stringify({ newStatus }))
        .then(response => {           
            return response.data
        })
    },

    getTags(){
        return instance.post('getTags2.php')
        .then(response => {           
            return response.data
        })
    },
    setTags(id_candidate, id_tags){
        return instance.post('setTags2.php', JSON.stringify({ id_candidate, id_tags }))
        .then(response => {
            return response.data
        })
    },
    addTags(newTag, id_candidate){
        return instance.post('addTags.php', JSON.stringify({ newTag, id_candidate }))
        .then(response => {
            return response.data
        })
    },

    setRating(id_user, id_candidate, rating){
        return instance.post('setRating2.php', JSON.stringify({ id_user, id_candidate, rating }))
        .then(response => {
            return response.data
        })
    },
    addComment(id_user, id_candidate, comment){
        return instance.post('addComment.php', JSON.stringify({ id_user, id_candidate, comment }))
        .then(response => {
            return response.data
        })
    },
    deleteComment(id_comment, id_candidate){
        return instance.post('deleteComment.php', JSON.stringify({ id_comment, id_candidate }))
        .then(response => {
            return response.data
        })
    },
    deleteRating(id_rating, id_candidate){
        return instance.post('deleteRating.php', JSON.stringify({ id_rating, id_candidate }))
        .then(response => {
            return response.data
        })
    },
    

    setSave(id_candidate, saved){
        return instance.post('setSave.php', JSON.stringify({ id_candidate, saved }))
        .then(response => {
            return response.data
        })
    },
    setDeleted(id_candidate, deleted){
        return instance.post('setDeleted.php', JSON.stringify({ id_candidate, deleted }))
        .then(response => {
            return response.data
        })
    },

    logIn(login, password){
        return instance.post('logIn2.php', JSON.stringify({ login, password }))
        .then(response => {
            return response.data
        })
    },

    signUp(login, password, email){
        return instance.post('signUp.php', JSON.stringify({ login, password, email }))
        .then(response => {
            return response.data
        })
    },
}