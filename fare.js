/*西央線営業ヘクト一覧*/
var disSaio = [0,2.3,4.5,6.9,9.4,12,14,18.4,20.5,23,27.7,35.7,37.8,44];
/*押回数,終点起点の配列準備*/
var count = 0;
var distination = [];
var station = [];
var distance
var nnr //乗り換えも見据えて国鉄部分のみの運賃
var fare
/*国鉄距離運賃計算関数*/
function getNnr (nnr) {
  if (distance <= 3.5) {
    return 100;
  }else if (distance <= 7){
    return 130;
  }else if (distance <=11.5){
    return 160;
  }else if (distance <=14){
    return 190;
  }else if (distance <=19){
    return 220;
  }else if (distance <=24){
    return 250;
  }else if (distance <=29){
    return 280;
  }else if (distance <=36){
    return 310;
  }else if (distance <=43){
    return 340;
  }else if (distance <=50){
    return 370;
  }else {
    return 400;
  }
}
/*全ボタンにイベントリスナー付加*/
var kitamichi = document.getElementById('kitamichi')
kitamichi.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[0]);
  station.push("北道");
});
var hurukui = document.getElementById('hurukui')
hurukui.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[1]);
  station.push("古杭");
});
var ooara = document.getElementById('ooara')
ooara.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[2]);
  station.push("大粗");
});
var nisiookawa = document.getElementById('nisiookawa')
nisiookawa.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[3]);
  station.push("西大川");
});
var tsuchigasaki = document.getElementById('tsuchigasaki')
tsuchigasaki.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[4]);
  station.push("土ヶ崎");
});
var mizudaira = document.getElementById('mizudaira')
mizudaira.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[5]);
  station.push("水平");
});
var morisaka = document.getElementById('morisaka')
morisaka.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[6]);
  station.push("森坂");
});
var nakae = document.getElementById('nakae')
nakae.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[7]);
  station.push("中江");
});
var yutachi = document.getElementById('yutachi')
yutachi.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[8]);
  station.push("湯立");
});
var yamaguma = document.getElementById('yamaguma')
yamaguma.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[9]);
  station.push("山隈");
});
var oomorie = document.getElementById('oomorie')
oomorie.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[10]);
  station.push("大森江");
});
var humotobaru = document.getElementById('humotobaru')
humotobaru.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[11]);
  station.push("麓原");
});
var unitsu = document.getElementById('unitsu')
unitsu.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[12]);
  station.push("雲丹津");
});
var nisiguma = document.getElementById('nisiguma')
nisiguma.addEventListener('click', function() {
  count = count+1;
  distination.push(disSaio[13]);
  station.push("西隈");
});

/*計算部*/
var calc = document.getElementById('start')
calc.addEventListener('click', function() {

if (count == 2){
  distance = distination[0] - distination[1];
  distance = Math.abs(distance);
  getNnr (nnr);
  
  nnr = getNnr(nnr);
  fare = nnr;
  alert (fare);
}else if (count>=3){
  let resurt = document.getElementById('fare')
  result.innerHTML = '<div class = "subindx"><p>Error</p></div><p>3駅以上押さないでください</p><a href=fare.html>リトライ</a>';
}else if (count<=1){
  let resurt = document.getElementById('fare')
  result.innerHTML = '<div class = "subindx"><p>Error</p></div><p>2駅以上押しましょう</p><a href=fare.html>リトライ</a>';
}

});
