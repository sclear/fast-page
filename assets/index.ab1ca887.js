import{C as d,b as f,a as w,F as b,E as g,T as C,c as s,d as E,u as v}from"./index.e73e15d4.js";import{D as x}from"./index.3c2e1efa.js";import{E as p}from"./index.56d6ad3b.js";import{d as F,r as o,c as e,b as r,a7 as y,o as I,e as R,w as n,g as t}from"./index.a8d12f33.js";import"./index.7400a9d9.js";import"./index.5e86b51b.js";import"./focus-trap.38d07778.js";const M=F({__name:"index",setup(T){const l=o(),m=o(),i=d({tableInstance:m,row:[8],form:[{type:"Input",label:"\u59D3\u540D",model:"cname"},{type:"Input",label:"\u522B\u79F0",model:"title"},{type:"Radio",label:"\u72B6\u6001",model:"type",dataSource:[{label:"\u663E\u793A",value:1},{label:"\u9690\u85CF",value:0}]},{row:[24],align:"right",render(){return e(y,null,[e(p,{type:"primary",onClick:()=>{l.value.open({title:"\u65B0\u589E\u88C5\u5907"})}},{default:()=>[r("\u65B0\u589E")]}),e(f,{htmlType:"submit",class:"ml-12px"},{default:()=>[e(p,{type:"success"},{default:()=>[r("\u67E5\u8BE2")]})]}),e(f,{htmlType:"reset",class:"ml-12px"},{default:()=>[e(p,{type:"info"},{default:()=>[r("\u91CD\u7F6E")]})]})])}}],data:o({cname:"",title:"",hero_type:"",type:1})}),_=d({row:[12],form:[{type:"Input",label:"\u88C5\u5907",model:"item_name"},{type:"Input",label:"\u4EF7\u683C",model:"total_price"},{type:"Input",label:"\u63CF\u8FF0",model:"des1"}],api:"game.createHero",labelWidth:120,data:o({item_name:"",des1:"",total_price:""}),createRule(a){return{item_name:a.required(),des1:a.required(),total_price:a.required()}}}),c=w({api:"game.itemList",autoRun:!0,column:[{type:"Index",label:"\u5E8F\u53F7",width:70},{prop:"item_id",label:"\u88C5\u5907",width:100,render(a){return e("img",{class:"w-30px",src:`//game.gtimg.cn/images/yxzj/img201606/itemimg/${a}.jpg`},null)}},{prop:"item_name",label:"\u88C5\u5907\u540D\u79F0",width:130},{prop:"total_price",label:"\u4EF7\u683C"},{prop:"des1",label:"\u57FA\u672C\u63CF\u8FF0",customProps:{"show-overflow-tooltip":!0},vIf(){return i.data.value.type===1}},{label:"\u64CD\u4F5C",render(a,u,h){return e(y,null,[e(s,{class:"mr-2 cursor-pointer",onClick:()=>{l.value.open({title:"\u7F16\u8F91\u88C5\u5907",disabled:!1,data:{...u},action:[{function:"cancel"},{function:"confirm",type:"warning",label:"\u6682\u5B58",api:"game.testSave"},{function:"confirm",api:"game.confirm"}]})}},{default:()=>[r("\u7F16\u8F91")]}),e(s,{type:"info",class:"mr-2 cursor-pointer",onClick:()=>{l.value.open({disabled:!0,title:"\u8BE6\u60C5",api:"test",data:{...u}})}},{default:()=>[r("\u88C5\u5907\u8BE6\u60C5")]}),e(E,{onConfirm:()=>{v({api:"user.del",data:{num:h},autoRun:!0,successMessage:"\u5220\u9664\u6210\u529F",errorMessage:"\u5220\u9664\u5931\u8D25",onSuccess(){c.run()}})},title:"Are you sure to delete this?"},{reference:()=>e(s,{class:"cursor-pointer",type:"danger"},{default:()=>[r("\u5220\u9664")]})})])}}]});return(a,u)=>(I(),R("div",null,[e(t(g),null,{default:n(()=>[e(t(b),{createOption:t(i)},null,8,["createOption"])]),_:1}),e(t(g),{class:"mt-3"},{default:n(()=>[e(t(C),{ref_key:"tableRef",ref:m,createOption:t(c),"search-params":t(i).omitData},{default:n(()=>[e(t(x),{width:900,ref_key:"dialogRef",ref:l},{default:n(()=>[e(t(b),{createOption:t(_)},null,8,["createOption"])]),_:1},512)]),_:1},8,["createOption","search-params"])]),_:1})]))}});export{M as default};
