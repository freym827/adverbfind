$(".sbtn").on("click", function() {
    $(".t2").val("")
    var para = $(".t1").val()
    var arr = para.split(" ")
    var notAdv = []
    var adv = []
    var adstring = "Deleted words: "
    var nadstring = "New Text: "
    for(i=0;i<arr.length;i++) {
        if(arr[i].toLowerCase() == "very" || arr[i].toLowerCase() == "so") {
            adv.push(arr[i])
            adstring += arr[i] + " "
        }else if(arr[i].charAt(arr[i].length-1) == "y" && arr[i].charAt(arr[i].length-2) == "l") {
            adv.push(arr[i])
            adstring += arr[i] + " "
        }else {
            notAdv.push(arr[i])
            nadstring += arr[i] + " "
        }
    }

    $(".t2").val(adstring + "\n\n\n" + nadstring)
    
});