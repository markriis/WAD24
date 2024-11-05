const user_dropdown = document.querySelector( "#dropdown-native" )

document.querySelector( '#dropdown-toggle' )?.addEventListener( 'mousedown', ( ) => {
    if ( !user_dropdown )
        throw new Error( 'Can\'t find user dropdown.' );

    user_dropdown.classList.toggle( 'open' );
} )