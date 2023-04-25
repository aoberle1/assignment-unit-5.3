console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, artist, yearPublished ){
    let album = {
        title: '',
        artist: '',
        yearPublished: ''
    }
    collection.push( album );
    console.log( `We have added ${ album } to our collection!`);
}

addToCollection( 'Hello Rockview', 'Less Than Jake', 1998 );