let _select;
let _hide = false;
let _fade=false
function Valid_Selector(selector) {
  if (typeof selector !== "string") {
    console.error(
      "Black-Cat.js : Please enter a valid string in selector parameter"
    );
  
  }
}
function Valid_NUM(time) {
  if (typeof time !== "number") {
    console.error(
      "Black-Cat.js : Please enter a valid number in selector parameter"
    );
  
  }
}
let values;
function Valid_VALUE (values) {
  if ( values > 1) {
    console.warn(
      "black-cat.js:please enter a number or string less than 1 in value parameter"
    );
  }
 
}
function _hide_(selector) {
  if (typeof selector === "string") {
    _select = document.querySelector(selector);
    _select.style.visibility = "hidden";
    _select.style.display = "none";
    _hide = true;
  }
  _hide = false;
}
function _show_(selector) {
  if (typeof selector == "string") {
    _select = document.querySelector(selector);
    _select.style.visibility = "visible";
    _select.style.display = "block";
    _hide = false;
  }else{
  Valid_selector(selector)
  }

}

function _opacity_(selector, value) {
  values=value
if (typeof value === "number") {
        _select = document.querySelector(selector);
        _select.style.opacity = value;
        Valid_VALUE(value)
      } else if (typeof value === "string") {
        value = parseFloat(value);
        _select = document.querySelector(selector);
        _select.style.opacity = value;
        Valid_VALUE(value)
      }
}
function _fadeout_(selector,time) {
  _select = document.querySelector(selector);
  var out_timer=1
  let main_timer =  time / 100
  _fade=true
  setInterval(() => {
out_timer  -= 0.01
_opacity_(selector,out_timer)
  }, main_timer);
 
}
