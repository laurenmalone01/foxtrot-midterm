$(document).ready(function(){
  console.log("ready!");

  // let music = ["SHINee" ,"Mitski", "serpentwithfeet" ];
  // let shows = ["Blue Period","Aggretsuko", "Alice in Borderland"];
  let skills = ["HTML5", "JavaScript", "jQuery", "Bootstrap 5", "Python, Java, C++"]


  $.each(skills, function(index, value){
    console.log(skills[value]);
      $('#skills-list').append(`<li> ${ value } </li>`);
    });
    
  // const moreShows = ["Ragnarok", "Station 11"];
  // ex of interprolations... `<li> ${ js variable } </li>`

// $.each(shows, function(index, value){
// console.log(shows[value]);
//   $('#shows-list').append(`<li> ${ value } </li>`);
// });


// $.each(music, function(index, value){
// console.log(music[value]);
//   $('#music-list').append(`<li> ${ value } </li>`);
// });



}); //function end



// for(let i = 0; i < music.length; i++){
//   console.log(music[i]);
//   document.getElementById("music-list").innerHTML = music;

// }

// music.forEach(function(entry) {
//   document.getElementById("music-list").innerHTML = music;
// });

// for(let i = 0; i < shows.length; i++){
//   console.log(shows[i]);
//   document.getElementById("shows-list").innerHTML = shows[i];
// }


  //javascript object notation
  //$ = jquery's way of naming stuff
  //$(...) = what's inside () is the "object" we are messing with
  // .ready() = method of $jQ
  // .ready(...) = argument/parameter passed to that method
  // function(){} in the method is an IIFE = Immediate Invoked F/n Expression