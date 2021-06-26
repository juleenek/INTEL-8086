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

function mov(){

    var first = document.getElementsByClassName('first_1')[0].value;
    var second = document.getElementsByClassName('second_1')[0].value;
    var ahresult = document.getElementById('ah-result').innerText;
    var alresult = document.getElementById('al-result').innerText;
    var bhresult = document.getElementById('bh-result').innerText;
    var blresult = document.getElementById('bl-result').innerText;
    var chresult = document.getElementById('ch-result').innerText;
    var clresult = document.getElementById('cl-result').innerText;
    var dhresult = document.getElementById('dh-result').innerText;
    var dlresult = document.getElementById('dl-result').innerText;
    
    if(first == 'ax1' && second == 'bx2')
    {
        document.getElementById('bh-result').textContent = ahresult;
        document.getElementById('bl-result').textContent = alresult;
    }
    else if(first =='ax1' && second =="cx2")
    {
        document.getElementById('ch-result').textContent = ahresult;
        document.getElementById('cl-result').textContent = alresult;
    }
    else if(first =='ax1' && second =="dx2")
    {
        document.getElementById('dh-result').textContent = ahresult;
        document.getElementById('dl-result').textContent = alresult;
    }
    else if(first =='bx1' && second =="ax2")
    {
        document.getElementById('ah-result').textContent = bhresult;
        document.getElementById('al-result').textContent = blresult;
    }
    else if(first =='bx1' && second =="cx2")
    {
        document.getElementById('ch-result').textContent = bhresult;
        document.getElementById('cl-result').textContent = blresult;
    }
    else if(first =='bx1' && second =="dx2")
    {
        document.getElementById('dh-result').textContent = bhresult;
        document.getElementById('dl-result').textContent = blresult;
    }
    else if(first =='cx1' && second =="ax2")
    {
        document.getElementById('ah-result').textContent = chresult;
        document.getElementById('al-result').textContent = clresult;
    }
    else if(first =='cx1' && second =="bx2")
    {
        document.getElementById('bh-result').textContent = chresult;
        document.getElementById('bl-result').textContent = clresult;
    }
    else if(first =='cx1' && second =="dx2")
    {
        document.getElementById('dh-result').textContent = chresult;
        document.getElementById('dl-result').textContent = clresult;
    }
    else if(first =='dx1' && second =="ax2")
    {
        document.getElementById('ah-result').textContent = dhresult;
        document.getElementById('al-result').textContent = dlresult;
    }
    else if(first =='dx1' && second =="bx2")
    {
        document.getElementById('bh-result').textContent = dhresult;
        document.getElementById('bl-result').textContent = dlresult;
    }
    else if(first =='dx1' && second =="cx2")
    {
        document.getElementById('ch-result').textContent = dhresult;
        document.getElementById('cl-result').textContent = dlresult;
    }
}

