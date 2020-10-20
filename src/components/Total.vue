<template>
    <div>
        <h1>Total de ventas</h1>
        <h2>Tus juegos comprados: </h2>
        <ul>
            <li v-for="(number, game) in totalGamesSold" :key="game"> {{game}} - {{number}}</li>
        </ul>
        <h2>Ventas Totales</h2>
        <ul>
            <li v-for="game in sales" :key="game.id">ID:{{game.id}}|Name:
                {{game.name}}|Price:{{game.price}}</li>I
        </ul>
        <p>Monto total: ${{totalAmmount}}</p>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    computed:{
    ...mapGetters(["totalGamesSold", "totalAmmount"]),
    ...mapState(["sales"])
    }
}
</script>

<style>

</style>