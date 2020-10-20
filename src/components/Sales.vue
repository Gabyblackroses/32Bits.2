<template>
  <div>
    <p>Hay {{ availableGames.length }} juegos con stock.</p>
    <list :hasButton="true" :games="availableGames" @sell-product="saleProduct"></list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import List from "@/components/List";
export default {
  components: {
    List,
  },
  computed: {
    ...mapGetters(["availableGames"]),

    titleTotalStock() {
      return `Cantidad de juegos con Stock: ${this.availableGames.length}`
    }
  },
  methods: {
    ...mapActions(["processSale"]),
    saleProduct(payload) {
      // eslint-disable-next-line
      this.processSale(payload.game);
    },
  },
};
</script>
