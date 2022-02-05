export const Notables = (tables) => {
    return (dispatch) => {
        dispatch({
            type : 'NoOfTable',
            payload : tables
        })
    }
}