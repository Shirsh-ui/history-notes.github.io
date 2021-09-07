customElements.define('point-list', class extends HTMLElement {
    constructor () {
        super();
        let shadow = this.attachShadow({mode: 'open'});
        let container = document.createElement('div');
        let head = document.createElement('div');
        let content = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        let content1 = this.children[0].innerHTML;
        let content2 = this.children[1].innerHTML;

        h3.innerHTML = content1;
        p.innerHTML = content2;

        h3.style.paddingTop = "10px";
        h3.style.paddingBottom = "10px";

        head.appendChild(h3);
        content.appendChild(p);
        container.appendChild(head);
        container.appendChild(content);
        shadow.appendChild(container);
    }
});
