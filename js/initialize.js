export default class Initialize {
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
        component.tr('trName', 'thead');
        component.th('thName0', 'trName', 'th', '번호');
        component.th('thName1', 'trName', 'th', '언어');
        component.th('thName2', 'trName', 'th', '레벨');
        component.th('thName3', 'trName', 'th', '단원');
        component.th('thName4', 'trName', 'th', '구분');
        component.th('thName5', 'trName', 'th', '한국어');
        component.th('thName6', 'trName', 'th', '중국어');
        component.th('thName7', 'trName', 'th', '영어');
        component.th('thName8', 'trName', 'th', '러시아어');
        component.th('thName9', 'trName', 'th', '갱신일자');
        component.th('thName10', 'trName', 'th', '');
        component.tr('trInput', 'thead');
        component.th('thInput0', 'trInput', 'th', '');
        component.th('thInput1', 'trInput', 'th', '');
        component.th('thInput2', 'trInput', 'th', '');
        component.th('thInput3', 'trInput', 'th', '');
        component.th('thInput4', 'trInput', 'th', '');
        component.th('thInput5', 'trInput', 'th', '');
        component.th('thInput6', 'trInput', 'th', '');
        component.th('thInput7', 'trInput', 'th', '');
        component.th('thInput8', 'trInput', 'th', '');
        component.th('thInput9', 'trInput', 'th', '');
        component.th('thInput10', 'trInput', 'th', '');
        component

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