
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<img src='star-ed-logo-4.png'> ");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<img class='closing-x' src='Cancel_X.png'>");
        }
    });
});

$('form').submit(function(event){ event.preventDefault(); });


document.getElementById("submit").addEventListener("click", function(){
    alert("Thank you for your donation! Star Education appreciates your desire to help make a difference to the well-being of our children and our community.");
});

