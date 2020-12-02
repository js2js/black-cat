let _select;
let _hide = false;
function $hide(selector) {
    if (typeof selector === "string") {
         _select=document.querySelector(selector)
         _select.style.visibility="hidden"
         _select.style.display="none"
        _hide=true
            } else {
        // if typeof selector = all typeof except string 
        console.error("black-cat.js: Please enter a valid string in selector parameter");
        _hide=false
    }
}
function $show(selector) {
     if (typeof selector =="string") {
        _select=document.querySelector(selector)
        _select.style.visibility="visible"
        _select.style.display="block"
        _hide=false
           } else {
       // if typeof selector = all typeof except string 
       console.error("black-cat.js : Please enter a valid string in selector parameter");
       _hide=_hide      
   }
}
function $opacity(selector,value) {
    if (typeof selector === "string") {
        if (value > 1) {
            console.warn("black-cat.js:please enter a number or string less than 1 in value parameter");
        }else{
        if (typeof value === "number") {
            _select=document.querySelector(selector)
            _select.style.opacity=value
        } else if (typeof value === "string" ){
            value=parseFloat(value)
            _select=document.querySelector(selector)
            _select.style.opacity=value
        }}
           } else {
       // if typeof selector = all typeof except string 
       console.error("black-cat.js : Please enter a valid string or number in value parameter");   
}}
let positions = {
    absolute (selector){
        if ( typeof selector === "string" ) {
            _select = document.querySelector(selector)
            _select.style.position="absolute"

        }else{            
            console.error("black-cat.js : Please enter a valid string in selector parameter");
        }

    },
    fixed (selector){
        if ( typeof selector === "string" ) {
            _select = document.getElementById(selector)
            _select.style.position="fixed"

        }else{            
            console.error("black-cat.js: Please enter a valid string in selector parameter");
        }

    },
    other_positions(selector,position){
        if ( typeof selector === "string" ) {
            _select = document.getElementById(selector)
            _select.style.position="position"

        }else{            
            console.error("black-cat.js : Please enter a valid string in selector parameter");
        }

    },  
    }
