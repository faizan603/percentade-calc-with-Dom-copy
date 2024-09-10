function percentage() {
    let stdtm = document.getElementById("tm1").value;
    let stdobt = document.getElementById("obt1").value;
    let res =(stdobt / stdtm )* 100; 
    Document.write("you have got it" + res + "%" );
    alert("you have got it" + res + "%"
    );
}