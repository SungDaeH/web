function inform(){
  alert("나는 alert입니다.")
}
function grade(){
  var kor1 = parseInt(document.getElementById("kor1").innerHTML);
  var kr1 = parseInt(document.getElementById("kr1").innerHTML);
  var first = document.getElementById("first_g");
  first.innerHTML=kor1+kr1;
  //first.style.color="red";
  $('#first_g').css("color","red")
  document.getElementById('first_g').innerHTML=kor1+kr1;

  var kor2 = parseInt(document.getElementById("kor2").innerHTML);
  var kr2 = parseInt(document.getElementById("kr2").innerHTML);
  var second = document.getElementById("second_g");
  second.innerHTML=kor2+kr2;
  //second.style.color="red";
  $('#second_g').css("color","green")
  document.getElementById('second_g').innerHTML=kor2+kr2;

  var kor3 = parseInt(document.getElementById("kor3").innerHTML);
  var kr3 = parseInt(document.getElementById("kr3").innerHTML);
  var third = document.getElementById("third_g");
  document.getElementById('third_g').innerHTML=kor3+kr3;
  third.innerHTML=kor3+kr3;
  //third.style.color="red";
  $('#third_g').css("color","blue")
  alert("성적이 확인되었습니다.")
  //document.getElementById('total').style.fontSize= '30px'
  // $('#total').css({
  //   fontSize: 30
  // });
  $('#total').css("fontSize",30);
  $('#total').css("fontSize","30px")
}
