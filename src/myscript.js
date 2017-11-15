var divList = document.getElementsByClassName("TopicPost-bodyContent");

var anz = divList.length;
        
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find, 'g'), replace);
};
for(var i=0; i<anz; i++) {
    var element = divList[i];
    element.innerHTML = element.innerHTML.replaceAll("classic", "ceutschland").replaceAll("Classic", "Deutschland").replaceAll("spieler", "bürger").replaceAll("Spieler", "Bürger");
}

//alert("Viel Spaß mit Deutschland");

