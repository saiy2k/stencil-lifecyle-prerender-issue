import { Component, Prop, State, h } from '@stencil/core';
import { sayHello } from '../../helpers/utils';

@Component({
    tag: 'app-profile',
    styleUrl: 'app-profile.css'
})
export class AppProfile {

    @State() state = false;
    @Prop() name: string;

    private ngoData;

    async componentWillLoad() {
        const resp              =   await fetch(`/assets/data/${this.name}.json`);
        this.ngoData            =   await resp.json();
    }

    render() {
        return [
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/" />
                </ion-buttons>
                <ion-title>Profile: {this.ngoData.name}</ion-title>
            </ion-toolbar>
        </ion-header>,

        <ion-content class="ion-padding">

            <ul>
                {this.ngoData.activities.map(a => (
                    <li> {a} </li>
                ))}
            </ul>

        </ion-content>
        ];
    }
}
