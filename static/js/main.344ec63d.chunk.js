(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{24:function(e,a,l){},40:function(e,a,l){e.exports=l(51)},45:function(e,a,l){},51:function(e,a,l){"use strict";l.r(a);var t=l(0),r=l.n(t),n=l(26),i=l.n(n),o=(l(45),l(1)),c=l(3),u=l(2);l(24);function s(e,a,l,t){var r=["Acura","Alfa Romeo","Aston Martin","Audi","Bentley","BMW","Buick","Cadillac","Chevrolet","Chrysler","Dodge","Ferrari","Fiat","Ford","Genesis","GMC","Honda","Hyundai","Infiniti","Jaguar","Jeep","Kia","Lamborghini","Land Rover","Lexus","Lincoln","Lotus","Maserati","Mazda","McLaren Automotive","Mercedes-Benz","MINI","Mitsubishi","Nissan","Porsche","Ram","Rolls-Royce","Roush Performance","smart","Subaru","Toyota","Volkswagen","Volvo"],n=u.j().domain([0,32]).range([e,0]),i=u.j().domain([0,150]).range([e,0]),o=u.j().domain([0,30]).range([e,0]),c=u.l("body").append("div").attr("class","tooltip").style("opacity",0),s={makerlist:r,color:"red",y:n};1==t?(s.makerlist=r,s.color="red",s.y=n):2==t?(s.makerlist=["BMW","Chevrolet","Fiat","Ford","Hyundai","Kia","Mercedes-Benz","Mitsubishi","Nissan","Tesla"],s.color="orange",s.y=i):3==t&&(s.makerlist=["BMW","Chevrolet","GMC","Jaguar","Land Rover"],s.color="blue",s.y=o);var v=u.i().domain(s.makerlist).range([0,a]).padding(.2),d=u.l("#chart").append("svg").attr("width",a+160).attr("height",e+160);d.append("g").attr("transform","translate(80,80)").selectAll("rect").data(l).enter().append("rect").attr("width",v.bandwidth()).attr("height",(function(a){return e-s.y(a.val)})).attr("x",(function(e,a){return v(e.Maker)})).attr("y",(function(e){return s.y(e.val)})).style("fill-opacity",.5).style("fill",s.color).on("mouseover",(function(e){c.transition().duration(200).style("opacity",.9),c.html("Maker: "+e.Maker+"<br>AvgCityMPG: "+e.val).style("left",u.d.pageX+"px").style("top",u.d.pageY-28+"px")})).on("mouseout",(function(e){c.transition().duration(500).style("opacity",0)})),d.append("g").attr("transform","translate(80,80)").call(u.b(s.y)),d.append("g").attr("transform","translate(80,"+(e+80)+")").call(u.a(v)).selectAll("text").attr("y",0).attr("x",9).attr("dy",".95em").attr("transform","rotate(90)").style("text-anchor","start")}var v=[{Maker:"Acura",Fuel:"Gasoline",val:31.5},{Maker:"Alfa Romeo",Fuel:"Gasoline",val:28.5},{Maker:"Aston Martin",Fuel:"Gasoline",val:19},{Maker:"Audi",Fuel:"Gasoline",val:27.4},{Maker:"Bentley",Fuel:"Gasoline",val:21},{Maker:"BMW",Fuel:"Gasoline",val:27.5},{Maker:"Buick",Fuel:"Gasoline",val:28},{Maker:"Cadillac",Fuel:"Gasoline",val:25.83},{Maker:"Chevrolet",Fuel:"Gasoline",val:26.6},{Maker:"Chrysler",Fuel:"Gasoline",val:30},{Maker:"Dodge",Fuel:"Gasoline",val:23.6},{Maker:"Ferrari",Fuel:"Gasoline",val:19},{Maker:"Fiat",Fuel:"Gasoline",val:32},{Maker:"Ford",Fuel:"Gasoline",val:25.71},{Maker:"Genesis",Fuel:"Gasoline",val:24.67},{Maker:"GMC",Fuel:"Gasoline",val:23.67},{Maker:"Honda",Fuel:"Gasoline",val:34.33},{Maker:"Hyundai",Fuel:"Gasoline",val:29.5},{Maker:"Infiniti",Fuel:"Gasoline",val:26.5},{Maker:"Jaguar",Fuel:"Gasoline",val:26.33},{Maker:"Jeep",Fuel:"Gasoline",val:24.67},{Maker:"Kia",Fuel:"Gasoline",val:27},{Maker:"Lamborghini",Fuel:"Gasoline",val:19},{Maker:"Land Rover",Fuel:"Gasoline",val:23},{Maker:"Lexus",Fuel:"Gasoline",val:28.8},{Maker:"Lincoln",Fuel:"Gasoline",val:26.5},{Maker:"Lotus",Fuel:"Gasoline",val:24},{Maker:"Maserati",Fuel:"Gasoline",val:22},{Maker:"Mazda",Fuel:"Gasoline",val:34.5},{Maker:"McLaren Automotive",Fuel:"Gasoline",val:23},{Maker:"Mercedes-Benz",Fuel:"Gasoline",val:24.25},{Maker:"MINI",Fuel:"Gasoline",val:33},{Maker:"Mitsubishi",Fuel:"Gasoline",val:33.33},{Maker:"Nissan",Fuel:"Gasoline",val:27},{Maker:"Porsche",Fuel:"Gasoline",val:24.67},{Maker:"Ram",Fuel:"Gasoline",val:24.33},{Maker:"Rolls-Royce",Fuel:"Gasoline",val:19},{Maker:"Roush Performance",Fuel:"Gasoline",val:23},{Maker:"smart",Fuel:"Gasoline",val:39},{Maker:"Subaru",Fuel:"Gasoline",val:29.33},{Maker:"Toyota",Fuel:"Gasoline",val:27},{Maker:"Volkswagen",Fuel:"Gasoline",val:28.67},{Maker:"Volvo",Fuel:"Gasoline",val:30.5}];function d(){var e={backgroundColor:"#4CAF50",border:"none",color:"white",padding:"15px 32px",textAlign:"center",display:"inline-block",fontSize:"20px",margin:"4px 2px",cursor:"pointer"};return Object(t.useEffect)((function(){s(600,1e3,v,1)}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Average Highway MPG over different maker and fuel type"),r.a.createElement(o.b,{to:"/page3/gasoline"},r.a.createElement("button",{style:e},"Gasoline")),r.a.createElement(o.b,{to:"/page3/electricity"},r.a.createElement("button",{style:e},"Electricity")),r.a.createElement(o.b,{to:"/page3/diesel"},r.a.createElement("button",{style:e},"Diesel")),r.a.createElement("div",{id:"chart"}))}var M=[{Maker:"Acura",Fuel:"Gasoline",val:23},{Maker:"Alfa Romeo",Fuel:"Gasoline",val:20.5},{Maker:"Aston Martin",Fuel:"Gasoline",val:12},{Maker:"Audi",Fuel:"Gasoline",val:19.4},{Maker:"Bentley",Fuel:"Gasoline",val:12.5},{Maker:"BMW",Fuel:"Gasoline",val:22.3},{Maker:"Buick",Fuel:"Gasoline",val:20.3},{Maker:"Cadillac",Fuel:"Gasoline",val:18},{Maker:"Chevrolet",Fuel:"Gasoline",val:19},{Maker:"Chrysler",Fuel:"Gasoline",val:19.7},{Maker:"Dodge",Fuel:"Gasoline",val:15.6},{Maker:"Ferrari",Fuel:"Gasoline",val:14},{Maker:"Fiat",Fuel:"Gasoline",val:24},{Maker:"Ford",Fuel:"Gasoline",val:18.4},{Maker:"Genesis",Fuel:"Gasoline",val:16.3},{Maker:"GMC",Fuel:"Gasoline",val:17.3},{Maker:"Honda",Fuel:"Gasoline",val:26},{Maker:"Hyundai",Fuel:"Gasoline",val:22.5},{Maker:"Infiniti",Fuel:"Gasoline",val:20.5},{Maker:"Jaguar",Fuel:"Gasoline",val:18},{Maker:"Jeep",Fuel:"Gasoline",val:18},{Maker:"Kia",Fuel:"Gasoline",val:20},{Maker:"Lamborghini",Fuel:"Gasoline",val:12},{Maker:"Land Rover",Fuel:"Gasoline",val:17},{Maker:"Lexus",Fuel:"Gasoline",val:23.6},{Maker:"Lincoln",Fuel:"Gasoline",val:19.5},{Maker:"Lotus",Fuel:"Gasoline",val:17},{Maker:"Maserati",Fuel:"Gasoline",val:15},{Maker:"Mazda",Fuel:"Gasoline",val:26.5},{Maker:"McLaren Automotive",Fuel:"Gasoline",val:16},{Maker:"Mercedes-Benz",Fuel:"Gasoline",val:17.8},{Maker:"MINI",Fuel:"Gasoline",val:24},{Maker:"Mitsubishi",Fuel:"Gasoline",val:26.3},{Maker:"Nissan",Fuel:"Gasoline",val:20.4},{Maker:"Porsche",Fuel:"Gasoline",val:18},{Maker:"Ram",Fuel:"Gasoline",val:17.3},{Maker:"Rolls-Royce",Fuel:"Gasoline",val:12},{Maker:"Roush Performance",Fuel:"Gasoline",val:14},{Maker:"smart",Fuel:"Gasoline",val:32},{Maker:"Subaru",Fuel:"Gasoline",val:22},{Maker:"Toyota",Fuel:"Gasoline",val:22},{Maker:"Volkswagen",Fuel:"Gasoline",val:21},{Maker:"Volvo",Fuel:"Gasoline",val:22.5}];function k(){var e={backgroundColor:"#4CAF50",border:"none",color:"white",padding:"15px 32px",textAlign:"center",display:"inline-block",fontSize:"20px",margin:"4px 2px",cursor:"pointer"};return Object(t.useEffect)((function(){s(600,1e3,M,1)}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Average City MPG over different maker and fuel type"),r.a.createElement(o.b,{to:"/page2/gasoline"},r.a.createElement("button",{style:e},"Gasoline")),r.a.createElement(o.b,{to:"/page2/electricity"},r.a.createElement("button",{style:e},"Electricity")),r.a.createElement(o.b,{to:"/page2/diesel"},r.a.createElement("button",{style:e},"Diesel")),r.a.createElement("div",{id:"chart"}))}var m=l(28);var p=[{Fuel:"Diesel",NumOfRecord:6,Color:"blue"},{Fuel:"Electricity",NumOfRecord:10,Color:"orange"},{Fuel:"Gasoline",NumOfRecord:130,Color:"red"}];var F=function(){var e=Object(t.useState)([]),a=Object(m.a)(e,2);return a[0],a[1],Object(t.useEffect)((function(){!function(e,a,l){var t=u.l("#chart").append("svg").attr("width",a).attr("height",e),r=u.l("body").append("div").attr("class","tooltip").style("opacity",0),n=u.k().domain([6,130]).range([50,100]),i=t.append("g").selectAll("circle").data(l).enter().append("circle").attr("r",(function(e){return n(e.NumOfRecord)})).attr("cx",a/2).attr("cy",e/2).style("fill",(function(e){return e.Color})).style("fill-opacity",.5).attr("stroke","#b3a2c8").style("stroke-width",4).call(u.c().on("start",(function(e){u.d.active||o.alphaTarget(.03).restart();e.fx=e.x,e.fy=e.y})).on("drag",(function(e){e.fx=u.d.x,e.fy=u.d.y})).on("end",(function(e){u.d.active||o.alphaTarget(.03);e.fx=null,e.fy=null}))).on("mouseover",(function(e){r.transition().duration(200).style("opacity",.9),r.html("Fuel: "+e.Fuel+"<br>NumOfRecord: "+e.NumOfRecord).style("left",u.d.pageX+"px").style("top",u.d.pageY-28+"px")})).on("mouseout",(function(e){r.transition().duration(500).style("opacity",0)})),o=u.h().force("center",u.e().x(a/2).y(e/2)).force("charge",u.g().strength(.5)).force("collide",u.f().strength(.1).radius(75).iterations(1));o.nodes(l).on("tick",(function(e){i.attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y}))}))}(600,600,p)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Which is the most common Fuel Type ? "),r.a.createElement("div",{id:"chart"}))},y=[{Maker:"BMW",Fuel:"Electricity",val:133},{Maker:"Chevrolet",Fuel:"Electricity",val:128},{Maker:"Fiat",Fuel:"Electricity",val:121},{Maker:"Ford",Fuel:"Electricity",val:118},{Maker:"Hyundai",Fuel:"Electricity",val:150},{Maker:"Kia",Fuel:"Electricity",val:120},{Maker:"Mercedes-Benz",Fuel:"Electricity",val:85},{Maker:"Mitsubishi",Fuel:"Electricity",val:121},{Maker:"Nissan",Fuel:"Electricity",val:124},{Maker:"Tesla",Fuel:"Electricity",val:92}];function g(){var e={backgroundColor:"#4CAF50",border:"none",color:"white",padding:"15px 32px",textAlign:"center",display:"inline-block",fontSize:"20px",margin:"4px 2px",cursor:"pointer"};return Object(t.useEffect)((function(){s(600,1e3,y,2)}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Average City MPG over different maker and fuel type"),r.a.createElement(o.b,{to:"/page2/gasoline"},r.a.createElement("button",{style:e},"Gasoline")),r.a.createElement(o.b,{to:"/page2/electricity"},r.a.createElement("button",{style:e},"Electricity")),r.a.createElement(o.b,{to:"/page2/diesel"},r.a.createElement("button",{style:e},"Diesel")),r.a.createElement("div",{id:"chart"}))}var E=[{Maker:"BMW",Fuel:"Diesel",val:26.5},{Maker:"Chevrolet",Fuel:"Diesel",val:21},{Maker:"GMC",Fuel:"Diesel",val:21},{Maker:"Jaguar",Fuel:"Diesel",val:30},{Maker:"Land Rover",Fuel:"Diesel",val:22}];function f(){var e={backgroundColor:"#4CAF50",border:"none",color:"white",padding:"15px 32px",textAlign:"center",display:"inline-block",fontSize:"20px",margin:"4px 2px",cursor:"pointer"};return Object(t.useEffect)((function(){s(600,1e3,E,3)}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Average City MPG over different maker and fuel type"),r.a.createElement(o.b,{to:"/page2/gasoline"},r.a.createElement("button",{style:e},"Gasoline")),r.a.createElement(o.b,{to:"/page2/electricity"},r.a.createElement("button",{style:e},"Electricity")),r.a.createElement(o.b,{to:"/page2/diesel"},r.a.createElement("button",{style:e},"Diesel")),r.a.createElement("div",{id:"chart"}))}var G=[{Maker:"BMW",Fuel:"Electricity",val:109},{Maker:"Chevrolet",Fuel:"Electricity",val:110},{Maker:"Fiat",Fuel:"Electricity",val:103},{Maker:"Ford",Fuel:"Electricity",val:96},{Maker:"Hyundai",Fuel:"Electricity",val:122},{Maker:"Kia",Fuel:"Electricity",val:92},{Maker:"Mercedes-Benz",Fuel:"Electricity",val:82},{Maker:"Mitsubishi",Fuel:"Electricity",val:102},{Maker:"Nissan",Fuel:"Electricity",val:101},{Maker:"Tesla",Fuel:"Electricity",val:98}];function b(){var e={backgroundColor:"#4CAF50",border:"none",color:"white",padding:"15px 32px",textAlign:"center",display:"inline-block",fontSize:"20px",margin:"4px 2px",cursor:"pointer"};return Object(t.useEffect)((function(){s(600,1e3,G,2)}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Average Highway MPG over different maker and fuel type"),r.a.createElement(o.b,{to:"/page3/gasoline"},r.a.createElement("button",{style:e},"Gasoline")),r.a.createElement(o.b,{to:"/page3/electricity"},r.a.createElement("button",{style:e},"Electricity")),r.a.createElement(o.b,{to:"/page3/diesel"},r.a.createElement("button",{style:e},"Diesel")),r.a.createElement("div",{id:"chart"}))}var h=[{Maker:"BMW",Fuel:"Diesel",val:35},{Maker:"Chevrolet",Fuel:"Diesel",val:29},{Maker:"GMC",Fuel:"Diesel",val:29},{Maker:"Jaguar",Fuel:"Diesel",val:39},{Maker:"Land Rover",Fuel:"Diesel",val:28}];function x(){var e={backgroundColor:"#4CAF50",border:"none",color:"white",padding:"15px 32px",textAlign:"center",display:"inline-block",fontSize:"20px",margin:"4px 2px",cursor:"pointer"};return Object(t.useEffect)((function(){s(600,1e3,h,3)}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Average Highway MPG over different maker and fuel type"),r.a.createElement(o.b,{to:"/page3/gasoline"},r.a.createElement("button",{style:e},"Gasoline")),r.a.createElement(o.b,{to:"/page3/electricity"},r.a.createElement("button",{style:e},"Electricity")),r.a.createElement(o.b,{to:"/page3/diesel"},r.a.createElement("button",{style:e},"Diesel")),r.a.createElement("div",{id:"chart"}))}function C(){var e={backgroundColor:"#4CAF50",border:"none",color:"white",padding:"15px 32px",textAlign:"center",display:"inline-block",fontSize:"20px",margin:"4px 2px",cursor:"pointer"};return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{style:e},"Page1")),r.a.createElement(o.b,{to:"/page2/gasoline"},r.a.createElement("button",{style:e},"Page2")),r.a.createElement(o.b,{to:"/page3/gasoline"},r.a.createElement("button",{style:e},"Page3"))),r.a.createElement("hr",null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(F,null)),r.a.createElement(c.a,{path:"/page2/gasoline"},r.a.createElement(k,null)),r.a.createElement(c.a,{path:"/page3/gasoline"},r.a.createElement(d,null)),r.a.createElement(c.a,{exact:!0,path:"/page2/electricity"},r.a.createElement(g,null)),r.a.createElement(c.a,{exact:!0,path:"/page2/diesel"},r.a.createElement(f,null)),r.a.createElement(c.a,{exact:!0,path:"/page3/electricity"},r.a.createElement(b,null)),r.a.createElement(c.a,{exact:!0,path:"/page3/diesel"},r.a.createElement(x,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.344ec63d.chunk.js.map