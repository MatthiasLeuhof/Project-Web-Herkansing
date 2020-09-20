var downloadButtons = document.getElementsByClassName('download-button');
var downloadButtonSVGs = document.querySelectorAll('.download-button svg');

var leeslijst = document.getElementById('leeslijst');
var plusImage = document.querySelectorAll('.add-to-list img');
var checkmarkImage = document.querySelectorAll('.add-to-list svg');
var addButtons = document.querySelectorAll(".add-to-list");



// Add click events for every save and download button

for (var i = 0; i<downloadButtons.length; i++) {
  downloadButtons[i].addEventListener("click", downloadStory);
}

for(var i = 0; i<addButtons.length; i++) {
  addButtons[i].addEventListener("click", addToList);
}


// Make an animation play when clicking the download button

function downloadStory(e) {
  e.preventDefault();

  for(var i = 0; i<downloadButtons.length; i++) {
    if (downloadButtons[i] === e.target) {
      downloadButtons[i].classList.add("downloaded");
    }
  }
}




// Make the icon change when someone clicks on the button

function addToList(e) {
  e.preventDefault();

  for(var i = 0; i<plusImatwge.length; i++) {
    if (plusImage[i] === e.target) {
      plusImage[i].classList.toggle("save-plus");
      checkmarkImage[i].classList.toggle("save-checkmark");
      if (plusImage[i].classList.contains("save-plus")) {
        leeslijst.classList.add("save-to-list");
        setTimeout(function(){
          leeslijst.classList.remove("save-to-list");
        }, 1000)
      }

    }

  }
}
