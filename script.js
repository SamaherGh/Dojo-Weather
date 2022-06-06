function accept() {
    document.getElementById('card').style.display="none"
    document.getElementById('card').style.height="0px"
    document.getElementById('accept').style.display="none";
}


function display() {
        var x = document.getElementById('Tem').value;

        if (x=="c") {
            document.getElementById("f1").innerHTML = "24°";
            document.getElementById("f2").innerHTML = "18°";
            document.getElementById("f3").innerHTML = "27°";
            document.getElementById("f4").innerHTML = "19°";
            document.getElementById("f5").innerHTML = "21°";
            document.getElementById("f6").innerHTML = "16°";
            document.getElementById("f7").innerHTML = "26°";
            document.getElementById("f8").innerHTML = "21°";    
        } 
        else if (x=="f"){
            document.getElementById("f1").innerHTML = "75°";
            document.getElementById("f2").innerHTML = "56°";
            document.getElementById("f3").innerHTML = "80°";
            document.getElementById("f4").innerHTML = "66°";
            document.getElementById("f5").innerHTML = "69°";
            document.getElementById("f6").innerHTML = "61°";
            document.getElementById("f7").innerHTML = "78°";
            document.getElementById("f8").innerHTML = "70°";
        }
}
