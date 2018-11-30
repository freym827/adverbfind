var nonAdArr = ["silly", "early", "bubbly", "burly", "chilly", "costly", "cuddly", "tally", "sly", "bully", "monopoly",
                    "family", "ally", "anomoly", "comply", "belly", "supply", "rely", "rally", "jelly", "lily", "curly",
                "holy", "hourly", "ugly", "imply"]
var adArr = ["very", "so", "much", "often", "sometimes", "even", "never", "too"]
var adstring = ""
var nadstring = ""

var punctuationCase = function(word, punct) {
    var endofword = word.indexOf(punct)
    var temp = word.substring(0, endofword)
    if(!(nonAdArr.indexOf(temp.toLowerCase()) == -1)) {
        nadstring += word + " "
    }else if(adArr.includes(temp.toLowerCase())) {
        adstring += temp + " "
        nadstring += word.substring(endofword, word.length)
    }else if(temp.charAt(temp.length-1) == "y" && temp.charAt(temp.length-2) == "l") {
        adstring += temp + " "
        nadstring = nadstring.substring(0, nadstring.length -1) + word.substring(endofword, word.length)
    }else {
        nadstring += word + " "
    }
}
var checkword = function() {
    $(".t2").val("")
    var para = $(".t1").val()
    var arr = para.split(" ")
    adstring = "Deleted words: "
    nadstring = "New Text: "
    
    for(i=0;i<arr.length;i++) {
        if(!(nonAdArr.indexOf(arr[i].toLowerCase()) == -1)) {
            nadstring += arr[i] + " "
        }else if(adArr.includes(arr[i].toLowerCase())) {
            adstring += arr[i] + " "
        }else if(arr[i].charAt(arr[i].length-1) == "y" && arr[i].charAt(arr[i].length-2) == "l") {
            adstring += arr[i] + " "
        }else if(arr[i].indexOf(".") > 0) {
            punctuationCase(arr[i], ".")
        }else if(arr[i].indexOf(",") > 0) {
            punctuationCase(arr[i], ",")
        }else if(arr[i].indexOf("!") > 0) {
            punctuationCase(arr[i], "!")
        }else if(arr[i].indexOf("?") > 0) {
            punctuationCase(arr[i], "?")
        }else if(arr[i].indexOf(";") > 0) {
            punctuationCase(arr[i], ";")
        }
        else if(arr[i].indexOf(":") > 0) {
            punctuationCase(arr[i], ":")
        }else {
            nadstring += arr[i] + " "
        }
    }
    return adstring + "\n\n\n" + nadstring
}

$(".sbtn").on("click", function() {
    $(".t2").val(checkword())
});

$(".ibtn").on("click", function() {
    var ig = $(".ignore").val().trim().toLowerCase()
    nonAdArr.push(ig)
    $(".igwords").append(" " + ig)
})



/*Hello everybody. Recently I stupidly thought this couldn't happen so soon. 
Is it chilly in here? Good thing I brought this burly coat! I am so happy to be here though. I am extremely grateful for this opportunity. 
I am seriously thrilled. It really means the world to me. I love you all so much. 
This is all so extravagantly done. I really don't know what to do. 
I think I am going to cry heavily, with how this situation miraculously unfolded. 
This is all so heavenly. Thank you muchly! */