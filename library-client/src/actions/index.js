import * as types from '../constants/ActionTypes'
import request from 'superagent'

const API_URL = 'http://localhost:3005/api/library'

function loadLibraryFailure() {
    return {type: types.LOAD_LIBRARIES_FAILURE}
}

function loadLibrarySuccess(library) {
    return {type: types.LOAD_LIBRARIES_SUCCESS, library}
}

export function loadLibrary() {
    return dispatch => {
        return request
        .get(`${API_URL}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) {
                console.log(err)
                dispatch(loadLibraryFailure())
            } else {
                dispatch(loadLibrarySuccess(res.body))
            }
        })
    }
}

export function addData(id, title, image, writer, category, location,) {
    return {type: types.ADD_DATA, id, title, image, writer, category, location,}
}

function addLibraryFailure() {
    return {type: types.ADD_LIBRARIES_FAILURE}
}

function addLibrarySuccess(library) {
    return {type: types.ADD_LIBRARIES_SUCCESS, library}
}

export function addLibrary(title, image, writer, category, location,) {
    let id = Date.now()
    return dispatch => {
        dispatch(addData(id, title, image, writer, category, location,))
        return request
        .post(`${API_URL}`)
        .send({id})
        .send({title})
        .send({image})
        .send({writer})
        .send({category})
        .send({location})
        .end((err, res) => {
                if (err) {
                    console.log(err);
                    dispatch(addLibraryFailure())
                } else {
                    dispatch(addLibrarySuccess(res.body.data))
                }
        })
    }
}

export function editData(id,title, image, writer, category, location,) {
    return {type: types.EDIT_DATA, id, title, image, writer, category, location,}
}

function editLibraryFailure() {
    return {type: types.EDIT_LIBRARIES_FAILURE}
}

function editLibrarySuccess(library) {
    return {type: types.EDIT_LIBRARIES_SUCCESS, library}
}

export function editLibrary(id, title, image, writer, category, location,) {
    return dispatch => {
        dispatch(editData(id, title, image, writer, category, location,))
        return request
        .put(`${API_URL}/${id}`)
        .send({title})
        .send({image})
        .send({writer})
        .send({category})
        .send({location})
        .end((err, res) => {
            if (err) {
                console.log(err);
                dispatch(editLibraryFailure())
            } else {
                dispatch(editLibrarySuccess(res.body.data))
            }
        })
    }
}

export function deleteData(id) {
    return {type: types.DELETE_DATA, id}
}

function deleteLibraryFailure() {
    return {type: types.DELETE_LIBRARIES_FAILURE}
}

function deleteLibrarySuccess(library) {
    return {type: types.DELETE_LIBRARIES_SUCCESS, library}
}

export function deleteLibrary(id) {
    return dispatch => {
        dispatch(deleteData(id))
        return request
        .delete(`${API_URL}/${id}`)

        .end((err, res) => {
            if (err) {
                console.log(err);
                dispatch(deleteLibraryFailure())
            } else {
                dispatch(deleteLibrarySuccess(res.body))
            }
        })
    }
}