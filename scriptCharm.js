document.addEventListener("DOMContentLoaded", function () {
    var buttonsData = [
        { label: " 女性魅力与家庭关系\n Female Charm and Family Relationships", link: "charms/charm1.jpg" },
        { label: " 女性魅力与心理健康\n The Charisma of Women and Mental Health ", link: "charms/charm2.jpg" },
        { label: " 女性魅力与事业成功\n The Charisma of Women and Career Success ", link: "charms/charm3.jpg" },
        { label: " 女性魅力与新引力、新机会\n The Charisma of Women and New Attraction, New Opportunities", link: "charms/charm4.jpg" },
        { label: " 女性魅力与人际关系\n The Charisma of Women and Interpersonal Relationships", link: "charms/charm5.jpg" },
        { label: " 女性魅力与借力、新资源\n The Charisma of Women and Leveraging New Resources", link: "charms/charm6.jpg" }
    ];

    var buttonsContainer = document.getElementById("buttons-container");

    buttonsData.forEach(function (buttonInfo) {
        var button = document.createElement("button");
        button.className = "button";
        button.innerText = buttonInfo.label;
        button.addEventListener("click", function () {
            // Store the clicked image link in localStorage for retrieval in page2.html
            localStorage.setItem("imageLink", buttonInfo.link);
            window.location.href = "charm-1.html";
        });
        buttonsContainer.appendChild(button);
    });

    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});




// wealth-1.html logic
document.addEventListener("DOMContentLoaded", function () {

    var displayedImage = document.getElementById("displayedImage");
    var zoomLevel = 1; // Initial zoom level
    var maxZoom = 3; // Maximum zoom level
    var minZoom = 0.5; // Minimum zoom level

    var offsetX = 0; // Variable to store X-coordinate of mouse pointer when dragging starts
    var offsetY = 0; // Variable to store Y-coordinate of mouse pointer when dragging starts
    var lastX = 0;
    var lastY = 0;
    var isDragging = false; // Flag to indicate whether dragging is in progress

    function zoomIn() {
        if (zoomLevel < maxZoom) {
            zoomLevel += 0.1; // Increase zoom level by a small increment
            updateZoomAndTranslate();
        }
    }

    function zoomOut() {
        if (zoomLevel > minZoom) {
            zoomLevel -= 0.1; // Decrease zoom level by a small increment
            updateZoomAndTranslate();
        }
    }

    function updateZoomAndTranslate() {
        displayedImage.style.transform = `scale(${zoomLevel}) translate(${offsetX}px, ${offsetY}px)`;
    }

    function startDragging(e) {
        isDragging = true;
        offsetX = e.clientX - lastX;
        offsetY = e.clientY - lastY;
    }

    function stopDragging() {
        isDragging = false;
    }


    function dragImage(e) {
        if (isDragging) {
            lastX = e.clientX - offsetX;
            lastY = e.clientY - offsetY;

            displayedImage.style.transform = `scale(${zoomLevel}) translate(${lastX}px, ${lastY}px)`;
        }
    }
    
    displayedImage.addEventListener("mousedown", startDragging);
    document.addEventListener("mousemove", dragImage);
    document.addEventListener("mouseup", stopDragging);




    // Function to navigate back to page1.html
    function goBack() {
        window.location.href = "charm.html";
    }

    // Attach event listeners to buttons
    //var zoomInButton = document.getElementById("zoomInButton");
    //var zoomOutButton = document.getElementById("zoomOutButton");
    var backButton = document.querySelector(".backButton");

    //zoomInButton.addEventListener("click", zoomIn);
    //zoomOutButton.addEventListener("click", zoomOut);
    backButton.addEventListener("click", goBack);
    //backButton.addEventListener("click", function () {
    //    window.location.href = "page1.html";
    //});


    displayedImage.addEventListener("mousedown", startDragging);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("mousemove", dragImage);






    // Retrieve the stored image link from localStorage
    var imageLink = localStorage.getItem("imageLink");

    // Set the displayed image source
    var displayedImage = document.getElementById("displayedImage");
    displayedImage.src = imageLink;


    // Initial zoom level
    //var zoomLevel = 1;

    // Zoom in function
    //function zoomIn() {
    //    zoomLevel *= 2; // Double the zoom level
    //    updateZoom();
    //}

    // Zoom out function
    //function zoomOut() {
    //    zoomLevel /= 2; // Halve the zoom level
    //    updateZoom();
    //}

    // Update the zoom level and apply the CSS transform property
    //function updateZoom() {
    //    displayedImage.style.transform = "scale(" + zoomLevel + ")";
    //}

    // Attach zoom functions to buttons with specific magnification factors
    //var zoomInButton = document.getElementById("zoomInButton");
    //zoomInButton.addEventListener("click", zoomIn);

    //var zoomOutButton = document.getElementById("zoomOutButton");
    //zoomOutButton.addEventListener("click", zoomOut);


    // Back button click event
    var backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function () {
        window.location.href = "page1.html";
    });
});




// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
