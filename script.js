function calculateTile() {
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);

    if (isNaN(length) || isNaN(width)) {
        document.getElementById("result").innerHTML =
        "Please enter both values.";
        return;
    }

    let area = length * width;

    document.getElementById("result").innerHTML =
    "Room Area = " + area + " sq.ft";
}
