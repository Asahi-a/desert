var change = document.getElementById('change');

var white = document.getElementById('whiteout');
var black = document.getElementById('blackout');

white.addEventListener('click',function(){
  change.innnerHTML ='body {background-color: #fff;font-family: serif;color: #000;font-size:16px;}.main-contents {width: 70%;padding: 10px;background-color:#000;}.middle {background-color: #000;width: 1000px;margin: auto;border-left: 1px solid;border-right: 1px solid;border-color: #aaa;}.hd {text-align: center;background-color:#000;}';
});

black.addEventListener('click',function(){
  change.innnerHTML ='.asdfgh{color:#000;}';
});
