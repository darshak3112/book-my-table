const Reducer = (state = 0, action) => {
    if (action.type === 'NoOfTable') {
            state = action.payload;
            return state;
    } else {
        return state;
    }
}

export default Reducer;