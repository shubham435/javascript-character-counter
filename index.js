function count(){
    let string = document.getElementById('text').value;
    console.log(string.length);
    document.getElementById('number').innerText = string.length
}