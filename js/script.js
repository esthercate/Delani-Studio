//Business logic or Backend
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

//User interface logic Or Front-end
$(document).ready(function () {
  $(".imgs1").click(function () {
    $(".hidden1").toggle();
    $(".imgs1").toggle();
  });

  $(".hidden1").click(function () {
    $(".imgs1").toggle();
    $(".hidden1").toggle();
  });

  $(".imgs2").click(function () {
    $(".hidden2").toggle();
    $(".imgs2").toggle();
  });

  $(".hidden2").click(function () {
    $(".imgs2").toggle();
    $(".hidden2").toggle();
  });

  $(".imgs3").click(function () {
    $(".hidden3").toggle();
    $(".imgs3").toggle();
  });

  $(".hidden3").click(function () {
    $(".imgs3").toggle();
    $(".hidden3").toggle();
  });

  //Portfolio Section

  $(".card").hover(
    function () {
      $(".overlay", this).show();
      $(".overlay-p", this).show();
    },
    function () {
      $(".overlay", this).hide();
      $(".overlay-p", this).hide();
    }
  );

  $("form#myForm").submit(function (event) {
    event.preventDefault();
    var visitorName = $(".name").val();
    var name = capitalize(visitorName);

    if (visitorName != "") {
      alert(
        "Hi " + name + ", \nWe have received your message. Thank you for reaching out to us."
      );
    } else {
      return false;
    }
    $("#myForm").trigger("reset");
  });
});