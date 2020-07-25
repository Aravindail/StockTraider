import Home from "./components/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Stocks from "./components/stocks/Stocks";

export const routes =[
    {path:'/',component:Home},
    {path:'/stocks/',component:Stocks},
    {path:'/portfolio',component:Portfolio},
]
