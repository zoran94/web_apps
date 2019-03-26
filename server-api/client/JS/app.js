import * as data from "./data.js"
import * as ui from "./ui.js"

export const initHomepage = () => {
    data.fetchData()
        .then((users) => {
            ui.displayUser(users);
        });
}
