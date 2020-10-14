import { PolymerElement, html } from '@polymer/polymer';

export class HeaderComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          position: fixed;
          top: 0;
          width: 100%;
          height:40px;
          padding-left: 10px;
          background: #34495e;

          display: flex;
          justify-content: left center;
          align-items: center;
          z-index:1;
        }
      </style>

      <dots-component></dots-component>
    `;
  }
}

window.customElements.define('header-component', HeaderComponent);
