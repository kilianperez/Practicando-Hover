console.log("Hola Mundo");
console.log("Segunda línea de código");
console.log("Tercera línea de código");


function ejecutaAnimacion(){

    $('.newsletterBtn').toggleClass('newsletterMove')
    $('.backNews').toggleClass('backNewsDisplay')
    $('.newsletterSub').toggleClass('newsletterSubMove')
}
function ejecutaExit(){

    $('.newsletterBtn').removeClass('newsletterMove')
    $('.backNews').removeClass('backNewsDisplay')
    $('.newsletterSub').removeClass('newsletterSubMove')

}

var countDownDate = new Date("May 19, 2030 22:27:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = ('0' + days) .slice(-2) + " ";
  document.getElementById("hours").innerHTML = ('0' + hours) .slice(-2) + " ";
  document.getElementById("minutes").innerHTML = ('0' + minutes) .slice(-2) + " ";
  document.getElementById("seconds").innerHTML = ('0' + seconds) .slice(-2);




  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "GO PARTY!";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
    $('.dia').addClass('dianone')

  }
}, 1000);


// if ((days + hours + minutes + seconds) < 0) {
//     $('.dia').addClass('dianone');
// }