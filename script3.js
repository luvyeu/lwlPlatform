document.addEventListener("DOMContentLoaded", function () {
    var button3 = document.getElementById("googleButton");

    button3.addEventListener("click", function () {
        window.open("https://imagen.research.google/", "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var button4 = document.getElementById("bingButton");

    button4.addEventListener("click", function () {
        window.open("https://www.bing.com/create?toWww=1&redig=57723B15312F4EDD846C158A73097751", "_blank");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
