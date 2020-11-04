function myFunction() {
    var value = document.getElementById("text").value;
    var totalSoFar=0;
    var spaceCount=0;
    if(value.length != 0){
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

    document.getElementById("word").innerHTML = "Total Words : "+totalSoFar;
    document.getElementById("charactersWithSpace").innerHTML = "Total Characters(with spaces) : "+ value.length;
    document.getElementById("letter").innerHTML = "Total Characters(no spaces) : "+ (value.length-spaceCount);
}
