/**
 *
 */
var numberInputs = [];
var secondArr = [];
var tagNameBtn = document.getElementsByTagName("button");
function kiemTraPhanTu() {
  if (numberInputs === 0) alert("Vui long nhap so");
  return true;
}
tagNameBtn[0].onclick = function () {
  numberInputs.push(document.getElementById("numberInput").value * 1);
  var display = "<p>Số đã nhập: " + numberInputs + "</p>";
  document.getElementById("hienThiMang").innerHTML = display;
};
function tinhTongSoDuong(numberInputs) {
  var tongSoDuong = 0;
  for (var i = 0; i < numberInputs.length; i++) {
    if (numberInputs[i] > 0) tongSoDuong += numberInputs[i];
  }
  return tongSoDuong;
}
tagNameBtn[1].onclick = function () {
  var flag = kiemTraPhanTu(numberInputs);
  if (!flag) return;
  var tongSoDuong = tinhTongSoDuong(numberInputs);
  displaySum = " <p>Tổng các số dương: " + tongSoDuong + "</p>";
  document.getElementById("hienThiTong").innerHTML = displaySum;
};
function demSoDuong(numberInputs) {
  var count = 0;
  for (var i = 0; i < numberInputs.length; i++) {
    if (numberInputs[i] > 0) count++;
  }
  return count;
}
tagNameBtn[2].onclick = function () {
  var flag = kiemTraPhanTu(numberInputs);
  if (!flag) return;
  var count = demSoDuong(numberInputs);
  displayCount = " <p>Số dương: " + count + "</p>";
  document.getElementById("hienThiSoSoDuong").innerHTML = displayCount;
};
function timSoNhoNhat(numberInputs) {
  var minNumber = numberInputs[0];
  for (var i = 0; i < numberInputs.length; i++) {
    if (numberInputs[i] < minNumber) minNumber = numberInputs;
  }
  return minNumber;
}
tagNameBtn[3].onclick = function () {
  var flag = kiemTraPhanTu(numberInputs);
  if (!flag) return;
  var minNumber = timSoNhoNhat(numberInputs);
  displayMin = " <p>Số nhỏ nhất: " + minNumber + "</p>";
  document.getElementById("hienThiMin").innerHTML = displayMin;
};
function timSoDuongNhoNhat(numberInputs) {
  var minPosNumber = 0;
  var flag = false;
  for (var i = 0; i < numberInputs.length; i++) {
    if (numberInputs[i]>0 && !flag){
      minPosNumber = numberInputs[i];
      flag = true;
    }
    else if ((numberInputs[i] >0) && (numberInputs[i] < minPosNumber)) minPosNumber = numberInputs[i];
  }
  return minPosNumber;
}
tagNameBtn[4].onclick = function () {
  var flag = kiemTraPhanTu(numberInputs);
  if (!flag) return;
  var minPosNumber = timSoDuongNhoNhat(numberInputs);
  displayPosMin = " <p>Số dương nhỏ nhất: " + minPosNumber + "</p>";
  document.getElementById("hienThiMinPos").innerHTML = displayPosMin;
}
function findLastEvenNumber(numberInputs) {
  var lastEvenNumber = 0;
  for(var i=0;i < numberInputs.length;i++){
    if(numberInputs[i]%2 == 0) lastEvenNumber =numberInputs[i];
  }
  return lastEvenNumber;
}
tagNameBtn[5].onclick = function () {
  var flag = kiemTraPhanTu(numberInputs);
  if (!flag) return;
  var lastEvenNumber = findLastEvenNumber(numberInputs);
  displayLastEvenNumber = "<p>Số chẵn cuối cùng: " + lastEvenNumber + "</p>";
  document.getElementById("lastEvenNum").innerHTML = displayLastEvenNumber;
}
function DoiCho (firstIndex,secondIndex) {
  var clone = [];
  for(var i=0;i < numberInputs.length;i++){
    clone.push(numberInputs[i]);
  }
  temp = clone[firstIndex]; 
  clone[firstIndex] = clone[secondIndex]; 
  clone[secondIndex] = temp;
  return clone;
}
tagNameBtn[6].onclick = function() {
  var flag = kiemTraPhanTu(numberInputs);
  if (!flag) return;
  var firstIndex = document.getElementById("firstIndex").value*1;
  var secondIndex = document.getElementById("secondIndex").value*1;
  var temp = 0;
  if(firstIndex>secondIndex) {
    temp = firstIndex;
    firstIndex = secondIndex;
    secondIndex = temp;
  }
  var switchedArr = DoiCho(firstIndex,secondIndex);
  displaySwitchedArr = "<p>Mảng sau khi đổi chỗ: " + switchedArr + "</p>";
  document.getElementById("SwitchedArr").innerHTML = displaySwitchedArr;
}
function sortedArr() {
  cloneArr = [];
  for (i = 0; i < numberInputs.length; i++) {
    cloneArr[i] = numberInputs[i];
  }
  do {
    var swapped = false;
    var swappedCounter = 0;
    var temp = 0;
    for (var i = 0; i < cloneArr.length - 1 - swappedCounter; i++) {
      if (cloneArr[i] > cloneArr[i + 1]) {
        temp = cloneArr[i];
        cloneArr[i] = cloneArr[i + 1];
        cloneArr[i + 1] = temp;
        swapped = true;
      }
    }
    swappedCounter++;
  } while (swapped);
  return cloneArr;
}
tagNameBtn[7].onclick = function() {
  var flag = kiemTraPhanTu(numberInputs);
  if (!flag) return;
  var newArr = sortedArr(numberInputs);
  displaySortedArr = "<p>Mảng sau khi sắp xếp: " + newArr + "</p>";
  document.getElementById("sortedArr").innerHTML = displaySortedArr;
}
function timSoNguyenTo() {
  var primeNum = 0;
  for(var i = 0; i < numberInputs.length;i++){
    if (numberInputs[i] == 0 || numberInputs[i]== 1) continue;
    var a = 1;
    count = 0;
    do {
      if(numberInputs[i]%a==0) count++;
      a++;
    } while(a<=Math.sqrt(numberInputs[i]))
    if(count == 1) {
      primeNum = numberInputs[i];
      break;
    }
  }
  return primeNum;
}
tagNameBtn[8].onclick = function() {
  var flag = kiemTraPhanTu(numberInputs);
  if (!flag) return;
  var primeNum = timSoNguyenTo(numberInputs);
  if(primeNum>0) displayPrimeNum = "<p>Số nguyên tố đầu tiên: " + primeNum + "</p>";
  else displayPrimeNum = "Không có số nguyên tố nào"
  document.getElementById("primeNum").innerHTML = displayPrimeNum;
}
tagNameBtn[9].onclick = function() {
  secondArr.push(document.getElementById("secondInput").value * 1);
  var displayNewArr ="<p>Số đã nhập: "+secondArr +"</p>";
  document.getElementById("hienThiMangMoi").innerHTML = displayNewArr;
}
tagNameBtn[10].onclick = function() {
  var clone = numberInputs.concat(secondArr);
  var count=0;
  for(var i = 0; i < clone.length;i++) { 
    if(Number.isInteger(clone[i])) count++;
  }
  displayInt = "<p>Số số nguyên: "+count+"</p>";
  document.getElementById("integer").innerHTML = displayInt;
}
tagNameBtn[11].onclick = function() {
  countPos = 0;
  countNeg = 0;
  for(var i = 0; i < numberInputs.length;i++) { 
    if(numberInputs[i]>0) countPos++;
    else countNeg++;
  }
  var displaystate = "";
  if(countPos>countNeg) displaystate = "<p>Số dương nhiều hơn số âm</p>"
  else if(countPos<countNeg) displaystate = "<p>Số dương ít hơn số âm</p>"
  else displaystate ="<p>Số dương bằng số âm</p>"
  document.getElementById("statement").innerHTML = displaystate;
}
