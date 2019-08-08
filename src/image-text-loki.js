import {LitElement, html, css} from 'lit-element';
import {ifDefined} from 'lit-html/directives/if-defined';

class ImageTextLoki extends LitElement {
  render() {
    return html`
      <figure>

        <div>
          <slot name='title'></slot>
          
          <slot name='image'></slot>
          <img 
            src='${this.src}' 
            alt='${ifDefined(this.alt)}' 
            width='${ifDefined(this.width)}' 
            height='${ifDefined(this.height)}'>
        </div>

        <div>
          <slot name='caption'></slot>
          ${this.caption ? 
            html`<figcaption>${this.caption}</figcaption>` : ``  
          }

          <slot name='description'></slot>
          ${this.description ?
            html`<p>${this.description}</p>` : ``
          }
          
          <slot name='link'></slot>
          <a href='${this.href}' title='${ifDefined(this.linkTitle)}' target="${ifDefined(this.target)}">
          ${this.linkTitle}
          </a>
        </div>
      </figure>
    `;
  }

  static get properties() {
    return {
      src: {type: String},
      alt: {type: String},
      width: {type: Number},
      height: {type: Number},
      caption: {type: String},
      description: {type: String},
      href: {type: String},
      target: {type: String},
      linkTitle: {type: String},
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      @media (min-width: 768px) {
        figure {
          columns: 2
        }
      }
    `;
  }
}

customElements.define('image-text-loki', ImageTextLoki);