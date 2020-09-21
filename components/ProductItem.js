app.component("product-item", {
  template:
    /* html */
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" alt="item image" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <h1>{{ product }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping :{{shipping}}</p>
        <ul>
          <li v-for="detail in details" :key="detail">{{detail}}</li>
        </ul>
        <div
          v-for="(variant,index) in variants"
          :key="index"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{backgroundColor:variant.color}"
        ></div>
        <button
          class="button"
          @click="addToCart"
          :disabled="!inStock"
          :class="{disabledButton:!inStock}"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>`,
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      product: "Boots",
      selectedVariant: 0,
      inventory: 100,
      brand: "Nike",
      product: "Socks",
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          qty: 40,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          qty: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].qty;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return 2.99;
      }
    },
  },
});
