(function(e){function t(t){for(var r,i,s=t[0],l=t[1],d=t[2],c=0,m=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/unfortunate-few/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("1356"),n=a.n(r);n.a},1356:function(e,t,a){},"20ea":function(e,t,a){},"448a":function(e,t,a){e.exports=a.p+"img/Twang.2141bc93.png"},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("NavBar"),a("v-content",[a("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",dark:"",color:"#414247"}},[a("v-toolbar-title",{staticClass:"headline text-uppercase",attrs:{to:"/"}},[a("v-icon",[e._v("mdi-sword-cross")]),a("span",{staticClass:"font-weight-thin"},[e._v(" The")]),a("span",[e._v("Unfortunate")]),a("span",{staticClass:"font-weight-thin"},[e._v("Few")])],1),a("v-spacer"),a("v-btn",{attrs:{text:"",to:"/characters"}},[e._v("Characters")]),a("v-btn",{attrs:{text:"",to:"/items"}},[e._v("Items")]),a("v-btn",{attrs:{text:"",to:"/story"}},[e._v("Their Story")])],1)},s=[],l={name:"NavBar",data:()=>({})},d=l,u=a("2877"),c=a("6544"),m=a.n(c),g=a("40dc"),p=a("8336"),h=a("132d"),y=a("2fa4"),w=a("2a7f"),f=Object(u["a"])(d,i,s,!1,null,"ae3b995c",null),v=f.exports;m()(f,{VAppBar:g["a"],VBtn:p["a"],VIcon:h["a"],VSpacer:y["a"],VToolbarTitle:w["a"]});var b={name:"App",components:{NavBar:v},data:()=>({})},k=b,x=(a("034f"),a("7496")),_=a("a75b"),C=Object(u["a"])(k,n,o,!1,null,null,null),T=C.exports;m()(C,{VApp:x["a"],VContent:_["a"]});var A=a("8c4f"),q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"text-center display-4 white--text"},[e._v("404")]),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-img",{attrs:{src:a("c888"),"max-width":"500","max-height":"500"}})],1),r("p",{staticClass:"text-center font-italic display-1 white--text"},[e._v("Dang, you failed so hard at clicking you wound up here... ")])],1)},S=[],I={name:"Lost",data:()=>({})},D=I,V=a("adda"),M=a("0fd9"),O=Object(u["a"])(D,q,S,!1,null,"1a478e81",null),H=O.exports;m()(O,{VImg:V["a"],VRow:M["a"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"white--text"},[a("p",{staticClass:"text-center display-3"},[a("span",{staticClass:"font-weight-thin"},[e._v("Characters Of")]),e._v(" The Few")]),a("v-row",e._l(e.characters,(function(t,r){return a("v-col",{key:r},[a("v-card",{attrs:{color:"#414247",dark:"",to:{name:"character",params:{character:t,name:t.short_name}}}},[a("v-card-title",[e._v("\n                        "+e._s(t.name)+"\n                    ")]),a("v-card-text",[a("p",{staticClass:"font-italic caption mt-n3 mb-n1"},[e._v(e._s(t.race))]),a("p",{staticClass:"subtitle-2 mb-n1"},[e._v(e._s(t.class)+" - "+e._s(t.subclass))]),a("p",{staticClass:"overline"},[e._v("Height:"+e._s(t.height)+" - Weight:"+e._s(t.weight)+" - Age: "+e._s(t.age))]),a("v-row",{attrs:{align:"center",justify:"center"}},[t.image?a("v-img",{attrs:{src:e.fetchImage(t.image),"max-height":"150","max-width":"150"}}):e._e()],1),a("p",{staticClass:"mb-n1 title"},[e._v("Description:")]),a("p",{staticClass:"subtitle-1"},[e._v(e._s(t.description))])],1)],1)],1)})),1)],1)},R=[],E=a("5a69"),U={name:"Characters",mounted(){},methods:{fetchImage(e){return console.log("Got image: "+e),a("7529")("./"+e+".png")}},data:()=>({characters:E})},L=U,P=a("b0af"),B=a("99d9"),j=a("62ad"),Y=a("a523"),J=Object(u["a"])(L,W,R,!1,null,"f0e65f6e",null),F=J.exports;m()(J,{VCard:P["a"],VCardText:B["b"],VCardTitle:B["c"],VCol:j["a"],VContainer:Y["a"],VImg:V["a"],VRow:M["a"]});var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"white--text"},[a("p",{staticClass:"text-center display-3"},[a("span",{staticClass:"font-weight-thin"},[e._v("Loot Of")]),e._v(" The Few ")]),a("v-card",{staticClass:"custom-color"},[a("v-card-title",[e._v("\n        Collected Items\n        "),a("div",{staticClass:"flex-grow-1"}),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",dark:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,"items-per-page":10,items:e.items,search:e.search,"loading-text":"Please wait, table is loading....","sort-by":e.name,"sort-desc":!1},scopedSlots:e._u([{key:"body",fn:function(t){var r=t.items;return[a("tbody",e._l(r,(function(t){return a("tr",{key:t.name,on:{click:function(a){return e.setItem(t)}}},[a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.weaponCategory))]),a("td",[e._v(e._s(t.bonus))]),a("td",["Unknown"!=t.rarity?a("span",[e._v(e._s(t.rarity))]):e._e()]),a("td",[a("span",[e._v(e._s(t.dmg1)),t.dmg2?a("span",[e._v("/"+e._s(t.dmg2))]):e._e()])]),a("td",[e._v(e._s(t.dmgType))]),a("td",e._l(t.property,(function(t,r){return a("span",{key:r},[e._v(" "+e._s(t)+" ")])})),0),a("td",[e._v(e._s(t.range))]),a("td",[e._v(e._s(t.reqAttune))]),a("td",[e._v(e._s(t.owner))])])})),0)]}}])})],1),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{"max-width":"600"},model:{value:e.itemView,callback:function(t){e.itemView=t},expression:"itemView"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v(e._s(e.currentItem.name))]),a("v-card-text",[a("p",{staticClass:"font-italic caption mt-n3 mb-n1"},[e._v("Owned By: "),e.currentItem.owner?a("span",[e._v(e._s(e.currentItem.owner))]):a("span",[e._v("--")])]),a("p",{staticClass:"subtitle-2 mb-n1"},[e._v(e._s(e.currentItem.weaponCategory)+" - "+e._s(e.currentItem.rarity))]),a("p",{staticClass:"overline"},[e._v("Properties: "),e._l(e.currentItem.property,(function(t,r){return a("span",{key:r,staticClass:"font-italic"},[e._v(e._s(t)+" ")])}))],2),a("p",{staticClass:"mb-n1 title"},[e._v("Description")]),e._l(e.currentItem.description,(function(t,r){return a("p",{key:r,staticClass:"caption"},[e._v(e._s(t))])}))],2),a("v-card-actions",[e.currentItem.url?a("v-btn",{attrs:{color:"green darken-1",text:"",href:e.currentItem.url}},[e._v("5eTools Entry")]):e._e(),a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.itemView=!1}}},[e._v("Close")])],1)],1)],1)],1)],1)},G=[],$=a("97a8"),z={name:"Items",methods:{setItem:function(e){console.log("Clicked on item: "+e.name),this.resetItem,this.currentItem=e,this.itemView=!0},resetItem:function(){this.currentItem=[]}},data(){return{search:"",currentItem:[],items:$,itemView:!1,headers:[{text:"Item Name",align:"left",sortable:!0,value:"name"},{text:"Category",value:"weaponCategory"},{text:"Magic Bonus",value:"bonus"},{text:"Rarity",value:"rarity"},{text:"Damage",value:"dmg1"},{text:"Damage Type",value:"dmgType"},{text:"Properties",value:"property"},{text:"Range",value:"range"},{text:"Attunement",value:"reqAttune"},{text:"Owned By",value:"owner"}]}}},K=z,X=(a("8d3f"),a("8fea")),Q=a("169a"),Z=a("8654"),ee=Object(u["a"])(K,N,G,!1,null,"25d469e0",null),te=ee.exports;m()(ee,{VBtn:p["a"],VCard:P["a"],VCardActions:B["a"],VCardText:B["b"],VCardTitle:B["c"],VContainer:Y["a"],VDataTable:X["a"],VDialog:Q["a"],VRow:M["a"],VTextField:Z["a"]});var ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"white--text"},[a("p",{staticClass:"text-center display-3"},[a("span",{staticClass:"font-weight-thin"},[e._v("Stories Of")]),e._v(" The Few ")]),a("p",{staticClass:"text-center caption"},[e._v("This section is a work in progress")])])},re=[],ne={},oe=ne,ie=Object(u["a"])(oe,ae,re,!1,null,"524a863c",null),se=ie.exports;m()(ie,{VContainer:Y["a"]});var le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"white--text"},[a("p",{staticClass:"text-center display-3"},[e._v(e._s(e.character.name))])])},de=[],ue={name:"Character",props:{character:Object}},ce=ue,me=Object(u["a"])(ce,le,de,!1,null,"058874bd",null),ge=me.exports;m()(me,{VContainer:Y["a"]}),r["a"].use(A["a"]);var pe=new A["a"]({routes:[{path:"/",component:F},{path:"/characters",component:F},{path:"/character/:name",component:ge,name:"character",props:!0},{path:"/items",component:te},{path:"/story",component:se},{path:"*",component:H}]}),he=a("f309");r["a"].use(he["a"]);var ye=new he["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:pe,vuetify:ye,render:function(e){return e(T)}}).$mount("#app")},"5a69":function(e){e.exports=JSON.parse('[{"name":"Sylis Von Matterhorn","short_name":"sylis","race":"Half-Elf","class":"Warlock","subclass":"The Great Old One","height":"??","age":"??","weight":"??","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","image":""},{"name":"Twang","short_name":"twang","race":"Kenku","class":"Fighter","subclass":"Battle Master","height":"5ft ?in","age":"??","weight":"??","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","image":"Twang"},{"name":"Jaxx Ulaniir","short_name":"jaxx","race":"Aasimar (Protector)","class":"Bard","subclass":"College of the Swords","height":"6ft 1in","age":"53","weight":"173","description":"Jaxx Ulaniir, the \'angel boy\'.  An ex-child of Amaunator.","image":"Jaxx"},{"name":"Ervy","short_name":"ervy","race":"Mountain Dwarf","class":"Paladin","subclass":"Oath of Devotion","height":"5ft 0in","age":"??","weight":"Chonk","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","image":""},{"name":"Sig","short_name":"sig","race":"Half-Elf","class":"Rogue","subclass":"Assassin","height":"??","age":"??","weight":"??","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","image":""},{"name":"Cassandra","short_name":"cass","race":"Drow","class":"Cleric","subclass":"Tempest","height":"??","age":"??","weight":"??","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","image":""}]')},7529:function(e,t,a){var r={"./Jaxx.png":"990d","./Twang.png":"448a"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id="7529"},"8d3f":function(e,t,a){"use strict";var r=a("20ea"),n=a.n(r);n.a},"97a8":function(e){e.exports=JSON.parse('[{"name":"Dwarven Thrower","type":"Magical","weaponCategory":"Martial - Warhammer","dmg1":"1d8","dmg2":"1d10","dmgType":"Bludgeoning","property":["Thrown","Versatile"],"range":"20/60","rarity":"Very Rare","reqAttune":"by a Dwarf","description":["You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand."],"bonus":"+3","url":"https://5e.tools/items.html#dwarven%20thrower_dmg","owner":"Ervy"},{"name":"Stalwart Belt of the Ferret","type":"","weaponCategory":"Accessory - Belt","dmg1":"","dmg2":"","dmgType":"","property":["Homebrew"],"range":"","rarity":"Rare","reqAttune":"None","description":["While wearing this belt, you gain +1 Dexterity and +10 to your maximum HP."],"bonus":"+1 DEX, +10 HP","url":"","owner":"Jaxx"},{"name":"Spiked Shield of Accuracy","type":"Magical","weaponCategory":"Armor - Shield","dmg1":"1d8","dmg2":"","dmgType":"Piercing","property":["Homebrew"],"range":"Melee","rarity":"Unknown","reqAttune":"none","description":["While wielding this shield you gain +1 to all attack rolls made. In addition, if another creature makes a melee attack towards you, and misses, you may roll 1d8 (Piercing) damage to inflict to them."],"bonus":"","url":"","owner":"Jaxx"},{"name":"Vorpal Sword","type":"Magical","weaponCategory":"Martial - Longsword","dmg1":"1d8","dmg2":"","dmgType":"Slashing","property":[""],"range":"Melee","rarity":"Legendary","reqAttune":"required","description":["You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.","When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature\'s heads. The creature dies if it can\'t survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn\'t have or need a head, has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit."],"bonus":"+3","url":"https://5e.tools/items.html#vorpal%20sword_dmg","owner":"Jaxx"},{"name":"Sword of Duality","type":"Magical","weaponCategory":"Martial - Shortsword","dmg1":"1d4","dmg2":"1d4","dmgType":"Necrotic / Radiant","property":["Homebrew"],"range":"Melee","rarity":"Unknown","reqAttune":"required","description":["Streamers of Light: When you speak a command word, you may cause the sword to shine brightly. This creates 15ft of bright light and 30 further feet of dim light. May not be used with Blade of Darkness.","Blade of Darkness:  The blade is hard to discern in dark or dim light. When in dark or dim light, you gain +3 bonus to your attack. May not be used with Streamers of Light."],"bonus":"+3","url":"","owner":"Jaxx"},{"name":"Heavy Crossbow of War","type":"","weaponCategory":"Martial - Heavy Crossbow","dmg1":"1d10","dmg2":"","dmgType":"Piercing","property":["Homebrew","Heavy","Loading","Two-Handed"],"range":"100/400 ft","rarity":"Unknown","reqAttune":"none","description":["You can a +3 bonus to attack and damage rolls with this weapon.","As a free action, before you attack, you can choose to \'expend\' one of the magical points of this item. Effectively making it +2 after the first use, +1 after the second, etc. If you choose to do so you gain advantage on that attack. All expended charges recharge daily."],"bonus":"+3","url":"","owner":"Twang"},{"name":"Gloves of Cannon Wall","type":"","weaponCategory":"Accessory - Gloves","dmg1":"","dmg2":"","dmgType":"","property":["Homebrew"],"range":"","rarity":"Unknown","reqAttune":"none","description":["While wearing these gloves, you may choose to succeed on a constituion saving throw where you would have failed one. You can use this effect once per day."],"bonus":"","url":"","owner":"Twang"},{"name":"Cloak of Displacement","type":"","weaponCategory":"Accessory - Cloak","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Rare","reqAttune":"required","description":["While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move."],"bonus":"","url":"https://5e.tools/items.html#cloak%20of%20displacement_dmg","owner":"Sig"},{"name":"Periapt of Wound Closure","type":"","weaponCategory":"Accessory - Necklace","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Unknown","reqAttune":"required","description":["While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores."],"bonus":"","url":"https://5e.tools/items.html#periapt%20of%20wound%20closure_dmg","owner":""},{"name":"Amulet of Health","type":"","weaponCategory":"Accessory - Necklace","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Unknown","reqAttune":"required","description":["Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution score is already 19 or higher without it."],"bonus":"19 CON","url":"https://5e.tools/items.html#amulet%20of%20health_dmg","owner":"Sylis"},{"name":"Ancient Dwarven Greatsword","type":"","weaponCategory":"Martial - Greatsword","dmg1":"2d6","dmg2":"","dmgType":"Slashing","property":["Homebrew","Two-Handed","Heavy"],"range":"","rarity":"Artifact","reqAttune":"required","description":[""],"bonus":"+4","url":"","owner":"Ervy"},{"name":"Rocky","type":"","weaponCategory":"Martial - Flail","dmg1":"1d10","dmg2":"","dmgType":"","property":["Homebrew"],"range":"","rarity":"Unknown","reqAttune":"required","description":["Twice per long rest, you may use an action to slam down the rock-end of this flail onto a solid surface. A 20 ft cone of force emits in front of you.  All creatures within the cone must maxe a DC 17 Dexterity saving through or take 2d10 Force Damage and be knocked prone. On a successful save, the creatures take half damage and are not knocked prone. "],"bonus":"+2","url":"","owner":""},{"name":"Willbreaker","type":"","weaponCategory":"Martial - Maul","dmg1":"2d6","dmg2":"","dmgType":"","property":["Homebrew","Heavy","Two-Handed"],"range":"Melee","rarity":"Unknown","reqAttune":"required","description":["Upon a Critical Hit with this weapon, the air around the user becomes fierce and loud with the sound of battle cries from the previous owners. Target must make a Wisdom Saving Throw or become frightened."],"bonus":"","url":"","owner":""},{"name":"Mountain Guard GreatAxe","type":"","weaponCategory":"Martial - Greataxe","dmg1":"","dmg2":"","dmgType":"","property":["Sentient","Homebrew","Heavy","Two-Handed"],"range":"","rarity":"Unknown","reqAttune":"required","description":["Dwarven Forged: You gain a +2 bonus to attack and damage rolls made with this weapon. ","Last Line of Defense: As an action you can slam the end of the handle of this axe on the floor causing a wave of gold energy to ripple out around you. For one minute all creatures of your choice in a 30ft raidus around you become immunage ot being frightened. They also gain 10 temporary hit points at the start of each of their turns. When the spell ends, all the creates lose any remaining temporary hit points. You can use this feature once per day."],"bonus":"+2","url":"","owner":"Ervy"},{"name":"Blade of The Empire","type":"","weaponCategory":"Martial - Shortsword","dmg1":"","dmg2":"","dmgType":"","property":["Homebrew"],"range":"","rarity":"Common","reqAttune":"","description":["Military Precision: You gain a +1 bonus to attack and damge rolls made with this weapon.","Lawkeeper: If you are of a Lawful alignment you deal and extra 1d6 slashing damage to a creature with a Chaotic alignment on a successful hit."],"bonus":"+1","url":"","owner":""},{"name":"Ardent Enforcer","type":"","weaponCategory":"Martial - Warhammer","dmg1":"1d8","dmg2":"1d10","dmgType":"Fire","property":["Homebrew","Versatile"],"range":"","rarity":"Unknown","reqAttune":"required","description":["Infernal Metal: You gain +3 to your attack and damage rolls with this weapon.","Mark of the Fallen: As a bonus action when you make a successful attack against a creature, you can choose to mark it with an infernal rune.  The creatures has to make a DC 15 Wisdom Saving Throw. On a failure, the create is marked. On a success nothing happens.  When marked, the creature has vulnerability to fire and necrotic damage for one minute. If a creature has immunity, they now have resistance. If the creature is resistant, it loses it\'s resistance. You can use this feature twice per day."],"bonus":"+3","url":"","owner":""},{"name":"Delilah","type":"","weaponCategory":"Ranged - Light Crossbow","dmg1":"1d8","dmg2":"","dmgType":"","property":["Homebrew"],"range":"80/320","rarity":"Very Rare","reqAttune":"","description":["My Dearest Delilah: You can a +2 bonus to attack and damge rolls with this weapon.","Heartseker: Before you attack a creature you can whisper a command word that magically enchants the next bolt you fire. You make a ranged attack roll for this bolt with advantage. The bolt files around corners and ingores all cover. You can do this once per day."],"bonus":"+2","url":"","owner":"Sig"},{"name":"Dragon Scale Shield","type":"","weaponCategory":"Armor - Shield","dmg1":"","dmg2":"","dmgType":"","property":["Homebrew"],"range":"","rarity":"Unknown","reqAttune":"none","description":["While wearing this shield you gain +2 AC, bringing the total bonus for this shield to +4 AC.  As a reaction, you can gain immunity to Acid Damage. Can be used ?? number of times a day."],"bonus":"","url":"","owner":"Ervy"},{"name":"Canaith Mandolin, Instrument of The Bards","type":"","weaponCategory":"Instrument - Mandolin","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Rare","reqAttune":"required by a Bard","description":["This thing does too much to put here... go read the 5etools entry."],"bonus":"","url":"https://5e.tools/items.html#instrument%20of%20the%20bards%2c%20canaith%20mandolin_dmg","owner":"Jaxx"},{"name":"Rod of the Pact Keeper","type":"","weaponCategory":"Rod","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Very Rare","reqAttune":"required by a Warlock","description":["While holding this rod, you gain a +3 bonus to spell attack rolls and to the saving throw DCs of your warlock spells.","In addition, you can regain one warlock spell slot as an action while holding the rod. You can\'t use this property again until you finish a long rest."],"bonus":"+3","url":"","owner":"Sylis"},{"name":"Ring of Spell Turning","type":"","weaponCategory":"Accessory - Ring","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Legendary","reqAttune":"required","description":["While wearing this ring, you have advantage on saving throws against any spell that targets only you (not in an area of effect). In addition, if you roll a 20 for the save and the spell is 7th level or lower, the spell has no effect on you and instead targets the caster, using the slot level, spell save DC, attack bonus, and spellcasting ability of the caster."],"bonus":"","url":"https://5e.tools/items.html#ring%20of%20spell%20turning_dmg","owner":"Sylis"},{"name":"Ring of The Ram","type":"","weaponCategory":"Accessory - Ring","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Rare","reqAttune":"required","description":["This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to attack one creature you can see within 60 feet of you. The ring produces a spectral ram\'s head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.","Alternatively, you can expend 1 to 3 of the ring\'s charges as an action to try to break an object you can see within 60 feet of you that isn\'t being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend."],"bonus":"","url":"https://5e.tools/items.html#ring%20of%20the%20ram_dmg","owner":""},{"name":"Ring of Invisibility","type":"","weaponCategory":"Accessory - Ring","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Legendary","reqAttune":"required","description":["While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until the ring is removed, until you attack or cast a spell, or until you use a bonus action to become visible again."],"bonus":"","url":"","owner":"Sig"},{"name":"Decanter of Endless Water","type":"","weaponCategory":"Wonderous Item","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Uncommon","reqAttune":"none","description":["Lengthy description... go read 5etools"],"bonus":"","url":"https://5e.tools/items.html#decanter%20of%20endless%20water_dmg","owner":"Cassandra"},{"name":"Oathbow","type":"","weaponCategory":"Ranged - Longbow","dmg1":"1d8","dmg2":"","dmgType":"Piercing","property":[""],"range":"150/600","rarity":"Very Rare","reqAttune":"required","description":["Lengthy description... go read 5etools"],"bonus":"","url":"https://5e.tools/items.html#oathbow_dmg","owner":"Twang"},{"name":"Cloak of The Bat","type":"","weaponCategory":"Accessory - Cloak","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Rare","reqAttune":"required","description":["While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak\'s edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.","While wearing the cloak in an area of dim light or darkness, you can use your action to cast polymorph on yourself, transforming into a bat. While you are in the form of the bat, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can\'t be used this way again until the next dawn."],"bonus":"","url":"https://5e.tools/items.html#cloak%20of%20the%20bat_dmg","owner":"Twang"},{"name":"Plate Armor of Etherealness","type":"","weaponCategory":"Armor - Plate","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Legendary","reqAttune":"required","description":["While you\'re wearing this armor, you can speak its command word as an action to gain the effect of the etherealness spell, which lasts for 10 minutes or until you remove the armor or use an action to speak the command word again. This property of the armor can\'t be used again until the next dawn.","The wearer has disadvantage on Stealth (Dexterity) checks. If the wearer has a Strength score lower than 15, their speed is reduced by 10 feet."],"bonus":"","url":"https://5e.tools/items.html#plate%20armor%20of%20etherealness_dmg","owner":"Cassandra"},{"name":"Dwarven Plate","type":"","weaponCategory":"Armor - Plate","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Very Rare","reqAttune":"none","description":["While wearing this armor, you gain a +2 bonus to AC. In addition, if an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 10 feet.","The wearer has disadvantage on Stealth (Dexterity) checks. If the wearer has a Strength score lower than 15, their speed is reduced by 10 feet."],"bonus":"","url":"https://5e.tools/items.html#dwarven%20plate_dmg","owner":"Ervy"},{"name":"Dragon Slayer","type":"","weaponCategory":"Martial - Longsword","dmg1":"1d8","dmg2":"1d10","dmgType":"Slashing","property":["Versatile"],"range":"Melee","rarity":"Rare","reqAttune":"none","description":["You gain a +1 bonus to attack and damage rolls made with this magic weapon.","When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage of the weapon\'s type. For the purpose of this weapon, \'dragon\' refers to any creature with the dragon type, including dragon turtles and wyverns."],"bonus":"+1","url":"","owner":"Ervy"},{"name":"Longsword +2","type":"","weaponCategory":"Martial - Longsword","dmg1":"1d8","dmg2":"1d10","dmgType":"Slashing","property":["Versatile"],"range":"Melee","rarity":"Unknown","reqAttune":"none","description":["You gain a +2 bonus to attacks and damage with this weapon."],"bonus":"+2","url":"","owner":""},{"name":"Longbow +2","type":"","weaponCategory":"Martial - Longbow","dmg1":"1d8","dmg2":"","dmgType":"Piercing","property":["Ranged,","Heavy,","Two-Handed"],"range":"150/600","rarity":"Unknown","reqAttune":"","description":["You gain a +2 bonus to attacks and damage with this weapon."],"bonus":"+2","url":"","owner":"Jaxx"},{"name":"Bag of Holding","type":"","weaponCategory":"Accessory - Bag","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Unknown","reqAttune":"none","description":["Basically... it carries lots of stuff."],"bonus":"","url":"https://5e.tools/items.html#bag%20of%20holding_dmg","owner":"Jaxx"},{"name":"Bag of Holding","type":"","weaponCategory":"Accessory - Bag","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Unknown","reqAttune":"none","description":["In Twang\'s case, it carries lots of drugs."],"bonus":"","url":"https://5e.tools/items.html#bag%20of%20holding_dmg","owner":"Twang"},{"name":"Dust of Sneezing and Choking","type":"","weaponCategory":"Potion","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Unknown","reqAttune":"none","description":[""],"bonus":"","url":"https://5e.tools/items.html#dust%20of%20sneezing%20and%20choking_dmg","owner":"Jaxx"},{"name":"Belt of Dwarvenkind","type":"","weaponCategory":"Accessory - Belt","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Rare","reqAttune":"required","description":["Your Constitution score increases by 2, to a maximum of 20.","You have advantage on Charisma (Persuasion) checks made to interact with dwarves.","In addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you\'re capable of growing one, or a visibly thicker beard if you already have one.","You have advantage on saving throws against poison, and you have resistance against poison damage.","You have darkvision out to a range of 60 feet.","You can speak, read, and write Dwarvish."],"bonus":"","url":"https://5e.tools/items.html#belt%20of%20dwarvenkind_dmg","owner":"Twang"},{"name":"Gauntlets of Ogre Power","type":"","weaponCategory":"Accessory - Gloves","dmg1":"","dmg2":"","dmgType":"","property":[""],"range":"","rarity":"Uncommon","reqAttune":"required","description":["Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them."],"bonus":"19 STR","url":"https://5e.tools/items.html#gauntlets%20of%20ogre%20power_dmg","owner":""}]')},"990d":function(e,t,a){e.exports=a.p+"img/Jaxx.b5e299a7.png"},c888:function(e,t,a){e.exports=a.p+"img/nope.75f36c96.jpg"}});
//# sourceMappingURL=app.7c3a82b7.js.map