function xchg(){

    var first = document.getElementsByClassName('first_1')[0].value;
    var second = document.getElementsByClassName('second_1')[0].value;
    var ahresult = document.getElementById('ah-result').innerText;
    var alresult = document.getElementById('al-result').innerText;
    var bhresult = document.getElementById('bh-result').innerText;
    var blresult = document.getElementById('bl-result').innerText;
    var chresult = document.getElementById('ch-result').innerText;
    var clresult = document.getElementById('cl-result').innerText;
    var dhresult = document.getElementById('dh-result').innerText;
    var dlresult = document.getElementById('dl-result').innerText;
   
    if(first == 'ax1' && second == 'bx2')
    {
        document.getElementById('bh-result').textContent = ahresult;
        document.getElementById('bl-result').textContent = alresult;
        document.getElementById('ah-result').textContent = bhresult;
        document.getElementById('al-result').textContent = blresult;     
    }
    else if(first =='ax1' && second =="cx2")
    {
        document.getElementById('ch-result').textContent = ahresult;
        document.getElementById('cl-result').textContent = alresult;
        document.getElementById('ah-result').textContent = chresult;
        document.getElementById('al-result').textContent = clresult;
    }
    else if(first =='ax1' && second =="dx2")
    {
        document.getElementById('dh-result').textContent = ahresult;
        document.getElementById('dl-result').textContent = alresult;
        document.getElementById('ah-result').textContent = dhresult;
        document.getElementById('al-result').textContent = dlresult;
    }
    else if(first =='bx1' && second =="ax2")
    {
        document.getElementById('ah-result').textContent = bhresult;
        document.getElementById('al-result').textContent = blresult;
        document.getElementById('bh-result').textContent = ahresult;
        document.getElementById('bl-result').textContent = alresult;
    }
    else if(first =='bx1' && second =="cx2")
    {
        document.getElementById('ch-result').textContent = bhresult;
        document.getElementById('cl-result').textContent = blresult;
        document.getElementById('bh-result').textContent = chresult;
        document.getElementById('bl-result').textContent = clresult;
    }
    else if(first =='bx1' && second =="dx2")
    {
        document.getElementById('dh-result').textContent = bhresult;
        document.getElementById('dl-result').textContent = blresult;
        document.getElementById('bh-result').textContent = dhresult;
        document.getElementById('bl-result').textContent = dlresult;
    }
    else if(first =='cx1' && second =="ax2")
    {
        document.getElementById('ah-result').textContent = chresult;
        document.getElementById('al-result').textContent = clresult;
        document.getElementById('ch-result').textContent = ahresult;
        document.getElementById('cl-result').textContent = alresult;
    }
    else if(first =='cx1' && second =="bx2")
    {
        document.getElementById('bh-result').textContent = chresult;
        document.getElementById('bl-result').textContent = clresult;
        document.getElementById('ch-result').textContent = bhresult;
        document.getElementById('cl-result').textContent = blresult;
    }
    else if(first =='cx1' && second =="dx2")
    {
        document.getElementById('dh-result').textContent = chresult;
        document.getElementById('dl-result').textContent = clresult;
        document.getElementById('ch-result').textContent = dhresult;
        document.getElementById('cl-result').textContent = dlresult;
    }
    else if(first =='dx1' && second =="ax2")
    {
        document.getElementById('ah-result').textContent = dhresult;
        document.getElementById('al-result').textContent = dlresult;
        document.getElementById('dh-result').textContent = ahresult;
        document.getElementById('dl-result').textContent = alresult;
    }
    else if(first =='dx1' && second =="bx2")
    {
        document.getElementById('bh-result').textContent = dhresult;
        document.getElementById('bl-result').textContent = dlresult;
        document.getElementById('dh-result').textContent = bhresult;
        document.getElementById('dl-result').textContent = blresult;
    }
    else if(first =='dx1' && second =="cx2")
    {
        document.getElementById('ch-result').textContent = dhresult;
        document.getElementById('cl-result').textContent = dlresult;
        document.getElementById('dh-result').textContent = chresult;
        document.getElementById('dl-result').textContent = clresult;
    }
    
}
function empty(){
        document.getElementById('ah-result').textContent = "00";
        document.getElementById('al-result').textContent = "00";
        document.getElementById('bh-result').textContent = "00";
        document.getElementById('bl-result').textContent = "00";
        document.getElementById('ch-result').textContent = "00";
        document.getElementById('cl-result').textContent = "00";
        document.getElementById('dh-result').textContent = "00";
        document.getElementById('dl-result').textContent = "00";  
}
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
function random(){

    var numbers2 = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"];
    
    shuffle(numbers2);
    document.getElementById('ah-result').textContent = numbers2[0] + numbers2[1];
    shuffle(numbers2);
    document.getElementById('al-result').textContent = numbers2[0] + numbers2[1];
    shuffle(numbers2);
    document.getElementById('bh-result').textContent = numbers2[0] + numbers2[1];
    shuffle(numbers2);
    document.getElementById('bl-result').textContent = numbers2[0] + numbers2[1];
    shuffle(numbers2);
    document.getElementById('ch-result').textContent = numbers2[0] + numbers2[1];
    shuffle(numbers2);
    document.getElementById('cl-result').textContent = numbers2[0] + numbers2[1];
    shuffle(numbers2);
    document.getElementById('dh-result').textContent = numbers2[0] + numbers2[1];
    shuffle(numbers2);
    document.getElementById('dl-result').textContent = numbers2[0] + numbers2[1];
}
