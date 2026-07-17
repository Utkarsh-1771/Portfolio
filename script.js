const muteButton = document.getElementById("mute-btn");
const video = document.querySelector(".profile-pic");
function toggleMute() {
    video.muted = !video.muted;
    const icon=muteButton.querySelector("i");//here i is searched inside the #mute-btn id(used in muteButton) this is why we have used muteButton here
    if (video.muted)
        icon.className="fa-solid fa-volume-xmark";
    else
        icon.className="fa-solid fa-volume-high";
}
muteButton.addEventListener("click",toggleMute);