// 이벤트 핸들러를 등록시켜 이벤트 발생시 컴포넌트를 렌더링하는 함수를 실행
window.addEventListener('load', renderComponent);
window.addEventListener('popstate', renderComponent);
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.id[0] === '/') {
        event.preventDefault();
        history.pushState(null, null, event.target.id);
        renderComponent();
    }
});

// 현재 URL에 따라 각 URL의 초기 화면을 렌더링
function renderComponent() {
    const route = {
        '/index': initializeMain,
        '/': initializeMain,
        '/word': initializeWord
    };
    route[window.location.pathname]();
}

import * as component from "./component.js";

function initializeMain() {
    document.title = 'MetaClass 관리자 페이지';
    component.app.innerHTML = '';
    const btn = new component.Button;
    const etc = new component.Etc;
    btn.main();
    etc.br();
    btn.word();
    btn.speak();
    btn.member();
    btn.grade();
}

function initializeWord() {
    document.title = '단어게임';
    component.app.innerHTML = '';
    const btn = new component.Button;
    const etc = new component.Etc;
    btn.main();
    etc.br();
}