import { Component, Prop, h, Method } from "@stencil/core";

@Component({
    tag: 'brio-tooltip',
    styleUrl: './tooltip.css',
    shadow: true
})
export class Tooltip {
    @Prop({ reflect: true }) texto: string;
    @Prop({ reflect: true }) icon = "?";
    @Prop({ reflect: true, mutable: true }) opened = false;

    @Method()
    toogle() {
        this.opened = !this.opened;
        //console.log(this.opened);
    }
    render() {
        return (
            <host>
                <slot></slot>
                <span id="icon" onClick={this.toogle.bind(this)}>{this.icon}</span>
                <div id="texto-tooltip">{this.texto}</div>
            </host>
        )
    }
}