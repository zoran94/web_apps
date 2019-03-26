export const displayUser = (users) => {
    console.log(users)

    var body = document.querySelector("body");
    users.forEach(element => {
        var h2 = document.createElement("h2")
        var p2 = document.createElement("p")
        h2.textContent = element.title;
        h2.style.color = "red";
        p2.textContent = element.intro;
        body.appendChild(h2);
        body.appendChild(p2);

    });
}