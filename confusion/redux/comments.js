import * as ActionTypes from "./ActionTypes";

export const comments = (state = {
    errMsg: null,
    comments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMsg: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMsg: action.payload};

        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.comments.length;
            return {...state, comments: state.comments.concat(comment)};

        default:
            return state;
    }
};