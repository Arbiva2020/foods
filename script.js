//attaching a clickevent to the menu item
//than we will change the css, so when "change" mode is
//on - the navbar will change style and vice verse. 
//we will add "change" to the classess, and that will effect their style/
//The classList property returns the CSS classnames of an element.
document.querySelector('.menu').addEventListener
('click', ()=>{
   document.querySelectorAll('.target').forEach((item)=>{
      item.classList.toggle('change')
   })
})

// select all the icons:
// quarySelectorAll method returns an array-like object
// called "node list", its items have 0 base index number
// like an array, and it has .length property: 
const icons = document.querySelectorAll('.section-1-icons i')
//returns all icons on list:
console.log(icons)
//setting a counter:
let i = 1

//to run the function over and over again with some interval:
//the setInterval gets two arguments, the first is a callback function
//that will run again and again, and the second is
//the time of the interval
setInterval(() => {
    i++
    //to create a new variable and select the element using class.change
    const icon = document.querySelector('.section-1-icons .change')
    console.log(icon) 
    //to remove class change we need to access the classess of the icon
    icon.classList.remove('change')

    //next we need to display and hide our icons according to order
    // for that we have to get access to the next item:
    if(i>icons.length){
        icons[0].classList.add('change')
        //set variable back to 1:
        i=1
     } else {
        icon.nextElementSibling.classList.add('change')

     }

}, 4000)


//the tag "change" is what we add or remove from icons in
// a list to control their disply: if the word "chang" is added to 
// an icon - it will be displayd. as long as we dont
//get to the end of the icon array, we keep removing "change"
// from icon and adding it to the next sibling.
 
