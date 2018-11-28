$(".sbtn").on("click", function() {
    $(".t2").val("")
    var para = $(".t1").val()
    var arr = para.split(" ")
    var notAdv = []
    var adv = []
    var adstring = "Deleted words: "
    var nadstring = "New Text: "
    for(i=0;i<arr.length;i++) {
        if(arr[i].toLowerCase() == "very" || arr[i].toLowerCase() == "so" || arr[i].toLowerCase() == "much") {
            adv.push(arr[i])
            adstring += arr[i] + " "
        }else if(arr[i].charAt(arr[i].length-1) == "y" && arr[i].charAt(arr[i].length-2) == "l") {
            adv.push(arr[i])
            adstring += arr[i] + " "
        }else if(arr[i].charAt(arr[i].length-1) == "," || arr[i].charAt(arr[i].length-1) == "." || arr[i].charAt(arr[i].length-1) == "!" || arr[i].charAt(arr[i].length-1) == "?") {
            if(arr[i].charAt(arr[i].length-2) == "y" && arr[i].charAt(arr[i].length-3) == "l") {
                adv.push(arr[i])
                adstring += arr[i] + " "
            }else if(arr[i].toLowerCase().substring(0, arr[i].length-1) == "very" || arr[i].toLowerCase().substring(0, arr[i].length-1) == "so" || arr[i].toLowerCase().substring(0, arr[i].length-1) == "much") {
                adv.push(arr[i])
                adstring += arr[i] + " "
            }else {
                notAdv.push(arr[i])
                nadstring += arr[i] + " "
            }
        }else {
            notAdv.push(arr[i])
            nadstring += arr[i] + " "
        }
    }

    $(".t2").val(adstring + "\n\n\n" + nadstring)
    
});