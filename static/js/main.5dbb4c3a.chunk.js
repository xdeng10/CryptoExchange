(this.webpackJsonpcryptoexchange=this.webpackJsonpcryptoexchange||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(30),r=c.n(i),s=(c(36),c(3)),o=c(4),l=c(6),j=c(5),h=(c(37),c(12)),d=c(2),u=(c(38),c.p+"static/media/coinLogo.0662a067.png"),b=c(0),m=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("nav",{className:"nav-container",children:[Object(b.jsx)(h.b,{className:"logo-container",to:"/Home",children:Object(b.jsxs)("div",{className:"logo-table",children:[Object(b.jsx)("img",{src:u,className:"logo-image",alt:"Logo"}),Object(b.jsx)("span",{className:"company-name",children:"Crytoexchange"})]})}),Object(b.jsxs)("div",{className:"menu-container v-mid w-80 tr",children:[Object(b.jsx)(h.b,{className:"page-name",to:"/CryptoMarket",title:"CryptoMarket",children:"Crypto Market"}),Object(b.jsx)(h.b,{className:"page-name",to:"/About",title:"About",children:"About us"}),Object(b.jsx)(h.b,{className:"page-name",to:"/Contact",title:"Contact",children:"Contact"}),Object(b.jsx)(h.b,{className:"page-name signin-button",to:"/Signin",title:"Signin",children:"Sign in"})]})]})}}]),c}(n.Component),p=(c(45),function(){return Object(b.jsx)("main",{children:Object(b.jsx)("h1",{children:"HomePage"})})}),O=(c(46),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("main",{children:Object(b.jsx)("h1",{children:"About Us"})})}}]),c}(n.Component)),v=(c(47),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("main",{children:Object(b.jsx)("h1",{children:"Contact Us"})})}}]),c}(n.Component)),g=(c(48),c(20)),x=c(15),f=c.n(x),k=(c(67),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.image,c=e.name,n=e.symbol,a=e.price,i=e.volume,r=e.priceChangePercent,s=e.marketcap,o=c+" logo";return Object(b.jsxs)("div",{className:"coin-row",children:[Object(b.jsx)("div",{className:"coin-logo",children:Object(b.jsx)("img",{src:t,alt:o})}),Object(b.jsx)("div",{className:"coin-name",children:Object(b.jsx)("h3",{children:c})}),Object(b.jsx)("div",{className:"coin-sym",children:Object(b.jsx)("p",{children:n})}),Object(b.jsx)("div",{className:"coin-price",children:Object(b.jsxs)("p",{children:["$",Number.parseFloat(a).toFixed(2)]})}),Object(b.jsx)("div",{className:"coin-volume",children:Object(b.jsx)("p",{children:i?i.toLocaleString():"-"})}),Object(b.jsx)("div",{className:"coin-change",children:Object(b.jsx)("p",{className:r>=0?"price-green":"price-red",children:r?"".concat(Number.parseFloat(r).toFixed(2),"%"):"-"})}),Object(b.jsx)("div",{className:"coin-market-cap",children:Object(b.jsx)("p",{children:s?"$".concat(s.toLocaleString()):"-"})})]})}}]),c}(n.Component)),y=function(){return Object(b.jsx)("div",{className:"divLoader",children:Object(b.jsx)("svg",{className:"svgLoader",viewBox:"0 0 100 100",width:"2em",height:"2em",children:Object(b.jsx)("path",{stroke:"none",d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#51CACC",transform:"rotate(179.719 50 51)",children:Object(b.jsx)("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 51;360 50 51",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})})})},_=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).state={coins:[],pageNumber:1,morePage:!0,prevY:0,search:"",order:"market_cap_desc",loading:!1},n}return Object(o.a)(c,[{key:"setCoins",value:function(e){this.setState({coins:e})}},{key:"setPageNumber",value:function(e){this.setState({pageNumber:e})}},{key:"setMorePage",value:function(e){this.setState({morePage:e})}},{key:"setPrevY",value:function(e){this.setState({prevY:e})}},{key:"setSearch",value:function(e){this.setState({search:e})}},{key:"setOrder",value:function(e){this.setState({order:e})}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"fetchMarketList",value:function(){var e=this;this.setLoading(!0),f.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=".concat(this.state.order,"&per_page=10&page=").concat(this.state.pageNumber,"&sparkline=false")).then((function(t){t.data===[]&&e.setMorePage(!1),e.setCoins([].concat(Object(g.a)(e.state.coins),Object(g.a)(t.data))),e.setLoading(!1)})).catch((function(e){alert(e)}))}},{key:"getFilteredCoins",value:function(){var e=this;return this.state.coins.filter((function(t){return t.name.toLowerCase().includes(e.state.search.toLowerCase())})).map((function(e){return Object(b.jsx)(k,{name:e.name,image:e.image,price:e.current_price,symbol:e.symbol,volume:e.total_volume,priceChangePercent:e.price_change_percentage_24h,marketcap:e.market_cap},e.id)}))}},{key:"waitloading",value:function(){var e=this;return this.state.loading?Object(b.jsxs)("div",{className:"coin-row",ref:function(t){return e.loadingRef=t},children:[Object(b.jsx)("div",{className:"coin-logo",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"coin-name",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"coin-sym",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"coin-price",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"coin-volume",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"coin-change",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"coin-market-cap",children:Object(b.jsx)(y,{})})]}):Object(b.jsxs)("div",{className:"coin-row",ref:function(t){return e.loadingRef=t},children:[Object(b.jsx)("div",{className:"coin-logo"}),Object(b.jsx)("div",{className:"coin-name"}),Object(b.jsx)("div",{className:"coin-sym"}),Object(b.jsx)("div",{className:"coin-price"}),Object(b.jsx)("div",{className:"coin-volume"}),Object(b.jsx)("div",{className:"coin-change"}),Object(b.jsx)("div",{className:"coin-market-cap"})]})}},{key:"handleOrder",value:function(e){switch(e){case"market-cap":this.setOrder("market_cap_desc"===this.state.order?"market_cap_asc":"market_cap_desc");break;case"volume":this.setOrder("volume_desc"===this.state.order?"volume_asc":"volume_desc");break;default:this.setOrder("market_cap_asc")}}},{key:"handleObserver",value:function(e,t){var c=e[0].boundingClientRect.y;this.state.prevY>c&&(this.setPageNumber(this.state.pageNumber+1),this.fetchMarketList()),this.setState({prevY:c})}},{key:"componentDidMount",value:function(){if(this.fetchMarketList(),this.state.morePage){this.observer=new IntersectionObserver(this.handleObserver.bind(this),{root:null,rootMargin:"0px",threshold:1}),this.observer.observe(this.loadingRef)}}},{key:"componentDidUpdate",value:function(e,t){this.state.order!==t.order&&(this.setCoins([]),this.setPageNumber(1),this.setPrevY(0),this.fetchMarketList())}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"CryptoMarket"}),Object(b.jsx)("form",{className:"search-bar-form",children:Object(b.jsx)("input",{className:"search-bar",type:"text",placeholder:" Search a currency",onChange:function(t){return e.setSearch(t.target.value)}})})]}),Object(b.jsx)("div",{className:"market-container",children:Object(b.jsxs)("div",{className:"market-table",children:[Object(b.jsxs)("div",{className:"coin-row coin-heading",children:[Object(b.jsx)("div",{className:"coin-logo"}),Object(b.jsx)("div",{className:"coin-name",children:Object(b.jsx)("h3",{children:"Name"})}),Object(b.jsx)("div",{className:"coin-sym",children:Object(b.jsx)("p",{children:"SYM"})}),Object(b.jsx)("div",{className:"coin-price",children:Object(b.jsx)("p",{children:"Price"})}),Object(b.jsx)("div",{className:"coin-volume cursor-pointer",onClick:function(){return e.handleOrder("volume")},children:Object(b.jsx)("p",{children:"Volume \u2195"})}),Object(b.jsx)("div",{className:"coin-change",children:Object(b.jsx)("p",{children:"Change(24h)"})}),Object(b.jsx)("div",{className:"coin-market-cap cursor-pointer",onClick:function(){return e.handleOrder("market-cap")},children:Object(b.jsx)("p",{children:"Market Cap \u2195"})})]}),this.getFilteredCoins(),this.waitloading()]})})]})}}]),c}(n.Component),N=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("main",{children:Object(b.jsx)(_,{})})}}]),c}(n.Component),C=(c(68),c(69),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"convertNumToPrice",value:function(e){return Number.parseFloat(e).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"convertNumToPerc",value:function(e){return Number.parseFloat(e).toFixed(2)}},{key:"getTimeZone",value:function(e){var t=e.last_updated&&e.last_updated.toLocaleString(),c=new Date(t);return" (GMT".concat(c.getTimezoneOffset()/-60,")")}},{key:"getCoinLastUpdate",value:function(e){var t=e.last_updated&&e.last_updated.toLocaleString(),c=new Date(t);return Object(b.jsxs)("span",{children:[c.getFullYear(),"/",c.getMonth(),"/",c.getDate()," ",Object(b.jsx)("br",{})," ",c.getHours(),":",c.getMinutes(),":",c.getSeconds()]})}},{key:"getCoinPriceChange",value:function(e){var t=e.price_change_24h_in_currency&&e.price_change_24h_in_currency.cad,c=e.price_change_percentage_24h;return t&&c?Object(b.jsxs)("span",{className:t>=0?"price-green":"price-red",children:[this.convertNumToPrice(t),"$ ",Object(b.jsx)("br",{})," ",this.convertNumToPerc(c),"%"]}):Object(b.jsxs)("span",{children:[" - ",Object(b.jsx)("br",{})," -"]})}},{key:"getCoin24LowHigh",value:function(e){var t=e.low_24h&&e.low_24h.cad,c=e.high_24h&&e.high_24h.cad;return Object(b.jsxs)("span",{children:[t?this.convertNumToPrice(t)+"$":"-"," ",Object(b.jsx)("br",{})," ",c?this.convertNumToPrice(c)+"$":"-"]})}},{key:"getCoin24mc",value:function(e){var t=e.market_cap_change_24h_in_currency&&e.market_cap_change_24h_in_currency.cad,c=e.market_cap_change_percentage_24h;return t&&c?Object(b.jsxs)("span",{className:t>=0?"price-green":"price-red",children:[" ",this.convertNumToPrice(t),"$ ",Object(b.jsx)("br",{})," ",this.convertNumToPerc(c),"%"]}):Object(b.jsxs)("span",{children:[" - ",Object(b.jsx)("br",{})," - "]})}},{key:"getCoinATLowHigh",value:function(e){var t=e.atl&&e.atl.cad,c=e.ath&&e.ath.cad;return Object(b.jsxs)("span",{children:[t?this.convertNumToPrice(t)+"$":"-"," ",Object(b.jsx)("br",{})," ",c?this.convertNumToPrice(c)+"$":"-"]})}},{key:"getCoinMarketcap",value:function(e){var t=e.market_cap&&e.market_cap.cad;return Object(b.jsx)("span",{children:t?this.convertNumToPrice(t)+"$":"-"})}},{key:"getCoinTotalVolume",value:function(e){var t=e.total_volume&&e.total_volume.cad;return Object(b.jsx)("span",{children:t?this.convertNumToPrice(t)+"$":"-"})}},{key:"getCoinCircSupply",value:function(e){var t=e.circulating_supply&&e.circulating_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return Object(b.jsx)("span",{children:t||"-"})}},{key:"getCoinTotalSupply",value:function(e){var t=e.total_supply&&e.total_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return Object(b.jsx)("span",{children:t||"-"})}},{key:"render",value:function(){var e=this.props,t=(e.currency,e.coin_market_data);return Object(b.jsx)("table",{className:"coin-info-summary",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:["Last Updated ",this.getTimeZone(t)]}),Object(b.jsx)("td",{children:this.getCoinLastUpdate(t)})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"24h Price Change"}),Object(b.jsx)("td",{children:this.getCoinPriceChange(t)})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"24h Low/High"}),Object(b.jsx)("td",{children:this.getCoin24LowHigh(t)})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"24h Market Cap"}),Object(b.jsx)("td",{children:this.getCoin24mc(t)})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"All-Time Low/High"}),Object(b.jsx)("td",{children:this.getCoinATLowHigh(t)})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Market Cap"}),Object(b.jsx)("td",{children:this.getCoinMarketcap(t)})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Total Volume"}),Object(b.jsx)("td",{children:this.getCoinTotalVolume(t)})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Circulating Supply Supply"}),Object(b.jsx)("td",{children:this.getCoinCircSupply(t)})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Total Supply"}),Object(b.jsx)("td",{children:this.getCoinTotalSupply(t)})]})]})})}}]),c}(n.Component)),S=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).state={coinID:"bitcoin",currency:"cad",coin:{},coin_market_data:{},loading:!1},n}return Object(o.a)(c,[{key:"setCoinID",value:function(e){this.setState({coinID:e})}},{key:"setCurrency",value:function(e){this.setState({currency:e})}},{key:"setCoin",value:function(e){this.setState({coin:e})}},{key:"setCoin_market_data",value:function(e){this.setState({coin_market_data:e})}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"fetchCoinInfo",value:function(){var e=this;this.setLoading(!0),f.a.get("https://api.coingecko.com/api/v3/coins/".concat(this.state.coinID,"?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true")).then((function(t){e.setCoin(t.data),console.log(e.state.coin),e.setCoin_market_data(e.state.coin.market_data),e.setLoading(!1)})).catch((function(e){alert(e)}))}},{key:"convertNumToPrice",value:function(e){return Number.parseFloat(e).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"convertNumToPerc",value:function(e){return Number.parseFloat(e).toFixed(2)}},{key:"getCoinLogoAlt",value:function(){return this.state.coin.name+" Logo"}},{key:"getCoinSymbol",value:function(){return this.state.coin.symbol&&this.state.coin.symbol.toUpperCase()}},{key:"getCoinCurrPrice",value:function(){return this.state.coin_market_data.current_price&&this.state.coin_market_data.current_price.cad&&this.convertNumToPrice(this.state.coin_market_data.current_price.cad)}},{key:"getPriceChange24",value:function(){var e=this.state.coin_market_data.price_change_24h_in_currency&&this.state.coin_market_data.price_change_24h_in_currency.cad,t=this.state.coin_market_data.price_change_percentage_24h;return e&&t?Object(b.jsxs)("span",{className:e>=0?"coin-price-change price-green":"coin-price-change price-red",children:[" ",this.convertNumToPerc(t),"%"]}):Object(b.jsx)("span",{className:"coin-price-change",children:" - "})}},{key:"componentDidMount",value:function(){this.fetchCoinInfo()}},{key:"componentDidUpdate",value:function(e,t){this.state.order,t.order}},{key:"render",value:function(){return Object(b.jsxs)("main",{children:[Object(b.jsx)("div",{className:"coin-header-container",children:Object(b.jsxs)("div",{className:"coin-header",children:[Object(b.jsxs)("div",{className:"coin-title",children:[Object(b.jsx)("img",{className:"coin-logo",src:this.state.coin.image&&this.state.coin.image.large,alt:this.getCoinLogoAlt()}),Object(b.jsx)("span",{className:"coin-name",children:this.state.coin.name}),Object(b.jsx)("span",{className:"coin-symbol",children:this.getCoinSymbol()}),this.getPriceChange24()]}),Object(b.jsx)("div",{children:"Add to Watchlist"})]})}),Object(b.jsx)("div",{className:"coin-subheader-container",children:Object(b.jsxs)("div",{className:"coin-subheader",children:[Object(b.jsx)("span",{className:"coin-currency",children:"CA"}),Object(b.jsxs)("span",{className:"coin-price",children:[" ",this.getCoinCurrPrice(),"$"]})]})}),Object(b.jsx)("div",{className:"coin-info-container",children:Object(b.jsxs)("div",{className:"coin-info",children:[Object(b.jsx)(C,{currency:this.state.currency,coin_market_data:this.state.coin_market_data}),Object(b.jsx)("div",{className:"coin-info-graph",children:"sff"})]})})]})}}]),c}(n.Component),P=(c(70),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("main",{children:Object(b.jsx)("h1",{children:"Signin"})})}}]),c}(n.Component)),L=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)(h.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/",exact:!0,component:N}),Object(b.jsx)(d.a,{path:"/Home",component:p}),Object(b.jsx)(d.a,{path:"/About",component:O}),Object(b.jsx)(d.a,{path:"/Contact",component:v}),Object(b.jsx)(d.a,{path:"/CryptoMarket",component:N}),Object(b.jsx)(d.a,{path:"/CoinPage",component:S}),Object(b.jsx)(d.a,{path:"/Signin",component:P})]})]})})}}]),c}(n.Component),T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};c(71);r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),T()}},[[72,1,2]]]);
//# sourceMappingURL=main.5dbb4c3a.chunk.js.map