import{L as k,k as V,A as z,o as _,c as $,m as a,x as R,q as i,p as e,w as l,b as f,G as T,y as P,C as M,D as u,F as D,a3 as I,a4 as L,E as c}from"./index.b54d9fca.js";import{V as O}from"./index.fb967781.js";import{V as E}from"./VAvatar.76efe2b9.js";import{V as S}from"./VBtn.a4aae81b.js";import{V as p}from"./VSlider.a5a3bb63.js";import{a as Y}from"./VImg.fa9bd3c1.js";import{a as m,V as b}from"./VRow.64033f9e.js";import{V as C}from"./VTextField.21e2002d.js";import{_ as N}from"./AppCardCode.a6b8276f.js";import"./router.2f5148f2.js";import"./position.e1a9cf7b.js";import"./VSliderTrack.6ae64225.js";import"./VInput.2af3df27.js";/* empty css                   */import"./VField.b3a1d217.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.e1ec2433.js";import"./vue.runtime.esm-bundler.e4fa70f7.js";import"./VCard.22430b76.js";import"./VDivider.aab4e4c1.js";const G=v=>(I("data-v-77d9c801"),v=v(),L(),v),q={class:"d-flex justify-space-between ma-4"},H=["textContent"],J=G(()=>a("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),K={__name:"DemoSliderAppendAndPrepend",setup(v){const t=V(40),s=40,n=218,d=V(!1),o=z(()=>t.value<100?"primary":t.value<125?"success":t.value<140?"info":t.value<175?"warning":"error"),r=z(()=>`${60/t.value}s`),w=()=>{t.value>s&&(t.value-=1)},y=()=>{t.value<n&&(t.value+=1)};return(g,h)=>(_(),$(D,null,[a("div",q,[a("div",null,[a("span",{class:"text-6xl font-weight-light",textContent:R(i(t))},null,8,H),J,e(O,null,{default:l(()=>[i(d)?(_(),f(E,{key:0,color:i(o),style:T({animationDuration:i(r)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):P("",!0)]),_:1})]),a("div",null,[e(S,{color:i(o),icon:"",elevation:"0",onClick:h[0]||(h[0]=x=>d.value=!i(d))},{default:l(()=>[e(M,{size:"large",icon:i(d)?"mdi-pause":"mdi-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:i(t),"onUpdate:modelValue":h[1]||(h[1]=x=>u(t)?t.value=x:null),color:i(o),step:1,min:s,max:n,"track-color":"secondary"},{prepend:l(()=>[e(S,{size:"small",variant:"text",icon:"mdi-minus",color:i(o),onClick:w},null,8,["color"])]),append:l(()=>[e(S,{size:"small",variant:"text",icon:"mdi-plus",color:i(o),onClick:y},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}},Q=k(K,[["__scopeId","data-v-77d9c801"]]),W={style:{width:"3rem"}},X={style:{width:"3rem"}},Z={style:{width:"3rem"}},ee={__name:"DemoSliderAppendTextField",setup(v){const t=V(161),s=V(105),n=V(255);return(d,o)=>(_(),$(D,null,[e(Y,{style:T({background:`rgb(${i(t)}, ${i(s)}, ${i(n)})`}),height:"150px"},null,8,["style"]),e(b,{class:"mt-5"},{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(t),"onUpdate:modelValue":o[1]||(o[1]=r=>u(t)?t.value=r:null),max:255,step:1,"prepend-icon":"mdi-alpha-r"},{append:l(()=>[a("div",W,[e(C,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(s),"onUpdate:modelValue":o[3]||(o[3]=r=>u(s)?s.value=r:null),max:255,step:1,"prepend-icon":"mdi-alpha-g"},{append:l(()=>[a("div",X,[e(C,{modelValue:i(s),"onUpdate:modelValue":o[2]||(o[2]=r=>u(s)?s.value=r:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(n),"onUpdate:modelValue":o[5]||(o[5]=r=>u(n)?n.value=r:null),max:255,step:1,"prepend-icon":"mdi-alpha-b"},{append:l(()=>[a("div",Z,[e(C,{modelValue:i(n),"onUpdate:modelValue":o[4]||(o[4]=r=>u(n)?n.value=r:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}},le={__name:"DemoSliderVertical",setup(v){const t=V(10);return(s,n)=>(_(),f(p,{modelValue:i(t),"onUpdate:modelValue":n[0]||(n[0]=d=>u(t)?t.value=d:null),direction:"vertical"},null,8,["modelValue"]))}},te=a("div",{class:"text-caption"}," Show ticks when using slider ",-1),oe=a("div",{class:"text-caption"}," Always show ticks ",-1),ae=a("div",{class:"text-caption"}," Tick size ",-1),se=a("div",{class:"text-caption"}," Tick labels ",-1),ie={__name:"DemoSliderTicks",setup(v){const t=V(0),s=V(1),n={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(d,o)=>(_(),f(b,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[te,e(p,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[oe,e(p,{modelValue:i(t),"onUpdate:modelValue":o[1]||(o[1]=r=>u(t)?t.value=r:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ae,e(p,{modelValue:i(t),"onUpdate:modelValue":o[2]||(o[2]=r=>u(t)?t.value=r:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[se,e(p,{modelValue:i(s),"onUpdate:modelValue":o[3]||(o[3]=r=>u(s)?s.value=r:null),ticks:n,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}},ne=a("div",{class:"text-caption"}," Show thumb when using slider ",-1),de=a("div",{class:"text-caption"}," Always show thumb label ",-1),re=a("div",{class:"text-caption"}," Custom thumb size ",-1),ce=a("div",{class:"text-caption"}," Custom thumb label ",-1),me={__name:"DemoSliderThumb",setup(v){const t=["\u{1F62D}","\u{1F622}","\u2639\uFE0F","\u{1F641}","\u{1F610}","\u{1F642}","\u{1F60A}","\u{1F601}","\u{1F604}","\u{1F60D}"],s=V(45);return(n,d)=>(_(),f(b,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[ne,e(p,{modelValue:i(s),"onUpdate:modelValue":d[0]||(d[0]=o=>u(s)?s.value=o:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[de,e(p,{modelValue:i(s),"onUpdate:modelValue":d[1]||(d[1]=o=>u(s)?s.value=o:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[re,e(p,{modelValue:i(s),"onUpdate:modelValue":d[2]||(d[2]=o=>u(s)?s.value=o:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ce,e(p,{modelValue:i(s),"onUpdate:modelValue":d[3]||(d[3]=o=>u(s)?s.value=o:null),"thumb-label":"always"},{"thumb-label":l(({modelValue:o})=>[c(R(t[Math.min(Math.floor(o/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},ue={};function pe(v,t){return _(),f(p,{step:10,"show-ticks":"","thumb-size":13,"tick-size":3,"track-size":2})}const Ve=k(ue,[["render",pe]]),ve={__name:"DemoSliderMinAndMax",setup(v){const t=V(-50),s=V(90),n=V(40);return(d,o)=>(_(),f(p,{modelValue:i(n),"onUpdate:modelValue":o[1]||(o[1]=r=>u(n)?n.value=r:null),max:i(s),min:i(t),step:1},{append:l(()=>[e(C,{modelValue:i(n),"onUpdate:modelValue":o[0]||(o[0]=r=>u(n)?n.value=r:null),variant:"underlined",type:"number",style:{width:"60px"}},null,8,["modelValue"])]),_:1},8,["modelValue","max","min"]))}},_e={__name:"DemoSliderValidation",setup(v){const t=V(30),s=[n=>n<=40||"Only 40 in stock"];return(n,d)=>(_(),f(p,{modelValue:i(t),"onUpdate:modelValue":d[0]||(d[0]=o=>u(t)?t.value=o:null),error:i(t)>40,rules:s,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}},fe={__name:"DemoSliderStep",setup(v){const t=V(0);return(s,n)=>(_(),f(p,{modelValue:i(t),"onUpdate:modelValue":n[0]||(n[0]=d=>u(t)?t.value=d:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue","step"]))}},be={__name:"DemoSliderIcons",setup(v){const t=V(0),s=V(0),n=V(10);return(d,o)=>(_(),f(b,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),"prepend-icon":"mdi-volume"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(s),"onUpdate:modelValue":o[1]||(o[1]=r=>u(s)?s.value=r:null),"append-icon":"mdi-alarm"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(n),"onUpdate:modelValue":o[2]||(o[2]=r=>u(n)?n.value=r:null),"append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline"},null,8,["modelValue"])]),_:1})]),_:1}))}},he=a("div",{class:"text-caption"}," color ",-1),xe=a("div",{class:"text-caption"}," track-color ",-1),Ce=a("div",{class:"text-caption"}," thumb-color ",-1),we={__name:"DemoSliderColors",setup(v){const t=V(25),s=V(75),n=V(50);return(d,o)=>(_(),f(b,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[he,e(p,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),color:"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[xe,e(p,{modelValue:i(s),"onUpdate:modelValue":o[1]||(o[1]=r=>u(s)?s.value=r:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[Ce,e(p,{modelValue:i(n),"onUpdate:modelValue":o[2]||(o[2]=r=>u(n)?n.value=r:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}},ye={},Se=a("div",{class:"text-caption"}," Disabled ",-1),ke=a("div",{class:"text-caption"}," Readonly ",-1);function ge(v,t){return _(),f(b,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[Se,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(m,{cols:"12"},{default:l(()=>[ke,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const ze=k(ye,[["render",ge]]),$e={__name:"DemoSliderBasic",setup(v){const t=V(30);return(s,n)=>(_(),f(b,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p)]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(t),"onUpdate:modelValue":n[0]||(n[0]=d=>u(t)?t.value=d:null)},null,8,["modelValue"])]),_:1})]),_:1}))}},Re={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},Te={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-r"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-g"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="greenColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-b"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-r"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-g"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="greenColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-b"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},De={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="sliderValue"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="sliderValue"
      />
    </VCol>
  </VRow>
</template>
`},Ae={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Ue={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Fe={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="mdi-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="mdi-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="mdi-magnify-plus-outline"
        prepend-icon="mdi-magnify-minus-outline"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="mdi-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="mdi-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="mdi-magnify-plus-outline"
        prepend-icon="mdi-magnify-minus-outline"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <VTextField
        v-model="slider"
        variant="underlined"
        type="number"
        style="width: 60px ;"
      />
    </template>
  </VSlider>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <VTextField
        v-model="slider"
        variant="underlined"
        type="number"
        style="width: 60px ;"
      />
    </template>
  </VSlider>
</template>
`},Be={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="13"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="13"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Pe={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Me={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['\u{1F62D}', '\u{1F622}', '\u2639\uFE0F', '\u{1F641}', '\u{1F610}', '\u{1F642}', '\u{1F60A}', '\u{1F601}', '\u{1F604}', '\u{1F60D}']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '\u{1F62D}',
  '\u{1F622}',
  '\u2639\uFE0F',
  '\u{1F641}',
  '\u{1F610}',
  '\u{1F642}',
  '\u{1F60A}',
  '\u{1F601}',
  '\u{1F604}',
  '\u{1F60D}',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Ie={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Oe={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Ee=a("p",null,[c("The "),a("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),Ye=a("p",null,[c("You cannot interact with "),a("code",null,"disabled"),c(" and "),a("code",null,"readonly"),c(" sliders.")],-1),Ne=a("p",null,[c("You can set the colors of the slider using the props "),a("code",null,"color"),c(", "),a("code",null,"track-color"),c(" and "),a("code",null,"thumb-color"),c(".")],-1),Ge=a("p",null,[c("You can add icons to the slider with the "),a("code",null,"append-icon"),c(" and "),a("code",null,"prepend-icon"),c(" props.")],-1),qe=a("p",null,[c("Using the "),a("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),He=a("p",null,[c("Vuetify includes simple validation through the "),a("code",null,"rules"),c(" prop.")],-1),Je=a("p",null,[c("You can set "),a("code",null,"min"),c(" and "),a("code",null,"max"),c(" values of sliders.")],-1),Ke=a("p",null,[c("Use "),a("code",null,"thumb-size"),c(", "),a("code",null,"tick-size"),c(", and "),a("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),Qe=a("p",null,[c("You can display a thumb label while sliding or always with the "),a("code",null,"thumb-label"),c(" prop.")],-1),We=a("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),Xe=a("p",null,[c(" You can use the "),a("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),Ze=a("p",null,[c("Sliders can be combined with other components in its "),a("code",null,"append"),c(" slot, such as "),a("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),el=a("p",null,[c("Use slots such as "),a("code",null,"append"),c(" and "),a("code",null,"prepend"),c(" to easily customize the "),a("code",null,"v-slider"),c(" to fit any situation.")],-1),wl={__name:"slider",setup(v){return(t,s)=>{const n=$e,d=N,o=ze,r=we,w=be,y=fe,g=_e,h=ve,x=Ve,A=me,U=ie,F=le,j=ee,B=Q;return _(),f(b,{class:"match-height"},{default:l(()=>[e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Basic",code:De},{default:l(()=>[Ee,e(n)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Disabled and Readonly",code:Ue},{default:l(()=>[Ye,e(o)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Colors",code:Ae},{default:l(()=>[Ne,e(r)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Icons",code:Fe},{default:l(()=>[Ge,e(w)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Step",code:Pe},{default:l(()=>[qe,e(y)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Validation",code:Le},{default:l(()=>[He,e(g)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Min and Max",code:je},{default:l(()=>[Je,e(h)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Size",code:Be},{default:l(()=>[Ke,e(x)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Thumb",code:Me},{default:l(()=>[Qe,e(A)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Ticks",code:Ie},{default:l(()=>[We,e(U)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Vertical",code:Oe},{default:l(()=>[Xe,e(F)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Append text field",code:Te},{default:l(()=>[Ze,e(j)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Append and prepend",code:Re},{default:l(()=>[el,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{wl as default};
