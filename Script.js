class MeuComponente extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                p {
                    color: blue;
                    font-size: 20px;
                }
            </style>
            <p>Olá, eu sou um WebComponente!</p>
        `;
    }
}

customElements.define("meu-componente", MeuComponente);