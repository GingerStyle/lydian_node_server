$(onReady);

function onReady(){
    getQuotes();
    $('#submit').on('click', postQuotes);
}

let newQuote = {
    text: "I know you are but what am I?",
    author: "Peewee Herman"
}

function postQuotes(){
    console.log('in postQuotes');
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: newQuote,
    }).then(function(response){
        console.log('response from server', response);
        getQuotes();
    });
}

function getQuotes(){
    //this where we GET quotes from our server
    //with ajax part of jquery
    console.log('in getQuotes');
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then(function(response){
        console.log('response from server', response);
        appendToDom(response);
    }).catch(function(error){
        alert(error.responseText);
    });
}

function appendToDom(array){
    console.log('appenToDom Function', array);
    $('#output').empty();
    for (let item of array){
        $('#output').append(`
        <li>"${item.text}" said by ${item.author}</li>
        `);
    }
}