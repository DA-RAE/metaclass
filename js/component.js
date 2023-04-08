export const app = document.getElementById('app');

export class Etc {
    br() {
        const br = document.createElement('br');
        app.appendChild(br)
    }
}

export class Button {
    main() {
        const button = document.createElement('button');
        button.textContent = 'META CLASS';
        button.classList.add('indexButton');
        button.id = '/';
        app.appendChild(button);
    }

    word() {
        const button = document.createElement('button');
        button.textContent = '단어학습';
        button.classList.add('tableButton');
        button.id = '/word';
        app.appendChild(button);
    }

    speak() {
        const button = document.createElement('button');
        button.textContent = '회화연습';
        button.classList.add('tableButton');
        button.id = '/speak';
        app.appendChild(button);
    }

    member() {
        const button = document.createElement('button');
        button.textContent = '회원관리';
        button.classList.add('tableButton');
        button.id = '/member';
        app.appendChild(button);
    }

    grade() {
        const button = document.createElement('button');
        button.textContent = '성적관리';
        button.classList.add('tableButton');
        button.id = '/grade';
        app.appendChild(button);
    }
}

export class Table {

}

export class Input {

}