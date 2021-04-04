var markerFound = 0;

var ua = navigator.userAgent.toLowerCase();
var browserindex = 0;

AFRAME.registerComponent('button', {
    init: function () {
        var elem = document.documentElement;
        var marker = document.querySelector("#marker");
        var assets = document.querySelector("#assets");
        // var fullbutton = document.querySelector("#fullscreen");
        var button = document.querySelector("#mutebutton");
        var Video_0 = document.querySelector("#Video_Asset_0");
        var mainentity = document.querySelector("#container-entity");

        CheckBrowser();
        marker.addEventListener("markerFound", function (evt) {
            markerFound = 1;
            if (browserindex == 0) {
                Video_0.muted = false;
            }
            Video_0.play();

            //    Video_0.muted = false;

        });
        marker.addEventListener("markerLost", function (evt) {
            markerFound = 0;
            Video_0.pause();


            //  Video_0.muted = true;

        });



        button.addEventListener("click", function (evt) {
            console.log("button clicked")
            if (Video_0.muted == true) {
                button.innerHTML = "Mute";
                Video_0.muted = false;
            } else {
                button.innerHTML = "Unmute";
                Video_0.muted = true;
            }
        });
    },
    // tick: function (totalTime, deltaTime) {
    //     var dTime = deltaTime / 1000;

    //     if (markerFound == 1) {
    //     }



    // }
});

function CheckBrowser() {
    document.getElementById("mutebutton").style.visibility = "hidden";

    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            browserindex = 0;
        } else {

            document.getElementById("mutebutton").style.visibility = "visible";
            browserindex = 2;

        }
    }
}