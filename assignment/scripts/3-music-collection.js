console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, artist, yearPublished ){
    // addToCollection creates album object using parameters defined in function
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push( album );
    console.log( `We have added ${ title } by ${ artist } to our collection!`);
    
}

addToCollection( 'Hello Rockview', 'Less Than Jake', 1998 );
addToCollection( 'The New Danger', 'Mos Def', 2004 );
addToCollection( 'The Grey Album', 'Danger Mouse', 2004 );
addToCollection( 'Discovery', 'Daft Punk', 2001 );
addToCollection( 'Fear', 'Toad the Wet Sprocket', 1991 );
addToCollection( 'Nightflight to Venus', 'Boney M', 1978 );
