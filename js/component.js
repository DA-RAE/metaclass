export default class Component {
    app = document.getElementById('app');

    br() {
        const br = document.createElement('br');
        app.appendChild(br)
    }

    urlButton(id, text, css) {
        const button = document.createElement('button');
        button.id = id;
        button.textContent = text;
        button.classList.add(css);
        app.appendChild(button);
    }
}