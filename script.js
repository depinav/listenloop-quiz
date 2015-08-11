var localStorage = {};

window.onload = function() {
 if(supportsHTML5Storage) {
  localStorage = window.localStorage;
 }

 document.querySelector('#name').value = localStorage && localStorage.getItem('name') || '';
 document.querySelector('#age').value = localStorage && localStorage.getItem('age') || '';
 document.querySelector('#email').value = localStorage && localStorage.getItem('email') || '';
 document.querySelector('#school').value = localStorage && localStorage.getItem('school') || '';
 document.querySelector('#company').value = localStorage && localStorage.getItem('company') || '';

 if(localStorage && localStorage.getItem('focus')) {
  document.getElementById(localStorage.getItem('focus')).focus();
 }
};

var contact = document.querySelector('.contact');

contact.addEventListener('focusout', function(event) {
  var target = event.target || event.srcElement
  localStorage.setItem(target.name, target.value);
  stopPropagation(event);
});

contact.addEventListener('focusin', function(event) {
 var target = event.target || event.srcElement
 localStorage.setItem('focus', target.id);
 stopPropagation(event);
});

/* Helper functions */
function supportsHTML5Storage() {
 try {
  return 'localStorage' in window && window['localStorage'] !== null;
 } catch (e) {
  return false;
 }
};

function stopPropagation(event) {
 event = event || window.event // cross-browser event

 if (event.stopPropagation) {
  // W3C standard variant
  event.stopPropagation()
 } else {
  // IE variant
  event.cancelBubble = true
 }
}
