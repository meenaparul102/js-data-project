var numberOfButtons = document.querySelectorAll(".buttons").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".buttons")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    graph_plot(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

function graph_plot(key) {

  if(key=="part-1"){
    part_1();
  }else if(key=="part-2"){
    part_2();
  }else if(key=="part-3"){
      part_3();
  }else if(key=="part-4"){
    part_4();
  }

}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
