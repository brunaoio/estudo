class ToogleText extends HTMLElement {
    constructor() {
        super();

        this._isHidden = true;
        this._button;
        this._infoEl;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
      #info-box {
        display: none;
      }
    </style>
    <button>Show</button>
    <p id="info-box"><slot></slot></p>
        `

    }

    connectedCallback() {
        this._button = this.shadowRoot.querySelector('button');
        this._infoEl = this.shadowRoot.querySelector('p');
        const isVisible = this.getAttribute("visible");
        if (isVisible) {
            this._toogle();
        }

        this._button.addEventListener('click', () => {
            this._toogle();
        });
    }
    _toogle() {
        console.log('aee');
        if (this._isHidden) {
            console.log('escondido');
            this._infoEl.style.display = 'block';
            this._button.textContent = 'Hide';
            this._isHidden = false;
        } else {

            console.log('visto');
            this._infoEl.style.display = 'none';
            this._button.textContent = 'Show';
            this._isHidden = true;
        }
    }
}

customElements.define('brunao-toggle-text', ToogleText);