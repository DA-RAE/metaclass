// 이벤트 핸들러를 등록시켜 이벤트 발생시 화면을 렌더링하는 함수를 실행
window.addEventListener('load', render);
window.addEventListener('popstate', render);
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.id[0] === '/') {
        event.preventDefault();
        history.pushState(null, null, event.target.id);
        render();
    }
});

// 현재 URL에 따라 각 URL의 초기 화면을 렌더링
function render() {
    const route = {
        '/index': initializeMain,
        '/': initializeMain,
        '/word': initializeWord
    };
    route[window.location.pathname]();
}

import Component from "./component.js";

function initializeMain() {
    document.title = 'MetaClass 관리자 페이지';
    const component = new Component();
    component.app.innerHTML = '';
    component.urlButton('/', 'META CLASS', 'mainButton');
    component.br();
    component.urlButton('/word', '단어학습', 'pageButton');
    component.urlButton('/speak', '회화연습', 'pageButton');
    component.urlButton('/member', '회원관리', 'pageButton');
    component.urlButton('/grade', '성적관리', 'pageButton');
}

function initializeWord() {
    document.title = '단어게임';
    const component = new Component();
    component.app.innerHTML = '';
    component.urlButton('/', 'META CLASS', 'mainButton');
    component.br();
}