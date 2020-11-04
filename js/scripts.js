function myFunction() {
    var value = document.getElementById("text").value;
    var totalSoFar=0;
    var spaceCount=0; 
    var sentencesCount=0;
    //var re = /[.!?]/;
    if(value.length != 0){
        totalSoFar=1;
    }
    for (var i = 0; i < value.length; i++){
        if (value.charAt(i) == ' ' && value.charAt(i-1) != ' ') { 
            totalSoFar++; 
        }
        if (value.charAt(i) == ' ') { 
            spaceCount++; 
        }
       // var numOfSentences = value.split(re);
       if (value.charAt(i) == '.' || value.charAt(i) == '!' ||value.charAt(i) == '?') { 
           if(value.charAt(i-1) != '.' && value.charAt(i-1) != '?' && value.charAt(i-1) != '!' ){
                sentencesCount++; 
           }
            
        }
    }

    document.getElementById("word").innerHTML = "Total Words : "+totalSoFar;
    document.getElementById("charactersWithSpace").innerHTML = "Total Characters(with spaces) : "+ value.length;
    document.getElementById("letter").innerHTML = "Total Characters(no spaces) : "+ (value.length-spaceCount);
    document.getElementById("sentences").innerHTML = "Total Sentences : "+ sentencesCount;

}
