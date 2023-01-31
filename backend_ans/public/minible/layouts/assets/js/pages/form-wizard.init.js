var form = $("#basic-example");
form.steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onFinished: function (event, currentIndex) {
        $(form).submit();
    }
});