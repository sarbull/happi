import { PolymerElement, html } from '@polymer/polymer';

export class CloseMe extends PolymerElement {
  static get template() {
    return html`
      <button on-click="onClick">&#9587;</button>
    `;
  }

  onClick() {
    this.parentElement.remove();
  }
}

window.customElements.define('close-me', CloseMe);
