$(function () {
    $("#basic-example").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slide",
        onFinished: function (event, currentIndex) {
            $("#register-form").submit();
        }
    })
});