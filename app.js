$(".sbtn").on("click", function() {
    $(".t2").val("")
    var para = $(".t1").val()
    var arr = para.split(" ")
    var adstring = "Deleted words: "
    var nadstring = "New Text: "
    for(i=0;i<arr.length;i++) {
        if(arr[i].toLowerCase() == "very" || arr[i].toLowerCase() == "so" || arr[i].toLowerCase() == "much") {
            adstring += arr[i] + " "
        }else if(arr[i].charAt(arr[i].length-1) == "y" && arr[i].charAt(arr[i].length-2) == "l") {
            adstring += arr[i] + " "
        }else if(arr[i].charAt(arr[i].length-1) == "," || arr[i].charAt(arr[i].length-1) == "." || arr[i].charAt(arr[i].length-1) == "!" || arr[i].charAt(arr[i].length-1) == "?") {
            if(arr[i].charAt(arr[i].length-2) == "y" && arr[i].charAt(arr[i].length-3) == "l") {
                adstring += arr[i].substring(0, arr[i].length-1) + " "
                if(arr[i].charAt(arr[i].length-1) == "." || arr[i].charAt(arr[i].length-1) == "!" || arr[i].charAt(arr[i].length-1) == "?") {
                    nadstring = nadstring.substring(0, nadstring.length-1)
                    nadstring += arr[i].charAt(arr[i].length-1) + " "
                }
            }else if(arr[i].toLowerCase().substring(0, arr[i].length-1) == "very" || arr[i].toLowerCase().substring(0, arr[i].length-1) == "so" || arr[i].toLowerCase().substring(0, arr[i].length-1) == "much") {
                adstring += arr[i].substring(0, arr[i].length-1) + " "
                if(arr[i].charAt(arr[i].length-1) == "." || arr[i].charAt(arr[i].length-1) == "!" || arr[i].charAt(arr[i].length-1) == "?") {
                    nadstring = nadstring.substring(0, nadstring.length-1)
                    nadstring += arr[i].charAt(arr[i].length-1) +  " "
                }
            }else {
                nadstring += arr[i] + " "
            }
        }else {
            nadstring += arr[i] + " "
        }
    }

    $(".t2").val(adstring + "\n\n\n" + nadstring)
    
});