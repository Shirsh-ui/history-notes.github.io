customElements.define('point-list', class extends HTMLElement {
    constructor () {
        super();
        let shadow = this.attachShadow({mode: 'open'});
        let container = document.createElement('div');
        let head = document.createElement('div');
        let content = document.createElement('div');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');

        let content1 = this.children[0].innerHTML;
        let content2 = this.children[1].innerHTML;

        h1.innerHTML = content1;
        p.innerHTML = content2;
        head.appendChild(h1);
        content.appendChild(p);
        container.appendChild(head);
        container.appendChild(content);
        shadow.appendChild(container);
    }
});