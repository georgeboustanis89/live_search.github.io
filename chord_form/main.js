function fun1(){
    let hymn = document.getElementById("text").value;
    document.getElementById("content").innerHTML = `<pre>${hymn}</pre>`;
}