var isWarm = false;
function ChangeState(id) {
    var elem = document.getElementById(id);
    if (isWarm) {
        elem.className = "cool"; 
        elem.innerText = "Jeg er kold"; 
    } else {
        elem.className = "warm"; 
        elem.innerText = "Jeg er varm";
        
    }
    isWarm = !isWarm;
}