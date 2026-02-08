import{V as u}from"./VBtn.a4aae81b.js";import{i as E,c as P,d as F,n as R,k as A,g as j,p as q,V as L}from"./router.2f5148f2.js";import{a as M,c as H}from"./position.e1a9cf7b.js";import{au as N,aE as J,ao as W,k,Z as O,ap as z,ag as Z,p as a,O as $,o as _,c as x,w as t,E as e,q as V,D as p,C as B,F as T,b as G,m}from"./index.b54d9fca.js";import{u as K}from"./scopeId.ed7e5419.js";import{f as Q}from"./forwardRefs.c003b6b8.js";import{m as X,f as Y,a as h}from"./VOverlay.7a7efa40.js";import{_ as aa}from"./AppCardCode.a6b8276f.js";import{a as I,V as ta}from"./VRow.64033f9e.js";import"./lazy.42f8717a.js";import"./easing.36b781ab.js";import"./VImg.fa9bd3c1.js";import"./vue.runtime.esm-bundler.e4fa70f7.js";import"./index.fb967781.js";import"./VCard.22430b76.js";import"./VAvatar.76efe2b9.js";import"./VDivider.aab4e4c1.js";const S=N()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...E({location:"bottom"}),...M(),...P(),...F(),...J(X({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":f=>!0},setup(f,l){let{slots:c}=l;const n=W(f,"modelValue"),{locationStyles:o}=R(f),{positionClasses:b}=H(f),{scopeId:v}=K(),{colorClasses:r,colorStyles:d,variantClasses:g}=A(f),{roundedClasses:w}=j(f),i=k();O(n,C),O(()=>f.timeout,C),z(()=>{n.value&&C()});let s=-1;function C(){window.clearTimeout(s);const y=Number(f.timeout);!n.value||y===-1||(s=window.setTimeout(()=>{n.value=!1},y))}function D(){window.clearTimeout(s)}return Z(()=>{const[y]=Y(f);return a(h,$({ref:i,class:["v-snackbar",{"v-snackbar--active":n.value,"v-snackbar--multi-line":f.multiLine&&!f.vertical,"v-snackbar--vertical":f.vertical},b.value]},y,{modelValue:n.value,"onUpdate:modelValue":U=>n.value=U,contentProps:$({style:o.value},y.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none"},v),{default:()=>[a("div",{class:["v-snackbar__wrapper",r.value,w.value,g.value],style:[d.value],onPointerenter:D,onPointerleave:C},[q(!1,"v-snackbar"),c.default&&a("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[c.default()]),c.actions&&a(L,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[c.actions()])]})])],activator:c.activator})}),Q({},i)}}),ea={class:"demo-space-x"},na={__name:"DemoSnackbarTransition",setup(f){const l=k(!1),c=k(!1),n=k(!1);return(o,b)=>(_(),x("div",ea,[a(u,{onClick:b[0]||(b[0]=v=>l.value=!0)},{default:t(()=>[e(" fade snackbar ")]),_:1}),a(S,{modelValue:V(l),"onUpdate:modelValue":b[1]||(b[1]=v=>p(l)?l.value=v:null),transition:"fade-transition",location:"top start"},{default:t(()=>[e(" I'm a fade transition snackbar. ")]),_:1},8,["modelValue"]),a(u,{onClick:b[2]||(b[2]=v=>c.value=!0)},{default:t(()=>[e(" Scale snackbar ")]),_:1}),a(S,{modelValue:V(c),"onUpdate:modelValue":b[3]||(b[3]=v=>p(c)?c.value=v:null),transition:"scale-transition",location:"bottom end"},{default:t(()=>[e(" I'm a scale transition snackbar. ")]),_:1},8,["modelValue"]),a(u,{onClick:b[4]||(b[4]=v=>n.value=!0)},{default:t(()=>[e(" scroll y reverse ")]),_:1}),a(S,{modelValue:V(n),"onUpdate:modelValue":b[5]||(b[5]=v=>p(n)?n.value=v:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:t(()=>[e(" I'm a scroll y reverse transition snackbar. ")]),_:1},8,["modelValue"])]))}},la={class:"demo-space-x"},ia={__name:"DemoSnackbarVariants",setup(f){const l=k(!1),c=k(!1),n=k(!1),o=k(!1),b=k(!1);return(v,r)=>(_(),x("div",la,[a(u,{onClick:r[0]||(r[0]=d=>l.value=!0)},{default:t(()=>[e(" Default ")]),_:1}),a(S,{modelValue:V(l),"onUpdate:modelValue":r[1]||(r[1]=d=>p(l)?l.value=d:null),location:"top start"},{default:t(()=>[e(" Jelly chocolate bar candy canes apple pie. ")]),_:1},8,["modelValue"]),a(u,{onClick:r[2]||(r[2]=d=>c.value=!0)},{default:t(()=>[e(" tonal ")]),_:1}),a(S,{modelValue:V(c),"onUpdate:modelValue":r[3]||(r[3]=d=>p(c)?c.value=d:null),location:"top end",variant:"tonal"},{default:t(()=>[e(" Ice cream cake candy canes. ")]),_:1},8,["modelValue"]),a(u,{onClick:r[4]||(r[4]=d=>n.value=!0)},{default:t(()=>[e(" Text ")]),_:1}),a(S,{modelValue:V(n),"onUpdate:modelValue":r[5]||(r[5]=d=>p(n)?n.value=d:null),location:"end center",variant:"text"},{default:t(()=>[e(" Pie icing biscuit souffl\xE9 liquorice topping. ")]),_:1},8,["modelValue"]),a(u,{onClick:r[6]||(r[6]=d=>o.value=!0)},{default:t(()=>[e(" Outlined ")]),_:1}),a(S,{modelValue:V(o),"onUpdate:modelValue":r[7]||(r[7]=d=>p(o)?o.value=d:null),location:"bottom end",variant:"outlined",color:"error"},{default:t(()=>[e(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"]),a(u,{onClick:r[8]||(r[8]=d=>b.value=!0)},{default:t(()=>[e(" Flat ")]),_:1}),a(S,{modelValue:V(b),"onUpdate:modelValue":r[9]||(r[9]=d=>p(b)?b.value=d:null),location:"bottom start",variant:"flat",color:"error"},{default:t(()=>[e(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"])]))}},oa={class:"demo-space-x"},sa={__name:"DemoSnackbarPosition",setup(f){const l=k(!1),c=k(!1),n=k(!1),o=k(!1),b=k(!1),v=k(!1),r=k(!1),d=k(!1),g=k(!1);return(w,i)=>(_(),x("div",oa,[a(u,{icon:"",variant:"text",onClick:i[0]||(i[0]=s=>c.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-up"})]),_:1}),a(S,{modelValue:V(c),"onUpdate:modelValue":i[1]||(i[1]=s=>p(c)?c.value=s:null),location:"top"},{default:t(()=>[e(" I'm a top snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[2]||(i[2]=s=>n.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-top-right"})]),_:1}),a(S,{modelValue:V(n),"onUpdate:modelValue":i[3]||(i[3]=s=>p(n)?n.value=s:null),location:"top end"},{default:t(()=>[e(" I'm a top right snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[4]||(i[4]=s=>r.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-right"})]),_:1}),a(S,{modelValue:V(r),"onUpdate:modelValue":i[5]||(i[5]=s=>p(r)?r.value=s:null),location:"end center"},{default:t(()=>[e(" I'm a center end snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[6]||(i[6]=s=>o.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-bottom-right"})]),_:1}),a(S,{modelValue:V(o),"onUpdate:modelValue":i[7]||(i[7]=s=>p(o)?o.value=s:null),location:"bottom end"},{default:t(()=>[e(" I'm a bottom end snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[8]||(i[8]=s=>b.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-down"})]),_:1}),a(S,{modelValue:V(b),"onUpdate:modelValue":i[9]||(i[9]=s=>p(b)?b.value=s:null)},{default:t(()=>[e(" I'm a bottom snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[10]||(i[10]=s=>v.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-bottom-left"})]),_:1}),a(S,{modelValue:V(v),"onUpdate:modelValue":i[11]||(i[11]=s=>p(v)?v.value=s:null),location:"bottom start"},{default:t(()=>[e(" I'm a bottom start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[12]||(i[12]=s=>d.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-left"})]),_:1}),a(S,{modelValue:V(d),"onUpdate:modelValue":i[13]||(i[13]=s=>p(d)?d.value=s:null),location:"start center"},{default:t(()=>[e(" I'm a center start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[14]||(i[14]=s=>l.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-top-left"})]),_:1}),a(S,{modelValue:V(l),"onUpdate:modelValue":i[15]||(i[15]=s=>p(l)?l.value=s:null),location:"top start"},{default:t(()=>[e(" I'm a top start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[16]||(i[16]=s=>g.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-collapse-all"})]),_:1}),a(S,{modelValue:V(g),"onUpdate:modelValue":i[17]||(i[17]=s=>p(g)?g.value=s:null),location:"center"},{default:t(()=>[e(" I'm a center snackbar. ")]),_:1},8,["modelValue"])]))}},ra={__name:"DemoSnackbarVertical",setup(f){const l=k(!1);return(c,n)=>(_(),x(T,null,[a(u,{onClick:n[0]||(n[0]=o=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(S,{modelValue:V(l),"onUpdate:modelValue":n[3]||(n[3]=o=>p(l)?l.value=o:null),vertical:""},{actions:t(()=>[a(u,{color:"success",onClick:n[1]||(n[1]=o=>l.value=!1)},{default:t(()=>[e(" Undo ")]),_:1}),a(u,{color:"error",onClick:n[2]||(n[2]=o=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. ")]),_:1},8,["modelValue"])],64))}},ca={__name:"DemoSnackbarTimeout",setup(f){const l=k(!1);return(c,n)=>(_(),x(T,null,[a(u,{onClick:n[0]||(n[0]=o=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(S,{modelValue:V(l),"onUpdate:modelValue":n[1]||(n[1]=o=>p(l)?l.value=o:null),timeout:2e3},{default:t(()=>[e(" My timeout is set to 2000. ")]),_:1},8,["modelValue"])],64))}},ba={__name:"DemoSnackbarMultiLine",setup(f){const l=k(!1);return(c,n)=>(_(),x(T,null,[a(u,{onClick:n[0]||(n[0]=o=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(S,{modelValue:V(l),"onUpdate:modelValue":n[2]||(n[2]=o=>p(l)?l.value=o:null),"multi-line":""},{actions:t(()=>[a(u,{color:"error",onClick:n[1]||(n[1]=o=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. ")]),_:1},8,["modelValue"])],64))}},ua={__name:"DemoSnackbarWithAction",setup(f){const l=k(!1);return(c,n)=>(_(),x(T,null,[a(u,{onClick:n[0]||(n[0]=o=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(S,{modelValue:V(l),"onUpdate:modelValue":n[2]||(n[2]=o=>p(l)?l.value=o:null)},{actions:t(()=>[a(u,{color:"error",onClick:n[1]||(n[1]=o=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" Hello, I'm a snackbar with actions. ")]),_:1},8,["modelValue"])],64))}},ma={__name:"DemoSnackbarBasic",setup(f){const l=k(!1);return(c,n)=>(_(),x(T,null,[a(u,{onClick:n[0]||(n[0]=o=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(S,{modelValue:V(l),"onUpdate:modelValue":n[1]||(n[1]=o=>p(l)?l.value=o:null)},{default:t(()=>[e(" Hello, I'm a snackbar ")]),_:1},8,["modelValue"])],64))}},da={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},ka={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Va={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="mdi-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="mdi-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="mdi-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="mdi-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="mdi-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="mdi-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="mdi-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="mdi-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},pa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},Sa={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},fa={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit souffl\xE9 liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit souffl\xE9 liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},va={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Ba={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},_a=m("p",null,[e("The "),m("code",null,"v-snackbar"),e(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1),ga=m("p",null,[e("Use "),m("code",null,"actions"),e(" slot to add action button. A "),m("code",null,"v-snackbar"),e(" in its simplest form displays a temporary and closable notification to the user.")],-1),Ia=m("p",null,[e("The "),m("code",null,"multi-line"),e(" property extends the height of the "),m("code",null,"v-snackbar"),e(" to give you a little more room for content.")],-1),xa=m("p",null,[e("The "),m("code",null,"timeout"),e(" property lets you customize the delay before the "),m("code",null,"v-snackbar"),e(" is hidden.")],-1),ya=m("p",null,[e("The "),m("code",null,"vertical"),e(" property allows you to stack the content of your "),m("code",null,"v-snackbar"),e(".")],-1),Ta=m("p",null,[e("Use "),m("code",null,"location"),e(" prop to change the position of snackbar.")],-1),wa=m("p",null,[e("Apply different styles to the snackbar using props such as "),m("code",null,"shaped"),e(", "),m("code",null,"rounded"),e(", "),m("code",null,"color"),e(", "),m("code",null,"text"),e(", "),m("code",null,"outlined"),e(", "),m("code",null,"tile"),e(" and more.")],-1),Ca=m("p",null,"Use transition prop to sets the component transition.",-1),za={__name:"snackbar",setup(f){return(l,c)=>{const n=ma,o=aa,b=ua,v=ba,r=ca,d=ra,g=sa,w=ia,i=na;return _(),G(ta,{class:"match-height"},{default:t(()=>[a(I,{cols:"12",md:"6"},{default:t(()=>[a(o,{title:"Basic",code:da},{default:t(()=>[_a,a(n)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:t(()=>[a(o,{title:"With Action",code:Ba},{default:t(()=>[ga,a(b)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:t(()=>[a(o,{title:"Multi Line",code:ka},{default:t(()=>[Ia,a(v)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:t(()=>[a(o,{title:"Timeout",code:pa},{default:t(()=>[xa,a(r)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:t(()=>[a(o,{title:"Vertical",code:va},{default:t(()=>[ya,a(d)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:t(()=>[a(o,{title:"Position",code:Va},{default:t(()=>[Ta,a(g)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:t(()=>[a(o,{title:"Variants",code:fa},{default:t(()=>[wa,a(w)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:t(()=>[a(o,{title:"Transition",code:Sa},{default:t(()=>[Ca,a(i)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{za as default};
