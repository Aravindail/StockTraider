import Vue from "vue";

export const loadData = ({commit})=>{
    Vue.http.get('data.json')
        .then(response =>response.json())
        .then(data=>{
            if (data){
                const
                    stocks = data.stocks,
                    funds = data.funds,
                    stockPortfolio = data.stocksPortfolio,
                    portfolio = {
                        stockPortfolio,
                        funds,
                    };
                commit('SET_STOCKS',stocks);
                commit('SET_PORTFOLIO',portfolio);
            }
        })
};
