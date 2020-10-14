import { PolymerElement, html } from '@polymer/polymer';

export class LogoComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display:inline;
          height:100%;
        }

        img {
          height:100%;
        }
      </style>

      <img src="images/logo.png"/>
    `;
  }
}

window.customElements.define('logo-component', LogoComponent);
