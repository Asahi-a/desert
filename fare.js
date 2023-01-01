/*西央線営業ヘクト一覧*/
var disSaio = [0,2.3,4.5,6.9,9.4,12,14,18.4,20.5,23,27.7,35.7,37.8,44];
/*押回数,終点起点の配列準備*/
var count = 0;
var distination = [];
/*全ボタンにイベントリスナー付加*/
var kitamichi = document.getElementById('kitamichi')
kitamichi.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[0]);
});
var hurukui = document.getElementById('hurukui')
hurukui.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[1]);
});
var ooara = document.getElementById('ooara')
ooara.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[2]);
});
var nisiookawa = document.getElementById('nisiookawa')
nisiookawa.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[3]);
});
var tsuchigasaki = document.getElementById('tsuchigasaki')
tsuchigasaki.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[4]);
});
var mizudaira = document.getElementById('mizudaira')
mizudaira.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[5]);
});
var morisaka = document.getElementById('morisaka')
morisaka.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[6]);
});
var nakae = document.getElementById('nakae')
nakae.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[7]);
});
var yutachi = document.getElementById('yutachi')
yutachi.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[8]);
});
var yamaguma = document.getElementById('yamaguma')
yamaguma.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[9]);
});
var oomorie = document.getElementById('oomorie')
oomorie.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[10]);
});
var humotobaru = document.getElementById('humotobaru')
humotobaru.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[11]);
});
var unitsu = document.getElementById('unitsu')
unitsu.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[12]);
});
var nisiguma = document.getElementById('nisiguma')
nisiguma.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[13]);
});
