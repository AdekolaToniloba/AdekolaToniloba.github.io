
// Carousel options
var button = document.getElementById("hinge");
$('.carousel').carousel({
            interval: 3000,
        })
    //function animations() {

    //var button = document.getElementById("hinges");
      //button.hinge.add('hinge'); // Add .hinge class

      //setTimeout(function() {
        //elem.hinge.remove('hinge'); // Remove .hinge class
      //}, 5000); // 5000ms
    //}
    //button.addEventlistener("click",funkyAnimations)

    $("#hinges").click(function() {
  $('.funky-animations').toggleClass('hinge');
});