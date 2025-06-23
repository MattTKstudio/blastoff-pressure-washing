// pricing/pricing.js — Central pricing configuration and injection system for BPW site

const pricing = {
  services: {
    "Driveway Cleaning": {
      type: "sqFt",
      price: 0.5,
      sale: false,
      salePrice: 0.35
    },
    "Soft Washing": {
      type: "sqFt",
      price: 0.5,
      sale: false,
      salePrice: 0.35
    },
    "Roof Cleaning": {
      type: "sqFt",
      price: 0.50,
      sale: false,
      salePrice: 0.35
    },
    "Gutter Cleaning": {
      type: "linearFt",
      price: 1.0,
      sale: false,
      salePrice: 0.35
    },
    "Window Cleaning": {
      type: "perWindow",
      price: 7.0,
      sale: false,
      salePrice: 5.0
    },
    "AC Unit Cleaning": {
      type: "perUnit",
      price: 120.0,
      sale: true,
      salePrice: 99.0
    }
  },

  units: {
    sqFt: "sq ft",
    linearFt: "linear ft",
    perWindow: "per window",
    perUnit: "per unit"
  },

  /**
   * Returns formatted price string for a given service name.
   * @param {string} serviceName
   * @returns {string}
   */
  getPrice(serviceName) {
    const service = this.services[serviceName];
    if (!service) return "Pricing unavailable";

    const unitLabel = this.units[service.type] || "";
    const basePrice = service.price;
    const salePrice = service.sale ? service.salePrice : null;

    if (salePrice) {
      return `$${salePrice.toFixed(2)} ${unitLabel} (sale)`;
    }

    return `$${basePrice.toFixed(2)} ${unitLabel}`;
  },

  /**
   * Injects prices into the DOM using known IDs for each service
   */
  injectPrices() {
    const ids = {
      "Soft Washing": "soft-washing-price",
      "Driveway Cleaning": "driveway-cleaning-price",
      "Roof Cleaning": "roof-cleaning-price",
      "Window Cleaning": "window-cleaning-price",
      "Gutter Cleaning": "gutter-cleaning-price",
      "AC Unit Cleaning": "ac-unit-cleaning-price"
    };

    for (const [serviceName, elementId] of Object.entries(ids)) {
      const el = document.getElementById(elementId);
      if (el) {
        el.textContent = this.getPrice(serviceName);
      }
    }
  }
};

// Inject prices once the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  pricing.injectPrices();
});
