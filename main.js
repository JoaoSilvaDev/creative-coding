
let sketches = [
    "H1rwYek_7",
    "0QKMZFOHy",
    "dDOg8Fwy3",
    "aGyGcUmWt",
    "LugOWEbA4"];

function onClick(index)
{
    let frame = document.getElementById("iframe");
    frame.src = "https://editor.p5js.org/joaosilva/embed/" + sketches[index];
}