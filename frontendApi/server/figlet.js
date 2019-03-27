const figlet = require("figlet");


figlet.text("Frontend Bootcamp", {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function (err, data) {

    if (err) {
        console.log("Something went wrong...");
        return;
    }

    console.log(data);
    return data;

});

module.exports = {
    figlet
}