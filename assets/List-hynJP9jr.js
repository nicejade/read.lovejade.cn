import{r as u,t as p,$ as f,m,_,o as g,a as y,n as h,c as i,b as l,F as x,d as S,e as d,f as B}from"./index-d7kNql4x.js";const T=[{_id:"5b279f0f3bd7ef3847a3fadb",content:"我走过山时，山不说话，我路过海时，海不说话，小毛驴滴滴答答，倚天剑伴我走天涯。大家都说我因为爱着杨过大侠，才在峨嵋山上出了家，其实我只是爱上了峨嵋山上的云和霞，像极了十六岁那年的烟花。",type:"aestheticism",createdBy:"admin",modifyTime:"2018-06-18T11:58:03.164Z",createTime:"2018-06-18T11:58:03.164Z",active:!0,__v:0}],b=a=>{const{pageSize:r}=a,e=u({sentencesArr:{},error:!1,loading:!1}),n=t=>t.map(s=>({_id:s._id,type:s.type,content:m(s.content,{}).replace(/<[^>]*>/g,"")}));return{request:()=>{e.loading=!0;const t={pageCount:1,pageSize:r,sortType:-1,sortTarget:"createTime",active:!0};f.getSentences(t).then(s=>{e.sentencesArr=n(s)}).catch(s=>{e.sentencesArr=T,e.error=!0}).finally(()=>{e.loading=!1})},updateBgColor:()=>{const t=document.querySelector("body");t.classList="amp-mode-mouse amp-mode-touch"},...p(e)}},k={setup(){const{sentencesArr:r,loading:e,error:n,request:o,updateBgColor:c}=b(300);return g(()=>{o()}),y(()=>{h(()=>{c()})}),{loading:e,sentencesArr:r}}},v={class:"flex flex-row justify-center w-full max-w-xl max-h-screen px-4 my-6 md:my-2"},A={class:"container"},$=["href"];function q(a,r,e,n,o,c){return d(),i("div",v,[l("ul",A,[(d(!0),i(x,null,S(n.sentencesArr,t=>(d(),i("li",{class:"p-4 list",key:t._id},[l("a",{class:"link",href:"/p/"+t._id},B(t.content),9,$)]))),128))])])}const C=_(k,[["render",q]]);export{C as default};
