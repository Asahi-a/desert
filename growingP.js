let growingP = document.getElementsByTagName('p');
//フォントサイズによって相対的に変えたいので一度cssから数値として取得して演算して変更する
let cssP = getComputedStyle('growingP');
let baseSize = cssP.getPropertyValue("font-size");
let mouseoverSize = cssP.getPropertyValue("font-size") * 1.5;

//変更する
growingP.addEventListener('mouseover', function() {
  element.style.fontSize = mouseoverSize + 'px';
});

growingP.addEventListener('mouseout', function() {
  element.style.fontSize = baseSize + 'px';
});



/*growingP.addEventListener('mouseover', function() {
  element.style.color = '#9FF';
});

growingP.addEventListener('mouseout', function() {
  element.style.color = '#FD8';
});*/
