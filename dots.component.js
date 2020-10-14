import { PolymerElement, html } from '@polymer/polymer';

import { DomIf } from '@polymer/polymer/lib/elements/dom-if';

export class DotsComponent extends PolymerElement {
  static get properties() {
    return {
      showMenu: {
        type: Boolean,
        value: false
      }
    }
  }

  static get template() {
    return html`
      <style>
        :host {
          display:inline-block;
          margin:0;
          padding:0;
          height:22px;
        }

        svg:hover {
          cursor:pointer;
        }

        .main-menu {
          margin-top:10px;
          background-color: #ffffff;
          width:600px;
          height:200px;
          padding:15px;
          border-radius: 5px;

          border: 1px solid rgba(0,0,0,0.2);
          box-shadow: 0 0px 1px 0 rgba(60,64,67,.30), 0 1px 6px 1px rgba(60,64,67,.15);
        }
      </style>

      <svg on-click="onClickMenu" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19" cy="19" r="3" fill="white"/>
        <circle cx="11" cy="19" r="3" fill="white"/>
        <circle cx="19" cy="11" r="3" fill="white"/>
        <circle cx="3" cy="11" r="3" fill="white"/>
        <circle cx="11" cy="3" r="3" fill="white"/>
        <circle cx="3" cy="3" r="3" fill="white"/>
        <circle cx="3" cy="19" r="3" fill="white"/>
        <circle cx="11" cy="11" r="3" fill="white"/>
        <circle cx="19" cy="3" r="3" fill="white"/>
      </svg>

      <template is="dom-if" if="{{ showMenu }}">
        <div class="main-menu">
          <button on-click="_openComponent" data-name="Component 1">Component 1</button>
          <button on-click="_openComponent" data-name="Component 2">Component 2</button>
          <button on-click="_openComponent" data-name="Component 3">Component 3</button>
        </div>
      </template>
    `;
  }

  onClickMenu() {
    this.showMenu = !this.showMenu;
  }

  _openComponent(e) {
    this.onClickMenu();
    
    console.log(e.currentTarget.getAttribute('data-name'));
  }
}

window.customElements.define('dots-component', DotsComponent);
