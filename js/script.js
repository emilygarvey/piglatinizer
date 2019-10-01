$( "document" ).ready(function() {

$("#button").click(function(){
    let input = $("input").val();
    let split = input.split(' ');
    console.log(split);
    $(".output").text(split)
    let newMessage = input.slice(1);
    let firstLetter = input.charAt(0);
    //$(".output").text(`${newMessage}${firstLetter}ay`);

});







});