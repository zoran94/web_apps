
import * as data from "./data.js"
import * as ui from "./ui.js"



const init = () => {
    data.fetchPerson()
        .then((person) => {
            ui.renderPeople(person)
        })
}




// function init() {
//     data.fetchData(function (data) {
//         ui.renderPeople(data)

//     });


// }
export {
    init
}