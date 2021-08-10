(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,n){},141:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(28),s=n.n(r),l=(n(141),n(4)),c=n.p+"static/media/TU-Wien-Logo.8d33c646.png",o=(n(107),n(1)),u=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{style:{textAlign:"center"},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("img",{style:{float:"left",width:200,height:"auto",marginTop:"1rem"},src:c,alt:"TU Wien Logo"})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h1",{style:{fontSize:"4rem",textTransform:"uppercase"},children:"Reifegradmodell"}),Object(o.jsx)("h2",{style:{marginTop:"1rem"},children:"der Instandhaltung"})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("p",{style:{marginTop:"3rem"},children:["Mit diesem Tool ist es m\xf6glich den unternehmenseigenen Reifegrad der Instandhaltung zu berechnen.",Object(o.jsx)("br",{}),"Es werden vier Faktoren: Datenqualit\xe4t D",Object(o.jsx)("sub",{children:"Q"}),", Informationsqualit\xe4t I",Object(o.jsx)("sub",{children:"Q"}),", Wissensqualit\xe4t K",Object(o.jsx)("sub",{children:"Q"})," und Instandhaltungsqualit\xe4t K",Object(o.jsx)("sub",{children:"Q"})," zur Berechnung herangezogen. ",Object(o.jsx)("br",{}),"Visuell unterst\xfctzt werden die Ergebnisse mit interaktiven Diagrammen."]})})]})})})},d=n(220),g=n(226),j=function(e){return Object(o.jsx)(a.a.Fragment,{children:Object(o.jsx)("section",{style:{marginTop:40,textAlign:"center",backgroundColor:"#e6f5ff",padding:40},children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{style:{fontSize:"2em",textTransform:"uppercase",textDecoration:"underline"},children:"Ergebnis"})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"Hier wird der berechnete Reifegrad gem\xe4\xdf Ihrer Angaben aufgef\xfchrt."})}),Object(o.jsxs)("div",{style:{marginTop:40},children:[Object(o.jsxs)(d.a,{title:"Ihr momentaner Reifegrad",style:{width:300,margin:"auto"},children:[Object(o.jsxs)("p",{children:[(100*e.maturityLevel).toFixed(2)," %"]}),Object(o.jsxs)("span",{style:{fontStyle:"italic",fontWeight:"bold",fontSize:16},children:["Reifegrad ",function(){var t="nicht berechnet";return e.maturityLevel<=.15?"I":.15<e.maturityLevel&&e.maturityLevel<=.55?"II":.56<e.maturityLevel&&e.maturityLevel<=.86?"III":.87<e.maturityLevel&&e.maturityLevel<=1?"IV":t}()]}),Object(o.jsx)("span",{style:{marginLeft:8},children:Object(o.jsx)(g.a,{style:{color:function(){var t="#FFFFFF";return e.maturityLevel<=.15?"#FF0000":.15<e.maturityLevel&&e.maturityLevel<=.55?"#ff8e03":.56<e.maturityLevel&&e.maturityLevel<=.86?"#FFE000":.87<e.maturityLevel&&e.maturityLevel<=1?"#4EEE94":t}()}})})]}),Object(o.jsx)("div",{style:{fontSize:10,overflow:"hidden",textOverflow:"ellipsis",width:" 100%",marginTop:16},children:"RG I ... 0-15%, RG II ... 16-55%, RG III ... 56-86%, RG IV ... 87-100%"})]})]})})})},m=n(68),h=n(221),b=n(219),f=n(225),p=n(132),x=n(223),O=n(224),v=n(222);function y(e){var t=h.a.useForm(),n=Object(l.a)(t,1)[0],i=a.a.useState(!0),r=Object(l.a)(i,2),s=r[0],c=r[1],u=a.a.useState(0),d=Object(l.a)(u,2),g=d[0],j=d[1];return a.a.useEffect((function(){n&&n.resetFields(),j(0),c(!0)}),[n,e.reset]),Object(o.jsxs)(h.a,{form:n,name:e.tableID+"_"+e.row.toString(),style:{display:"grid",gridTemplateColumns:"repeat(".concat(2+e.columns.length+1,", 1fr)"),justifyItems:"center",columnGap:16,rowGap:16},onValuesChange:function(e,t){!function(e){console.error("onValuesChange");var t=0,n=0;if(e.active){for(var i=0,a=Object.entries(e);i<a.length;i++){var r=Object(l.a)(a[i],2),s=(r[0],r[1]);Number.isFinite(s)&&(s<=.5?(t+=1.3*s,n+=1.3):(t+=s,n+=1))}n&&j(t/n)}}(t)},initialValues:{active:!0,description:"".concat(e.sourceInputPlaceholder," ").concat(e.row+1)},children:[Object(o.jsx)(h.a.Item,{name:"description",children:Object(o.jsx)(x.a,{style:{marginTop:6}})}),Object(o.jsx)(h.a.Item,{name:"active",valuePropName:"checked",children:Object(o.jsx)(O.a,{style:{marginTop:6},checked:s,onChange:function(t){c(t.target.checked),e.onActiveChange&&e.onActiveChange(t.target.checked)}})}),e.columns.map((function(t,n){return Object(o.jsx)(h.a.Item,{name:t.name,rules:[{required:!1,message:"Zahl zwischen 0 & 1 mit 2 Dezimalstellen"}],children:Object(o.jsx)(v.a,{disabled:!s,size:"small",min:"0",max:"1",step:"0.01",precision:2},e.tableID+"_"+n)},n)})),Object(o.jsx)("div",{style:{height:"24px",marginTop:4,color:s?"#000":"#ccc"},children:g.toFixed(2)},e.tableID+"_")]})}function w(e){var t=h.a.useForm(),n=Object(l.a)(t,1)[0];return a.a.useEffect((function(){n&&n.resetFields()}),[n,e.reset]),Object(o.jsxs)(h.a,{form:n,style:{display:"grid",gridTemplateColumns:"repeat(".concat(2+e.columns.length+1,", 1fr)"),justifyItems:"center",columnGap:16},name:"targetValues",children:[Object(o.jsx)("span",{style:{fontWeight:"bold",textDecoration:"underline",marginTop:6,overflow:"hidden",textOverflow:"ellipsis",width:" 100%"},children:e.rowTitle}),Object(o.jsx)("div",{}),e.columns.map((function(t,n){return Object(o.jsx)(h.a.Item,{name:e.tableID+"_targetValue_"+t.name,rules:[{required:!1,type:"regexp",message:"TODO"}],children:Object(o.jsx)(v.a,{size:"small",min:"0",max:"1",step:"0.01",precision:2},e.tableID+"_"+n)},n)}))]})}function I(e){return Object(o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(2+e.values.length+1,", 1fr)"),justifyItems:"center",columnGap:16,rowGap:16},children:[Object(o.jsx)("span",{style:{fontWeight:"bold",textDecoration:"underline",marginTop:6,overflow:"hidden",textOverflow:"ellipsis",width:" 100%"},children:"Aggregation"}),Object(o.jsx)("div",{}),e.values.map((function(t,n){return Object(o.jsx)("div",{style:{height:"24px"},children:t},e.tableID+"_"+n)}))]})}var k=n(69),F=n.n(k),E=n(227),C=n(228),z=n(229);function T(e){for(var t=[],n=0;n<e.columns.length;n++)t.push(0);for(var i=[],r=0;r<e.rowsCount;r++)i.push(0);for(var s=[],c=0;c<e.rowsCount;c++)s.push("".concat(e.sourceInputPlaceholder," ").concat(c+1));var u=a.a.useState(t),j=Object(l.a)(u,2),x=j[0],O=j[1],v=a.a.useState(i),k=Object(l.a)(v,2),T=k[0],V=k[1],S=a.a.useState(s),D=Object(l.a)(S,2),L=D[0],N=D[1],R=a.a.useState(0),A=Object(l.a)(R,2),P=A[0],W=A[1],q=a.a.useState([]),Q=Object(l.a)(q,2),K=Q[0],_=Q[1],G=a.a.useState([]),Z=Object(l.a)(G,2),B=Z[0],M=Z[1],J=function(){var t=0;return x.forEach((function(n,i){var a=e.columns[i].weight*n;t+=a})),t},U=e.columns.map((function(e){return e.name})),H=Array.from({length:e.rowsCount},(function(e,t){return t})).map((function(t){return Object(o.jsx)(y,{columns:e.columns,row:t,sourceInputPlaceholder:e.sourceInputPlaceholder,tableID:e.tableID,reset:P,initialValues:B[t]},t)}));return Object(o.jsxs)("div",{style:{textAlign:"center",background:e.backgroundColor,padding:40,marginTop:40},children:[Object(o.jsx)("h1",{style:{textTransform:"uppercase"},children:e.title}),Object(o.jsx)("p",{onClick:function(){M([{description:"x",values:[1,1,1]}])},children:e.description}),Object(o.jsxs)("div",{style:{justifyContent:"flex-end",display:"flex",marginTop:16},children:[Object(o.jsx)("span",{style:{textAlign:"center",marginRight:20,marginTop:10},children:".csv"}),Object(o.jsx)(m.a,{type:"primary",icon:Object(o.jsx)(E.a,{}),size:"large",style:{marginRight:16}}),Object(o.jsx)(m.a,{type:"primary",icon:Object(o.jsx)(C.a,{}),size:"large"})]}),Object(o.jsxs)("div",{style:{marginTop:40,display:"grid",gridTemplateColumns:"repeat(".concat(2+e.columns.length+1,", 1fr)"),justifyItems:"center",columnGap:16,rowGap:4},children:[Object(o.jsx)("span",{style:{fontWeight:"bold",textDecoration:"underline",overflow:"hidden",textOverflow:"ellipsis",width:" 100%"},children:e.sourceTitle}),Object(o.jsx)("span",{style:{fontWeight:"bold",textDecoration:"underline",overflow:"hidden",textOverflow:"ellipsis",width:" 100%"},children:"An/Aus"}),e.columns.map((function(e,t){return Object(o.jsx)("span",{style:{fontWeight:"bold",overflow:"hidden",textOverflow:"ellipsis",width:" 100%"},children:e.name},t)})),Object(o.jsx)("span",{style:{fontWeight:"bold",textDecoration:"underline",overflow:"hidden",textOverflow:"ellipsis",width:" 100%"},children:"Aggregation"})]}),Object(o.jsxs)(h.a.Provider,{onFormChange:function(t,n){if("targetValues"===t){var i=n.forms.targetValues,a=[];e.columns.forEach((function(t,n){var r=i.getFieldValue(e.tableID+"_targetValue_"+t.name);a[n]=void 0!==r?r:0})),_(a)}else{for(var r=[],s=0;s<e.columns.length;s++)r[s]=0;e.columns.forEach((function(e,t){for(var i=0,a=0,s=0,c=Object.entries(n.forms);s<c.length;s++){var o=Object(l.a)(c[s],2),u=(o[0],o[1]);if(u.getFieldValue("active")){var d=u.getFieldValue(e.name);void 0!==d&&(d<=.5?(i+=1.3*d,a+=1.3):(i+=d,a+=1),r[t]=i/a)}}})),O(r);for(var c=[],o=[],u=function(){var t=Object(l.a)(g[d],2),n=t[0],i=t[1];if("targetValues"!==n){var a=0,r=0;i.getFieldValue("active")&&(e.columns.forEach((function(e,t){var n=i.getFieldValue(e.name);Number.isFinite(n)&&(n<=.5?(a+=1.3*n,r+=1.3):(a+=n,r+=1))})),o.push(i.getFieldValue("description")),r?c.push(a/r):c.push(0))}},d=0,g=Object.entries(n.forms);d<g.length;d++)u();V(c),N(o)}e.onQualityLevelChange(J()*e.maturityWeight)},children:[H,Object(o.jsx)(b.a,{}),Object(o.jsx)(I,{values:x.map((function(e){return e.toFixed(2)})),tableID:e.tableID}),Object(o.jsx)(w,{columns:e.columns,row:e.rowsCount+1,rowTitle:"Sollwert",tableID:e.tableID,reset:P}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(o.jsx)(f.a,{icon:Object(o.jsx)(z.a,{style:{color:"red"}}),title:"Wollen Sie die Werte dieses Abschnitts wirklich zur\xfccksetzen?",okText:"OK",cancelText:"Abbrechen",onConfirm:function(){for(var t=0;t<e.columns.length;t++)x[t]=0;V(i),_([]),N(s),e.onQualityLevelChange(0),W(P+1),p.b.success("Daten wurden erfolgreich zur\xfcckgesetzt!")},children:Object(o.jsx)(m.a,{type:"text",danger:!0,style:{marginRight:16,marginTop:24},children:"Zur\xfccksetzen"})})}),Object(o.jsx)("div",{style:{textAlign:"center",marginTop:4},children:e.tableLegend.map((function(e,t){return Object(o.jsx)("span",{style:{fontSize:10,overflow:"hidden",textOverflow:"ellipsis",width:" 100%"},children:e.shortcut+"..."+e.name+", "},t)}))}),Object(o.jsx)(b.a,{}),Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:40},children:[Object(o.jsx)(F.a,{options:{chart:{id:"metric-chart"},xaxis:{categories:U,labels:{show:!0,style:{colors:["#000","#000","#000","#000","#000","#000","#000","#000","#000","#000"],fontSize:"12px"}}},yaxis:{forceNiceScale:!0,min:0,max:1,labels:{maxWidth:1,style:{colors:["#000"]},formatter:function(e,t){return e.toFixed(2)}}},legend:{markers:{fillColors:["#ff8e03","#0a9bf0"]}},stroke:{show:!0,colors:["#ff8e03","#0a9bf0"]},fill:{colors:["#ff8e03","#0a9bf0"],opacity:.1},markers:{size:4,colors:["#ff8e03","#0a9bf0"],hover:{size:6}},plotOptions:{radar:{size:140,polygons:{strokeColors:"#9D9F9E",connectorColors:"#9D9F9E"}}},title:{text:"".concat(e.resultInitials," Indikatoren Diagramm")}},series:[{name:"".concat(e.resultInitials," Indikatoren"),data:x},{name:"".concat(e.resultInitials," Sollwerte"),data:K}],type:"radar",width:"700"},P+"a"),Object(o.jsxs)(d.a,{style:{width:300,margin:"auto"},title:e.resultTitle,children:[Object(o.jsxs)("span",{style:{margin:0},children:[e.resultInitials," = ",J().toFixed(2)]}),Object(o.jsx)("span",{style:{marginLeft:8},children:Object(o.jsx)(g.a,{style:{color:function(){var t=0,n="#FFFFFF";return x.forEach((function(n,i){var a=e.columns[i].weight*n;t+=a})),t<=.5?"#FF0000":.51<t&&t<=.66?"#ff8e03":.67<t&&t<=.82?"#FFE000":.83<t&&t<=1.03?"#4EEE94":n}()}})})]}),Object(o.jsx)(F.a,{options:{chart:{id:"source-chart"},xaxis:{categories:L,labels:{show:!0,style:{colors:["#000","#000","#000","#000","#000","#000","#000","#000","#000","#000","#000","#000","#000","#000","#000"],fontSize:"12px"}}},yaxis:{forceNiceScale:!0,min:0,max:1,labels:{maxWidth:1,style:{colors:["#000"]},formatter:function(e,t){return e.toFixed(2)}}},legend:{showForSingleSeries:!0,markers:{fillColors:["#4EEE94"]}},stroke:{show:!0,colors:["#4EEE94"]},fill:{colors:["#4EEE94"],opacity:.1},markers:{size:4,colors:["#4EEE94"],hover:{size:6}},plotOptions:{radar:{size:140,polygons:{strokeColors:"#9D9F9E",connectorColors:"#9D9F9E"}}},title:{text:"".concat(e.sourceTitle," Diagramm")}},series:[{name:"".concat(e.resultInitials," Quellen"),data:T}],type:"radar",width:"700"},P+"b")]})]})]})}function V(e,t){return 0===t?0:e<=t?e/t*100:t<e?t/e*100:(console.error("Something went wrong!"),0)}function S(e){var t=h.a.useForm(),n=Object(l.a)(t,1)[0],i=a.a.useState(!0),r=Object(l.a)(i,2),s=r[0],c=r[1],u=a.a.useState(0),d=Object(l.a)(u,2),g=d[0],j=d[1];return a.a.useEffect((function(){n&&n.resetFields(),j(0),c(!0)}),[n,e.reset]),Object(o.jsx)(h.a,{form:n,name:e.tableID+"_"+e.perspective+"_"+e.row,style:{gridRow:"".concat(e.row),gridColumn:2},onValuesChange:function(e,t){var i=n.getFieldValue("actualValue")||0,a=n.getFieldValue("targetValue")||0;j(V(i,a))},initialValues:{active:!0,step:e.step,description:e.defaultValueName,actualValue:"",targetValue:e.defaultValueTarget||""},children:Object(o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(6,  1fr)",justifyContent:"center",columnGap:16},children:[Object(o.jsx)(h.a.Item,{name:"active",valuePropName:"checked",children:Object(o.jsx)(O.a,{style:{marginTop:4},checked:s,onChange:function(t){c(t.target.checked),e.onActiveChange&&e.onActiveChange(t.target.checked)}})}),Object(o.jsx)(h.a.Item,{name:"step",children:Object(o.jsxs)("div",{children:[Object(o.jsx)(x.a,{disabled:!0,style:{display:"none"}}),Object(o.jsx)("div",{children:e.step})]})}),Object(o.jsx)(h.a.Item,{name:"description",children:Object(o.jsx)(x.a,{disabled:s?e.isKpiRow:!s})}),Object(o.jsx)(h.a.Item,{name:"actualValue",children:Object(o.jsx)(v.a,{disabled:!s,size:"small",min:"0",max:"100",step:"1"},e.tableID+"_"+e.perspective+"_"+e.row+"_actualValue")}),Object(o.jsx)(h.a.Item,{name:"targetValue",children:Object(o.jsx)(v.a,{disabled:s?e.isKpiRow:!s},e.tableID+"_"+e.perspective+"_"+e.row+"_targetValue")}),Object(o.jsx)(h.a.Item,{name:"fulfilment",children:Object(o.jsxs)("div",{style:{color:s?"#000":"#ccc"},children:[g.toFixed(0)," %"]},e.tableID+"_fulfilment_"+e.row)})]})})}function D(e){for(var t=[],n=0;n<e.kpiRowCount+e.piRowCount;n++)t.push(e.defaultValueName[n]);for(var i=[],r=0;r<e.kpiRowCount+e.piRowCount;r++)i.push(0);var s=a.a.useState(0),c=Object(l.a)(s,2),u=c[0],d=c[1],g=a.a.useState(t),j=Object(l.a)(g,2),x=j[0],O=j[1],v=a.a.useState(i),y=Object(l.a)(v,2),w=y[0],I=y[1],k=a.a.useState(0),E=Object(l.a)(k,2),C=E[0],T=E[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(h.a.Provider,{onFormChange:function(t,n){for(var i=0,a=0,r=0,s=0,c=0,o=0,u=[],g=[],j=0,m=Object.entries(n.forms);j<m.length;j++){var h=Object(l.a)(m[j],2),b=(h[0],h[1]);if(b.getFieldValue("active")){var f=b.getFieldValue("actualValue")||0,p=b.getFieldValue("targetValue");if(Number.isFinite(b.getFieldValue("actualValue"))){var x=1;Number.isFinite(p)&&0!==p?f>p?x=p/f:f<=p?x=f/p:console.error("Something went wrong in aggregation calculation!"):x=1,"KPI"===b.getFieldValue("step")?(x<=.5?(i+=1.3*x,a+=1.3):(i+=x,a+=1),a&&(r=i/a)):"PI"===b.getFieldValue("step")&&(x<=.5?(s+=1.3*x,c+=1.3):(s+=x,c+=1),c&&(o=s/c))}g.push(V(f||0,p||0)),I(g),u.push(b.getFieldValue("description"))}}var v=.66*r+.33*o;d(v),O(u),e.onAggregationChange(v)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{style:{marginBottom:4,fontWeight:"bold",textDecoration:"underline"},children:e.perspective}),Object(o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"70% auto"},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(e.columns.length,", 1fr)"),justifyItems:"center",columnGap:16,marginTop:40,marginBottom:24},children:e.columns.map((function(e,t){return Object(o.jsx)("span",{style:{fontWeight:"bold",marginLeft:5,marginRight:5},children:e},t)}))}),Array.from({length:e.kpiRowCount},(function(e,t){return t})).map((function(t,n){return Object(o.jsx)(S,{row:t,isKpiRow:!0,step:"KPI",defaultValueName:e.defaultValueName[n],defaultValueTarget:e.defaultValueTarget[n],tableID:e.tableID,perspective:e.perspective,reset:C},t)})),Array.from({length:e.piRowCount},(function(t,n){return e.kpiRowCount+n})).map((function(t){return Object(o.jsx)(S,{row:t,isKpiRow:!1,step:"PI",defaultValueName:e.defaultValueName[t],tableID:e.tableID,perspective:e.perspective,reset:C},t)})),Object(o.jsxs)("div",{style:{marginTop:20},children:["Aggregation: ",u.toFixed(2)," "]}),Object(o.jsx)("div",{style:{textAlign:"center",marginTop:4},children:e.tableLegend.map((function(e,t){return Object(o.jsx)("span",{style:{fontSize:10,overflow:"hidden",textOverflow:"ellipsis",width:" 100%"},children:e.shortcut+"..."+e.name+", "},t)}))}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(o.jsx)(f.a,{icon:Object(o.jsx)(z.a,{style:{color:"red"}}),title:"Wollen Sie die Werte dieser Perspektive wirklich zur\xfccksetzen?",okText:"OK",cancelText:"Abbrechen",onConfirm:function(){d(0),O(t),I(i),T(C+1),e.onAggregationChange(0),p.b.success("Daten wurden erfolgreich zur\xfcckgesetzt!")},children:Object(o.jsx)(m.a,{type:"text",danger:!0,style:{marginRight:16,marginTop:24},children:"Zur\xfccksetzen"})})})]}),Object(o.jsx)(F.a,{options:{chart:{id:"perspective-chart"},xaxis:{categories:x,labels:{show:!0,style:{colors:["#000","#000","#000","#000","#000","#000"],fontSize:"12px"}}},yaxis:{forceNiceScale:!0,min:0,max:95,labels:{maxWidth:1,style:{colors:["#000"]},formatter:function(e,t){return e.toFixed(2)}}},legend:{showForSingleSeries:!0,markers:{fillColors:["#FFE000"]}},stroke:{show:!0,colors:["#FFE000"]},fill:{colors:["#FFE000"],opacity:.1},markers:{size:4,colors:["#FFE000"],hover:{size:6}},plotOptions:{radar:{size:140,polygons:{strokeColors:"#9D9F9E",connectorColors:"#9D9F9E"}}},title:{text:"".concat(e.perspective," Diagramm"),align:"center",style:{fontSize:"14px"}}},series:[{name:"Erf\xfcllungsgrad, [%]",data:w}],type:"radar",width:"700",height:"400"},C+"b")]})]}),Object(o.jsx)(b.a,{})]})})}function L(e){var t=a.a.useState(0),n=Object(l.a)(t,2),i=n[0],r=n[1],s=a.a.useState(0),c=Object(l.a)(s,2),u=c[0],j=c[1],b=a.a.useState(0),f=Object(l.a)(b,2),p=f[0],x=(f[1],a.a.useState(0)),O=Object(l.a)(x,2),v=O[0],y=(O[1],a.a.useState(0)),w=Object(l.a)(y,2),I=w[0],k=w[1];a.a.useEffect((function(){k(F())}),[i,u,p,v]),a.a.useEffect((function(){e.onQualityLevelChange(I*e.maturityWeight)}),[I,e.maturityWeight]);var F=function(){var e;return e=(i+u+p+v)/4,console.log("aggr",i,u),e};return Object(o.jsxs)("div",{style:{textAlign:"center",backgroundColor:e.backgroundColor,padding:40,marginTop:40},children:[Object(o.jsx)("h1",{style:{textTransform:"uppercase"},children:e.title}),Object(o.jsx)("p",{children:e.description}),Object(o.jsxs)("div",{style:{justifyContent:"flex-end",display:"flex",marginTop:16},children:[Object(o.jsx)("span",{style:{textAlign:"center",marginRight:20,marginTop:10},children:".csv"}),Object(o.jsx)(m.a,{type:"primary",icon:Object(o.jsx)(E.a,{}),size:"large",style:{marginRight:16}}),Object(o.jsx)(m.a,{type:"primary",icon:Object(o.jsx)(C.a,{}),size:"large"})]}),Object(o.jsx)(h.a.Provider,{onFormChange:function(t,n){e.onQualityLevelChange(I*e.maturityWeight)},children:Object(o.jsxs)("div",{style:{marginTop:24},children:[Object(o.jsx)(D,{perspective:"Maschinenperspektive",tableID:e.tableID,columns:e.columns,kpiRowCount:2,defaultValueName:["Rss,ugep","OEE","PI Name 1","PI Name 2","PI Name 3"],defaultValueTarget:[20,85],piRowCount:3,defaultValuePIName:"PI Name",tableLegend:[{shortcut:"Rss,ugep",name:"Ratio ungeplante Stillstandzeit"},{shortcut:"OEE",name:"Overall Equipment Effectiveness"}],onAggregationChange:function(e){r(e)}}),Object(o.jsx)(D,{perspective:"Prozessperspektive",tableID:e.tableID,columns:e.columns,kpiRowCount:3,defaultValueName:["Riha,ugep","EGiha,ugep","EGiha,gep","PI Name 1","PI Name 2","PI Name 3"],defaultValueTarget:[10,75,90],piRowCount:3,defaultValuePIName:"PI Name",tableLegend:[{shortcut:"Riha,ugep",name:"Ratio Instandhaltungsauftr\xe4ge ungeplant"},{shortcut:"EGiha,ugep",name:"Erf\xfcllungsgrad ungeplanter Instandhaltungsauftr\xe4ge"},{shortcut:"EGiha,gep",name:"Erf\xfcllungsgrad geplanter Instandhaltungsauftr\xe4ge"}],onAggregationChange:function(e){j(e)}})]})}),Object(o.jsxs)(d.a,{style:{width:300,margin:"auto"},title:e.resultTitle,children:[Object(o.jsxs)("span",{style:{margin:0},children:[e.resultInitials," = ",I.toFixed(2)]}),Object(o.jsx)("span",{style:{marginLeft:8},children:Object(o.jsx)(g.a,{style:{color:function(){var e,t="#FFFFFF";return(e=(i+u+p+v)/4)<=.5?"#FF0000":.51<e&&e<=.66?"#ff8e03":.67<e&&e<=.82?"#FFE000":.83<e&&e<=1.03?"#4EEE94":t}()}})})]})]})}var N=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("footer",{style:{padding:16,fontSize:"0.5rem"},children:Object(o.jsx)("div",{})})})};var R=function(){var e=a.a.useState(0),t=Object(l.a)(e,2),n=t[0],i=t[1],r=a.a.useState(0),s=Object(l.a)(r,2),c=s[0],d=s[1],g=a.a.useState(0),m=Object(l.a)(g,2),h=m[0],b=m[1],f=a.a.useState(0),p=Object(l.a)(f,2),x=p[0],O=p[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsx)(T,{title:"Datenqualit\xe4tsindikatoren",sourceTitle:"Datenquellen",sourceInputPlaceholder:"Datenquelle",description:Object(o.jsxs)(o.Fragment,{children:["Bitte geben Sie die Datenqualit\xe4tsindikatoren gem\xe4\xdf Ihrer Auswertung ein.",Object(o.jsx)("br",{})," Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert. ",Object(o.jsx)("br",{})," Quellen k\xf6nnen selbst benannt werden."]}),backgroundColor:"#e6f5ff",columns:[{name:"Korrektheit",weight:.18},{name:"Validit\xe4t",weight:.09},{name:"Provenienz",weight:.08},{name:"Vollst\xe4ndigkeit",weight:.13},{name:"Verf\xfcgbarkeit",weight:.14},{name:"Granularit\xe4t",weight:.09},{name:"Einzigartigkeit",weight:.02},{name:"System-Konsistenz",weight:.16},{name:"Zug\xe4nglichkeit",weight:.06},{name:"P\xfcnktlichkeit",weight:.07}],resultTitle:"Ergebnis Datenqualit\xe4t:",resultInitials:"DQ",rowsCount:15,tableID:"dq",tableLegend:[],maturityWeight:.36,onQualityLevelChange:function(e){i(e)}}),Object(o.jsx)(T,{title:"Informationsqualit\xe4tsindikatoren",sourceTitle:"Informationsquellen",sourceInputPlaceholder:"Infoquelle",description:Object(o.jsxs)(o.Fragment,{children:["Bitte geben Sie die Informationsqualit\xe4tsindikatoren gem\xe4\xdf Ihrer Auswertung ein.",Object(o.jsx)("br",{})," Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert. ",Object(o.jsx)("br",{})," Quellen k\xf6nnen selbst benannt werden."]}),backgroundColor:"#dbf1ff",columns:[{name:"Korrektheit",weight:.2},{name:"Validit\xe4t",weight:.14},{name:"Erkl\xe4rbarkeit",weight:.09},{name:"Aktualit\xe4t",weight:.14},{name:"Pr\xe4gnanz",weight:.02},{name:"Vollst\xe4ndigkeit",weight:.15},{name:"P\xfcnktlichkeit",weight:.12},{name:"Zweckm\xe4\xdfigkeit",weight:.07},{name:"Informationsfluss",weight:.06}],resultTitle:"Ergebnis Informationsqualit\xe4t:",resultInitials:"IQ",rowsCount:15,tableID:"iq",tableLegend:[],maturityWeight:.23,onQualityLevelChange:function(e){d(e)}}),Object(o.jsx)(T,{title:"Wissensqualit\xe4tsindikatoren",sourceTitle:"Wissensquellen",sourceInputPlaceholder:"Wissensquelle",description:Object(o.jsxs)(o.Fragment,{children:["Bitte geben Sie die Wissensqualit\xe4tsindikatoren gem\xe4\xdf Ihrer Auswertung ein.",Object(o.jsx)("br",{})," Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert. ",Object(o.jsx)("br",{})," Quellen k\xf6nnen selbst benannt werden."]}),backgroundColor:"#e6f5ff",columns:[{name:"BnKQ,k",weight:.18},{name:"EnKQ,k",weight:.31},{name:"LeKQ,k",weight:.31},{name:"ZwKQ",weight:.21}],resultTitle:"Ergebnis Wissensqualit\xe4t:",resultInitials:"KQ",rowsCount:15,tableID:"kq",tableLegend:[{shortcut:"BnKQ,k",name:"Bildungsniveau eines Mitarbeiters"},{shortcut:"EnKQ,k",name:"Erfahrungsniveau eines Mitarbeiters"},{shortcut:"LeKQ,k",name:"Leistungsniveau eines Mitarbeiters"},{shortcut:"ZwKQ",name:"Zweckm\xe4\xdfigkeit eines IT-Systems zur Wissensbereitstellung"}],maturityWeight:.28,onQualityLevelChange:function(e){b(e)}}),Object(o.jsx)(L,{title:"Instandhaltungsqualit\xe4tsindikatoren",description:Object(o.jsxs)(o.Fragment,{children:["Bitte geben Sie die Instandhaltungsqualit\xe4tsindikatoren gem\xe4\xdf Ihrer Auswertung ein.",Object(o.jsx)("br",{})," F\xfcr Prozentangaben werden ganze Zahlen zwischen Null und 100 akzeptiert.",Object(o.jsx)("br",{})," PI Kennzahlen k\xf6nnen selbst benannt werden."]}),backgroundColor:"#dbf1ff",columns:["An/Aus","Stufe","Kennzahl","Ist, [%]","Soll, [%]","Erf\xfcllungsgrad"],resultTitle:"Ergebnis Instandhaltungsqualit\xe4t:",resultInitials:"MQ",maturityWeight:.13,tableID:"mq",onQualityLevelChange:function(e){O(e)}}),Object(o.jsx)(j,{maturityLevel:n+c+h+x}),Object(o.jsx)(N,{})]})};n(216);s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(R,{})}),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.e8ec891d.chunk.js.map