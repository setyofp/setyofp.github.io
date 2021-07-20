var profile = document.getElementById("pop-up");
var btn = document.getElementById("buy");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  profile.style.display = "block";
}

span.onclick = function() {
  profile.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == profile) {
    profile.style.display = "none";
  }
}
