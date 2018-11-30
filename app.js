var nonAdArr = ["silly", "early", "bubbly", "burly", "chilly", "costly", "cuddly", "tally", "sly", "bully", "monopoly",
                    "family", "ally", "anomoly", "comply", "belly", "supply", "rely", "rally", "jelly", "lily", "curly",
                "holy", "hourly", "ugly", "imply"]
var adArr = ["very", "so", "much"]

$(".sbtn").on("click", function() {
    $(".t2").val("")
    var para = $(".t1").val()
    var arr = para.split(" ")
    var adstring = "Deleted words: "
    var nadstring = "New Text: "
    
    for(i=0;i<arr.length;i++) {
        if(!(nonAdArr.indexOf(arr[i].toLowerCase()) == -1)) {
            nadstring += arr[i] + " "
        }else if(adArr.includes(arr[i].toLowerCase())) {
            adstring += arr[i] + " "
        }else if(arr[i].charAt(arr[i].length-1) == "y" && arr[i].charAt(arr[i].length-2) == "l") {
            adstring += arr[i] + " "
        }else if(arr[i].indexOf(".") > 0) {
            var endofword = arr[i].indexOf(".")
            var temp = arr[i].substring(0, endofword)
            if(!(nonAdArr.indexOf(temp.toLowerCase()) == -1)) {
                nadstring += arr[i] + " "
            }else if(adArr.includes(temp.toLowerCase())) {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else if(temp.charAt(temp.length-1) == "y" && temp.charAt(temp.length-2) == "l") {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else {
                nadstring += arr[i] + " "
            }
        }else if(arr[i].indexOf(",") > 0) {
            var endofword = arr[i].indexOf(",")
            var temp = arr[i].substring(0, endofword)
            if(!(nonAdArr.indexOf(temp.toLowerCase()) == -1)) {
                nadstring += arr[i] + " "
            }else if(adArr.includes(temp.toLowerCase())) {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else if(temp.charAt(temp.length-1) == "y" && temp.charAt(temp.length-2) == "l") {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else {
                nadstring += arr[i] + " "
            }
        }else if(arr[i].indexOf("!") > 0) {
            var endofword = arr[i].indexOf("!")
            var temp = arr[i].substring(0, endofword)
            if(!(nonAdArr.indexOf(temp.toLowerCase()) == -1)) {
                nadstring += arr[i] + " "
            }else if(adArr.includes(temp.toLowerCase())) {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else if(temp.charAt(temp.length-1) == "y" && temp.charAt(temp.length-2) == "l") {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else {
                nadstring += arr[i] + " "
            }
        }else if(arr[i].indexOf("?") > 0) {
            var endofword = arr[i].indexOf("?")
            var temp = arr[i].substring(0, endofword)
            if(!(nonAdArr.indexOf(temp.toLowerCase()) == -1)) {
                nadstring += arr[i] + " "
            }else if(adArr.includes(temp.toLowerCase())) {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else if(temp.charAt(temp.length-1) == "y" && temp.charAt(temp.length-2) == "l") {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else {
                nadstring += arr[i] + " "
            }
        }else if(arr[i].indexOf(";") > 0) {
            var endofword = arr[i].indexOf(";")
            var temp = arr[i].substring(0, endofword)
            if(!(nonAdArr.indexOf(temp.toLowerCase()) == -1)) {
                nadstring += arr[i] + " "
            }else if(adArr.includes(temp.toLowerCase())) {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else if(temp.charAt(temp.length-1) == "y" && temp.charAt(temp.length-2) == "l") {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else {
                nadstring += arr[i] + " "
            }
        }
        else if(arr[i].indexOf(":") > 0) {
            var endofword = arr[i].indexOf(":")
            var temp = arr[i].substring(0, endofword)
            if(!(nonAdArr.indexOf(temp.toLowerCase()) == -1)) {
                nadstring += arr[i] + " "
            }else if(adArr.includes(temp.toLowerCase())) {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else if(temp.charAt(temp.length-1) == "y" && temp.charAt(temp.length-2) == "l") {
                adstring += temp + " "
                nadstring += arr[i].substring(endofword, arr[i].length)
            }else {
                nadstring += arr[i] + " "
            }
        }else {
            nadstring += arr[i] + " "
        }
    }

    $(".t2").val(adstring + "\n\n\n" + nadstring)
    
});

$(".ibtn").on("click", function() {
    var ig = $(".ignore").val().trim().toLowerCase()
    nonAdArr.push(ig)
    $(".igwords").append(" " + ig)
})

 /*else if(arr[i].charAt(arr[i].length-1) == "," || arr[i].charAt(arr[i].length-1) == "." || arr[i].charAt(arr[i].length-1) == "!" || arr[i].charAt(arr[i].length-1) == "?" || arr[i].charAt(arr[i].length-1) == ";" || arr[i].charAt(arr[i].length-1) == ":") {
            if(!(nonAdArr.indexOf(arr[i].substring(0,arr[i].length-1).toLowerCase()) == -1)) {
                nadstring += arr[i] + " "
            }else if(arr[i].charAt(arr[i].length-2) == "y" && arr[i].charAt(arr[i].length-3) == "l") {
                adstring += arr[i].substring(0, arr[i].length-1) + " "
                if(arr[i].charAt(arr[i].length-1) == "." || arr[i].charAt(arr[i].length-1) == "!" || arr[i].charAt(arr[i].length-1) == "?" || arr[i].charAt(arr[i].length-1) == ";" || arr[i].charAt(arr[i].length-1) == ":") {
                    nadstring = nadstring.substring(0, nadstring.length-1)
                    nadstring += arr[i].charAt(arr[i].length-1) + " "
                }
            }else if(arr[i].toLowerCase().substring(0, arr[i].length-1) == "very" || arr[i].toLowerCase().substring(0, arr[i].length-1) == "so" || arr[i].toLowerCase().substring(0, arr[i].length-1) == "much") {
                adstring += arr[i].substring(0, arr[i].length-1) + " "
                if(arr[i].charAt(arr[i].length-1) == "." || arr[i].charAt(arr[i].length-1) == "!" || arr[i].charAt(arr[i].length-1) == "?" || arr[i].charAt(arr[i].length-1) == ";" || arr[i].charAt(arr[i].length-1) == ":") {
                    nadstring = nadstring.substring(0, nadstring.length-1)
                    nadstring += arr[i].charAt(arr[i].length-1) +  " "
                }
            }else {
                nadstring += arr[i] + " "
            }
        }*/

/*Hello everybody. Recently I stupidly thought this couldn't happen so soon. 
Is it chilly in here? I am so happy to be here though. I am extremely grateful for this opportunity. 
I am seriously thrilled. It really means the world to me. I love you all so much. 
This is all so extravagantly done. I really don't know what to do. 
I think I am going to cry heavily, with how this situation miraculously unfolded. 
This is all so heavenly. Thank you muchly! */