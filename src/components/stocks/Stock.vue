<template>
    <div class="col-md-6 col-sm-4 my-3">
        <div class="card">
            <div class="card-header bg-success">
                <h3 class="card-title ">
                    {{stock.name}}
                    <small>(Prise:{{stock.price}})</small>
                </h3>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <input
                        type="number"
                        min="0"
                        step="1"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{danger: insufficientFunds}"
                    >
                </div>
                <div class="float-right">
                    <button
                        class="btn btn-primary bg-success"
                        @click="buyMoreStocks"
                        :disabled="(insufficientFunds||quantity<=0)"
                    >{{insufficientFunds?'Insufficient Funds':'Buy'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Stock",
        props:['stock'],
        data(){
            return {
                quantity:0,
            }
        },
        computed:{
            funds(){
                return this.$store.getters.funds;
            },
            insufficientFunds(){
                return this.quantity * this.stock.price>this.funds;
            }
        },
        methods:{
            buyMoreStocks(){
                const order ={
                    stockId:this.stock.id,
                    stockName:this.stock.name,
                    stockPrice:this.stock.price,
                    quantity:parseInt(this.quantity),
                };
                this.$store.dispatch('buyStock',order);
                this.quantity = 0;
            }
        }
    }
</script>
<style scoped>
    .danger{
        border: solid 1px darkred;
    }
</style>
