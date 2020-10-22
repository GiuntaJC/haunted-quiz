$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();

    let flora = 0;
    let miles = 0;
    let dani = 0;
    let peter = 0;

    if(answer1 && answer2) {
      $("#questionWarning").hide();
      if(answer1 === "flora") {
        flora++;
      }
      if(answer2 === "flora") {
        flora++;
      }
      if(answer1 === "miles") {
        miles++;
      }
      if(answer2 === "miles") {
        miles++;
      }
      if(answer1 === "dani") {
        dani++;
      }
      if(answer2 === "dani") {
        dani++;
      }
      if(answer1 === "peter") {
        peter++;
      }
      if(answer2 === "peter") {
        peter++;
      }
    } else {
      $("#questionWarning").show();
    }

    event.preventDefault();
  });
});