function getIsIntersects(x, y, r) {
    const req = new XMLHttpRequest();
    const urlParams =
        new URLSearchParams({"x-select": x, "y-select": y, "r-select": r});
    console.log(urlParams.toString());
    req.open("GET",
        "./checkHit.php?" + urlParams.toString(),
        true);
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200 || req.status === 400) {
                const values = req.responseText.split(';');
                console.log("Got data! " + values);
                addToTable(values[0], values[1], values[2], values[3], values[4], values[5]);
            } else {
                console.error("Error loading page / " + req.statusText + " " + req.readyState + "\n");
            }
        }
    };
    req.send(null);
}
