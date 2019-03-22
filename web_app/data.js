import Person from "./person.js"



const API_BASE_URL = "https://randomuser.me/api/?results=50";

function fetchData(callFunction) {

    $.ajax({
        url: API_BASE_URL
    }).then(function (data) {
        console.log(data);
        const showArr = data.results.map(item => {
            const { name, gender, email, picture, dob,  } = item;
            return new Person(name.first, name.last, gender, email, picture.medium, dob.date);
        })
        callFunction(showArr)
    })

}

export { fetchData }