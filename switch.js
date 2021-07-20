// JavaScript source code
const memes = ["https://www.youtube.com/watch?v=QtBDL8EiNZo", "https://www.youtube.com/watch?v=fC7oUOUEEi4", "https://www.youtube.com/watch?v=6n3pFFPSlW4", "https://www.youtube.com/watch?v=QTT5iHCHSn0"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

window.location.replace(memes[getRandomInt(memes.length)]);
