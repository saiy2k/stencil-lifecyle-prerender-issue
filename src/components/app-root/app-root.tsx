import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

    constructor() {
        console.log('Root :: constructor');
    }

    async componentWillLoad() {
        console.log('Root :: will load');
    }

    async componentDidLoad() {
        console.log('Root :: did load');
    }


  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
