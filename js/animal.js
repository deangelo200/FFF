
// Initialize your app
var myApp = new Framework7();



// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});


var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.fa-forward',
  prevButton: '.swiper-button-prev',
  effect:"slide"
}); 

 $.get('fact-data/animal.txt',function(data){
    var lines = data.split("~");
    var arraytest = data.split("~").length; 
  
   for(var i = arraytest-1  ; i >=0  ; i--){
       
      
        var example = 
                    `<div class='swiper-slide' id="${i}">` +
                            "<span>"+lines[i]+"</span>"+
                        "</div>";
 
       $(".swiper-wrapper").prepend(example); 
       //mySwiper.appendSlide(example);
   }
     mySwiper.updateContainerSize() 
     mySwiper.updateSlidesSize() 
    
});

// Code use to control slides and recieve data from the text files. //

//opening the panels
 $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
        mySwiper.lockSwipes();
    });

// closing the panels
  $$('.panel-close').on('click', function (e) {
    myApp.closePanel();
    mySwiper.unlockSwipes();
    });



// Bottom Bar Icon functionality 




function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(".fa-files-o").click(function(){
    copyToClipboard(".swiper-slide-active");
    $(".text-copied").fadeIn(500).fadeOut(2000);
    
});


mySwiper.on('slideChangeEnd',function(){
    $("#bottom-btn-copy-hidden").fadeIn(100);
    $("#bottom-btn-forward-hidden").fadeIn(100);
    $("#bottom-btn-favorite-hidden").fadeIn(100);
    $("#bottom-btn-share-hidden").fadeIn(100);
    //alert(mySwiper.activeIndex);
    
    
})

$("#bottom-btn-share-hidden").click(function(){
    window.location.reload()  
})


/*$("#bottom-btn-favorite-hidden").click(function(){
    var temp=$(".swiper-slide-active").text(); 
   favorite.push(temp);
    localStorage.setItem("favorite",JSON.stringify(favorite)); 
    
   
}); */




/*$("#bottom-btn-favorite-hidden").click(
function(){
    var temp=$(".swiper-slide-active").text(); 
   favorite.push(temp);
    localStorage.setItem("favorite",JSON.stringify(favorite));  
    
    
});

*/


/*  $("#bottom-btn-favorite-hidden").on('click',function(){

if($("#bottom-btn-favorite-hidden").attr('data-click-state') == 1) {  
    
$("#bottom-btn-favorite-hidden").attr('data-click-state', 0)
/*Change this to your own property / function - second function State 2

$(".swiper-slide-active").addClass("favorite-dislike").removeClass("favorite-like");
     $("#bottom-btn-favorite-hidden").css("color","white");
    
    
    
    
    
/*Click State 1 finish
} else {
$("#bottom-btn-favorite-hidden").attr('data-click-state', 1)
/*Change this to your own property / function - first function State 
$(".swiper-slide-active").addClass("favorite-like").removeClass("favorite-dislike");
    $("#bottom-btn-favorite-hidden").css("color","red");



/*Click State 2 finish
}

}); */



function slidePicture(numIndex,picture){
    $("."+numIndex).css({
    'background-image':`linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${picture})`,
    'background-position': 'center',
    'background-size': "cover"
    });
}


///Code use to give each class and index number and use document.ready function because
// the swiper slide have to append first before signing the index number :)// 




$(document).ready(function(){
    
/*$(".swiper-slide").addClass(function(index){
    return ""+index;
});*/
    
    
    

    
})



/*var random = Math.floor((Math.random()*6)+1);

if(random==1){
$(".picture-background").css({
   'background-image':'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url("../img/animals-img/bear.jpg")',
    'background-position': 'center',
    'background-size': "cover"
});
}


if(random==2){
$(".picture-background").css({
    'background-image':'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url("../img/animals-img/bird.jpg")',
     'background-position': 'center',
    'background-size': "cover"
});
}

if(random==3){
$(".picture-background").css({
   'background-image':'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url("../img/animals-img/catfish.jpg")',
     'background-position': 'center',
    'background-size': "cover"
});
}

if(random==4){
$(".picture-background").css({
    'background-image':'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url("../img/animals-img/cow.jpeg")',
     'background-position': 'center',
    'background-size': "cover"
});
}

if(random==5){
$(".picture-background").css({
    'background-image':'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url("../img/animals-img/elephant.jpeg")',
     'background-position': 'center',
    'background-size': "cover"
});
}

if(random==6){
$(".picture-background").css({
    'background-image':'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url("../img/animals-img/lobster.jpg")',
     'background-position': 'center',
    'background-size': "cover"
});
}*/

    
    $("#0").css({
   'background-image':'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url("img/animals-img/frog.jpg")',
    'background-position': 'center',
    'background-size': "cover"
        
    
})
    
    
    $("#5").css({
   'background-image':'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url("../img/animals-img/octopus.jpg")',
    'background-position': 'center',
    'background-size': "cover"
        
    
})
    
