class AppBar extends HTMLElement {
  connectedCallback() {
    //akan terpanggil ketika element telah diterapkan pada DOM
    //Jika kita ingin element ini ketika diterapkan langsung melakukan rendering maka kita dapat memanggil fungsi this.render()
    this.render();

  }

  render() {
    this.innerHTML = `<h2>Club Finder</h2>`;
  }
}

customElements.define("app-bar", AppBar);