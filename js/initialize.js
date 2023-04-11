class Initialize {
    main() {
        document.title = 'MetaClass 관리자 페이지';
        document.getElementById('app').innerHTML = '';
        const component = new Component();
        component.urlButton('/', 'app', 'mainButton', 'META CLASS');
        component.br('br1', 'app');
        component.urlButton('/word', 'app', 'pageButton', '단어학습');
        component.urlButton('/speak', 'app', 'pageButton', '회화연습');
        component.urlButton('/member', 'app', 'pageButton', '회원관리');
        component.urlButton('/grade', 'app', 'pageButton', '성적관리');
    }

    word() {
        document.title = '단어게임';
        document.getElementById('app').innerHTML = '';
        const component = new Component();
        component.urlButton('/', 'app', 'mainButton', 'META CLASS');
        component.br('br1', 'app');
        component.table('table', 'app', 'table');
        component.thead('thead', 'table');
        component.tr('tName', 'thead');
        component.tr('tInput', 'thead');
        const tName = ['번호', '언어', '레벨', '단원', '구분', '한국어', '중국어', '영어', '러시아어', '갱신일자', '', ''];
        for (let i = 0; i < tName.length; i++) {
            component.th('tName' + i, 'tName', 'th', tName[i])
            component.th('tInput' + i, 'tInput', 'th', '')
        }
        component.span('num', 'tInput0', 'span', '000');
        component.engInput('language', 'tInput1', 'input', '', '2', '2', '25px');
        component.numberInput('level', 'tInput2', 'input', '', '1', '1', '25px');
        component.numberInput('chapter', 'tInput3', 'input', '', '2', '2', '25px');
        component.numberInput('gubun', 'tInput4', 'input', '', '1', '1', '25px');
        component.input('kl', 'tInput5', 'input', '', '0', '50', '100px');
        component.input('cl', 'tInput6', 'input', '', '0', '50', '100px');
        component.input('el', 'tInput7', 'input', '', '0', '50', '100px');
        component.input('rl', 'tInput8', 'input', '', '0', '50', '100px');
        component.span('regdate', 'tInput9', 'span', component.getDate());
    }

    speak() {
        document.title = '회화연습';
        document.getElementById('app').innerHTML = '';
        const component = new Component();
        component.urlButton('/', 'app', 'mainButton', 'META CLASS');
        component.br('br1', 'app');
    }

    member() {
        document.title = '회원관리';
        document.getElementById('app').innerHTML = '';
        const component = new Component();
        component.urlButton('/', 'app', 'mainButton', 'META CLASS');
        component.br('br1', 'app');
    }
    
    grade() {
        document.title = '성적관리';
        document.getElementById('app').innerHTML = '';
        const component = new Component();
        component.urlButton('/', 'app', 'mainButton', 'META CLASS');
        component.br('br1', 'app');
    }
}

import Component from "./component.js";
export default Initialize;