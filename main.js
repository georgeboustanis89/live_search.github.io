function display(myReg){
    let output = '';
    var regex = new RegExp(myReg,'igm');
    var xhr = new XMLHttpRequest();
    xhr.open('GET','data.json',true);
    xhr.onload = function(){
        if(this.status == 200){
            let resp = xhr.responseText.match(regex);
            if(resp){
                resp.forEach(function(str){
                    output += str+'<br>';
                });
            }
        }
        document.getElementById('result').innerHTML = output;
    }

    xhr.send();
}


function search(){
    let searchtxt = document.getElementById('search').value;
    let myReg = '\\b.*'+searchtxt+'.*'; //ΠΡΟΣΟΧΗ ΠΡΕΠΕΙ ΝΑ ΦΙΛΤΡΑΡΩ ΤΑ ΔΕΔΟΜΕΝΑ ΑΠΟ ΤΟ TEXT AREA - ΝΑ ΜΗΝ ΕΙΝΑΙ ΚΕΝΟ!

    display(myReg);
}

display('^.*[^\n]');
document.getElementById('button').addEventListener('click',search);