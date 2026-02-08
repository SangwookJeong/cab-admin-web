import{V as r}from"./VTextarea.c688dd10.js";import{k as _,o as i,b as u,q as V,D as w,L as m,w as o,p as e,m as t,E as l}from"./index.b54d9fca.js";import{a,V as x}from"./VRow.64033f9e.js";import{_ as k}from"./AppCardCode.a6b8276f.js";/* empty css                   */import"./VField.b3a1d217.js";import"./index.fb967781.js";import"./VInput.2af3df27.js";import"./router.2f5148f2.js";import"./VImg.fa9bd3c1.js";import"./position.e1a9cf7b.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.e1ec2433.js";import"./vue.runtime.esm-bundler.e4fa70f7.js";import"./VCard.22430b76.js";import"./VAvatar.76efe2b9.js";import"./VBtn.a4aae81b.js";import"./VDivider.aab4e4c1.js";const z={__name:"DemoTextareaValidation",setup(d){const n=_("Hello!"),p=[c=>c.length<=25||"Max 25 characters"];return(c,s)=>(i(),u(r,{modelValue:V(n),"onUpdate:modelValue":s[0]||(s[0]=h=>w(n)?n.value=h:null),label:"Validation",rules:p,rows:"2"},null,8,["modelValue"]))}},$={__name:"DemoTextareaNoResize",setup(d){const n=_("Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.");return(p,c)=>(i(),u(r,{modelValue:V(n),"onUpdate:modelValue":c[0]||(c[0]=s=>w(n)?n.value=s:null),label:"Text","no-resize":"",rows:"2"},null,8,["modelValue"]))}},j={};function H(d,n){return i(),u(x,null,{default:o(()=>[e(a,{cols:"12",sm:"6"},{default:o(()=>[e(r,{label:"One row","auto-grow":"",rows:"1","row-height":"15"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(r,{"auto-grow":"",label:"Two rows",rows:"2","row-height":"20"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(r,{label:"Three rows","auto-grow":"",rows:"3","row-height":"25"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(r,{"auto-grow":"",label:"Four rows",rows:"4","row-height":"30"})]),_:1})]),_:1})}const U=m(j,[["render",H]]),A={};function M(d,n){return i(),u(x,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(r,{label:"prepend-icon",rows:"1","prepend-icon":"mdi-comment-outline"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{"append-icon":"mdi-comment-outline",label:"append-icon",rows:"1"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{"prepend-inner-icon":"mdi-comment-outline",label:"prepend-inner-icon",rows:"1"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{"append-inner-icon":"mdi-comment-outline",label:"append-inner-icon",rows:"1"})]),_:1})]),_:1})}const B=m(A,[["render",M]]),G={__name:"DemoTextareaCounter",setup(d){const n=_("Hello!");return(p,c)=>(i(),u(r,{modelValue:V(n),"onUpdate:modelValue":c[0]||(c[0]=s=>w(n)?n.value=s:null),counter:"",label:"Text"},null,8,["modelValue"]))}},F={__name:"DemoTextareaClearable",setup(d){const n=_("This is clearable text.");return(p,c)=>(i(),u(r,{modelValue:V(n),"onUpdate:modelValue":c[0]||(c[0]=s=>w(n)?n.value=s:null),clearable:"","clear-icon":"mdi-close-circle-outline",label:"Text"},null,8,["modelValue"]))}},N={};function O(d,n){return i(),u(r,{autocomplete:"email",label:"Email"})}const P=m(N,[["render",O]]),S={};function E(d,n){return i(),u(x,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(r,{disabled:"",label:"Disabled",hint:"Hint text",rows:"2"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{readonly:"",rows:"2",label:"Readonly",hint:"Hint text"})]),_:1})]),_:1})}const W=m(S,[["render",E]]),I={};function q(d,n){return i(),u(x,null,{default:o(()=>[e(a,{cols:"12",sm:"6"},{default:o(()=>[e(r,{label:"Default",rows:"2"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(r,{label:"Solo",rows:"2",variant:"solo"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(r,{label:"Filled",rows:"2",variant:"filled"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(r,{label:"Outlined",rows:"2",variant:"outlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(r,{label:"Underlined",rows:"2",variant:"underlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(r,{label:"Plain",rows:"2",variant:"plain"})]),_:1})]),_:1})}const L=m(I,[["render",q]]),Y={__name:"DemoTextareaAutoGrow",setup(d){const n=_("The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.");return(p,c)=>(i(),u(r,{modelValue:V(n),"onUpdate:modelValue":c[0]||(c[0]=s=>w(n)?n.value=s:null),label:"Auto Grow","auto-grow":""},null,8,["modelValue"]))}},J={};function K(d,n){return i(),u(r,{label:"Default"})}const Q=m(J,[["render",K]]),X={ts:`<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`,js:`<script setup>
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`},Z={ts:`<template>
  <VTextarea label="Default" />
</template>
`,js:`<template>
  <VTextarea label="Default" />
</template>
`},ee={ts:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`,js:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`},oe={ts:`<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Text"
  />
</template>
`},te={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`},le={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="mdi-comment-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="mdi-comment-outline"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="mdi-comment-outline"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="mdi-comment-outline"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="mdi-comment-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="mdi-comment-outline"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="mdi-comment-outline"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="mdi-comment-outline"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`},ae={ts:`<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`,js:`<script setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`},ne={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`},re={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`},se={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`},ce={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`},ie=t("p",null," v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. ",-1),ue=t("p",null,[l("When using the "),t("code",null,"auto-grow"),l(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")],-1),de=t("p",null,[l("Use "),t("code",null,"filled"),l(", "),t("code",null,"plain"),l(", "),t("code",null,"outlined"),l(", "),t("code",null,"solo"),l(" and "),t("code",null,"underlined"),l(" option of "),t("code",null,"variant"),l(" prop to change the look of file input.")],-1),pe=t("p",null,[l("Use "),t("code",null,"disabled"),l(" and "),t("code",null,"readonly"),l(" prop to change the state of textarea.")],-1),me=t("p",null,[l(" The "),t("code",null,"autocomplete"),l(" prop gives you the option to enable the browser to predict user input. ")],-1),_e=t("p",null,[l("You can clear the text from a "),t("code",null,"v-textarea"),l(" by using the "),t("code",null,"clearable"),l(" prop, and customize the icon used with the "),t("code",null,"clearable-icon"),l(" prop.")],-1),Ve=t("p",null,[l(" The "),t("code",null,"counter"),l(" prop informs the user of a character limit for the "),t("code",null,"v-textarea"),l(". ")],-1),we=t("p",null,[l("The "),t("code",null,"append-icon"),l(", "),t("code",null,"prepend-icon"),l(", "),t("code",null,"append-inner-icon"),l(" and "),t("code",null,"prepend-inner-icon"),l(" props help add context to v-textarea.")],-1),xe=t("p",null,[l("The "),t("code",null,"rows"),l(" prop allows you to define how many rows the textarea has, when combined with the "),t("code",null,"row-height"),l(" prop you can further customize your rows by defining their height.")],-1),he=t("p",null,[t("code",null,"v-textarea"),l("'s have the option to remain the same size regardless of their content's size, using the "),t("code",null,"no-resize"),l(" prop.")],-1),fe=t("p",null,[l("Use "),t("code",null,"rules"),l(" prop to validate the textarea.")],-1),Ne={__name:"textarea",setup(d){return(n,p)=>{const c=Q,s=k,h=Y,f=L,b=W,T=P,C=F,g=G,v=B,D=U,R=$,y=z;return i(),u(x,{class:"match-height"},{default:o(()=>[e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Basic",code:Z},{default:o(()=>[ie,e(c)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Auto Grow",code:X},{default:o(()=>[ue,e(h)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(s,{title:"Variant",code:ce},{default:o(()=>[de,e(f)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"States",code:re},{default:o(()=>[pe,e(b)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Browser autocomplete",code:ee},{default:o(()=>[me,e(T)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Clearable",code:oe},{default:o(()=>[_e,e(C)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Counter",code:te},{default:o(()=>[Ve,e(g)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Icons",code:le},{default:o(()=>[we,e(v)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Rows",code:ne},{default:o(()=>[xe,e(D)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"No resize",code:ae},{default:o(()=>[he,e(R)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Validation",code:se},{default:o(()=>[fe,e(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ne as default};
