import { PolymerElement, html } from '@polymer/polymer';
import '@fluidnext-polymer/paper-grid';

class HappiApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        paper-grid {
          // border: solid 2px #ADADAD;
        }

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

        paper-grid [resize="bottom-left"] {
          bottom: 0;
          left: 0;
          cursor: nesw-resize;
        }

        paper-grid [resize="top-right"] {
          top: 0;
          right: 0;
          cursor: nesw-resize;
        }

        paper-grid [resize="top-left"] {
          top: 0;
          left: 0;
          cursor: nwse-resize;
        }

        paper-grid [resize="left"] {
          top: 50%;
          left: 0;
          cursor: ew-resize;
          margin-top: -10px;
        }

        paper-grid [resize="top"] {
          top: 0%;
          width: 100%;
          text-align: center;
          cursor: ns-resize;
        }

        paper-grid [resize="right"] {
          top: 50%;
          right: 0;
          cursor: ew-resize;
          margin-top: -10px;
        }

        paper-grid [resize="bottom"] {
          bottom: 0;
          width: 100%;
          text-align: center;
          cursor: ns-resize;
        }

        dom-repeat {
          display: none;
        }

        .resize {
          font-size:14px;
          padding-right:4px;
        }
      </style>

      <div style="background-color:#000000;height:40px;">

      </div>

      <paper-grid id="dashboard"
                  auto-adjustment=""
                  draggable=""
                  resizable=""
                  overlappable=""
                  cell-margin="5">
          <tile col="1" row="1" height="1" width="1">
            <span class="resize" resize="bottom-right">&lrcorner;</span>
          </tile>

          <tile col="5" row="0" height="2" width="1">
            <span class="resize" resize="bottom-right">&lrcorner;</span>
          </tile>

          <tile col="2" row="3" height="2" width="2">
            <span class="resize" resize="bottom-right">&lrcorner;</span>
          </tile>

          <tile col="8" row="3" height="2" width="2">
            <span class="resize" resize="bottom-right">&lrcorner;</span>
          </tile>
      </paper-grid>

      <div style="background-color:#000000;height:40px;">

      </div>
    `;
  }
}

customElements.define('happi-app', HappiApp);