
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<img class='mic'src='Microphone_vmc2015.png'>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<img class='closing-x' src='window-close.png'>");
        }
    });
});



/* var image2URL = /*"cancel-x-icon.jpg" "https://www.bing.com/th?id=OIP.3Xu8LjmNm_vyH2fsUE6WawAAAA&pid=Api&rs=1";

            var image2Alt = "Closing Menu X Icon"
            var switchingImage = document.getElementById("imageToSwitch");

            var image1URL = switchingImage.src;
            var image1Alt = switchingImage.alt;

            document.getElementById('imageToSwitch').addEventListener('click', function () {

                console.log(image1URL);

                if (switchingImage.src === image2URL) {
                    switchingImage.src = image1URL;
                    switchingImage.alt = image1Alt;
                } else {
                    switchingImage.src = image2URL;
                    switchingImage.alt = image2Alt;
                }

            })

            */ 