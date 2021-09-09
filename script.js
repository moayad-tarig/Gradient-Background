let first = document.querySelector("#first");
let secound = document.querySelector("#firstt");




    function change(){
        document.body.style.backgroundImage = `linear-gradient(to right, ${first["value"]} ,${secound["value"]})`
    }
    first.addEventListener('input', change);
    firstt.addEventListener('input',change);
        