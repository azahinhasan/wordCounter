function myFunction() {
    var value = document.getElementById("text").value;
    var totalSoFar=0;
    var spaceCount=0;
    if(value.length != null){
        totalSoFar=1;
    }
    for (var i = 0; i < value.length; i++){
        if (value.charAt(i) == ' ' && value.charAt(i-1) != ' ' && value.charAt(i+1) != ' ') { 
            totalSoFar++; 
        }
        if (value.charAt(i) == ' ') { 
            spaceCount++; 
        }
    }

    document.getElementById("word").innerHTML = "Total Words: "+totalSoFar;
    document.getElementById("letter").innerHTML = "Total Letter: "+ (value.length-spaceCount);
}



var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});