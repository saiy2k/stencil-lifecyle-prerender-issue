import { Component, h } from '@stencil/core';

@Component({
    tag                         :   'app-home',
    styleUrl                    :   'app-home.css'
})
export class AppHome {

    private ngoList                =   [];

    constructor() {
        console.log('Home :: constructor');
    }

    async componentWillLoad() {
        console.log('Home :: will load');
        const resp              =   await fetch('/assets/data/ngos.json');
        this.ngoList            =   await resp.json();
    }

    async componentDidLoad() {
        console.log('Home :: did load');
    }

    render() {
        return [
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Home</ion-title>
            </ion-toolbar>
        </ion-header>,

        <ion-content class="ion-padding">
            <p>
                Welcome to the PWA Toolkit. You can use this starter to build entire
                apps with web components using Stencil and ionic/core! Check out the
                README for everything that comes in this starter out of the box and
                check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
            </p>

            { this.ngoList.map(n => (
                <ion-button href={`/profile/${n.name.toLowerCase().replace(/ /g, '-')}`} expand="block"> { n.name } </ion-button>
            )) }
        </ion-content>
        ];
    }
}
