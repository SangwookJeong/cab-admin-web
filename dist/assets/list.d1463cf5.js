import{a as p,b as I,V,d as T,e as A,c as w}from"./VList.84d61a8a.js";import{o as n,b as u,w as t,c as _,F as b,a as L,p as e,C as f,x as C,m as c,cS as H,br as U,W as R,Q as F,U as N,E as i,k as M,O as k,q as $,D as P,L as W}from"./index.b54d9fca.js";import{V as D}from"./VAvatar.76efe2b9.js";import{V as B}from"./VBtn.a4aae81b.js";import{V as O}from"./VDivider.aab4e4c1.js";import{V as x}from"./VListItemAction.2308c9bf.js";import{V as S}from"./VCheckbox.fad56530.js";import{_ as q}from"./AppCardCode.a6b8276f.js";import{c as l}from"./VCard.22430b76.js";import{a as h,V as Q}from"./VRow.64033f9e.js";import"./index.fb967781.js";import"./router.2f5148f2.js";import"./VImg.fa9bd3c1.js";import"./position.e1a9cf7b.js";import"./VInput.2af3df27.js";import"./VCheckboxBtn.e6d00e80.js";import"./VSelectionControl.854c9cad.js";import"./vue.runtime.esm-bundler.e4fa70f7.js";const K={__name:"DemoListShaped",setup(v){const s=[{text:"Cupcake sesame snaps dessert marzipan.",icon:"mdi-instagram"},{text:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",icon:"mdi-facebook"},{text:"Bonbon macaroon gummies pie jelly",icon:"mdi-twitter"}];return(o,d)=>(n(),u(V,null,{default:t(()=>[(n(),_(b,null,L(s,(a,r)=>e(p,{key:r,value:a,rounded:"shaped"},{prepend:t(()=>[e(f,{icon:a.icon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(I,{textContent:C(a.text)},null,8,["textContent"])]),_:2},1032,["value"])),64))]),_:1}))}};const E=["innerHTML"],Y={__name:"DemoListThreeLine",setup(v){const s=[{type:"subheader",title:"Today"},{prependAvatar:H,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:U,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:R,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:F,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'},{type:"divider",inset:!0},{prependAvatar:N,title:"Recipe to try",subtitle:'<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'}];return(o,d)=>(n(),u(V,{id:"three-line-list",lines:"three",items:s,"item-props":"",density:"compact"},{subtitle:t(({subtitle:a})=>[c("div",{innerHTML:a},null,8,E)]),_:1}))}},X={__name:"DemoListTwoLinesAndSubheader",setup(v){const s=[{color:"blue",icon:"mdi-clipboard-text",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"amber",icon:"mdi-gesture-tap-button",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],o=[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}];return(d,a)=>(n(),u(V,{lines:"two"},{default:t(()=>[e(T,{inset:""},{default:t(()=>[i(" Folders ")]),_:1}),(n(),_(b,null,L(o,r=>e(p,{key:r.title,title:r.title,subtitle:r.subtitle},{prepend:t(()=>[e(D,{color:"secondary",variant:"tonal"},{default:t(()=>[e(f,{size:26,icon:"mdi-folder-outline"})]),_:1})]),append:t(()=>[e(B,{variant:"text",color:"default",icon:"mdi-information-outline"})]),_:2},1032,["title","subtitle"])),64)),e(O,{inset:""}),e(T,{inset:""},{default:t(()=>[i(" Files ")]),_:1}),(n(),_(b,null,L(s,r=>e(p,{key:r.title,title:r.title,subtitle:r.subtitle},{prepend:t(()=>[e(D,{color:"secondary",variant:"tonal"},{default:t(()=>[e(f,{size:26,icon:r.icon},null,8,["icon"])]),_:2},1024)]),append:t(()=>[e(B,{variant:"text",color:"default",icon:"mdi-information-outline"})]),_:2},1032,["title","subtitle"])),64))]),_:1}))}},Z={__name:"DemoListSubGroup",setup(v){const s=M(["Users","Admin"]),o=[["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]],d=[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete-outline"]];return(a,r)=>(n(),u(V,{opened:$(s),"onUpdate:opened":r[0]||(r[0]=m=>P(s)?s.value=m:null)},{default:t(()=>[e(p,{title:"Home",value:"Home"},{prepend:t(()=>[e(f,{size:"24",icon:"mdi-home-outline",class:"me-3"})]),_:1}),e(A,{value:"Users"},{activator:t(({props:m})=>[e(p,k(m,{title:"Users"}),{prepend:t(()=>[e(f,{size:"24",icon:"mdi-account-circle-outline",class:"me-3"})]),_:2},1040)]),default:t(()=>[e(A,{value:"Admin"},{activator:t(({props:m})=>[e(p,k(m,{title:"Admin"}),null,16)]),default:t(()=>[(n(),_(b,null,L(o,([m,y],g)=>e(p,{key:g,value:m,title:m},{prepend:t(()=>[e(f,{size:"24",icon:y,class:"me-3"},null,8,["icon"])]),_:2},1032,["value","title"])),64))]),_:1}),e(A,{value:"Actions"},{activator:t(({props:m})=>[e(p,k(m,{title:"Actions"}),null,16)]),default:t(()=>[(n(),_(b,null,L(d,([m,y],g)=>e(p,{key:g,value:m,title:m},{prepend:t(()=>[e(f,{size:"24",icon:y,class:"me-3"},null,8,["icon"])]),_:2},1032,["value","title"])),64))]),_:1})]),_:1})]),_:1},8,["opened"]))}},ee={};function te(v,s){return n(),u(V,{lines:"three",density:"compact","select-strategy":"classic"},{default:t(()=>[e(T,null,{default:t(()=>[i("General")]),_:1}),e(p,{value:"notifications"},{prepend:t(({isActive:o})=>[e(x,{start:""},{default:t(()=>[e(S,{"model-value":o,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(I,null,{default:t(()=>[i("Notifications")]),_:1}),e(w,null,{default:t(()=>[i("Notify me about updates to apps or games that I downloaded")]),_:1})]),_:1}),e(p,{value:"sound"},{prepend:t(({isActive:o})=>[e(x,{start:""},{default:t(()=>[e(S,{"model-value":o,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(I,null,{default:t(()=>[i("Sound")]),_:1}),e(w,null,{default:t(()=>[i("Auto-update apps at any time. Data charges may apply")]),_:1})]),_:1}),e(p,{value:"widgets"},{prepend:t(({isActive:o})=>[e(x,{start:""},{default:t(()=>[e(S,{"model-value":o,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(I,null,{default:t(()=>[i("Auto-add widgets")]),_:1}),e(w,null,{default:t(()=>[i("Automatically add home screen widgets when downloads complete")]),_:1})]),_:1})]),_:1})}const ie=W(ee,[["render",te]]),ae={__name:"DemoListNav",setup(v){const s=[{title:"My Files",value:1,prependIcon:"mdi-folder-outline"},{title:"Shared with me",value:2,prependIcon:"mdi-account-multiple-outline"},{title:"Starred",value:3,prependIcon:"mdi-star-outline"},{title:"Recent",value:4,prependIcon:"mdi-history"},{title:"Offline",value:5,prependIcon:"mdi-check-circle-outline"},{title:"Uploads",value:6,prependIcon:"mdi-upload-outline"},{title:"Backups",value:7,prependIcon:"mdi-cloud-upload-outline"}];return(o,d)=>(n(),u(V,{nav:"",lines:!1},{default:t(()=>[(n(),_(b,null,L(s,a=>e(p,{key:a.value,value:a.value},{prepend:t(()=>[e(f,{icon:a.prependIcon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(I,null,{default:t(()=>[i(C(a.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},se={__name:"DemoListDensity",setup(v){const s=[{title:"halvah icing marshmallow",value:1},{title:"Cake caramels donut danish muffin biscuit",value:2},{title:"Chocolate cake pie lollipop",value:3},{title:"Apple pie toffee pudding gummi bears",value:4},{title:"Jujubes chupa chups cheesecake tart",value:5},{title:"Candy fruitcake bonbon sesame snaps dessert",value:6},{title:"Candy wafer tiramisu sugar plum sweet.",value:7},{title:"Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",value:8}];return(o,d)=>(n(),u(V,{density:"compact",items:s}))}},le={__name:"DemoListRounded",setup(v){const s=[{title:"Cupcake sesame snaps dessert marzipan.",value:1,prependIcon:"mdi-instagram"},{title:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",value:2,prependIcon:"mdi-facebook"},{title:"Bonbon macaroon gummies pie jelly",value:3,prependIcon:"mdi-twitter"},{title:"halvah icing marshmallow",value:4,prependIcon:"mdi-instagram"}];return(o,d)=>(n(),u(V,null,{default:t(()=>[(n(),_(b,null,L(s,a=>e(p,{key:a.title,value:a.value,rounded:"xl"},{prepend:t(()=>[e(f,{icon:a.prependIcon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(I,null,{default:t(()=>[i(C(a.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},ne={__name:"DemoListBasic",setup(v){const s=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"];return(o,d)=>(n(),u(V,{items:s}))}},oe={ts:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`,js:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`},re={ts:`<script setup lang="ts">
const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},me={ts:`<script lang="ts" setup>
const items = [
  { title: 'halvah icing marshmallow', value: 1 },
  { title: 'Cake caramels donut danish muffin biscuit', value: 2 },
  { title: 'Chocolate cake pie lollipop', value: 3 },
  { title: 'Apple pie toffee pudding gummi bears', value: 4 },
  { title: 'Jujubes chupa chups cheesecake tart', value: 5 },
  { title: 'Candy fruitcake bonbon sesame snaps dessert', value: 6 },
  { title: 'Candy wafer tiramisu sugar plum sweet.', value: 7 },
  { title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.', value: 8 },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'halvah icing marshmallow',
    value: 1,
  },
  {
    title: 'Cake caramels donut danish muffin biscuit',
    value: 2,
  },
  {
    title: 'Chocolate cake pie lollipop',
    value: 3,
  },
  {
    title: 'Apple pie toffee pudding gummi bears',
    value: 4,
  },
  {
    title: 'Jujubes chupa chups cheesecake tart',
    value: 5,
  },
  {
    title: 'Candy fruitcake bonbon sesame snaps dessert',
    value: 6,
  },
  {
    title: 'Candy wafer tiramisu sugar plum sweet.',
    value: 7,
  },
  {
    title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
    value: 8,
  },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`},pe={ts:`<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, prependIcon: 'mdi-folder-outline' },
  { title: 'Shared with me', value: 2, prependIcon: 'mdi-account-multiple-outline' },
  { title: 'Starred', value: 3, prependIcon: 'mdi-star-outline' },
  { title: 'Recent', value: 4, prependIcon: 'mdi-history' },
  { title: 'Offline', value: 5, prependIcon: 'mdi-check-circle-outline' },
  { title: 'Uploads', value: 6, prependIcon: 'mdi-upload-outline' },
  { title: 'Backups', value: 7, prependIcon: 'mdi-cloud-upload-outline' },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'mdi-folder-outline',
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'mdi-account-multiple-outline',
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'mdi-star-outline',
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'mdi-history',
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'mdi-check-circle-outline',
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'mdi-upload-outline',
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'mdi-cloud-upload-outline',
  },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},ce={ts:`<script lang="ts" setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    prependIcon: 'mdi-instagram',

  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    prependIcon: 'mdi-facebook',
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    prependIcon: 'mdi-twitter',
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    prependIcon: 'mdi-instagram',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="item in items"
      :key="item.title"
      :value="item.value"
      rounded="xl"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    prependIcon: 'mdi-instagram',
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    prependIcon: 'mdi-facebook',
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    prependIcon: 'mdi-twitter',
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    prependIcon: 'mdi-instagram',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="item in items"
      :key="item.title"
      :value="item.value"
      rounded="xl"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},de={ts:`<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'mdi-instagram' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'mdi-facebook' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'mdi-twitter' },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon
          :icon="item.icon"
          class="me-3"
        />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'mdi-instagram',
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'mdi-facebook',
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'mdi-twitter',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon
          :icon="item.icon"
          class="me-3"
        />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`},ue={ts:`<script lang="ts" setup>
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
]

const cruds = [
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete-outline'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      title="Home"
      value="Home"
    >
      <template #prepend>
        <VIcon
          size="24"
          icon="mdi-home-outline"
          class="me-3"
        />
      </template>
    </VListItem>

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          title="Users"
        >
          <template #prepend>
            <VIcon
              size="24"
              icon="mdi-account-circle-outline"
              class="me-3"
            />
          </template>
        </VListItem>
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`,js:`<script setup>
const open = ref([
  'Users',
  'Admin',
])

const admins = [
  [
    'Management',
    'mdi-account-multiple-outline',
  ],
  [
    'Settings',
    'mdi-cog-outline',
  ],
]

const cruds = [
  [
    'Create',
    'mdi-plus-outline',
  ],
  [
    'Read',
    'mdi-file-outline',
  ],
  [
    'Update',
    'mdi-update',
  ],
  [
    'Delete',
    'mdi-delete-outline',
  ],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      title="Home"
      value="Home"
    >
      <template #prepend>
        <VIcon
          size="24"
          icon="mdi-home-outline"
          class="me-3"
        />
      </template>
    </VListItem>

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          title="Users"
        >
          <template #prepend>
            <VIcon
              size="24"
              icon="mdi-account-circle-outline"
              class="me-3"
            />
          </template>
        </VListItem>
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`},ve={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar5,
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
]
<\/script>

<template>
  <VList
    id="three-line-list"
    lines="three"
    :items="items"
    item-props
    density="compact"
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>

<style lang="scss">
#three-line-list {
  .v-list-item-title {
    margin-block-end: 0.25rem;
  }

  .v-divider {
    margin-block: 0.25rem;
  }
}
</style>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    type: 'subheader',
    title: 'Today',
  },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar5,
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
]
<\/script>

<template>
  <VList
    id="three-line-list"
    lines="three"
    :items="items"
    item-props
    density="compact"
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>

<style lang="scss">
#three-line-list {
  .v-list-item-title {
    margin-block-end: 0.25rem;
  }

  .v-divider {
    margin-block: 0.25rem;
  }
}
</style>
`},he={ts:`<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'mdi-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'mdi-gesture-tap-button',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="mdi-folder-outline"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const files = [
  {
    color: 'blue',
    icon: 'mdi-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'mdi-gesture-tap-button',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="mdi-folder-outline"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>
  </VList>
</template>
`},fe=c("code",null,"v-list",-1),Ve=c("code",null,"v-list-item",-1),_e=c("code",null,"rounded",-1),be=c("code",null,"density",-1),Le=c("code",null,"default",-1),Ie=c("code",null,"comfortable",-1),ye=c("code",null,"compact",-1),ge=c("code",null,"nav",-1),Ae=c("code",null,"v-list-item",-1),we=c("code",null,"three-line",-1),ke=c("code",null,"v-list-group",-1),xe=c("code",null,"v-list-group",-1),Se=c("code",null,"v-list-item",-1),qe={__name:"list",setup(v){return(s,o)=>{const d=ne,a=q,r=le,m=se,y=ae,g=ie,j=Z,J=X,z=Y,G=K;return n(),u(Q,{class:"match-height"},{default:t(()=>[e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Basic","no-padding":"",code:re},{default:t(()=>[e(l,null,{default:t(()=>[fe,i(" component can contain an avatar, content, actions and much more.")]),_:1}),e(l,null,{default:t(()=>[e(d)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Rounded","no-padding":"",code:ce},{default:t(()=>[e(l,null,{default:t(()=>[i("You can make "),Ve,i(" rounded using "),_e,i(" prop.")]),_:1}),e(l,null,{default:t(()=>[e(r)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Density",code:me,"no-padding":""},{default:t(()=>[e(l,null,{default:t(()=>[i("Use "),be,i(" prop to adjusts the spacing within the component. Available options are: "),Le,i(", "),Ie,i(", and "),ye,i(".")]),_:1}),e(l,null,{default:t(()=>[e(m)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Nav","no-padding":"",code:pe},{default:t(()=>[e(l,null,{default:t(()=>[i("Lists can receive an alternative "),ge,i(" styling that reduces the width "),Ae,i(" takes up as well as adding a border radius.")]),_:1}),e(l,null,{default:t(()=>[e(y)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Action and item group","no-padding":"",code:oe},{default:t(()=>[e(l,null,{default:t(()=>[i("A "),we,i(" list with actions. Utilizing "),ke,i(", easily connect actions to your tiles.")]),_:1}),e(l,null,{default:t(()=>[e(g)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Sub Group","no-padding":"",code:ue},{default:t(()=>[e(l,null,{default:t(()=>[i(" Using the "),xe,i(" component you can create up to 2 levels in depth using the sub-group prop. ")]),_:1}),e(l,null,{default:t(()=>[e(j)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Two lines and subheader","no-padding":"",code:he},{default:t(()=>[e(l,null,{default:t(()=>[i("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")]),_:1}),e(l,null,{default:t(()=>[e(J)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Three Line","no-padding":"",code:ve},{default:t(()=>[e(l,null,{default:t(()=>[i("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")]),_:1}),e(l,null,{default:t(()=>[e(z)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Shaped","no-padding":"",code:de},{default:t(()=>[e(l,null,{default:t(()=>[i(" Shaped lists have rounded borders on one side of the "),Se,i(". ")]),_:1}),e(l,null,{default:t(()=>[e(G)]),_:1})]),_:1},8,["code"])]),_:1})]),_:1})}}};export{qe as default};
