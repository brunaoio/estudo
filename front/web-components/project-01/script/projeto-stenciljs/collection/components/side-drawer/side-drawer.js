import { h } from "@stencil/core";
import { Component, Method, Prop, State } from "@stencil/core/internal";
export class SideDrawer {
  onCloseDrawer() {
    this.opened = false;
  }
  onChangeContent(content) {
    this.showContactInfo = content === 'contact';
  }
  async open() {
    this.opened = true;
    return this.opened;
  }
  render() {
    let mainContent = h("slot", null);
    if (this.showContactInfo) {
      mainContent = (h("div", { id: "contact-information" },
        h("h2", null, "Contact Information"),
        h("p", null, "You can reach us via phone or e-mail"),
        h("ul", null,
          h("li", null, "Phone: 55 21 974750921"),
          h("li", null,
            "E-mail: ",
            h("a", { href: "mailto:tocarj@gmail.com" }, "tocarj@gmail.com")))));
    }
    return ([h("div", { class: "backdrop", onClick: this.onCloseDrawer.bind(this) }),
      h("aside", null,
        h("header", null,
          h("h1", null, this.titulo),
          h("button", { onClick: this.onCloseDrawer.bind(this) }, "X")),
        h("section", { id: "tabs" },
          h("button", { class: !this.showContactInfo ? 'active' : '', onClick: this.onChangeContent.bind(this, 'nav') }, "Navigation"),
          h("button", { class: this.showContactInfo ? 'active' : '', onClick: this.onChangeContent.bind(this, 'contact') }, "Contact")),
        h("main", null, mainContent))]);
    // let content = null;
    // if (this.open) {
    //     content = (
    //         <aside>
    //             <header>
    //                 <h1>{this.titulo}</h1>
    //             </header>
    //             <main>
    //                 <slot></slot>
    //             </main>
    //         </aside>);
    // }
    // return content;
  }
  static get is() { return "brio-side-drawer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./side-drawer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["side-drawer.css"]
  }; }
  static get properties() { return {
    "titulo": {
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
      "attribute": "titulo",
      "reflect": true
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
      "reflect": true
    }
  }; }
  static get states() { return {
    "showContactInfo": {}
  }; }
  static get methods() { return {
    "open": {
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
