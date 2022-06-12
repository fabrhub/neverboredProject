function fetchJson(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonResponse = JSON.parse(this.responseText);
            document.getElementById("divActivity").innerHTML = jsonResponse.activity;
            document.getElementById("divType").innerHTML = jsonResponse.type;
            document.getElementById("divParticipants").innerHTML = jsonResponse.participants;
            //document.getElementById("divPrice").innerHTML = jsonResponse.price;
            //document.getElementById("divAccessibility").innerHTML = jsonResponse.accessibility;
            //document.getElementById("divLink").innerHTML = jsonResponse.link;
            movePriceBar(jsonResponse.price);
            moveAccessibilityBar(jsonResponse.accessibility);

        }
    };
    xhttp.open("GET", "https://www.boredapi.com/api/activity/", true);
    xhttp.send();
    document.getElementById("box").style.display = "block";
}

function movePriceBar(value){
    console.log("Price " + typeof(value) + " " + value);
    let percentage = value*100;
    document.getElementById("BarPrice").style.width = percentage+"%";

}

function moveAccessibilityBar(value){
    console.log("Accesibility " + typeof(value) + " " + value);
    let percentage = value*100;
    document.getElementById("BarAccessibility").style.width = percentage+"%";
}