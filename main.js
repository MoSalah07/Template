// Show List 
let myOpen = document.querySelector( '.ri-function-line' );
let myList = document.querySelector( '.list' );
let myClose = document.querySelector( '.close' );
let mainList = document.querySelector( '.ul' );
if(myOpen) {
    myOpen.addEventListener( 'click', _ => { 
        myList.classList.add( 'show-list' );
        mainList.classList.add( 'padding-list' );
    } );
}
if(myClose) {
    myClose.addEventListener( 'click', _ => { 
        myList.classList.toggle( 'show-list' );
        mainList.classList.remove( 'padding-list' );
    } );
}


// Scroll Top 
let btnScroll = document.querySelector( '.scrolling-top' );
const showBtn = _ => this.scrollY >= 100 ? btnScroll.style.display = 'block' : btnScroll.style.display = 'none';
window.addEventListener( 'scroll', showBtn );

btnScroll.addEventListener( 'click', _ => { 
    window.scrollY >= 100 ? window.scrollTo( 0, 0 ) : '';
} );