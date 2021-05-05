numbers = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","a","b","c","d","e","f"]


function handleInput(event) {
    let id = event.id;
    const value = event.value;
    console.log(id, event.value)
    const resultId = id + "-result"

    if(numbers.includes(value[0])&&numbers.includes(value[1])){
        var valueLenght = value.length;
        if(valueLenght==2){
           document.getElementById(resultId).innerHTML = value;
        }
        else if(valueLenght==1){
            document.getElementById(resultId).innerHTML = "0" + value;
        }
        else if(valueLenght==null){
            document.getElementById(resultId).innerHTML = "00";
        }
    }
}
function mov(mv){
    
    var first = document.getElementsByClassName('first_1')[0].value;
    var second = document.getElementsByClassName('second_1');

    alert(first);

}
