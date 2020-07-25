<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" to="/portfolio/" activeClass="active" tag="li">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link class="nav-item" to="/stocks/" activeClass="active" tag="li">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
            <ul class="navbar-nav float-right mr-lg-5">
                <li class="nav-item"><a href="#" @click.prevent="endDay" class="nav-link">End Day</a></li>
                <li class="nav-item dropdown"
                    v-click-outside="()=>{this.dropdownOpen=false}"
                    @click="dropdownOpen=!dropdownOpen"
                >
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >Save & Load <span class="caret"></span></a>
                    <div class="dropdown-menu" :style="{display:dropdownOpen?'block':''}"  aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" @click="saveData">Save</a>
                        <a class="dropdown-item" href="#" @click="loadData">Load</a>
                    </div>
                </li>
            </ul>
            <strong class="navbar-text float-right">Funds: {{funds|currency}}</strong>
        </div>
    </nav>
</template>
<script>
    import {mapActions} from 'vuex';
    export default {
        name: "Header",
        data(){
            return{
                    dropdownOpen:false,
            }
        },
        computed:{
            funds(){
                return this.$store.getters.funds;
            }
        },
        methods:{
            ...mapActions({
                randomStocks:'randomStocks',
                fetchData:'loadData',
            }),
            endDay(){
                this.randomStocks();
            },
            saveData(){
                const data = {
                    funds:this.$store.getters.funds,
                    stocksPortfolio:this.$store.getters.stockPortfolio,
                    stocks:this.$store.getters.stocks,
                };
                this.$http.put('data.json',data);
            },
            loadData(){
                this.fetchData();
            }
        }
    }
</script>
<style scoped>
</style>
