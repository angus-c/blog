function firstAncestor(el, tagName) {
  while(el = el.parentNode, el && (el.tagName != tagName.toUpperCase()));
  return el;
}

//element in http://ecma262-5.com/ELS5_HTML.htm
var a = $('Section_15.1.1.2'); 

firstAncestor(a, 'div'); //<div class="page">
