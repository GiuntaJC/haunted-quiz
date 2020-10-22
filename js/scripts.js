$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();

    let flora = 0;
    let miles = 0;
    let dani = 0;
    let peter = 0;

    if(answer1 === "flora") {
      flora++;
    }

    event.preventDefault();
  });
});