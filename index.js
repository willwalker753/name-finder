$(document).ready(() => {
    submitHandler();
});
const submitHandler = () => {
    $('form').submit(event => {
        event.preventDefault();
        findName();
    });
}
const findName = e => {
    
    let nameStr = $('#input-name').val();
    let letter = $('#input-letter').val().toLowerCase();
    let nameArr = [];
    let tempStr = '';
    for(let i=0; i<nameStr.length; i++) {  
        if(nameStr.charAt(i) !== ' ') {
            tempStr = tempStr.concat(nameStr.charAt(i));
        }
        else {
            nameArr.push(tempStr.toLowerCase());
            tempStr = '';
        }
    }
    let result = '';
    for(let i=0; i<nameArr.length; i++) {
        if(nameArr[i].charAt(0) == letter && nameArr[i].charAt(nameArr[i].length-1) == letter) {
            result = result.concat(`${nameArr[i]}, `);
        }
    }
    result = result.slice(0, result.length-2);
    console.log(result);
    $('#results').empty().append(`<p>${result}</p>`);
}

