import{V as d}from"./VBtn.a4aae81b.js";import{V as v,c as y,e as B,a as te,b as oe}from"./VCard.22430b76.js";import{V as K,a as f}from"./VRow.64033f9e.js";import{V as T}from"./VTextField.21e2002d.js";import{V as ie}from"./VSelect.59c3c726.js";import{V as se}from"./VAutocomplete.2a44ca53.js";import{V as C}from"./VSpacer.62310e70.js";import{V as k}from"./VDialog.5429881f.js";import{au as Q,ab as X,ag as z,p as e,ah as re,ac as ne,aD as ce,af as I,ad as ue,k as g,A as H,ae as Y,az as E,a8 as de,o as h,b as _,w as a,a5 as x,a6 as A,E as s,q as p,D as b,m as V,C as me,O as pe,c as $,F as U,Z as ge,a as be}from"./index.b54d9fca.js";import{b as fe}from"./index.fb967781.js";import{m as Ve,b as he,c as ve,e as ke,f as ye,g as Ce,V as we,d as De}from"./router.2f5148f2.js";import{V as Be}from"./VImg.fa9bd3c1.js";import{V as W,d as Z,a as j}from"./VList.84d61a8a.js";import{V as N}from"./VDivider.aab4e4c1.js";import{V as L}from"./VListItemAction.2308c9bf.js";import{V as P}from"./VCheckbox.fad56530.js";import{V as _e}from"./position.e1a9cf7b.js";import{V as Te,a as je}from"./VRadioGroup.024b4773.js";import{_ as xe}from"./AppCardCode.a6b8276f.js";import"./VAvatar.76efe2b9.js";/* empty css                   */import"./VField.b3a1d217.js";import"./VInput.2af3df27.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.e1ec2433.js";import"./dialog-transition.4a979ef2.js";import"./VMenu.57334ca0.js";import"./scopeId.ed7e5419.js";import"./VOverlay.7a7efa40.js";import"./lazy.42f8717a.js";import"./VCheckboxBtn.e6d00e80.js";import"./VSelectionControl.854c9cad.js";import"./VChip.b88bf08f.js";import"./filter.ef6bdc8a.js";import"./vue.runtime.esm-bundler.e4fa70f7.js";const ee=Q()({name:"VToolbarTitle",props:{text:String,...X()},setup(i,o){let{slots:r}=o;return z(()=>{var l;const t=!!(r.default||r.text||i.text);return e(i.tag,{class:"v-toolbar-title"},{default:()=>[t&&e("div",{class:"v-toolbar-title__placeholder"},[r.text?r.text():i.text,(l=r.default)==null?void 0:l.call(r)])]})}),{}}}),Ae=[null,"prominent","default","comfortable","compact"],Se=re({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:i=>Ae.includes(i)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ve(),...he(),...ve(),...X({tag:"header"}),...ne()},"v-toolbar"),Le=Q()({name:"VToolbar",props:Se(),setup(i,o){var r;let{slots:l}=o;const{backgroundColorClasses:t,backgroundColorStyles:c}=ce(I(i,"color")),{borderClasses:m}=ke(i),{elevationClasses:w}=ye(i),{roundedClasses:D}=Ce(i),{themeClasses:S}=ue(i),n=g(!!(i.extended||(r=l.extension)!=null&&r.call(l))),u=H(()=>parseInt(Number(i.height)+(i.density==="prominent"?Number(i.height):0)-(i.density==="comfortable"?8:0)-(i.density==="compact"?16:0),10)),F=H(()=>n.value?parseInt(Number(i.extensionHeight)+(i.density==="prominent"?Number(i.extensionHeight):0)-(i.density==="comfortable"?4:0)-(i.density==="compact"?8:0),10):0);return Y({VBtn:{variant:"text"}}),z(()=>{var q,J,G,O,R;const ae=!!(i.title||l.title),le=!!(l.image||i.image),M=(q=l.extension)==null?void 0:q.call(l);return n.value=!!(i.extended||M),e(i.tag,{class:["v-toolbar",{"v-toolbar--absolute":i.absolute,"v-toolbar--collapse":i.collapse,"v-toolbar--flat":i.flat,"v-toolbar--floating":i.floating,[`v-toolbar--density-${i.density}`]:!0},t.value,m.value,w.value,D.value,S.value],style:[c.value]},{default:()=>[le&&e("div",{key:"image",class:"v-toolbar__image"},[e(we,{defaults:{VImg:{cover:!0,src:i.image}}},{default:()=>[l.image?(J=l.image)==null?void 0:J.call(l):e(Be,null,null)]})]),e("div",{class:"v-toolbar__content",style:{height:E(u.value)}},[l.prepend&&e("div",{class:"v-toolbar__prepend"},[(G=l.prepend)==null?void 0:G.call(l)]),ae&&e(ee,{key:"title",text:i.title},{text:l.title}),(O=l.default)==null?void 0:O.call(l),l.append&&e("div",{class:"v-toolbar__append"},[(R=l.append)==null?void 0:R.call(l)])]),e(fe,null,{default:()=>[n.value&&e("div",{class:"v-toolbar__extension",style:{height:E(F.value)}},[M])]})]})}),{contentHeight:u,extensionHeight:F}}}),Pe=de({name:"VToolbarItems",props:De({variant:"text"}),setup(i,o){let{slots:r}=o;return Y({VBtn:{color:I(i,"color"),height:"inherit",variant:I(i,"variant")}}),z(()=>{var l;return e("div",{class:"v-toolbar-items"},[(l=r.default)==null?void 0:l.call(r)])}),{}}}),Ie={__name:"DemoDialogForm",setup(i){const o=g(!1),r=g(""),l=g(""),t=g(""),c=g(""),m=g(""),w=g(),D=g([]);return(S,n)=>(h(),_(k,{modelValue:p(o),"onUpdate:modelValue":n[9]||(n[9]=u=>b(o)?o.value=u:null),"max-width":"600"},{activator:a(({props:u})=>[e(d,x(A(u)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(v,{title:"User Profile"},{default:a(()=>[e(y,null,{default:a(()=>[e(K,null,{default:a(()=>[e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(T,{modelValue:p(r),"onUpdate:modelValue":n[0]||(n[0]=u=>b(r)?r.value=u:null),label:"First Name"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(T,{modelValue:p(l),"onUpdate:modelValue":n[1]||(n[1]=u=>b(l)?l.value=u:null),label:"Middle Name"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(T,{modelValue:p(t),"onUpdate:modelValue":n[2]||(n[2]=u=>b(t)?t.value=u:null),label:"Last Name","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(T,{modelValue:p(c),"onUpdate:modelValue":n[3]||(n[3]=u=>b(c)?c.value=u:null),label:"Email"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(T,{modelValue:p(m),"onUpdate:modelValue":n[4]||(n[4]=u=>b(m)?m.value=u:null),label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6"},{default:a(()=>[e(ie,{modelValue:p(w),"onUpdate:modelValue":n[5]||(n[5]=u=>b(w)?w.value=u:null),items:["0-17","18-29","30-54","54+"],label:"Age"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6"},{default:a(()=>[e(se,{modelValue:p(D),"onUpdate:modelValue":n[6]||(n[6]=u=>b(D)?D.value=u:null),multiple:"",items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:a(()=>[e(C),e(d,{color:"error",onClick:n[7]||(n[7]=u=>o.value=!1)},{default:a(()=>[s(" Close ")]),_:1}),e(d,{color:"success",onClick:n[8]||(n[8]=u=>o.value=!1)},{default:a(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};const Ne={__name:"DemoDialogFullscreen",setup(i){const o=g(!1);return(r,l)=>(h(),_(k,{modelValue:p(o),"onUpdate:modelValue":l[2]||(l[2]=t=>b(o)?o.value=t:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:t})=>[e(d,x(A(t)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(v,null,{default:a(()=>[V("div",null,[e(Le,{color:"primary"},{default:a(()=>[e(d,{icon:"",variant:"plain",onClick:l[0]||(l[0]=t=>o.value=!1)},{default:a(()=>[e(me,{color:"white",icon:"mdi-close"})]),_:1}),e(ee,null,{default:a(()=>[s("Settings")]),_:1}),e(C),e(Pe,null,{default:a(()=>[e(d,{variant:"text",onClick:l[1]||(l[1]=t=>o.value=!1)},{default:a(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),e(W,{lines:"two"},{default:a(()=>[e(Z,null,{default:a(()=>[s("User Controls")]),_:1}),e(j,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(j,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(N),e(W,{lines:"two","select-strategy":"classic"},{default:a(()=>[e(Z,null,{default:a(()=>[s("General")]),_:1}),e(j,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:t})=>[e(L,{start:""},{default:a(()=>[e(P,{"model-value":t,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(j,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:t})=>[e(L,{start:""},{default:a(()=>[e(P,{"model-value":t,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(j,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:t})=>[e(L,{start:""},{default:a(()=>[e(P,{"model-value":t,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ze={__name:"DemoDialogOverflowed",setup(i){const o=g(!1);return(r,l)=>(h(),_(k,{modelValue:p(o),"onUpdate:modelValue":l[2]||(l[2]=t=>b(o)?o.value=t:null),class:"v-dialog-sm"},{activator:a(({props:t})=>[e(d,pe({color:"primary"},t),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(v,{title:"Use Google's location service?"},{default:a(()=>[e(y,null,{default:a(()=>[s(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie drag\xE9e toffee. Cupcake souffl\xE9 pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie drag\xE9e souffl\xE9 oat cake toffee drag\xE9e gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Drag\xE9e cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee souffl\xE9 biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow drag\xE9e. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet drag\xE9e dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread souffl\xE9 croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake drag\xE9e. Cheesecake gummies sesame snaps souffl\xE9 jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping drag\xE9e chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")]),_:1}),e(B,null,{default:a(()=>[e(C),e(d,{color:"error",onClick:l[0]||(l[0]=t=>o.value=!1)},{default:a(()=>[s(" Disagree ")]),_:1}),e(d,{color:"success",onClick:l[1]||(l[1]=t=>o.value=!1)},{default:a(()=>[s(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},$e={__name:"DemoDialogNesting",setup(i){const o=g(!1),r=g(!1);return(l,t)=>(h(),$(U,null,[e(d,{onClick:t[0]||(t[0]=c=>o.value=!0)},{default:a(()=>[s(" Open Dialog ")]),_:1}),e(k,{modelValue:p(o),"onUpdate:modelValue":t[3]||(t[3]=c=>b(o)?o.value=c:null),class:"v-dialog-sm"},{default:a(()=>[e(v,{title:"Dialog"},{default:a(()=>[e(y,null,{default:a(()=>[s(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart souffl\xE9 pudding. ")]),_:1}),e(B,null,{default:a(()=>[e(C),e(d,{color:"error",onClick:t[1]||(t[1]=c=>o.value=!1)},{default:a(()=>[s(" Close ")]),_:1}),e(d,{onClick:t[2]||(t[2]=c=>r.value=!p(r))},{default:a(()=>[s(" Open Dialog 2 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:p(r),"onUpdate:modelValue":t[5]||(t[5]=c=>b(r)?r.value=c:null),class:"v-dialog-sm"},{default:a(()=>[e(v,{title:"Dialog 2"},{default:a(()=>[e(y,null,{default:a(()=>[s("I'm a nested dialog.")]),_:1}),e(B,null,{default:a(()=>[e(C),e(d,{onClick:t[4]||(t[4]=c=>r.value=!1)},{default:a(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},Ue=V("p",{class:"mb-2"}," Please stand by ",-1),Fe={__name:"DemoDialogLoader",setup(i){const o=g(!1);return ge(o,r=>{!r||setTimeout(()=>{o.value=!1},4e3)}),(r,l)=>(h(),$(U,null,[e(d,{disabled:p(o),onClick:l[0]||(l[0]=t=>o.value=!0)},{default:a(()=>[s(" Start loading ")]),_:1},8,["disabled"]),e(k,{modelValue:p(o),"onUpdate:modelValue":l[1]||(l[1]=t=>b(o)?o.value=t:null),width:"300"},{default:a(()=>[e(v,{color:"primary",width:"300"},{default:a(()=>[e(y,{class:"pt-3"},{default:a(()=>[Ue,e(_e,{indeterminate:"",color:"white",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},qe={__name:"DemoDialogScrollable",setup(i){const o=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],r=g(""),l=g(!1);return(t,c)=>(h(),_(k,{modelValue:p(l),"onUpdate:modelValue":c[3]||(c[3]=m=>b(l)?l.value=m:null),scrollable:"","max-width":"350"},{activator:a(({props:m})=>[e(d,x(A(m)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(v,null,{default:a(()=>[e(te,null,{default:a(()=>[e(oe,null,{default:a(()=>[s("Select Country")]),_:1})]),_:1}),e(N),e(y,{style:{height:"300px"}},{default:a(()=>[e(Te,{modelValue:p(r),"onUpdate:modelValue":c[0]||(c[0]=m=>b(r)?r.value=m:null),inline:!1},{default:a(()=>[(h(),$(U,null,be(o,m=>e(je,{key:m.label,label:m.label,value:m.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(N),e(B,{class:"pt-3"},{default:a(()=>[e(C),e(d,{color:"error",onClick:c[1]||(c[1]=m=>l.value=!1)},{default:a(()=>[s(" Close ")]),_:1}),e(d,{color:"success",onClick:c[2]||(c[2]=m=>l.value=!1)},{default:a(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Je={__name:"DemoDialogPersistent",setup(i){const o=g(!1);return(r,l)=>(h(),_(k,{modelValue:p(o),"onUpdate:modelValue":l[2]||(l[2]=t=>b(o)?o.value=t:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:t})=>[e(d,x(A(t)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(v,{title:"Use Google's location service?"},{default:a(()=>[e(y,null,{default:a(()=>[s(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(B,null,{default:a(()=>[e(C),e(d,{color:"error",onClick:l[0]||(l[0]=t=>o.value=!1)},{default:a(()=>[s(" Disagree ")]),_:1}),e(d,{color:"success",onClick:l[1]||(l[1]=t=>o.value=!1)},{default:a(()=>[s(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Ge={__name:"DemoDialogBasic",setup(i){const o=g(!1);return(r,l)=>(h(),_(k,{modelValue:p(o),"onUpdate:modelValue":l[1]||(l[1]=t=>b(o)?o.value=t:null),width:"500"},{activator:a(({props:t})=>[e(d,x(A(t)),{default:a(()=>[s(" Click Me ")]),_:2},1040)]),default:a(()=>[e(v,{title:"Privacy Policy"},{default:a(()=>[e(y,null,{default:a(()=>[s(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")]),_:1}),e(B,null,{default:a(()=>[e(C),e(d,{onClick:l[0]||(l[0]=t=>o.value=!1)},{default:a(()=>[s(" I accept ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Oe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Re={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="age"
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VAutocomplete
              v-model="interest"
              multiple
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="age"
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VAutocomplete
              v-model="interest"
              multiple
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Me={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="mdi-close"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="mdi-close"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},He={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        <p class="mb-2">
          Please stand by
        </p>
        <VProgressLinear
          indeterminate
          color="white"
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        <p class="mb-2">
          Please stand by
        </p>
        <VProgressLinear
          indeterminate
          color="white"
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ee={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart souffl\xE9 pudding.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart souffl\xE9 pudding.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},We={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie drag\xE9e toffee. Cupcake souffl\xE9 pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie drag\xE9e souffl\xE9 oat cake toffee drag\xE9e gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Drag\xE9e cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee souffl\xE9 biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow drag\xE9e. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet drag\xE9e dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread souffl\xE9 croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake drag\xE9e. Cheesecake gummies sesame snaps souffl\xE9 jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping drag\xE9e chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie drag\xE9e toffee. Cupcake souffl\xE9 pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie drag\xE9e souffl\xE9 oat cake toffee drag\xE9e gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Drag\xE9e cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee souffl\xE9 biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow drag\xE9e. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet drag\xE9e dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread souffl\xE9 croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake drag\xE9e. Cheesecake gummies sesame snaps souffl\xE9 jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping drag\xE9e chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Ze={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Ke={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },

  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },

  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <VCardItem>
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardActions class="pt-3">
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <VCardItem>
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardActions class="pt-3">
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Qe=V("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),Xe=V("p",null,[s("Use "),V("code",null,"persistent"),s(" prop to create persistent dialog.")],-1),Ye=V("p",null,[s("Use "),V("code",null,"scrollable"),s(" prop to create scrollable dialog.")],-1),ea=V("p",null,[s("The "),V("code",null,"v-dialog"),s(" component makes it easy to create a customized loading experience for your application.")],-1),aa=V("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),la=V("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),ta=V("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),oa=V("p",null,"Just a simple example of a form in a dialog.",-1),Ja={__name:"dialog",setup(i){return(o,r)=>{const l=Ge,t=xe,c=Je,m=qe,w=Fe,D=$e,S=ze,n=Ne,u=Ie;return h(),_(K,null,{default:a(()=>[e(f,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Basic",code:Oe},{default:a(()=>[Qe,e(l)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Persistent",code:Ze},{default:a(()=>[Xe,e(c)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Scrollable",code:Ke},{default:a(()=>[Ye,e(m)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Loader",code:He},{default:a(()=>[ea,e(w)]),_:1},8,["code"])]),_:1}),e(f,{col:"12",md:"6"},{default:a(()=>[e(t,{title:"Nesting",code:Ee},{default:a(()=>[aa,e(D)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Overflowed",code:We},{default:a(()=>[la,e(S)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Fullscreen",code:Me},{default:a(()=>[ta,e(n)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Form",code:Re},{default:a(()=>[oa,e(u)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ja as default};
