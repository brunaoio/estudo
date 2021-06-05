import { h } from "@stencil/core";
import { Component, Method, Prop, State } from "@stencil/core/internal";

@Component({
    tag: 'brio-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true,
})
export class SideDrawer {
    @State() showContactInfo: boolean;
    @Prop({ reflect: true }) titulo: string;
    @Prop({ reflect: true, mutable: true }) opened: boolean;

    onCloseDrawer() {
        this.opened = false;
    }

    onChangeContent(content: string) {
        this.showContactInfo = content === 'contact';
    }

    @Method()
    open() {
        this.opened = true;
    }
    render() {
        let mainContent = <slot></slot>;
        if (this.showContactInfo) {
            mainContent = (
                <div id="contact-information">
                    <h2>Contact Information</h2>
                    <p>You can reach us via phone or e-mail</p>
                    <ul>
                        <li>Phone: 55 21 974750921</li>
                        <li>
                            E-mail: <a href="mailto:tocarj@gmail.com">tocarj@gmail.com</a>
                        </li>
                    </ul>
                </div>
            );
        }
        return (
            [<div class="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>,
            <aside>
                <header>
                    <h1>{this.titulo}</h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs">
                    <button class={!this.showContactInfo ? 'active' : ''}
                        onClick={this.onChangeContent.bind(this, 'nav')}>
                        Navigation
                        </button>
                    <button class={this.showContactInfo ? 'active' : ''}
                        onClick={this.onChangeContent.bind(this, 'contact')}>
                        Contact
                        </button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>]);

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

}