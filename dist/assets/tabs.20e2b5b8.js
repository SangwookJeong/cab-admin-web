import{a as l,V as v}from"./VTabs.1137f495.js";import{V as C}from"./VBtn.a4aae81b.js";import{k as I,Z as N,o as c,c as d,p as e,w as t,F as p,a as w,q as m,b as y,E as s,x as h,D as V,m as n,L as W,C as k}from"./index.b54d9fca.js";import{a as g,V as q}from"./VWindowItem.cc618d52.js";import{a as b,V as P}from"./VRow.64033f9e.js";import{_ as A}from"./AppCardCode.a6b8276f.js";import"./router.2f5148f2.js";import"./easing.36b781ab.js";import"./index.fb967781.js";import"./position.e1a9cf7b.js";import"./lazy.42f8717a.js";import"./VImg.fa9bd3c1.js";import"./ssrBoot.e931af1c.js";import"./vue.runtime.esm-bundler.e4fa70f7.js";import"./VCard.22430b76.js";import"./VAvatar.76efe2b9.js";import"./VDivider.aab4e4c1.js";const O={class:"text-center mt-9"},U={__name:"DemoTabsDynamic",setup(_){const a=I(3),u=I(0);return N(a,r=>{u.value=r-1}),(r,o)=>(c(),d(p,null,[e(v,{modelValue:m(u),"onUpdate:modelValue":o[0]||(o[0]=i=>V(u)?u.value=i:null)},{default:t(()=>[(c(!0),d(p,null,w(m(a),i=>(c(),y(l,{key:i,value:i},{default:t(()=>[s(" Tab "+h(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),n("div",O,[e(C,{disabled:!m(a),variant:"text",onClick:o[1]||(o[1]=i=>a.value--)},{default:t(()=>[s(" Remove Tab ")]),_:1},8,["disabled"]),e(C,{variant:"text",onClick:o[2]||(o[2]=i=>a.value++)},{default:t(()=>[s(" Add Tab ")]),_:1})])],64))}},E={class:"text-center"},R={__name:"DemoTabsProgrammaticNavigation",setup(_){const a=I(0),u=["Appetizers","Entrees","Deserts","Cocktails"],r="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",o=u.length,i=()=>{a.value!==1&&(a.value-=1)},T=()=>{a.value!==o&&(a.value+=1)};return(D,x)=>(c(),d(p,null,[e(v,{modelValue:m(a),"onUpdate:modelValue":x[0]||(x[0]=f=>V(a)?a.value=f:null),grow:""},{default:t(()=>[(c(!0),d(p,null,w(u.length,f=>(c(),y(l,{key:f,value:f},{default:t(()=>[s(h(u[f-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(q,{modelValue:m(a),"onUpdate:modelValue":x[1]||(x[1]=f=>V(a)?a.value=f:null),class:"mt-5"},{default:t(()=>[(c(!0),d(p,null,w(u.length,f=>(c(),y(g,{key:f,value:f},{default:t(()=>[s(h(r))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),n("div",E,[e(C,{variant:"text",disabled:m(a)===1,onClick:i},{default:t(()=>[s(" Previous ")]),_:1},8,["disabled"]),e(C,{variant:"text",disabled:m(a)===m(o),onClick:T},{default:t(()=>[s(" Next ")]),_:1},8,["disabled"])])],64))}},M={__name:"DemoTabsGrow",setup(_){const a=I("Appetizers"),u=["Appetizers","Entrees","Deserts","Cocktails"],r="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.";return(o,i)=>(c(),d(p,null,[e(v,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=T=>V(a)?a.value=T:null),grow:""},{default:t(()=>[(c(),d(p,null,w(u,T=>e(l,{key:T,value:T},{default:t(()=>[s(h(T),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(q,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=T=>V(a)?a.value=T:null),class:"mt-6"},{default:t(()=>[(c(),d(p,null,w(u,T=>e(g,{key:T,value:T},{default:t(()=>[s(h(r))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},H={};function G(_,a){return c(),y(v,{"fixed-tabs":""},{default:t(()=>[e(l,null,{default:t(()=>[s(" Fixed Tab 1 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 2 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 3 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 4 ")]),_:1})]),_:1})}const L=W(H,[["render",G]]),Z={};function J(_,a){return c(),y(v,{"next-icon":"mdi-arrow-right","prev-icon":"mdi-arrow-left"},{default:t(()=>[(c(),d(p,null,w(10,u=>e(l,{key:u},{default:t(()=>[s(" Item "+h(u),1)]),_:2},1024)),64))]),_:1})}const K=W(Z,[["render",J]]),Q={};function X(_,a){return c(),y(v,null,{default:t(()=>[(c(),d(p,null,w(10,u=>e(l,{key:u,value:u},{default:t(()=>[s(" Item "+h(u),1)]),_:2},1032,["value"])),64))]),_:1})}const Y=W(Q,[["render",X]]),ee={};function te(_,a){return c(),d(p,null,[e(v,null,{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(v,{"align-tabs":"center"},{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(v,{"align-tabs":"end"},{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1})],64)}const ae=W(ee,[["render",te]]),se=n("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),oe=n("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),ne=n("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),ie=n("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),le=n("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),ue=n("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),ce={__name:"DemoTabsVerticalPill",setup(_){const a=I(0);return(u,r)=>(c(),y(P,null,{default:t(()=>[e(b,{cols:"5",sm:"4"},{default:t(()=>[e(v,{modelValue:m(a),"onUpdate:modelValue":r[0]||(r[0]=o=>V(a)?a.value=o:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(l,null,{default:t(()=>[e(k,{start:"",icon:"mdi-account-outline"}),s(" Option 1 ")]),_:1}),e(l,null,{default:t(()=>[e(k,{start:"",icon:"mdi-lock-outline",size:22}),s(" Option 2 ")]),_:1}),e(l,null,{default:t(()=>[e(k,{start:"",icon:"mdi-access-point",size:22}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"7",sm:"8"},{default:t(()=>[e(q,{modelValue:m(a),"onUpdate:modelValue":r[1]||(r[1]=o=>V(a)?a.value=o:null)},{default:t(()=>[e(g,null,{default:t(()=>[se,oe]),_:1}),e(g,null,{default:t(()=>[ne,ie]),_:1}),e(g,null,{default:t(()=>[le,ue]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},re=n("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),me=n("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),de=n("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),pe=n("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),be=n("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),Ve=n("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),Te={__name:"DemoTabsVertical",setup(_){const a=I(0);return(u,r)=>(c(),y(P,null,{default:t(()=>[e(b,{cols:"5",sm:"4"},{default:t(()=>[e(v,{modelValue:m(a),"onUpdate:modelValue":r[0]||(r[0]=o=>V(a)?a.value=o:null),direction:"vertical"},{default:t(()=>[e(l,null,{default:t(()=>[e(k,{start:"",icon:"mdi-account-outline"}),s(" Option 1 ")]),_:1}),e(l,null,{default:t(()=>[e(k,{start:"",icon:"mdi-lock-outline",size:22}),s(" Option 2 ")]),_:1}),e(l,null,{default:t(()=>[e(k,{start:"",icon:"mdi-access-point",size:22}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"7",sm:"8"},{default:t(()=>[e(q,{modelValue:m(a),"onUpdate:modelValue":r[1]||(r[1]=o=>V(a)?a.value=o:null)},{default:t(()=>[e(g,null,{default:t(()=>[re,me]),_:1}),e(g,null,{default:t(()=>[de,pe]),_:1}),e(g,null,{default:t(()=>[be,Ve]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},ve=n("span",null,"Recent",-1),_e=n("span",null,"Favorites",-1),fe=n("span",null,"Nearby",-1),ge={__name:"DemoTabsStacked",setup(_){const a=I("tab-1"),u="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.";return(r,o)=>(c(),d(p,null,[e(v,{modelValue:m(a),"onUpdate:modelValue":o[0]||(o[0]=i=>V(a)?a.value=i:null),grow:"",stacked:""},{default:t(()=>[e(l,{value:"tab-1"},{default:t(()=>[e(k,{icon:"mdi-phone",class:"mb-2"}),ve]),_:1}),e(l,{value:"tab-2"},{default:t(()=>[e(k,{icon:"mdi-heart-outline",class:"mb-2"}),_e]),_:1}),e(l,{value:"tab-3"},{default:t(()=>[e(k,{icon:"mdi-account-box-outline",class:"mb-2"}),fe]),_:1})]),_:1},8,["modelValue"]),e(q,{modelValue:m(a),"onUpdate:modelValue":o[1]||(o[1]=i=>V(a)?a.value=i:null),class:"mt-5"},{default:t(()=>[(c(),d(p,null,w(3,i=>e(g,{key:i,value:`tab-${i}`},{default:t(()=>[s(h(u))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},we={__name:"DemoTabsBasicPill",setup(_){const a=I(0),u="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";return(r,o)=>(c(),d(p,null,[e(v,{modelValue:m(a),"onUpdate:modelValue":o[0]||(o[0]=i=>V(a)?a.value=i:null),class:"v-tabs-pill"},{default:t(()=>[e(l,null,{default:t(()=>[s("Tab One")]),_:1}),e(l,null,{default:t(()=>[s("Tab Two")]),_:1}),e(l,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(q,{modelValue:m(a),"onUpdate:modelValue":o[1]||(o[1]=i=>V(a)?a.value=i:null),class:"mt-5"},{default:t(()=>[(c(),d(p,null,w(3,i=>e(g,{key:i},{default:t(()=>[s(h(u))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},he={__name:"DemoTabsBasic",setup(_){const a=I(0),u="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";return(r,o)=>(c(),d(p,null,[e(v,{modelValue:m(a),"onUpdate:modelValue":o[0]||(o[0]=i=>V(a)?a.value=i:null)},{default:t(()=>[e(l,null,{default:t(()=>[s("Tab One")]),_:1}),e(l,null,{default:t(()=>[s("Tab Two")]),_:1}),e(l,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(q,{modelValue:m(a),"onUpdate:modelValue":o[1]||(o[1]=i=>V(a)?a.value=i:null),class:"mt-5"},{default:t(()=>[(c(),d(p,null,w(3,i=>e(g,{key:i},{default:t(()=>[s(h(u))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},ke={ts:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`,js:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`},Ie={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},ye={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},qe={ts:`<template>
  <VTabs
    next-icon="mdi-arrow-right"
    prev-icon="mdi-arrow-left"
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs
    next-icon="mdi-arrow-right"
    prev-icon="mdi-arrow-left"
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},xe={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`},Ce={ts:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`},We={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Pe={ts:`<template>
  <VTabs>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},De={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`},Se={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="mdi-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="mdi-heart-outline"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="mdi-account-box-outline"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="mdi-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="mdi-heart-outline"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="mdi-account-box-outline"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},je={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="5"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab>
          <VIcon
            start
            icon="mdi-account-outline"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-lock-outline"
            :size="22"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-access-point"
            :size="22"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="7"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="5"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab>
          <VIcon
            start
            icon="mdi-account-outline"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-lock-outline"
            :size="22"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-access-point"
            :size="22"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="7"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},Fe={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="5"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="mdi-account-outline"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-lock-outline"
            :size="22"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-access-point"
            :size="22"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="7"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="5"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="mdi-account-outline"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-lock-outline"
            :size="22"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-access-point"
            :size="22"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="7"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},$e=n("p",null,[s("The "),n("code",null,"v-tabs"),s(" component is used for hiding content behind a selectable item.")],-1),ze=n("p",null,[s("Use our custom class "),n("code",null,".v-tabs-pill"),s(" along with "),n("code",null,"v-tabs"),s(" component to style pill tabs.")],-1),Be=n("p",null,[s("Using "),n("code",null,"stacked"),s(" prop you can have buttons that use both icons and text.")],-1),Ne=n("p",null,[s("The "),n("code",null,"vertical"),s(" prop allows for "),n("code",null,"v-tab"),s(" components to stack vertically.")],-1),Ae=n("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),Oe=n("p",null,[s("Use "),n("code",null,"align-tabs"),s(" prop to change the tabs alignment.")],-1),Ue=n("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),Ee=n("p",null,[n("code",null,"prev-icon"),s(" and "),n("code",null,"next-icon"),s(" props can be used for applying custom pagination icons.")],-1),Re=n("p",null,[s("The "),n("code",null,"fixed-tabs"),s(" prop forces "),n("code",null,"v-tab"),s(" to take up all available space up to the maximum width (300px).")],-1),Me=n("p",null,[s("The "),n("code",null,"grow"),s(" prop will make the tab items take up all available space with no limit.")],-1),He=n("p",null,[s("Tabs can be dynamically added and removed. This allows you to update to any number and the "),n("code",null,"v-tabs"),s(" component will react.")],-1),ct={__name:"tabs",setup(_){return(a,u)=>{const r=he,o=A,i=we,T=ge,D=Te,x=ce,f=ae,S=Y,j=K,F=L,$=M,z=R,B=U;return c(),y(P,{class:"match-height"},{default:t(()=>[e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:Ie},{default:t(()=>[$e,e(r)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic Pill",code:ye},{default:t(()=>[ze,e(i)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Stacked",code:Se},{default:t(()=>[Be,e(T)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical",code:je},{default:t(()=>[Ne,e(D)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical Pill",code:Fe},{default:t(()=>[Ae,e(x)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Alignment",code:ke},{default:t(()=>[Oe,e(f)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Pagination",code:Pe},{default:t(()=>[Ue,e(S)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom Icons",code:qe},{default:t(()=>[Ee,e(j)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:t(()=>[e(o,{title:"Fixed",code:Ce},{default:t(()=>[Re,e(F)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:t(()=>[e(o,{title:"Grow",code:We},{default:t(()=>[Me,e($)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Programmatic Navigation",code:De},{default:t(()=>[e(z)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Dynamic",code:xe},{default:t(()=>[He,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ct as default};
