console.log('***** Music Collection *****')
// creating empty collection array
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
console.log( collection );
console.log( ...collection );
console.log( collection.length );

// Creating function showCollection
function showCollection( showInput ){
    for ( let i = 0; i < showInput.length; i++ ){
        console.log( (showInput[i].title), 'by', showInput[i].artist, 'in', showInput[i].yearPublished )
    }
    console.log( `There are ${showInput.length} albums in our collection!`);

}
// end showCollection function


showCollection( collection );