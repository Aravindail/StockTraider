<template>
    <div class="card-group">
        <stock v-for="stock in stocks" :stock="stock"></stock>
    </div>
</template>

<script>
    import Stock from "./Stock";
    export default {
        name: "Stocks",
        components:{
            Stock
        },
        computed:{
            stocks(){
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style scoped>

</style>
