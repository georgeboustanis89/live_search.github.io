function fun1(){
    let hymn = document.getElementById("text").value;

    // let title = '&lt;div class="title"&gt;' + (hymn.match(/>.*\n/))[0].slice(1) + '&lt;/div&gt;';
    
    // let chords = (hymn.match(/\!.*/g)).map(function(element){
    //     return '&lt;div class="chords"&gt;' + element.slice(1) + '&lt;/div&gt;';
    // })

    // let lyrics = (hymn.match(/^[α-ωΑ-Ωάέώόίύή].*$/gm));

    // let hymn2 = `<h1>${title}</h1>`;
    // hymn2 += chords.forEach(element => {
    //     return `<div class="lyrics">${element}</div>`;
    // });
    

    // document.getElementById("content").innerHTML = `&lt;pre&gt;${title}&lt;/pre&gt;`;

    hymn = hymn.split('\n');   //ΑΠΑΡΑΙΤΗΤΟ ΓΙΑ ΤΗΝ ΣΥΝΟΧΗ title, chords και lyrics

    hymn.forEach((val,ind) => {
        if(val.match(/\!.*/g))
            hymn[ind] = '&lt;div class="chords"&gt;' + val.slice(1) + '&lt;/div&gt;';
        else if(val.match(/^[α-ωΑ-Ωάέώόίύή].*$/gm))
            hymn[ind] = '&lt;div class="lyrics"&gt;' + val + '&lt;/div&gt;';
        else
            hymn[ind] = '&lt;div class="title"&gt;' + val.slice(1) + '&lt;/div&gt;';
    }, hymn);

    console.log(hymn);

    document.getElementById("content").innerHTML = hymn;
}