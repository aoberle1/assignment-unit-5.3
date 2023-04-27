console.log('***** Music Collection *****')
// creating empty collection array
let collection = [];

// creating addToCollection function
function addToCollection( title, artist, yearPublished ){
    // running addToCollection function creates album object using parameters defined in function
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    // moving album created using function arguments to collection array created previously
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
// showing difference between spread operator and standard
console.log( collection );
console.log( ...collection );
console.log( collection.length );

// Creating function showCollection
function showCollection( showInput ){
    // for loop running through array (using function argument name)
    for ( let i = 0; i < showInput.length; i++ ){
        // at each index point in the loop [i] we are console logging TITLE by ARTIST in YEAR using .operator and object properties defined earlier
        console.log( (showInput[i].title), 'by', showInput[i].artist, 'in', showInput[i].yearPublished );
    }
    // console log to show how many albums are in the collection, located outside for loops so only runs once
    console.log( `There are ${showInput.length} albums in our collection!`);
}
// end showCollection function

// calling showCallection function using collection array created previously
// logs each index on own line as TITLE by ARTIST in YEAR
// logs the number of albums in collection array
showCollection( collection );

// creating findByArtist function using argument findArtist
function findByArtist( findArtist ){
    // creating empty foundArtists array inside findByArtist function
    let foundArtists = [];
    // for loop to loop through indexes of collection array
    for ( i = 0; i < collection.length; i++ ){
        // if name of artist in index (album) of collection array matches findArtist function argument
        // function will push the index at that point to the created searchedArtists array
        if ( collection[i].artist === findArtist ){
            foundArtists.push ( collection[i] )
        }
    }
    // function will return foundArtists array
    return foundArtists;
}
// console log will log the return of the foundArtists array by running findByArtist function
// argument of findByArtist is name of the artist we are searching for
console.log(findByArtist( 'Daft Punk' ));

// creating search function
function search ( artist, yearPublished ){
    // empty array to catch search matches
    let searchMatchArray = [];
    // for loop to cycle through all indexes in collection array
    for ( i = 0; i < collection.length; i++ ){
        // if statement to push search matches into searchMatchArray
        if (collection[i].artist === artist && collection[i].yearPublished === yearPublished ){
            searchMatchArray.push ( collection[i] )
        }
        // else if that determines if search arguments are empty and returns the full collection if they are
        else if ( artist === "" && yearPublished === ""){
            return collection
        }
    }
    // returning searchMatchArray outside for loop otherwise for loop will only run once before return stops it
    return searchMatchArray
}

// successfully returns empty array, does not return full collection with empty search objects
console.log(search());
