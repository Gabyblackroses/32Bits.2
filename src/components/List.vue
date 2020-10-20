<template>
  <div>
    <ul>
      <li
        v-for="game in games" :key="game.id" :style="{ backgroundColor: game.color }">
        {{ game.id }} | {{ game.name }} | {{ game.stock }} | {{ game.price }}
        <button v-if="hasButton" @click="sellProduct(game)">Vender</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["games", "hasButton"],
  methods: {
    sellProduct(game) {
      this.$emit("sell-product", { game: game });
    },
  },
};
</script>
