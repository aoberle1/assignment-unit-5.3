console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, artist, yearPublished ){
    // creating properties for albums using this.,
    //this. is referring to the object we are creating in the function addToCollection
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push( album );
    console.log( `We have added ${ title } by ${ artist } to our collection!`);
    
}

addToCollection( 'Hello Rockview', 'Less Than Jake', 1998 );