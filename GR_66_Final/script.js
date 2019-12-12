$(function () {
    $(".toggle").on("click", function () {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<img src='star-ed-logo-4.png'> ");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<img class='closing-x' src='Cancel_X.png'>");
        }
    });
});

$( ".toggle-button" ).click(function() {
    $("p").html( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis elementum nibh tellus molestie nunc non blandit. Id volutpat lacus laoreet non curabitur. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Enim diam vulputate ut pharetra sit amet. Nulla aliquet enim tortor at auctor urna. Imperdiet nulla malesuada pellentesque elit. Sed augue lacus viverra vitae congue eu consequat ac felis. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Sed euismod nisi porta lorem mollis. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Fringilla phasellus faucibus scelerisque eleifend. Tellus orci ac auctor augue mauris augue. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Faucibus turpis in eu mi bibendum. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Et egestas quis ipsum suspendisse.') .slideToggle( "slow" );
  });



$('form').submit(function (event) {
    event.preventDefault();
});


document.getElementById("submit").addEventListener("click", function () {
    alert("Thank you for your donation! Star Education appreciates your desire to help make a difference to the well-being of our children and our community.");
});