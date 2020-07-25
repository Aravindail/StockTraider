<template>
    <div>
        <div class="card-group" v-if="(stocks.length>0)">
            <stock v-for="stock in stocks" :stock="stock"></stock>
        </div>
        <div class="card-group" v-else>
            <div class="col-md-6 col-sm-4 my-3">
                <div class="card">
                    <div class="card-header bg-info">
                        You have no stocks
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Stock from "./Stock";
    export default {
        name: "Portfolio",
        computed:{
            ...mapGetters({
                stocks:'stockPortfolio',
            }),
        },
        components:{
            Stock
        }
    }
</script>

<style scoped>

</style>
