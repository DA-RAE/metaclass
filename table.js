var num = 000;

function selectWord() {
  const url = 'http://127.0.0.1/metaclass/php/select.php';
  const value = {
    table: "word"
  };
  let result = postPhp(url, value);

  let html = ``;
  for (let i = 0; i < result.length; i++) {
    html += `<tr>`;
    html += ` <td>` + result[i['num']] + `</td>`;
    html += ` <td><input type="text" maxlength="2" style="width: 25px;" oninput="this.value = this.value.replace(/[0-9]|[^\!-z]/g, '');">` + result[i['language']] + `</td>`;
    html += ` <td><input type="text" maxlength="1" style="width: 25px;" oninput="this.value = this.value.replace(/[^0-9]/g, '');">` + result[i['level']] + `</td>`;
    html += ` <td><input type="text" maxlength="2" style="width: 25px;" oninput="this.value = this.value.replace(/[^0-9]/g, '');">` + result[i['chapter']] + `</td>`;
    html += ` <td><input type="text" maxlength="1" style="width: 25px;" oninput="this.value = this.value.replace(/[^0-9]/g, '');">` + result[i['gubun']] + `</td>`;
    html += ` <td><input type="text" maxlength="50" style="width: 100px;">` + result[i['kl']] + `</td>`;
    html += ` <td><input type="text" maxlength="50" style="width: 100px;">` + result[i['cl']] + `</td>`;
    html += ` <td><input type="text" maxlength="50" style="width: 100px;">` + result[i['el']] + `</td>`;
    html += ` <td><input type="text" maxlength="50" style="width: 100px;">` + result[i['rl']] + `</td>`;
    html += ` <td>` + result[i['regdate']] + `</td>`;
    html += `<th><button type="button" class="delButton" onclick="deleteWord()">삭제</button></th>`;
  }
}

function insertWord() {
  let html = '';
  num++;

  html += `<tr>`;
  html += `<td>` + ('00' + num).slice(-3) + `</td>`;
  html += `<td><input type="text" maxlength="2" style="width: 25px;" oninput="this.value = this.value.replace(/[0-9]|[^\!-z]/g, '');"></td>`;
  html += `<td><input type="text" maxlength="1" style="width: 25px;" oninput="this.value = this.value.replace(/[^0-9]/g, '');"></td>`;
  html += `<td><input type="text" maxlength="2" style="width: 25px;" oninput="this.value = this.value.replace(/[^0-9]/g, '');"></td>`;
  html += `<td><input type="text" maxlength="1" style="width: 25px;" oninput="this.value = this.value.replace(/[^0-9]/g, '');"></td>`;
  html += `<td><input type="text" maxlength="50" style="width: 100px;"></td>`;
  html += `<td><input type="text" maxlength="50" style="width: 100px;"></td>`;
  html += `<td><input type="text" maxlength="50" style="width: 100px;"></td>`;
  html += `<td><input type="text" maxlength="50" style="width: 100px;"></td>`;
  html += `<td>YYYY-MM-DD</td>`;
  html += `<th><button type="button" class="delButton" onclick="insertWord()">삭제</button></th>`;

  document.getElementById('table').innerHTML += html;
}

function deleteWord() {

}

function updateWord() {

}

function postPhp(url, value) {
  fetch(url, {
    method: 'POST',
    body: value
  })
    .then(respons => respons.json)
    .then(result => { return result });
}

var baseCamp = 0;

// 추가btn 이벤트
function userAdd() {

  var trCnt = document.getElementsByTagName('tr').length;
  var inner = "";
  console.log(trCnt)
  if (baseCamp != 0) {
    trCnt = baseCamp;
  }
  if (trCnt == 11) {
    $('#no1').hide();
  }
  if (trCnt <= 11) {
    inner += '<tr id = "no' + trCnt + '">';
    inner += '    <td align ="center">' + trCnt + '</td>';
    inner += `    <td><input type="text" class = "mng" id="userNM"></td>`;
    inner += `    <td><select id="USE_YN" class ="mng_select" ><option value="Y">사용</option><option value="N">미사용</option></select></td>`;
    inner += '    <td><button type="button" class="completeBtn" style="color : #ff2020;" onClick="onClickComplete()">완료</button><span>|</span><button type="button" class="cancleBtn" onClick="onClickCancle(' + trCnt + ')">취소</button></td>';
    inner += `</tr>`;
  }

  $('#tbHead').after(inner); // 헤더 아래 추가

}

/*  @description 사용자 정보 입력 row remove */
function onClickCancle(trCnt) {
  var row = document.querySelectorAll('.updateRow');
  $("#no" + trCnt).remove();

  if (trCnt == 11) {
    $('#no1').show();
  }
  if (row.length > 0) {
    $('.updateRow').show();
    $('tr').removeClass('updateRow');
  }
}

/*
* @description 사용자 정보 수정
*/
function onClickUpdate() {

  var targetBtn = event.target;
  var parentTr = targetBtn.parentNode.parentNode;
  var tdNode = parentTr.childNodes;
  var tdArr = new Array();

  for (var i = 0; i < tdNode.length; i++) {
    tdArr.push(tdNode[i].textContent);
  }

  var row = document.querySelectorAll('.updateRow')
  if (row.length == 0) {
    parentTr.className = "updateRow";
    $('.updateRow').hide();

    baseCamp = tdArr[1];
    userAdd();

  } else {
    alert("수정 중인 사용자 정보가 있습니다.")
  }
}