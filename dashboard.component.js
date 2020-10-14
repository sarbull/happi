import { PolymerElement, html } from '@polymer/polymer';
import 'paper-grid';

export class DashboardComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display:block;
          margin-top:40px;
          position:absolute;
        }

        paper-grid {}

        paper-grid tile {
          background: #777777;
        }

        paper-grid tile>span:not([resize]) {
          flex: 1;
          text-align: center;
          font-size: 1.2em;
          font-family: "Roboto";
        }

        paper-grid [resize] {
          position: absolute;
        }

        paper-grid [resize="bottom-right"] {
          bottom: 0;
          right: 0;
          cursor: nwse-resize;
        }

        dom-repeat {
          display: none;
        }

        .resize {
          font-size:14px;
          padding-right:4px;
        }

        #container > ::slotted(tile) {
          display:block;
        }
      </style>

      <paper-grid id="dashboard"
                  col-autogrow=""
                  row-autogrow=""
                  draggable=""
                  resizable=""
                  overlappable=""
                  col-count="12"
                  row-count="7"
                  cell-margin="5">
        <tile col="1" row="1" height="4" width="3">
          <close-me></close-me>

          <span class="resize" resize="bottom-right">&lrcorner;</span>
        </tile>

        <tile col="5" row="3" height="5" width="4">
          <close-me></close-me>
          <span class="resize" resize="bottom-right">&lrcorner;</span>
        </tile>

        <tile col="6" row="0" width="3" height="2">
          <close-me></close-me>
          <span class="resize" resize="bottom-right">&lrcorner;</span>
        </tile>
      </paper-grid>
    `;
  }
}

window.customElements.define('dashboard-component', DashboardComponent);
