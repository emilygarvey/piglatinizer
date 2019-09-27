$( "document" ).ready(function() {

$("button").click(function(){
    let message = "hello";

    let input = $("input").val();
    let newMessage = input.slice(1);
    console.log(newMessage);
    $(".output").append(`${input}ay`);

});







});