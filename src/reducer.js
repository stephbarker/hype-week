export const initialState = {
    user: null,
    token: null,
    playing: false,
    item: null,
    discover_weekly: null,
    play_uri:"spotify:playlist:37i9dQZEVXcKjGV31cVGoB"
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_PLAY_URI":
            return{
                ...state,
                play_uri: action.play_uri
            };
        default:
            return state;
    }
};

export default reducer;