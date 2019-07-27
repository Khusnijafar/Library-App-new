import * as types from '../constants/ActionTypes'

export default function data(state = [], action) {
    switch (action.type) {
        case types.LOAD_LIBRARIES_SUCCESS:
        return action.library

        case types.LOAD_LIBRARIES_FAILURE:
        return state

        case types.ADD_DATA:
        return [
            {
               id: action.id,
               title: action.title,
               image: action.image,
               writer: action.writer,
               category: action.category,
               location: action.location,
            },
            ...state
        ]

        case types.ADD_LIBRARIES_SUCCESS:
        let addData = state
        let add = addData.map(item => {
            if (item.id === action.id) {
                item.title = action.title
                item.image = action.image
                item.writer = action.writer
                item.category = action.category
                item.location = action.location
            }
            return item
        })
        return add

        case types.EDIT_DATA:
        return state.map(
            data => data.id === action.id ?
            Object.assign({}, data, {title: action.title,image: action.image, writer: action.writer,
            category: action.category, location: action.location,})
            :
            data
        )

        case types.EDIT_LIBRARIES_SUCCESS:
        let editData = state
        let edit = editData.map(item => {
            if (item.id === action.id) {
                item.title = action.title
                item.image = action.image
                item.writer = action.writer
                item.category = action.category
                item.location = action.location
            }
            return item
        })
        return edit

        case types.DELETE_DATA:
        return state.filter(data => data.id !== action.id)

        default:
        return state
    }
}