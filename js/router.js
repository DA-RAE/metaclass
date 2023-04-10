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
    const initialize = new Initialize();
    const main = initialize.main;
    const word = initialize.word;
    const speak = initialize.speak;
    const member = initialize.member;
    const grade = initialize.grade;
    const route = {
        '/index': main,
        '/': main,
        '/word': word,
        '/speak': speak,
        '/member': member,
        '/grade': grade
    };
    route[window.location.pathname]();
}

import Initialize from "./initialize.js";