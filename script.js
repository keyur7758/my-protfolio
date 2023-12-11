var isDarkMode = false;

$(".cl-mode").click(function () {
    isDarkMode = !isDarkMode; // Toggle the mode
    updateStyles();
});

$(".cl-mode").dblclick(function () {
    isDarkMode = false; // Reset to default mode
    updateStyles();
});

function updateStyles() {
    var backgroundColor = isDarkMode ? "black" : ""; // Set background color based on mode
    var textColor = isDarkMode ? "white" : "black"; // Set text color based on mode
    var borderColor = isDarkMode ? "#1f1e1e" : ""; // Set border color based on mode

    $(".cl-mode").attr("style", "color:" + textColor + ";");
    $(".gg").attr("style", "color:" + textColor + ";");
    $(".body-1").attr("style", "background:" + backgroundColor + ";transition:all ease 0.3s;");
    $(".leftsection").attr("style", "color:" + textColor + ";");
    $(".btn").attr("style", "border: 1px solid " + textColor + ";color: " + textColor + ";");
    $(".information .br").attr("style", "border-top: 1px solid " + borderColor + ";border-right: 1px solid " + borderColor + ";");
    $(".navbar-area-2 h1").attr("style", "color:" + textColor + ";");
    $(".thin-line h4").attr("style", "color:" + textColor + ";");
    $(".gallery-1 .box h4").attr("style", "color:" + textColor + ";");
    $(".gallery-1 .box h6").attr("style", "color:" + textColor + ";");
    $(".second-head h1").attr("style", "color:" + textColor + ";");
}
