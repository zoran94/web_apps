
import * as data from "./data.js"
import * as ui from "./ui.js"



function init() {
    data.fetchData(function (data) {
        ui.renderPeople(data)

    });


}

export {
    init
}