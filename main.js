
let sketches = [
    "0QKMZFOHy",
    "H1rwYek_7"];

function onClick(index)
{
    let frame = document.getElementById("iframe");
    frame.src = "https://editor.p5js.org/joaosilva/embed/" + sketches[index];
}