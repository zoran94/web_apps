export const fetchData = () => {
    return fetch("http://127.0.0.1:3000/")
        .then((user) => user.json())
        .then((responseData) => {
            return responseData;
        })
        .catch((error) => {
            return error
        })

}
