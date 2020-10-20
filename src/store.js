import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "32 beats",
    subtitle: "Juegos de PC y consola",
    games: [
      {
        id: "0001",
        name: "Sekiro",
        stock: 100,
        price: 30000,
        color: "red",
        outstanding: true,
      },
      {
        id: "0002",
        name: "Fifa 21",
        stock: 100,
        price: 25000,
        color: "blue",
        outstanding: false,
      },
      {
        id: "0003",
        name: "Gears of War 4",
        stock: 100,
        price: 15000,
        color: "green",
        outstanding: true,
      },
      {
        id: "0004",
        name: "Mario Tennis Aces",
        stock: 100,
        price: 35000,
        color: "yellow",
        outstanding: false,
      },
      {
        id: "0005",
        name: "Bloodborne",
        stock: 100,
        price: 10000,
        color: "blue",
        outstanding: false,
      },
      {
        id: "0006",
        name: "Forza Horizon 4",
        stock: 0,
        price: 20000,
        color: "red",
        outstanding: true,
      },
    ],
    sales: [],
  },
  getters: {
    // filtros sobre los datos
    availableGames(state) {
      return state.games.filter((game) => game.stock > 0);
    },
    searchById: (_state, getters) => (id) => {
      return getters.availableGames.filter((game) => game.id == id);
    },
    // totaliza los totales individuales, acc acumulador o si no 0 (suma al stock)
    totalStock(state) {
      return state.games.reduce((acc, game) => acc + game.stock, 0);
    },
    totalAmmount(state){
      return state.sales.reduce((acc, game) => acc + game.price, 0);
    },
  },
  mutations: {
    // ADDSALE, REMOVEFROMSTOCK
    ADD_SALE(state, product) {
      state.sales.push(product);
    },
    REMOVE_STOCK(state, game) {
      let prod = state.games.find(p => p.id == game.id);
      prod.stock -= 1;
    },
  },
  actions: {

    processSale({ commit }, game) {
      setTimeout(() => {
        commit('REMOVE_STOCK', game)
        setTimeout(() => {
          commit('ADD_SALES', game)
        }, 2000)
      }, 3000)
    },
  }
});

export default store;
