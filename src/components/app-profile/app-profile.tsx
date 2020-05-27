import { Build, Component, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'app-profile',
    styleUrl: 'app-profile.css'
})
export class AppProfile {

    @State() state = false;
    @Prop() name: string;

    private ngoData;

    constructor() {
        console.log('Profile :: constructor: ', this.name);
    }

    async componentWillLoad() {
        if (Build.isBrowser) {
            //await document.querySelector("app-root").componentOnReady();
        }
        console.log('Profile :: will load --> ', this.name, this.ngoData);
        try {
            const resp              =   await fetch(`/assets/data/${this.name}.json`);
            this.ngoData            =   await resp.json();
            console.log('Profile :: will load :: load success --> ', this.name, this.ngoData);
        } catch (err) {
            this.ngoData            =   {
                name                :   'dummy',
                activities          :   ['hi', 'bye']
            };
            console.log('Profile :: will load :: load failure --> ', this.name, this.ngoData);
        }
    }

    async componentDidLoad() {
        console.log('Profile :: did load --> ', this.name, this.ngoData);
    }

    render() {
        console.log('Profile :: render --> ', this.name, this.ngoData);
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
