import{k as _,o as u,b as V,w as l,p as e,C as w,O as D,E as o,q as d,V as A,v as U,c as S,y as q,D as b,L as g,m as t}from"./index.b54d9fca.js";import{V as j}from"./index.fb967781.js";import{V as N}from"./VTooltip.45f3d46a.js";import{a as L,V as B}from"./VBtn.a4aae81b.js";import{V as s}from"./VTextField.21e2002d.js";import{a as i,V as v}from"./VRow.64033f9e.js";import{r as E,e as W}from"./validators.741d8b3f.js";import{V as z}from"./VForm.8f80351c.js";import{_ as H}from"./AppCardCode.a6b8276f.js";import"./scopeId.ed7e5419.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.7a7efa40.js";import"./router.2f5148f2.js";import"./lazy.42f8717a.js";import"./easing.36b781ab.js";import"./VImg.fa9bd3c1.js";import"./position.e1a9cf7b.js";/* empty css                   */import"./VField.b3a1d217.js";import"./VInput.2af3df27.js";import"./VCounter.e1ec2433.js";import"./index.0d4b9ec4.js";import"./vue.runtime.esm-bundler.e4fa70f7.js";import"./VCard.22430b76.js";import"./VAvatar.76efe2b9.js";import"./VDivider.aab4e4c1.js";const O={key:0,class:"ms-3"},Y={__name:"DemoTextfieldIconSlots",setup(x){const n=_("Hey!"),c=_(!1),p=()=>{c.value=!0,n.value="Wait for it...",setTimeout(()=>{c.value=!1,n.value="You've clicked me!"},2e3)};return(a,f)=>(u(),V(s,{modelValue:d(n),"onUpdate:modelValue":f[0]||(f[0]=r=>b(n)?n.value=r:null),clearable:"","clear-icon":"mdi-close-circle-outline",label:"Message",type:"text"},{prepend:l(()=>[e(N,{location:"bottom"},{activator:l(({props:r})=>[e(w,D(r,{icon:"mdi-help-circle-outline"}),null,16)]),default:l(()=>[o(" I'm a tooltip ")]),_:1})]),"append-inner":l(()=>[e(j,{"leave-absolute":""},{default:l(()=>[d(c)?(u(),V(L,{key:0,size:"24",color:"info",indeterminate:""})):(u(),V(d(A),{key:1,nodes:d(U).app.logo},null,8,["nodes"]))]),_:1})]),append:l(()=>[e(B,{size:a.$vuetify.display.smAndDown?"small":"large",class:"mt-n3",icon:a.$vuetify.display.smAndDown,onClick:p},{default:l(()=>[e(w,{icon:"mdi-target"}),a.$vuetify.display.mdAndUp?(u(),S("span",O,"Click me")):q("",!0)]),_:1},8,["size","icon"])]),_:1},8,["modelValue"]))}},G={__name:"DemoTextfieldPasswordInput",setup(x){const n=_(!1),c=_(!0),p=_("Password"),a=_("wqfasds"),f={required:r=>!!r||"Required.",min:r=>r.length>=8||"Min 8 characters"};return(r,m)=>(u(),V(v,null,{default:l(()=>[e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d(p),"onUpdate:modelValue":m[0]||(m[0]=h=>b(p)?p.value=h:null),"append-inner-icon":d(n)?"mdi-eye-outline":"mdi-eye-off-outline",rules:[f.required,f.min],type:d(n)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",counter:"","onClick:appendInner":m[1]||(m[1]=h=>n.value=!d(n))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d(a),"onUpdate:modelValue":m[2]||(m[2]=h=>b(a)?a.value=h:null),"append-inner-icon":d(c)?"mdi-eye-outline":"mdi-eye-off-outline",rules:[f.required,f.min],type:d(c)?"text":"password",name:"input-10-2",label:"Visible",hint:"At least 8 characters","onClick:appendInner":m[3]||(m[3]=h=>c.value=!d(c))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1})]),_:1}))}},J={},K=t("strong",null,"icon",-1);function Q(x,n){return u(),V(s,null,{label:l(()=>[o(" What about \xA0"),K,o("\xA0here? "),e(w,{icon:"mdi-file-find-outline"})]),_:1})}const X=g(J,[["render",Q]]),Z={__name:"DemoTextfieldIconEvents",setup(x){const n=_("Hey!"),c=_(!0),p=_(0),a=()=>{c.value=!c.value},f=()=>{n.value=""},r=()=>{p.value=0},m=()=>{r(),f()};return(h,C)=>(u(),V(s,{modelValue:d(n),"onUpdate:modelValue":C[0]||(C[0]=T=>b(n)?n.value=T:null),clearable:"",type:"text",label:"Message",color:"primary","clear-icon":"mdi-close-circle-outline","append-icon":d(n)?"mdi-send-outline":"mdi-microphone","append-inner-icon":d(c)?"mdi-map-marker-outline":"mdi-map-marker-off-outline","onClick:appendInner":a,"onClick:append":m,"onClick:clear":f},null,8,["modelValue","append-icon","append-inner-icon"]))}},ee={__name:"DemoTextfieldValidation",setup(x){const n=_("");return(c,p)=>(u(),V(z,null,{default:l(()=>[e(s,{modelValue:d(n),"onUpdate:modelValue":p[0]||(p[0]=a=>b(n)?n.value=a:null),rules:[d(E),d(W)],label:"E-mail"},null,8,["modelValue","rules"])]),_:1}))}},le={};function te(x,n){return u(),V(s,{label:"Regular","single-line":""})}const oe=g(le,[["render",te]]),ne={__name:"DemoTextfieldPrefixesAndSuffixes",setup(x){const n=_(10.05),c=_(28.02),p=_("example"),a=_("04:56");return(f,r)=>(u(),V(v,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(n),"onUpdate:modelValue":r[0]||(r[0]=m=>b(n)?n.value=m:null),label:"Amount",prefix:"$",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(c),"onUpdate:modelValue":r[1]||(r[1]=m=>b(c)?c.value=m:null),label:"Weight",suffix:"lbs"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(p),"onUpdate:modelValue":r[2]||(r[2]=m=>b(p)?p.value=m:null),label:"Email address",suffix:"@gmail.com"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(a),"onUpdate:modelValue":r[3]||(r[3]=m=>b(a)?a.value=m:null),label:"Label Text",type:"time",suffix:"PST"},null,8,["modelValue"])]),_:1})]),_:1}))}},ae={};function ie(x,n){return u(),V(v,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(s,{label:"Prepend","prepend-icon":"mdi-map-marker-outline"})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{label:"Prepend Inner","prepend-inner-icon":"mdi-map-marker-outline"})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{label:"Append","append-icon":"mdi-map-marker-outline"})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{label:"Append Inner","append-inner-icon":"mdi-map-marker-outline"})]),_:1})]),_:1})}const se=g(ae,[["render",ie]]),re={};function de(x,n){return u(),V(s,{color:"success",label:"First name"})}const ce=g(re,[["render",de]]),me={};function pe(x,n){return u(),V(s,{label:"Regular",clearable:""})}const ue=g(me,[["render",pe]]),fe={__name:"DemoTextfieldCounter",setup(x){const n=_("Preliminary report"),c=_("California is a state in the western United States"),p=[a=>a.length<=25||"Max 25 characters"];return(a,f)=>(u(),V(v,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(n),"onUpdate:modelValue":f[0]||(f[0]=r=>b(n)?n.value=r:null),rules:p,counter:"25",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(c),"onUpdate:modelValue":f[1]||(f[1]=r=>b(c)?c.value=r:null),rules:p,counter:"",maxlength:"25",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1}))}},Ve={};function _e(x,n){return u(),V(v,null,{default:l(()=>[e(i,null,{default:l(()=>[e(s,{label:"Disabled",disabled:""})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{label:"Readonly",readonly:""})]),_:1})]),_:1})}const xe=g(Ve,[["render",_e]]),be={};function ge(x,n){return u(),V(v,null,{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Outlined"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Filled",variant:"filled"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Solo",variant:"solo"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Plain",variant:"plain"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const he=g(be,[["render",ge]]),ve={};function Ce(x,n){return u(),V(s,{label:"Compact",density:"compact"})}const Te=g(ve,[["render",Ce]]),we={};function ye(x,n){return u(),V(s,{label:"Regular"})}const Fe=g(we,[["render",ye]]),ke={ts:`<template>
  <VTextField label="Regular" />
</template>
`,js:`<template>
  <VTextField label="Regular" />
</template>
`},Re={ts:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},$e={ts:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`,js:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`},Me={ts:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`,js:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`},Pe={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="mdi-close-circle-outline"
    :append-icon="message ? 'mdi-send-outline' : 'mdi-microphone'"
    :append-inner-icon="marker ? 'mdi-map-marker-outline' : 'mdi-map-marker-off-outline'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="mdi-close-circle-outline"
    :append-icon="message ? 'mdi-send-outline' : 'mdi-microphone'"
    :append-inner-icon="marker ? 'mdi-map-marker-outline' : 'mdi-map-marker-off-outline'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},De={ts:`<script lang="ts" setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="mdi-help-circle-outline"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n3"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="mdi-target" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="mdi-help-circle-outline"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n3"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="mdi-target" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`},Ae={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="mdi-map-marker-outline"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="mdi-map-marker-outline"
      />
    </VCol>
  </VRow>
</template>
`},Ue={ts:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="mdi-file-find-outline" />
    </template>
  </VTextField>
</template>
`,js:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="mdi-file-find-outline" />
    </template>
  </VTextField>
</template>
`},Se={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},qe={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`},Ne={ts:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script lang="ts" setup>
import { emailValidator, requiredValidator } from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`},Be={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},Ee=t("p",null,"Text fields components are used for collecting user provided information.",-1),We=t("p",null,[o("The "),t("code",null,"density"),o(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),t("strong",null,"default"),o(", "),t("strong",null,"comfortable"),o(", and "),t("strong",null,"compact"),o(".")],-1),ze=t("p",null,[o("Use "),t("code",null,"solo"),o(", "),t("code",null,"filled"),o(", "),t("code",null,"outlined"),o(", "),t("code",null,"plain"),o(" and "),t("code",null,"underlined"),o(" option of "),t("code",null,"variant"),o(" prop to change the look of the textfield. ")],-1),He=t("p",null,"Text fields can be disabled or readonly.",-1),Oe=t("p",null,[o("Use a "),t("code",null,"counter"),o(" prop to inform a user of the character limit.")],-1),Ye=t("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),Ge=t("p",null,[o("Use "),t("code",null,"color"),o(" prop to change the input text color.")],-1),Je=t("p",null,[o("You can add icons to the text field with "),t("code",null,"prepend-icon"),o(", "),t("code",null,"append-icon"),o(" and "),t("code",null,"append-inner-icon"),o(" and "),t("code",null,"prepend-inner-icon"),o(" props.")],-1),Ke=t("p",null,[o("The "),t("code",null,"prefix"),o(" and "),t("code",null,"suffix"),o(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),Qe=t("p",null,[t("code",null,"single-line"),o(" text fields do not float their label on focus or with data.")],-1),Xe=t("p",null,[o("Vuetify includes simple validation through the "),t("code",null,"rules"),o(" prop.")],-1),Ze=t("p",null,[t("code",null,"click:prepend"),o(", "),t("code",null,"click:append"),o(", "),t("code",null,"click:append-inner"),o(", and "),t("code",null,"click:clear"),o(" will be emitted when you click on the respective icon")],-1),el=t("p",null,[o("Text field label can be defined in "),t("code",null,"label"),o(" slot - that will allow to use HTML content.")],-1),ll=t("p",null,[o("Using the HTML input "),t("code",null,"type"),o(" password can be used with an appended icon and callback to control the visibility.")],-1),tl=t("p",null,[o("Instead of using "),t("code",null,"prepend"),o("/"),t("code",null,"append"),o("/"),t("code",null,"append-inner"),o(" icons you can use slots to extend input's functionality.")],-1),Il={__name:"textfield",setup(x){return(n,c)=>{const p=Fe,a=H,f=Te,r=he,m=xe,h=fe,C=ue,T=ce,y=se,F=ne,k=oe,R=ee,I=Z,$=X,M=G,P=Y;return u(),V(v,{class:"match-height"},{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Basic",code:ke},{default:l(()=>[Ee,e(p)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Density",code:Me},{default:l(()=>[We,e(f)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(a,{title:"Variant",code:Be},{default:l(()=>[ze,e(r)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"State",code:Ne},{default:l(()=>[He,e(m)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Counter",code:Ie},{default:l(()=>[Oe,e(h)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Clearable",code:Re},{default:l(()=>[Ye,e(C)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Custom Colors",code:$e},{default:l(()=>[Ge,e(T)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icons",code:Ae},{default:l(()=>[Je,e(y)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Prefixes and suffixes",code:qe},{default:l(()=>[Ke,e(F)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Single line",code:je},{default:l(()=>[Qe,e(k)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Validation",code:Le},{default:l(()=>[Xe,e(R)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon events",code:Pe},{default:l(()=>[Ze,e(I)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Label Slot",code:Ue},{default:l(()=>[el,e($)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Password input",code:Se},{default:l(()=>[ll,e(M)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon slots",code:De},{default:l(()=>[tl,e(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Il as default};
