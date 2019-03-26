const LoremIpsum = require("lorem-ipsum").LoremIpsum;

function generateText() {
    const arr = [];

    const newLorem = new LoremIpsum({
        count: 3,
        units: "words"
    });

    // console.log(newLorem.generateWords(10));

    class LoremObj {
        constructor(title, intro, id) {
            this.title = "" + title;
            this.intro = "" + intro;
            this.id = id;
        }
    }
    for (var i = 0; i < 10; i++) {
        const newObj = new LoremObj(newLorem.generateWords(3), newLorem.generateSentences(3), i);
        arr.push(newObj);

    }
    console.log(arr);
    return arr
}

module.exports = {
    generateText
}
