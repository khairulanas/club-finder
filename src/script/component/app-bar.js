class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
     <style>
         * {
             margin: 0;
             padding: 0;
             box-sizing: border-box;
         }
         :host {
             display: block;
             width: 100%;
             background-color: #0d253f;
             color: white;
             box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
         }
         img {
             margin: 16px;
             max-width:25%;
             height: auto;
         }
     </style>
     <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg">`;
  }
}

customElements.define("app-bar", AppBar);