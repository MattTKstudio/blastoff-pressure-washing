// pricing/pricing.js — Central pricing configuration and utility for BPW website

const pricing = {
  services: {
    "Driveway Cleaning": {
      pricePerSqFt: .5,
      unit: "sq ft",
      sale: true,
      salePrice: 0.35
    },
    "Soft Washing": {
      pricePerSqFt: .5,
      unit: "sq ft",
      sale: false,
      salePrice: 0.35
    },
    "Roof Cleaning": {
      pricePerSqFt: 0.5,
      unit: "sq ft",
      sale: false,
      salePrice: 0.35
    },
    "Gutter Cleaning": {
      pricePerLinearFt: 1.0,
      unit: "linear ft",
      sale: false,
      salePrice: 0.35
    },
    "Window Cleaning": {
      pricePerWindow: 7.0,
      unit: "per window",
      sale: false,
      salePrice: 5.0
    },
    "AC Unit Cleaning": {
      pricePerUnit: 85.0,
      unit: "per unit",
      sale: true,
      salePrice: 60.0
    }
  },

  /**
   * Get formatted price string for a given service
   * @param {string} serviceName - The name of the service
   * @returns {string} - A price string or "Pricing unavailable"
   */
  getPrice(serviceName) {
    const service = this.services[serviceName];
    if (!service) return "Pricing unavailable";

    // Show sale price if applicable
    if (service.sale && service.salePrice) {
      return `$${service.salePrice.toFixed(2)} ${service.unit} (sale)`;
    }

    // Determine pricing format
    if ("pricePerSqFt" in service) {
      return `$${service.pricePerSqFt.toFixed(2)} ${service.unit}`;
    }
    if ("pricePerLinearFt" in service) {
      return `$${service.pricePerLinearFt.toFixed(2)} ${service.unit}`;
    }
    if ("pricePerWindow" in service) {
      return `$${service.pricePerWindow.toFixed(2)} ${service.unit}`;
    }
    if ("pricePerUnit" in service) {
      return `$${service.pricePerUnit.toFixed(2)} ${service.unit}`;
    }

    return "Contact us for pricing";
  },

  /**
   * Inject prices into the DOM based on expected element IDs
   */
  injectPrices() {
    const serviceToId = {
      "Soft Washing": "soft-washing-price",
      "Driveway Cleaning": "driveway-cleaning-price",
      "Roof Cleaning": "roof-cleaning-price",
      "Window Cleaning": "window-cleaning-price",
      "Gutter Cleaning": "gutter-cleaning-price",
      "AC Unit Cleaning": "ac-unit-cleaning-price"
    };

    for (const [service, id] of Object.entries(serviceToId)) {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = this.getPrice(service);
      }
    }
  }
};

// Automatically inject prices on page load
window.addEventListener("DOMContentLoaded", () => {
  pricing.injectPrices();
});
