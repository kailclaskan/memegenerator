//Author: Kenneth L Powell
/*
Date: Sept 15 2020
Time Start: 7:30 AM
Break: 15 min
Time Styling and Coding End: 10:30 AM
Time Double Checking and Notating End: 10:40 AM
Checking Color Scheme End: 10:45 AM
Assignment End: 10:50 AM

Notes: I did not confer with anyone in regard to the coding of this. I did however use w3Schools just for basic
       attribute options such as position attributes. I did pickup some of the colors from an 
       HTML color picker with color hex codes.
*/
/*
Requirements:
1. User should be able to submit a form on the page to generate a new meme on the page,
   and should be able to add multiple memes to the page by submitting the form multiple times.
2. Users should be able to click on a button to remove a meme from the page.
3. When the meme form is submitted, values in the form inputs should be cleared.
*  Be sure to style your meme generator! It should be functional but also look nice.
*/
//CONST
const memeimage = document.querySelector('#memeimage');
const toptext = document.querySelector('#toptext');
const bottomtext = document.querySelector('#bottomtext');
const subbutton = document.querySelector('#subbutton');
const memeform = document.querySelector('#subholder');
const colorpicker = document.querySelector('#colorpicker');
//GLOBAL EVENT LISTENERS
memeform.addEventListener('submit', function(e){
    e.preventDefault();
    createMeme();
});
//FUNCTION
function createMeme(){
    //Create div elements for the meme
    const holder = document.createElement('div');
    const newMeme = document.createElement('img');
    const topquote = document.createElement('h3');
    const bottomquote = document.createElement('h3');
    const removebutton = document.createElement('button');
    //Add the text, color and image values to the created elements.
    topquote.innerText = toptext.value;
    bottomquote.innerText = bottomtext.value;
    topquote.style.color = colorpicker.value;
    bottomquote.style.color = colorpicker.value;
    newMeme.setAttribute('src', memeimage.value);
    //Set Class Names to attach meme related CSS.
    holder.className = 'holder';
    topquote.className = 'topquote';
    newMeme.className = 'meme';
    bottomquote.className = 'bottomquote';
    //Set the Remove Button's text value.
    removebutton.innerText = 'Remove Meme';
    //Add event listenr to new meme so when the button is clicked it removes the div and it's contents.
    holder.addEventListener('click', function(e){
        if(e.target.tagName === "BUTTON"){
            e.target.parentElement.remove();
        }
    })
    //Add Class Name for CSS styling
    removebutton.className = 'removeBtn';
    //Add div to the body.
    document.body.append(holder);
    //Add meme, text and button to the div.
    holder.prepend(topquote);
    holder.append(newMeme);
    holder.append(bottomquote);
    holder.append(removebutton);
    //Clear the values and set them to the original placeholders.
    memeimage.value = '';
    memeimage.setAttribute('placeholder', 'Place image URL in this box');
    toptext.value = '';
    toptext.setAttribute('placeholder', 'Place top line text here');
    bottomtext.value = '';
    bottomtext.setAttribute('placeholder', 'Place bottom line text here')
}
