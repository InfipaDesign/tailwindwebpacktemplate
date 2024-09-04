class Header {
  constructor(rootId) {
    this.root = document.getElementById(rootId);
    this.render();
  }
  render() {
    if (!this.root.querySelector("header")) {
      this.root.innerHTML += `
            <header class="bg-green-300 text-center text-2xl">
                My App
            </header>
            `;
    }
  }
}

export default Header