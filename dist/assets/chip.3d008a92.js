import{V as o}from"./VChip.b88bf08f.js";import{V as E,a as $,b as W,c as w}from"./VList.84d61a8a.js";import{V as L}from"./VListItemAction.2308c9bf.js";import{V as A}from"./VBtn.a4aae81b.js";import{k as u,o as c,b as V,w as e,p as i,a5 as M,a6 as J,E as a,C as f,q as s,D,L as g,c as v,cS as T,br as j,W as N,Q as B,m as t,y as b}from"./index.b54d9fca.js";import{V as U}from"./VMenu.57334ca0.js";import{V as F}from"./VCombobox.ae6d6649.js";import{V as I}from"./VAvatar.76efe2b9.js";import{_ as R}from"./AppCardCode.a6b8276f.js";import{a as m,V as Y}from"./VRow.64033f9e.js";import"./router.2f5148f2.js";import"./index.fb967781.js";import"./VDivider.aab4e4c1.js";import"./position.e1a9cf7b.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.ed7e5419.js";import"./VOverlay.7a7efa40.js";import"./lazy.42f8717a.js";import"./easing.36b781ab.js";import"./VImg.fa9bd3c1.js";import"./dialog-transition.4a979ef2.js";import"./VSelect.59c3c726.js";import"./VTextField.21e2002d.js";/* empty css                   */import"./VField.b3a1d217.js";import"./VInput.2af3df27.js";import"./VCounter.e1ec2433.js";import"./VCheckboxBtn.e6d00e80.js";import"./VSelectionControl.854c9cad.js";import"./filter.ef6bdc8a.js";import"./vue.runtime.esm-bundler.e4fa70f7.js";import"./VCard.22430b76.js";const O={__name:"DemoChipExpandable",setup(d){const r=u(!1);return(h,p)=>(c(),V(U,{modelValue:s(r),"onUpdate:modelValue":p[1]||(p[1]=l=>D(r)?r.value=l:null),transition:"scale-transition"},{activator:e(({props:l})=>[i(o,M(J(l)),{default:e(()=>[a(" VueJS ")]),_:2},1040)]),default:e(()=>[i(E,null,{default:e(()=>[i($,null,{append:e(()=>[i(L,{class:"ms-1"},{default:e(()=>[i(A,{icon:"",variant:"text",size:"x-small",color:"default",onClick:p[0]||(p[0]=l=>r.value=!1)},{default:e(()=>[i(f,{size:"20",icon:"mdi-close"})]),_:1})]),_:1})]),default:e(()=>[i(W,null,{default:e(()=>[a("VueJS")]),_:1}),i(w,null,{default:e(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},q={__name:"DemoChipInSelects",setup(d){const r=u(["Programming","Playing video games","Sleeping"]),h=u(["Streaming","Eating","Programming","Playing video games","Sleeping"]);return(p,l)=>(c(),V(F,{modelValue:s(r),"onUpdate:modelValue":l[0]||(l[0]=_=>D(r)?r.value=_:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"mdi-close-circle-outline",items:s(h),label:"Your favorite hobbies","prepend-icon":"mdi-filter-variant"},null,8,["modelValue","items"]))}},Q={},G={class:"demo-space-x"};function H(d,r){return c(),v("div",G,[i(o,{size:"x-small"},{default:e(()=>[a(" x-small chip ")]),_:1}),i(o,{size:"small"},{default:e(()=>[a(" small chip ")]),_:1}),i(o,null,{default:e(()=>[a("Default")]),_:1}),i(o,{size:"large"},{default:e(()=>[a(" large chip ")]),_:1}),i(o,{size:"x-large"},{default:e(()=>[a(" x-large chip ")]),_:1})])}const K=g(Q,[["render",H]]),X={class:"demo-space-x"},Z=t("span",null,"John Doe",-1),ii=t("span",null,"Darcy Nooser",-1),ei=t("span",null,"Felicia Risker",-1),ai=t("span",null,"Minnie Mostly",-1),oi={__name:"DemoChipWithAvatar",setup(d){return(r,h)=>(c(),v("div",X,[i(o,{pill:""},{default:e(()=>[i(I,{start:"",image:s(T)},null,8,["image"]),Z]),_:1}),i(o,{pill:""},{default:e(()=>[i(I,{start:"",image:s(j)},null,8,["image"]),ii]),_:1}),i(o,null,{default:e(()=>[i(I,{start:"",image:s(N)},null,8,["image"]),ei]),_:1}),i(o,null,{default:e(()=>[i(I,{start:"",image:s(B)},null,8,["image"]),ai]),_:1})]))}},ti={},li={class:"demo-space-x"};function si(d,r){return c(),v("div",li,[i(o,null,{default:e(()=>[i(f,{start:"",size:"18",icon:"mdi-account-outline"}),a(" Account ")]),_:1}),i(o,{color:"primary"},{default:e(()=>[i(f,{start:"",size:"18",icon:"mdi-star-outline"}),a(" Premium ")]),_:1}),i(o,{color:"secondary"},{default:e(()=>[i(f,{start:"",size:"18",icon:"mdi-cake"}),a(" 1 Year ")]),_:1}),i(o,{color:"success"},{default:e(()=>[i(f,{start:"",size:"18",icon:"mdi-bell-outline"}),a(" Notification ")]),_:1}),i(o,{color:"info"},{default:e(()=>[i(f,{start:"",size:"18",icon:"mdi-forum-outline"}),a(" Message ")]),_:1}),i(o,{color:"warning"},{default:e(()=>[i(f,{start:"",size:"18",icon:"mdi-alert-outline"}),a(" Warning ")]),_:1}),i(o,{color:"error"},{default:e(()=>[i(f,{start:"",size:"18",icon:"mdi-alert-circle-outline"}),a(" Error ")]),_:1})])}const ri=g(ti,[["render",si]]),ci={class:"demo-space-x"},ni={__name:"DemoChipClosable",setup(d){const r=u(!0),h=u(!0),p=u(!0),l=u(!0),_=u(!0),y=u(!0),S=u(!0);return(x,n)=>(c(),v("div",ci,[s(r)?(c(),V(o,{key:0,closable:"","onClick:close":n[0]||(n[0]=C=>r.value=!s(r))},{default:e(()=>[a(" Default ")]),_:1})):b("",!0),s(h)?(c(),V(o,{key:1,closable:"",color:"primary","onClick:close":n[1]||(n[1]=C=>h.value=!s(h))},{default:e(()=>[a(" Primary ")]),_:1})):b("",!0),s(p)?(c(),V(o,{key:2,closable:"",color:"secondary","onClick:close":n[2]||(n[2]=C=>p.value=!s(p))},{default:e(()=>[a(" Secondary ")]),_:1})):b("",!0),s(l)?(c(),V(o,{key:3,closable:"",color:"success","onClick:close":n[3]||(n[3]=C=>l.value=!s(l))},{default:e(()=>[a(" Success ")]),_:1})):b("",!0),s(_)?(c(),V(o,{key:4,closable:"",color:"info","onClick:close":n[4]||(n[4]=C=>_.value=!s(_))},{default:e(()=>[a(" Info ")]),_:1})):b("",!0),s(y)?(c(),V(o,{key:5,closable:"",color:"warning","onClick:close":n[5]||(n[5]=C=>y.value=!s(y))},{default:e(()=>[a(" Warning ")]),_:1})):b("",!0),s(S)?(c(),V(o,{key:6,closable:"",color:"error","onClick:close":n[6]||(n[6]=C=>S.value=!s(S))},{default:e(()=>[a(" Error ")]),_:1})):b("",!0)]))}},pi={},di={class:"demo-space-x"};function mi(d,r){return c(),v("div",di,[i(o,{label:""},{default:e(()=>[a(" Default ")]),_:1}),i(o,{label:"",color:"primary"},{default:e(()=>[a(" Primary ")]),_:1}),i(o,{label:"",color:"secondary"},{default:e(()=>[a(" Secondary ")]),_:1}),i(o,{label:"",color:"success"},{default:e(()=>[a(" Success ")]),_:1}),i(o,{label:"",color:"info"},{default:e(()=>[a(" Info ")]),_:1}),i(o,{label:"",color:"warning"},{default:e(()=>[a(" Warning ")]),_:1}),i(o,{label:"",color:"error"},{default:e(()=>[a(" Error ")]),_:1})])}const ui=g(pi,[["render",mi]]),Vi={},hi={class:"demo-space-x"};function Ci(d,r){return c(),v("div",hi,[i(o,{variant:"outlined"},{default:e(()=>[a(" Default ")]),_:1}),i(o,{color:"primary",variant:"outlined"},{default:e(()=>[a(" Primary ")]),_:1}),i(o,{color:"secondary",variant:"outlined"},{default:e(()=>[a(" Secondary ")]),_:1}),i(o,{color:"success",variant:"outlined"},{default:e(()=>[a(" Success ")]),_:1}),i(o,{color:"info",variant:"outlined"},{default:e(()=>[a(" Info ")]),_:1}),i(o,{color:"warning",variant:"outlined"},{default:e(()=>[a(" Warning ")]),_:1}),i(o,{color:"error",variant:"outlined"},{default:e(()=>[a(" Error ")]),_:1})])}const fi=g(Vi,[["render",Ci]]),vi={},_i={class:"demo-space-x"};function bi(d,r){return c(),v("div",_i,[i(o,{variant:"elevated"},{default:e(()=>[a(" Default ")]),_:1}),i(o,{color:"primary",variant:"elevated"},{default:e(()=>[a(" Primary ")]),_:1}),i(o,{color:"secondary",variant:"elevated"},{default:e(()=>[a(" Secondary ")]),_:1}),i(o,{color:"success",variant:"elevated"},{default:e(()=>[a(" Success ")]),_:1}),i(o,{color:"info",variant:"elevated"},{default:e(()=>[a(" Info ")]),_:1}),i(o,{color:"warning",variant:"elevated"},{default:e(()=>[a(" Warning ")]),_:1}),i(o,{color:"error",variant:"elevated"},{default:e(()=>[a(" Error ")]),_:1})])}const gi=g(vi,[["render",bi]]),yi={},Si={class:"demo-space-x"};function Ii(d,r){return c(),v("div",Si,[i(o,null,{default:e(()=>[a(" Default ")]),_:1}),i(o,{color:"primary"},{default:e(()=>[a(" Primary ")]),_:1}),i(o,{color:"secondary"},{default:e(()=>[a(" Secondary ")]),_:1}),i(o,{color:"success"},{default:e(()=>[a(" Success ")]),_:1}),i(o,{color:"info"},{default:e(()=>[a(" Info ")]),_:1}),i(o,{color:"warning"},{default:e(()=>[a(" Warning ")]),_:1}),i(o,{color:"error"},{default:e(()=>[a(" Error ")]),_:1})])}const xi=g(yi,[["render",Ii]]),Di={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},ki={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},zi={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Pi={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="mdi-close"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="mdi-close"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},Ei={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing video games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing video games', 'Sleeping'])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="mdi-close-circle-outline"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="mdi-filter-variant"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing video games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing video games',
  'Sleeping',
])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="mdi-close-circle-outline"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="mdi-filter-variant"
  />
</template>
`},$i={ts:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},Wi={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},wi={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Li={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Ai={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="18"
        icon="mdi-account-outline"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="18"
        icon="mdi-star-outline"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="18"
        icon="mdi-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="18"
        icon="mdi-bell-outline"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="18"
        icon="mdi-forum-outline"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="18"
        icon="mdi-alert-outline"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="18"
        icon="mdi-alert-circle-outline"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="18"
        icon="mdi-account-outline"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="18"
        icon="mdi-star-outline"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="18"
        icon="mdi-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="18"
        icon="mdi-bell-outline"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="18"
        icon="mdi-forum-outline"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="18"
        icon="mdi-alert-outline"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="18"
        icon="mdi-alert-circle-outline"
      />
      Error
    </VChip>
  </div>
</template>
`},Mi=t("p",null,[a("Use "),t("code",null,"color"),a(" prop to change the background color of chips.")],-1),Ji=t("p",null,[a("Use "),t("code",null,"elevated"),a(" variant option to create filled chips.")],-1),Ti=t("p",null,[a("Use "),t("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),ji=t("p",null,[a("Label chips use the "),t("code",null,"v-card"),a(" border-radius. Use "),t("code",null,"label"),a(" prop to create label chips.")],-1),Ni=t("p",null,[a("Closable chips can be controlled with a "),t("code",null,"v-model"),a(".")],-1),Bi=t("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Ui=t("p",null,[a("Use "),t("code",null,"pill"),a(" prop to remove the "),t("code",null,"v-avatar"),a(" padding.")],-1),Fi=t("p",null,[a("The "),t("code",null,"v-chip"),a(" component can have various sizes from "),t("code",null,"x-small"),a(" to "),t("code",null,"x-large"),a(".")],-1),Ri=t("p",null,[a("Selects can use "),t("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Yi=t("p",null,[a("Chips can be combined with "),t("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),Ie={__name:"chip",setup(d){return(r,h)=>{const p=xi,l=R,_=gi,y=fi,S=ui,x=ni,n=ri,C=oi,k=K,z=q,P=O;return c(),V(Y,{class:"match-height"},{default:e(()=>[i(m,{cols:"12",md:"6"},{default:e(()=>[i(l,{title:"Color",code:ki},{default:e(()=>[Mi,i(p)]),_:1},8,["code"])]),_:1}),i(m,{cols:"12",md:"6"},{default:e(()=>[i(l,{title:"Elevated",code:zi},{default:e(()=>[Ji,i(_)]),_:1},8,["code"])]),_:1}),i(m,{cols:"12",md:"6"},{default:e(()=>[i(l,{title:"Outlined",code:Wi},{default:e(()=>[Ti,i(y)]),_:1},8,["code"])]),_:1}),i(m,{cols:"12",md:"6"},{default:e(()=>[i(l,{title:"Label",code:$i},{default:e(()=>[ji,i(S)]),_:1},8,["code"])]),_:1}),i(m,{cols:"12",md:"6"},{default:e(()=>[i(l,{title:"Closable",code:Di},{default:e(()=>[Ni,i(x)]),_:1},8,["code"])]),_:1}),i(m,{cols:"12",md:"6"},{default:e(()=>[i(l,{title:"With Icon",code:Ai},{default:e(()=>[Bi,i(n)]),_:1},8,["code"])]),_:1}),i(m,{cols:"12",md:"6"},{default:e(()=>[i(l,{title:"With Avatar",code:Li},{default:e(()=>[Ui,i(C)]),_:1},8,["code"])]),_:1}),i(m,{cols:"12",md:"6"},{default:e(()=>[i(l,{title:"Sizes",code:wi},{default:e(()=>[Fi,i(k)]),_:1},8,["code"])]),_:1}),i(m,{cols:"12",md:"6"},{default:e(()=>[i(l,{title:"In Selects",code:Ei},{default:e(()=>[Ri,i(z)]),_:1},8,["code"])]),_:1}),i(m,{cols:"12",md:"6"},{default:e(()=>[i(l,{title:"Expandable",code:Pi},{default:e(()=>[Yi,i(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ie as default};
