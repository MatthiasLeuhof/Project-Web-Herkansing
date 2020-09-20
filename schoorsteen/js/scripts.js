// When the user scrolls the page, execute function progressBar
window.onscroll = function() {progressBar()};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var scrolledRound = Math.round(scrolled);
  document.getElementById("progressBar").style.width = scrolled + "%";
  document.getElementById("progressBar").textContent = scrolledRound + "%";
}
