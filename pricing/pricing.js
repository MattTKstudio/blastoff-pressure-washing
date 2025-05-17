// pricing.js – central pricing module for BPW site

const pricing = {
  services: {
    "Soft Washing": {
      pricePerSqFt: 0.5,
      unit: "sq ft",
      sale: false
    },
    "Driveway Cleaning": {
      pricePerSqFt: 0.5,
      unit: "sq ft",
      sale: false,
      salePrice: 0.5
    },
    "Roof Cleaning": {
      pricePerSqFt: 0.75,
      unit: "sq ft",
      sale: false
    },
    "Gutter Cleaning": {
      pricePerLinearFt: 1.0,
      unit: "linear ft",
      sale: false
    },
    "Window Cleaning": {
      pricePerWindow: 7.0,
      unit: "per window",
      sale: false
    },
    "Real Estate Packages": {
      flatRate: 1500.99,
      unit: "per home",
      sale: false
    }
  },

  getPrice(serviceName) {
    const service = this.services[serviceName];
    if (!service) return null;

    if (service.sale && service.salePrice) {
      return `$${service.salePrice.toFixed(2)} ${service.unit} (sale)`;
    }

    if (service.pricePerSqFt) {
      return `$${service.pricePerSqFt.toFixed(2)} ${service.unit}`;
    } else if (service.pricePerLinearFt) {
      return `$${service.pricePerLinearFt.toFixed(2)} ${service.unit}`;
    } else if (service.pricePerWindow) {
      return `$${service.pricePerWindow.toFixed(2)} ${service.unit}`;
    } else if (service.flatRate) {
      return `$${service.flatRate.toFixed(2)} ${service.unit}`;
    }

    return "Contact us for pricing";
  }
};

// Example usage:
// document.getElementById("softwash-price").textContent = pricing.getPrice("Soft Washing");
