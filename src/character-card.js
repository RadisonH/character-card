import { LitElement, html, css } from 'lit';

export class CharacterCard extends LitElement {
  static get properties() {
    return {
      version: {
        type: String,
        reflect: true
      }
    }
  }

  static get styles() {
    return css`
    .wrapper {
      width: 800px;
      border: 2px solid black;
      display: inline-flex;
    }
    .image {
      width: 800px;
    }
    .header {
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
    }
    .header h3:hover {
      font-style: italic;
      font-size: 1.1em;
    }
    .header h3,
    .header h4 {
      transition: .3s ease-in-out all;
      margin: 16px;
      font-style: normal;
    }
    .buttons button:focus,
    .buttons button:hover {
      background-color: lightgrey;
    }
    .buttons button:active {
      background-color: darkgray;
    }
    .buttons {
      display: block;
    }
    button{
      padding: 12px;
      font-size: 32px;
    }
    details {
      margin-left: 24px;
      padding: 10px;
    }
    .details summary {
      font-size: 20px;
      font-weight: bold;
    }
    @media only screen and (max-width:1200px){
      .wrapper {
        background-color: lightblue;
      }
    }
    @media only screen and (max-width:600px){
      .wrapper {
        background-color: purple;
      }
    }
    @media only screen and (max-width:425px){
      .wrapper {
        font-weight: normal;
      }
      .wrapper .header h3 {
        font-size: 12px;
      }
      .wrapper header h4 {
        font-size: 10px !important;
      }
      details {
        display: none;
      }
    }
    `;  
  }

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
<div class="wrapper">
  <div class="container">
    <img class="image" src="https://mma.prnewswire.com/media/133147/SVB_LOGO.jpg?p=facebook"
    <div class="header">
      <h3>Silicon Valley Bank</h3>
      <h4>Americas #1 most trusted bank</h4>
    </div>
    <details class="details">
    <summary>Special Effects:</summary>
    <div>
      <ul>
        <li>Buy long-maturity assets in downmarket</li>
        <li>Wait till they become highly corrolated to interest rates</li>
        <li>Go bankrupt and watch companies burn</li>
        <li>After losing all hope, have the treasury bail you out</li>
      </ul>
    </div>
    </details>
  </div>
</div>
    `;
  }
}

customElements.define('character-card', CharacterCard);