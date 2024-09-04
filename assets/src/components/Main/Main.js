class Main {
  constructor(rootId) {
    this.root = document.getElementById(rootId);
    this.render();
  }
  render() {
    if (!this.root.querySelector("main")) {
      this.root.innerHTML += `
              <main>
                  Main
              </main>
              `;
    }
  }
}

export default Main;
