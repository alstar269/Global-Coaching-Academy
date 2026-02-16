/**
 * @class ResourceCard
 * A custom element to display a resource with a title, description, and a link.
 *
 * @property {string} title - The title of the card.
 * @property {string} description - The body text of the card.
 * @property {string} link - The URL for the call-to-action link.
 * @property {string} link-text - The text for the link.
 */
class ResourceCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: var(--surface-color, #1E1E1E);
          border: 1px solid #333;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        h3 {
          color: var(--primary-color, #BB86FC);
          margin: 0 0 0.5rem 0;
        }
        p {
          margin: 0 0 1rem 0;
        }
        a {
          color: var(--secondary-color, #03DAC6);
          font-weight: bold;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
      <div>
        <h3>${this.getAttribute('title') || 'Untitled'}</h3>
        <p>${this.getAttribute('description') || 'No description provided.'}</p>
        <a 
          href="${this.getAttribute('link') || '#'}"
          target="_blank" 
          rel="noopener noreferrer"
        >
          ${this.getAttribute('link-text') || 'Learn More'}
        </a>
      </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('resource-card', ResourceCard);