import axios from "axios";

const DataFetch = () => async (dispatch, getState) => {
    dispatch({ type: "REQUEST" });
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: "SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "FAILURE", error });
    }
};

export default DataFetch;