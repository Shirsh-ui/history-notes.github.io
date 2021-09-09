customElements.define('point-list', class extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({
        mode: 'open'
      });
      let container = document.createElement('div');
      let head = document.createElement('div');
      let content = document.createElement('div');
      let h3 = document.createElement('h3');
  
      h3.innerHTML = this.children[0].innerHTML;
      content.innerHTML = this.children[1].innerHTML;
  
      h3.style.marginTop = "10px";
      h3.style.marginBottom = "10px";
  
      head.appendChild(h3);
      container.appendChild(head);
      container.appendChild(content);
      shadow.appendChild(container);
    }
  });
  
