import { h } from "@stencil/core";
import { Component, Prop } from "@stencil/core/internal";

@Component({
    tag: 'brio-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true,
})
export class SideDrawer {
    @Prop({ reflect: true }) titulo: string;
    render() {
        return (
            <aside>
                <header>
                    <h1>{this.titulo}</h1>
                </header>
                <main>
                    <slot></slot>
                </main>
            </aside>);
    }

}