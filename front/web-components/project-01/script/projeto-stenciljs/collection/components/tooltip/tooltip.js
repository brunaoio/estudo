import { Component, Prop, h, Method } from "@stencil/core";
export class Tooltip {
  constructor() {
    this.icon = "?";
    this.opened = false;
  }
  async toogle() {
    this.opened = !this.opened;
    return this.opened;
    //console.log(this.opened);
  }
  render() {
    return (h("host", null,
      h("slot", null),
      h("span", { id: "icon", onClick: this.toogle.bind(this) }, this.icon),
      h("div", { id: "texto-tooltip" }, this.texto)));
  }
  static get is() { return "brio-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./tooltip.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tooltip.css"]
  }; }
  static get properties() { return {
    "texto": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "texto",
      "reflect": true
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon",
      "reflect": true,
      "defaultValue": "\"?\""
    },
    "opened": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "opened",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get methods() { return {
    "toogle": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
