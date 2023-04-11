export default class Component {
    br(id, loc) {
        const br = document.createElement('br');
        br.id = id;
        document.getElementById(loc).appendChild(br)
    }

    funcButton(id, loc, css, text, func) {
        const button = document.createElement('button');
        button.id = id;
        button.classList.add(css);
        button.textContent = text;
        button.onclick = function() {
            window[func]();
        }
        document.getElementById(loc).appendChild(button);
    }

    urlButton(id, loc, css, text) {
        const button = document.createElement('button');
        button.id = id;
        button.classList.add(css);
        button.textContent = text;
        document.getElementById(loc).appendChild(button);
    }

    table(id, loc, css) {
        const table = document.createElement('table');
        table.id = id;
        table.classList.add(css);
        document.getElementById(loc).appendChild(table);
    }

    thead(id, loc) {
        const thead = document.createElement('thead');
        thead.id = id;
        document.getElementById(loc).appendChild(thead);
    }

    tbody(id, loc) {
        const tbody = document.createElement('tbody');
        tbody.id = id;
        document.getElementById(loc).appendChild(tbody);
    }

    tr(id, loc) {
        const tr = document.createElement('tr');
        tr.id = id;
        document.getElementById(loc).appendChild(tr);
    }

    th(id, loc, css, text) {
        const th = document.createElement('th');
        th.id = id;
        th.classList.add(css);
        th.textContent = text;
        document.getElementById(loc).appendChild(th);
    }

    td(id, loc, css, text) {
        const td = document.createElement('td');
        td.id = id;
        td.classList.add(css);
        td.textContent = text;
        document.getElementById(loc).appendChild(td);
    }

    input(id, loc, css, text, min, max, width) {
        const input = document.createElement('input');
        input.id = id;
        input.classList.add(css);
        input.textContent = text;
        input.minLength = min;
        input.maxLength = max;
        input.width = width;
        document.getElementById(loc).appendChild(input);
    }

    engInput(id, loc, css, text, min, max, width) {
        const input = document.createElement('input');
        input.id = id;
        input.classList.add(css);
        input.textContent = text;
        input.minLength = min;
        input.maxLength = max;
        input.width = width;
        input.oninput = input.value = input.value.replace(/[0-9]|[^\!-z]/g, '');
        document.getElementById(loc).appendChild(input);
    }

    numberInput(id, loc, css, text, min, max, width) {
        const input = document.createElement('input');
        input.id = id;
        input.classList.add(css);
        input.textContent = text;
        input.minLength = min;
        input.maxLength = max;
        input.width = width;
        input.oninput = input.value = input.value.replace(/[^0-9]/g, '');
        document.getElementById(loc).appendChild(input);
    }

    addRow() {

    }

    delRow() {

    }

    postPhp(url, value) {
        fetch(url, {
          method: 'POST',
          body: value
        })
          .then(respons => respons.json)
          .then(result => { return result });
      }
}