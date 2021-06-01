class Tooltip extends HTMLElement {
    informa = () => {
        console.log("it's working");
    }
    constructor() {
        super();
        this._tooltipIcon;
        this._isTooltipVisible = false;
        this._toolTipText = "Texto teste";
        //this.informa();
        this.attachShadow({ mode: 'open' });
        // const template = document.querySelector("#tooltip-template");
        // this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.innerHTML = `
        <style>
        div{
            font-weight:normal;
            background-color: black;
            color: white;
            position: absolute;
            z-index:10;
            top: 1.7rem;
            
            padding:0.15rem;
            border-radius:3px;
            box-shadow:1px 1px 6px rgba(0,0,0,26);
        }
        :host{
            background:var(--color-primary, #ccc);
            padding: 5px;
            position: relative;
        }

        :host(.important){
            background:#ccc;
           
        }

        :host-context(p){
            font-weight:bold;
        }
        .highlight{
            background-color: red;
        }

        .icon{
            background: black;
            padding: 1px 0.27rem;
            color: white;
            border-radius:9px;
        }
        .icon:hover{
            cursor: pointer;
        }
        ::slotted(.highlight){
            border-bottom: 2px dotted red;
        }
        </style>
        <slot>Some default</slot>
        <span class='icon'>?</span>`;
    }

    connectedCallback() {
        if (this.hasAttribute("text")) {
            this._toolTipText = this.getAttribute('text');
        }

        this._tooltipIcon = this.shadowRoot.querySelector('span');

        this._tooltipIcon.addEventListener('mouseenter', this._showToolTip.bind(this));
        this._tooltipIcon.addEventListener('mouseleave', this._hideToolTip.bind(this));
        this.shadowRoot.appendChild(this._tooltipIcon);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        if (name === 'text') {
            this._toolTipText = newValue;
        }
    }

    disconnectedCallback() {

        this._tooltipIcon.removeEventListener('mouseenter', this._showToolTip);
        this._tooltipIcon.removeEventListener('mouseleave', this._hideToolTip);
        console.log('disconnected');
    }
    static get observedAttributes() {
        return ['text'];
    }

    _render() {
        let toolTipContainer = this.shadowRoot.querySelector('div');
        if (this._isTooltipVisible) {
            toolTipContainer = document.createElement('div');
            toolTipContainer.textContent = this._toolTipText;
            // this._toolTipContainer.style.backgroundColor = "black";
            // this._toolTipContainer.style.color = "white";
            // this._toolTipContainer.style.position = "absolute";
            // this._toolTipContainer.style.zIndex = 10;
            this.shadowRoot.appendChild(toolTipContainer);
        } else {
            if (toolTipContainer) {
                this.shadowRoot.removeChild(toolTipContainer);
            }
        }


    }

    _showToolTip() {
        this._isTooltipVisible = true;
        this._render();

    }

    _hideToolTip() {
        this._isTooltipVisible = false;
        this._render();
    }

}

customElements.define('brunao-tooltip', Tooltip)