console.log('***** Music Collection *****')
let collection = [];

// creating addToCollection function
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
// end of addToCollection function

// adding albums using addToCollection
addToCollection( 'Hello Rockview', 'Less Than Jake', 1998 );
addToCollection( 'The New Danger', 'Mos Def', 2004 );
addToCollection( 'The Grey Album', 'Danger Mouse', 2004 );
addToCollection( 'Discovery', 'Daft Punk', 2001 );
addToCollection( 'Fear', 'Toad the Wet Sprocket', 1991 );
addToCollection( 'Nightflight to Venus', 'Boney M', 1978 );

// ... spread operator lists out each item in the array by default
// showing everything in the collection array using the console log
console.log( ...collection );

// Creating function showCollection
// tried using collection instead of array, length was undefined?
function showCollection( collection ){
    for ( let i = 0; i < collection.length; i++ ){
        console.log( title.collection[i], 'by', artist.collection[i], 'in', yearPublished.collection[i] );
    }
}
// end showCollection function


showCollection( collection )