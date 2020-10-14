import { PolymerElement, html } from '@polymer/polymer';

export class HappiAppComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display:block;
          height:100vh;
          width:100%;
        }
      </style>

      <header-component></header-component>

      <dashboard-component></dashboard-component>

      <footer-component></footer-component>
    `;
  }
}

customElements.define('happi-app', HappiAppComponent);