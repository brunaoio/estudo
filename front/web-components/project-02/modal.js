class Modal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = false;

        this.shadowRoot.innerHTML = `
        <style>
            #backdrop{
                position: fixed;
                top:0;
                left:0;
                width:100%;
                height:100vh;
                background: rgba(0,0,0,0.65);
                z-index: 10;
                opacity:0;
                pointer-events:none;
            }
            #modal{
                position:fixed;
                z-index:100;
                top: 10vh;
                left: 25%;
                width: 50%;
                border-radius: 3px;
                background: white;
                border-shadow: 0 2px 8px rgba(0,0,0,0.26);
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                opacity:0;
                pointer-events:none;
                transition: all 0.3s ease-out;
            }

            :host([opened]) #backdrop,
            :host([opened]) #modal{
                opacity:1;
                pointer-events: all;
            }

            :host([opened]) #modal{
                top: 15vh;
            }

            header{
                padding: 1rem;
                border-bottom: 1px solid #ccc;
            }

            ::slotted(h1){
                font-size: 1.25rem;
                margin: 0;
            }

            #main{
                padding: 1rem;
                font-size: 0.95rem;
            }

            #actions{
                border-top: 1px solid #ccc;
                padding: 1rem;
                display: flex;
                justify-content: flex-end;
            }
            #actions button{
                margin: 0 0.50rem;
            }

            header{

            }
        </style>
        <div id="backdrop"></div>
        <div id="modal">
            <header><slot name="title"></slot></header>
            <section id="main">
                <slot></slot>
            </section>
            <section id="actions">
                <button id="btn-cancel">Cancel</button>
                <button id="btn-confirm">Ok</button>
            </section>
        </div>
        `
        const slots = this.shadowRoot.querySelectorAll('slot');
        slots[1].addEventListener('slotchange', () => {
            console.dir(slots[1].assignedNodes());
        });

        const backdrop = this.shadowRoot.querySelector('#backdrop');
        backdrop.addEventListener('click', this._cancel.bind(this));

        const btnConfirm = this.shadowRoot.querySelector('#btn-confirm');
        btnConfirm.addEventListener('click', this._confirm.bind(this));

        const btnCancel = this.shadowRoot.querySelector('#btn-cancel');
        btnCancel.addEventListener('click', (event) => this._cancel(event));

        // btnCancel.addEventListener('cancel', () => {
        //     console.log('evento cancelar interno');
        // });

    }

    attributeChangedCallback(name, oldValue, newValue) {

        if (this.hasAttribute('opened')) {
            this.isOpen = true;
            // this.shadowRoot.querySelector('#modal').style.opacity = 1;
            // this.shadowRoot.querySelector('#modal').style.pointerEvents = 'All';

            // this.shadowRoot.querySelector('#backdrop').style.opacity = 1;
            // this.shadowRoot.querySelector('#backdrop').style.pointerEvents = 'All';
        } else {
            this.isOpen = false;
        }

    }

    static get observedAttributes() {
        return ['opened']
    }

    hide() {
        if (this.hasAttribute('opened')) {
            this.removeAttribute('opened', '');
        }
    }
    open() {
        this.setAttribute('opened', '');

    }

    _cancel(event) {
        this.hide();
        const cancelEvent = new Event('cancel', { bubbles: true, composed: true });
        event.target.dispatchEvent(cancelEvent);
    }

    _confirm() {
        this.hide();
        const confirmEvent = new Event('confirm');
        this.dispatchEvent(confirmEvent);
    }
}

customElements.define('brunao-modal', Modal);