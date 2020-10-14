import { PolymerElement, html } from '@polymer/polymer';

export class FooterComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          position: fixed;
          bottom: 0;
          width: 100%;
          height:40px;
          background: #eeeeee;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>

      <logo-component></logo-component>
    `;
  }
}
window.customElements.define('footer-component', FooterComponent);