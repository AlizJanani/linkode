var initialState = {
    files: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FILE":
            console.log("[ADD_FILES]: running");
            return {
                files: [...state.files, ...action.files]
            };
        case "DEL_FILE":
        console.log("[DEL_FILES]: running")
            return {
                files: state.files.filter(file => file.preview !== action.key)
            }
        default:
            return state;
    }
};

export default reducer;