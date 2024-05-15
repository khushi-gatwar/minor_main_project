function redirectToSelected() {
    var recommendationType = document.getElementById("recommendation-type").value;
    console.log(recommendationType);
    if (recommendationType === "movie") {
        window.location.href = "/option/content";
    } else if (recommendationType === "rating") {
        window.location.href = "/option/rating";
    }
}