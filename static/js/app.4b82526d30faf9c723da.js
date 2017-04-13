webpackJsonp([0],[,function(e,t,n){n(29);var r=n(0)(n(22),n(60),"data-v-27c33754",null);e.exports=r.exports},function(e,t,n){n(38);var r=n(0)(n(14),n(69),"data-v-940c8cfa",null);e.exports=r.exports},,,function(e,t,n){"use strict";var r=n(3),s=n(72),i=n(56),o=n.n(i);r.a.use(s.a),t.a=new s.a({routes:[{path:"/",name:"home",component:o.a}]})},function(e,t,n){"use strict";var r=n(3),s=n(74),i=n(41),o=n.n(i);r.a.use(s.a);var a=new s.a.Store({state:{projectTitle:"",username:"",shields:[],showcaseImages:[],projectDescription:"",dependencies:[],projectInstallation:"",projectHowToUse:"",examples:[],contributing:"",motivation:"",architecture:"",documentation:"",license:-1,contributors:[],showVueReadme:!1,finalMarkdown:""},actions:{},mutations:{UPDATE_PROJECT_TITLE:function(e,t){e.projectTitle=t},UPDATE_USERNAME:function(e,t){e.username=t},UPDATE_SHIELDS:function(e,t){e.shields.push({name:t.name,value:t.value,url:t.url,style:t.style,color:t.color})},UPDATE_PROJECT_DESCRIPTION:function(e,t){e.projectDescription=t},ADD_DEPENDENCY:function(e,t){e.dependencies.push(t.dependency)},DELETE_DEPENDENCY:function(e,t){e.dependencies.splice(t.index,1)},UPDATE_INSTALLATION:function(e,t){e.projectInstallation=t},UPDATE_HOW_TO_USE:function(e,t){e.projectHowToUse=t},UPDATE_LICENSE:function(e,t){e.license=t},UPDATE_CONTRIBUTORS:function(e){""!==e.username&&""!==e.projectTitle&&o()("https://api.github.com/repos/"+e.username+"/"+e.projectTitle+"/contributors",null,function(t,n){t||(e.contributors=n.data)})},UPDATE_SHOW_VUE_README:function(e,t){e.showVueReadme=t},ADD_SHOWCASE_IMAGE:function(e,t){e.showcaseImages.push(t)},DELETE_SHOWCASE_IMAGE:function(e,t){e.showcaseImages.push(t)},ADD_EXAMPLE:function(e,t){e.examples.push(t)},UPDATE_CONTRIBUTING:function(e,t){e.contributing=t},UPDATE_MOTIVATION:function(e,t){e.motivation=t},UPDATE_ARCHITECTURE:function(e,t){e.architecture=t},UPDATE_DOCUMENTATION:function(e,t){e.documentation=t},UPDATE_FINAL_MARKDOWN:function(e,t){e.finalMarkdown=t}},getters:{}});t.a=a},function(e,t,n){n(33);var r=n(0)(n(9),n(64),null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),s=n(7),i=n.n(s),o=n(5),a=n(6);n.d(t,"router",function(){return o.a}),n.d(t,"store",function(){return a.a}),n.d(t,"app",function(){return c}),r.a.config.productionTip=!1;var c=new r.a({el:"#app",router:o.a,store:a.a,template:"<App/>",components:{App:i.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(54),s=n.n(r);t.default={name:"app",components:{navbar:s.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"configurator-checkbox",props:{text:String,storeProperty:String,storeCommitEvent:String},computed:{checked:{get:function(){return this.$store.state[this.storeProperty]},set:function(e){this.$store.commit(this.storeCommitEvent,e)}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=n.n(r);t.default={name:"configurator-contact",components:{"vue-button":s.a},data:function(){return{shieldOptions:[{text:"Flat",value:0},{text:"Plastic",value:1},{text:"Flat-Squared",value:2},{text:"Social",value:3}]}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=n.n(r),i=n(2),o=n.n(i);t.default={name:"configurator-documentation",components:{"vue-r-button":s.a,"configurator-input":o.a},methods:{addDocumentationUrl:function(){this.$store.commit("",this.$refs.documentationUrlInput.storeValue)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),s=n.n(r),i=n(1),o=n.n(i);t.default={name:"",components:{"configurator-input":s.a,"vue-r-button":o.a},data:function(){return{nameError:!1,urlError:!1}},methods:{addExample:function(){var e=this.$refs.inputName.storeValue;if(void 0!==e&&""!==e){var t=this.$refs.inputUrl.storeValue;if(void 0!==t&&""!==t){var n={name:this.$refs.inputName.storeValue,url:this.$refs.inputUrl.storeValue};this.$store.commit("ADD_EXAMPLE",n),this.$refs.inputName.storeValue="",this.$refs.inputUrl.storeValue=""}}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"configurator-input",props:{title:String,placeholder:String,storeProperty:String,storeCommitEvent:String},data:function(){return{backupModel:""}},computed:{storeValue:{get:function(){return void 0!==this.storeProperty?this.$store.state[this.storeProperty]:this.backupModel},set:function(e){void 0!==this.storeCommitEvent?this.$store.commit(this.storeCommitEvent,e):this.backupModel=e}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=n.n(r);t.default={name:"home",components:{"vue-r-button":s.a},computed:{dependencies:function(){return this.$store.state.dependencies}},data:function(){return{dependencyName:"",dependencyVersion:""}},methods:{addDependency:function(){var e={name:this.dependencyName,version:this.dependencyVersion};this.$store.commit({type:"ADD_DEPENDENCY",dependency:e}),this.dependencyName="",this.dependencyVersion="",this.$refs.dependencyNameInput.focus()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=n.n(r);t.default={name:"configurator-shield",components:{"vue-button":s.a},data:function(){return{shieldName:"",shieldValue:"",shieldUrl:"",shieldColor:"",selectedShield:0,shieldOptions:[{text:"Flat",value:0},{text:"Plastic",value:1},{text:"Flat-Squared",value:2},{text:"Social",value:3}]}},methods:{addShield:function(){var e={name:this.shieldName,value:this.shieldValue,url:this.shieldUrl,style:this.selectedShield,color:this.shieldColor};this.$store.commit("UPDATE_SHIELDS",e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),s=n.n(r),i=n(1),o=n.n(i);t.default={name:"configurator-showcase",components:{"configurator-input":s.a,"vue-r-button":o.a},computed:{urls:function(){}},methods:{addShowcaseImage:function(){this.$store.commit("ADD_SHOWCASE_IMAGE",this.$refs.inputField.storeValue),this.$refs.inputField.storeValue=""}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"configurator-textarea",props:{title:String,placeholder:String,rows:Number,storeProperty:String,storeCommitEvent:String},computed:{projectDescription:{get:function(){return this.$store.state[this.storeProperty]},set:function(e){this.$store.commit(this.storeCommitEvent,e)}}},methods:{adjustHeight:function(e){var t=e.srcElement;t.style.height="1px";var n=parseInt(window.getComputedStyle(t)["line-height"],10);t.style.height=n+t.scrollHeight+"px"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",mounted:function(){function e(){[].forEach.call(document.getElementById("menu").querySelectorAll(".custom-can-transform"),function(e){e.classList.toggle("pure-menu-horizontal")})}function t(){r.classList.contains("open")?setTimeout(e,500):e(),r.classList.toggle("open"),document.getElementById("toggle").classList.toggle("x")}function n(){r.classList.contains("open")&&t()}var r=document.getElementById("menu"),s="onorientationchange"in window?"orientationchange":"resize";document.getElementById("toggle").addEventListener("click",function(e){t(),e.preventDefault()}),window.addEventListener(s,n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(42),s=n.n(r);t.default={name:"readme-preview",computed:{title:function(){return this.$store.state.projectTitle+' by <a href="https://github.com/'+this.$store.state.username+'">'+this.$store.state.username+"</a>"},shields:function(){if(0===this.$store.state.shields.length)return"";var e='<div style="text-align:center">';return this.$store.state.shields.forEach(function(t){var n=t.color.replace("#",""),r={0:"?style=flat",1:"?style=plastic",2:"?style=flat-square",3:"?style=social"},s="https://img.shields.io/badge/"+t.name+"-"+t.value+"-"+n+".svg"+r[t.style],i='<img src="'+s+'" alt="badge '+t.name+'" />';e+=""!==t.url?'<a href="'+t.url+'">'+i+"</a> ":i+" "}),e+"</div>"},showcase:function(){if(void 0===this.$store.state.showcaseImages||0===this.$store.state.showcaseImages.length)return"";var e='</br><div style="text-align:center">';return this.$store.state.showcaseImages.forEach(function(t){e+='<img src ="'+t+'" />'}),e+="</div>"},linkToVueReadme:function(){return this.$store.state.showVueReadme===!0?"## This readme is powered by vue-readme\nCheck out vue-readme [[Website](https://igeligel.github.io/vue-readme) | [GitHub](https://github.com/igeligel/vue-readme)]":""},description:function(){return this.$store.state.projectDescription.length>0?"## Description\n\n> "+this.$store.state.projectDescription:""},dependencies:function(){if(0===this.$store.state.dependencies.length)return"";var e="## Dependencies\n\n| Dependency | Version |\n| -- | -- |\n";return this.$store.state.dependencies.forEach(function(t){e+="| "+t.name+" | "+t.version+" |\n"}),e},installation:function(){return this.$store.state.projectInstallation.length>0?"## Installation\n\n"+this.$store.state.projectInstallation:""},howToUse:function(){return this.$store.state.projectHowToUse.length>0?"## How To Use\n\n"+this.$store.state.projectHowToUse:""},createLicenseText:function(){if(void 0===this.$store.state.projectTitle||""===this.$store.state.projectTitle)return"";if(this.$store.state.license===-1)return"";var e={0:"MIT",1:"BSD",2:"GPL"};return"\n## License\n\n*"+this.$store.state.projectTitle+"* is realeased under the "+e[this.$store.state.license]+" License."},createContributorHtml:function(){if(this.$store.state.contributors.length===-1||this.$store.state.loadContributors===!1)return"";if(0===this.$store.state.contributors.length)return"";var e=this.$store.state.contributors,t=[];e.forEach(function(e){t.push('<a href="'+e.html_url+'"><img src="'+e.avatar_url+'" width="100px;" style="max-width:100%;"><br><sub>'+e.login+"</sub></a><br><p>Contributions: "+e.contributions+"</p>")});for(var n=0,r="<h2>Contributors</h2>\n\n<table>",s=0;s<t.length;s+=1)0===n&&s%6==0&&(r+="<thead>"),1===n&&s%6==0&&(r+="<tbody>"),s%6==0&&(r+="<tr>"),r+=0===n?'<th align="center">'+t[s]+"</th>":'<td align="center">'+t[s]+"</td>",s%6==6&&(r+="</tr>",n+=1),0===n&&s%6==5&&(r+="<thead>");return r+="</tbody></table>",console.log(r),r},finalMarkdown:function(){var e="# "+this.title+"\n\n"+this.shields+"\n\n"+this.showcase+"\n\n"+this.description+"\n\n"+this.dependencies+"\n\n"+this.installation+"\n\n"+this.howToUse+"\n\n"+this.createLicenseText+"\n\n"+this.createContributorHtml+"\n\n"+this.linkToVueReadme+"\n";return this.$store.commit("UPDATE_FINAL_MARKDOWN",e),e},finalHtml:function(){return s()(this.finalMarkdown)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-r-button",props:{label:String,onClick:Function},methods:{defaultOnClick:function(e){void 0!==this.onClick&&this.onClick(e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),s=n.n(r),i=n(52),o=n.n(i),a=n(45),c=n.n(a),l=n(49),u=n.n(l),d=n(50),p=n.n(d),v=n(51),m=n.n(v),h=n(48),f=n.n(h),_=n(47),g=n.n(_),C=n(46),E=n.n(C),b=n(55),x=n.n(b),y=n(1),P=n.n(y),T=n(53),w=n.n(T);t.default={name:"home",components:{"configurator-input":s.a,"configurator-textarea":o.a,"configurator-checkbox":c.a,"configurator-list-add":u.a,"configurator-shield":p.a,"configurator-showcase":m.a,"configurator-examples":f.a,"configurator-documentation":g.a,"configurator-contact":E.a,"readme-preview":x.a,"vue-r-button":P.a,Modal:w.a},data:function(){return{showModal:!1,dependencyName:"",dependencyVersion:""}},computed:{license:{get:function(){return this.$store.state.license},set:function(e){this.$store.commit("UPDATE_LICENSE",e)}}},methods:{showModalFct:function(){this.showModal=!0},loadContributors:function(){this.$store.commit("UPDATE_CONTRIBUTORS")},adjustHeight:function(e){var t=e.srcElement;t.style.height="1px";var n=parseInt(window.getComputedStyle(t)["line-height"],10);t.style.height=n+t.scrollHeight+"px"}}}},,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,function(e,t,n){n(28);var r=n(0)(n(10),n(59),"data-v-2438111a",null);e.exports=r.exports},function(e,t,n){n(36);var r=n(0)(n(11),n(67),"data-v-7212e699",null);e.exports=r.exports},function(e,t,n){n(37);var r=n(0)(n(12),n(68),"data-v-7b6b9b73",null);e.exports=r.exports},function(e,t,n){n(40);var r=n(0)(n(13),n(71),"data-v-fb0b42c0",null);e.exports=r.exports},function(e,t,n){n(32);var r=n(0)(n(15),n(63),"data-v-3dc6ac1c",null);e.exports=r.exports},function(e,t,n){n(30);var r=n(0)(n(16),n(61),null,null);e.exports=r.exports},function(e,t,n){n(35);var r=n(0)(n(17),n(66),null,null);e.exports=r.exports},function(e,t,n){n(26);var r=n(0)(n(18),n(57),"data-v-0f981911",null);e.exports=r.exports},function(e,t,n){n(39);var r=n(0)(n(19),n(70),"data-v-a8cc98ca",null);e.exports=r.exports},function(e,t,n){n(27);var r=n(0)(n(20),n(58),"data-v-13bbbc92",null);e.exports=r.exports},function(e,t,n){n(31);var r=n(0)(n(21),n(62),null,null);e.exports=r.exports},function(e,t,n){n(34);var r=n(0)(n(23),n(65),"data-v-50e9da47",null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[void 0!==e.title&&e.title.length>0?n("h2",{domProps:{textContent:e._s(e.title)}}):e._e(),e._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.projectDescription,expression:"projectDescription"}],attrs:{placeholder:e.placeholder,rows:e.rows},domProps:{value:e.projectDescription},on:{keydown:e.adjustHeight,keyup:e.adjustHeight,input:function(t){t.target.composing||(e.projectDescription=t.target.value)}}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-wrapper pure-g",attrs:{id:"menu"}},[n("div",{staticClass:"pure-u-1 pure-u-md-1-3"},[n("div",{staticClass:"pure-menu"},[n("a",{staticClass:"pure-menu-heading custom-brand",attrs:{href:"#"}},[e._v("vue-readme")]),e._v(" "),n("a",{staticClass:"custom-toggle",attrs:{href:"#",id:"toggle"}},[n("s",{staticClass:"bar"}),n("s",{staticClass:"bar"})])])]),e._v(" "),n("div",{staticClass:"pure-u-1 pure-u-md-1-3"}),e._v(" "),n("div",{staticClass:"pure-u-1 pure-u-md-1-3"},[n("div",{staticClass:"pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform"},[n("ul",{staticClass:"pure-menu-list"},[n("li",{staticClass:"pure-menu-item"},[n("a",{staticClass:"pure-menu-link",attrs:{href:"#"}},[e._v("Home")])]),e._v(" "),n("li",{staticClass:"pure-menu-item"},[n("a",{staticClass:"pure-menu-link",attrs:{href:"#"}},[e._v("About")])]),e._v(" "),n("li",{staticClass:"pure-menu-item"},[n("a",{staticClass:"pure-menu-link",attrs:{href:"#"}},[e._v("Contact")])])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input__checkbox__container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",value:"None",id:"squaredThree",name:"check"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"None")>-1:e.checked},on:{__c:function(t){var n=e.checked,r=t.target,s=!!r.checked;if(Array.isArray(n)){var i=e._i(n,"None");s?i<0&&(e.checked=n.concat("None")):i>-1&&(e.checked=n.slice(0,i).concat(n.slice(i+1)))}else e.checked=s}}}),e._v(" "),n("label",{attrs:{for:"squaredThree"}}),e._v(" "),n("div",{staticStyle:{display:"inline-block"}},[n("span",{staticStyle:{"font-weight":"300","padding-left":"14px","line-height":"26px"},domProps:{textContent:e._s(e.text)}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{domProps:{textContent:e._s(e.label)},on:{click:e.defaultOnClick}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Badges")]),e._v(" "),n("div",{staticClass:"pure-g"},[n("div",{staticClass:"pure-u-1-2 grid__padding--right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.shieldName,expression:"shieldName"}],staticClass:"configurator__input",attrs:{spellcheck:"false",placeholder:"Name"},domProps:{value:e.shieldName},on:{input:function(t){t.target.composing||(e.shieldName=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"pure-u-1-2 grid__padding--left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.shieldValue,expression:"shieldValue"}],staticClass:"configurator__input",attrs:{spellcheck:"false",placeholder:"Value"},domProps:{value:e.shieldValue},on:{input:function(t){t.target.composing||(e.shieldValue=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"pure-g"},[n("div",{staticClass:"pure-u-1-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.shieldUrl,expression:"shieldUrl"}],staticClass:"configurator__input",attrs:{spellcheck:"false",placeholder:"Url"},domProps:{value:e.shieldUrl},on:{input:function(t){t.target.composing||(e.shieldUrl=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"pure-g"},[n("div",{staticClass:"pure-u-1-3 grid__padding--right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.shieldColor,expression:"shieldColor"}],staticClass:"configurator__input",attrs:{spellcheck:"false",placeholder:"Color"},domProps:{value:e.shieldColor},on:{input:function(t){t.target.composing||(e.shieldColor=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"pure-u-1-2 grid__padding--left--right"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedShield,expression:"selectedShield"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedShield=t.target.multiple?n:n[0]}}},e._l(e.shieldOptions,function(t){return n("option",{domProps:{value:t.value,textContent:e._s(t.text)}})}))]),e._v(" "),n("div",{staticClass:"pure-u-1-6 grid__padding--left"},[n("vue-button",{attrs:{label:"Add",onClick:e.addShield}})],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-container"},[n("div",{domProps:{innerHTML:e._s(e.finalHtml)}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h2",[e._v("Dependencies")]),e._v(" "),n("div",{staticClass:"dependency-shields-container"},[e._l(e.dependencies,function(t){return[n("div",{staticClass:"pure-g dependency-list-container"},[n("div",{staticClass:"pure-u-1-8 delete-button"},[e._v("X")]),e._v(" "),n("div",{staticClass:"pure-u-7-12 dependency-list-container__name",domProps:{textContent:e._s(t.name)}}),e._v(" "),n("div",{staticClass:"pure-u-7-24 dependency-list-container__version",domProps:{textContent:e._s(t.version)}})])]}),e._v(" "),0!==e.dependencies.length?n("div",{staticClass:"divider"}):e._e()],2),e._v(" "),n("div",{staticClass:"dependency-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.dependencyName,expression:"dependencyName"}],ref:"dependencyNameInput",staticClass:"dependency-name",attrs:{spellcheck:"false",placeholder:"Name"},domProps:{value:e.dependencyName},on:{input:function(t){t.target.composing||(e.dependencyName=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.dependencyVersion,expression:"dependencyVersion"}],staticClass:"dependency-version",attrs:{spellcheck:"false",placeholder:"Version"},domProps:{value:e.dependencyVersion},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.addDependency(t)},input:function(t){t.target.composing||(e.dependencyVersion=t.target.value)}}})]),e._v(" "),n("div",[n("vue-r-button",{attrs:{label:"Add Dependency",onClick:e.addDependency}})],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pure-g"},[e.showModal?n("modal",{on:{close:function(t){e.showModal=!1}}},[n("h3",{slot:"header"},[e._v("Readme Markdown")]),e._v(" "),n("div",{slot:"body"},[n("textarea",{staticStyle:{height:"80vh",width:"100%"}},[e._v(e._s(this.$store.state.finalMarkdown))])]),e._v(" "),n("div",{slot:"footer"},[n("button",[e._v("\n        Download\n      ")])])]):e._e(),e._v(" "),n("div",{staticClass:"pure-u-1 pure-u-md-1-5 panel menu-panel",staticStyle:{"margin-top":"40px"}},[n("div",{staticStyle:{"padding-left":"20px","padding-right":"20px"}},[n("vue-r-button",{attrs:{label:"Create README.md",onClick:e.showModalFct}})],1),e._v(" "),e._m(0)]),e._v(" "),n("div",{staticClass:"pure-u-1 pure-u-md-3-5 panel readme-panel"},[n("readme-preview")],1),e._v(" "),n("div",{staticClass:"pure-u-1 pure-u-md-1-5 panel settings-panel",staticStyle:{"margin-top":"40px"}},[n("div",{staticStyle:{"padding-left":"15px","padding-right":"15px"}},[n("div",{staticClass:"configuration-panel"},[n("h2",[e._v("General Information")]),e._v(" "),n("div",{staticClass:"pure-g"},[n("div",{staticClass:"pure-u-1-2",staticStyle:{"box-sizing":"border-box","padding-right":"2px"}},[n("configurator-input",{attrs:{placeholder:"Project Title",storeProperty:"projectTitle",storeCommitEvent:"UPDATE_PROJECT_TITLE"}})],1),e._v(" "),n("div",{staticClass:"pure-u-1-2",staticStyle:{"box-sizing":"border-box","padding-left":"2px"}},[n("configurator-input",{attrs:{placeholder:"Username",storeProperty:"username",storeCommitEvent:"UPDATE_USERNAME"}})],1)]),e._v(" "),n("configurator-shield"),e._v(" "),n("configurator-showcase"),e._v(" "),n("configurator-textarea",{attrs:{title:"Description",placeholder:"Describe your project",rows:2,storeProperty:"projectDescription",storeCommitEvent:"UPDATE_PROJECT_DESCRIPTION"}}),e._v(" "),n("configurator-list-add"),e._v(" "),n("configurator-textarea",{attrs:{title:"Installation",placeholder:"Provide Installation instructions",rows:2,storeProperty:"projectInstallation",storeCommitEvent:"UPDATE_INSTALLATION"}}),e._v(" "),n("configurator-textarea",{attrs:{title:"How To Use",placeholder:"Describe on how to use the project",rows:2,storeProperty:"projectHowToUse",storeCommitEvent:"UPDATE_HOW_TO_USE"}}),e._v(" "),n("configurator-examples"),e._v(" "),n("div",[n("configurator-textarea",{attrs:{title:"Contributing",placeholder:"Describe how people can contribute",rows:2,storeProperty:"contributing",storeCommitEvent:"UPDATE_CONTRIBUTING"}})],1),e._v(" "),n("div",[n("h2",[e._v("Resources")]),e._v(" "),n("h3",[e._v("Motivation")]),e._v(" "),n("configurator-textarea",{attrs:{placeholder:"Describe what you motivated to start the project",rows:2,storeProperty:"motivation",storeCommitEvent:"UPDATE_MOTIVATION"}}),e._v(" "),n("h3",[e._v("Architecture")]),e._v(" "),n("configurator-textarea",{attrs:{placeholder:"Give a summary of the architecture of your project",rows:2,storeProperty:"architecture",storeCommitEvent:"UPDATE_ARCHITECTURE"}}),e._v(" "),n("configurator-documentation")],1),e._v(" "),n("configurator-contact"),e._v(" "),n("div",[n("h2",[e._v("License")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.license,expression:"license"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.license=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"0"}},[e._v("MIT")]),e._v(" "),n("option",{attrs:{value:"1"}},[e._v("BSD")]),e._v(" "),n("option",{attrs:{value:"2"}},[e._v("GPL")])])]),e._v(" "),n("div",[n("vue-r-button",{attrs:{label:"Load Contributors",onClick:e.loadContributors}}),e._v(" "),n("div",{staticStyle:{"margin-top":"15px"}},[n("configurator-checkbox",{attrs:{text:"Link to this Project",storeProperty:"showVueReadme",storeCommitEvent:"UPDATE_SHOW_VUE_README"}})],1)],1)],1)])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"menu-item"},[n("span",{staticClass:"menu-item-icon"},[e._v("X")]),e._v("Editor")]),e._v(" "),n("div",{staticClass:"menu-item menu-item--active"},[n("span",{staticClass:"menu-item-icon"},[e._v("X")]),e._v("Repositories"),n("span",{staticClass:"menu-item-icon--right"},[e._v("▼")]),e._v(" "),n("div",{staticClass:"menu-item-sublist"},[n("div",[n("span",{staticClass:"submenu-item-icon"},[e._v("►")]),e._v("igeligel/vue-readme")]),e._v(" "),n("div",[n("span",{staticClass:"submenu-item-icon"},[e._v("►")]),e._v("vuejs/vue")])])]),e._v(" "),n("div",{staticClass:"menu-item"},[n("span",{staticClass:"menu-item-icon"},[e._v("X")]),e._v("Import")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Showcase")]),e._v(" "),n("div",{staticClass:"pure-g"},[e._l(this.$store.state.showcaseImages,function(t){return[n("div",{staticClass:"pure-u-1-8",staticStyle:{"text-align":"center"}},[n("span",[e._v("X")])]),e._v(" "),n("div",{staticClass:"pure-u-7-8 truncate-overflow",staticStyle:{"box-sizing":"border-box"}},[n("span",{domProps:{textContent:e._s(t)}})])]})],2),e._v(" "),n("div",{staticClass:"pure-g"},[n("div",{staticClass:"pure-u-5-6 grid__padding--right"},[n("configurator-input",{ref:"inputField",attrs:{placeholder:"Add Image Url"}})],1),e._v(" "),n("div",{staticClass:"pure-u-1-6 grid__padding--left"},[n("vue-r-button",{attrs:{label:"Add",onClick:e.addShowcaseImage}})],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Badges")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"pure-g"},[e._m(1),e._v(" "),n("div",{staticClass:"pure-u-1-2 grid__padding--left--right"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedShield,expression:"selectedShield"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedShield=t.target.multiple?n:n[0]}}},e._l(e.shieldOptions,function(t){return n("option",{domProps:{value:t.value,textContent:e._s(t.text)}})}))]),e._v(" "),n("div",{staticClass:"pure-u-1-6 grid__padding--left"},[n("vue-button",{attrs:{label:"Add"}})],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pure-g"},[n("div",{staticClass:"pure-u-1-2 grid__padding--right"},[n("input",{staticClass:"configurator__input",attrs:{spellcheck:"false",placeholder:"Platform"}})]),e._v(" "),n("div",{staticClass:"pure-u-1-2 grid__padding--left"},[n("input",{staticClass:"configurator__input",attrs:{spellcheck:"false",placeholder:"Url"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pure-u-1-3 grid__padding--right"},[n("input",{staticClass:"configurator__input",attrs:{spellcheck:"false",placeholder:"Color"}})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Documentation")]),e._v(" "),n("div",{staticClass:"pure-g"},[n("div",{staticClass:"pure-u-5-6 grid__padding--right"},[n("configurator-input",{ref:"documentationUrlInput",attrs:{placeholder:"Documentation Url"}})],1),e._v(" "),n("div",{staticClass:"pure-u-1-6 grid__padding--left"},[n("vue-r-button",{attrs:{label:"Add",onClick:e.addDocumentationUrl}})],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[void 0!==e.title&&0!==e.title.length?n("h2",{domProps:{textContent:e._s(e.title)}}):e._e(),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.storeValue,expression:"storeValue"}],staticClass:"configurator__input",attrs:{spellcheck:"false",placeholder:e.placeholder},domProps:{value:e.storeValue},on:{input:function(t){t.target.composing||(e.storeValue=t.target.value)}}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[e._t("header",[e._v("\n            default header\n          ")])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("body",[e._v("\n            default body\n          ")])],2),e._v(" "),n("div",{staticClass:"modal-footer"},[e._t("footer",[e._v("\n            default footer\n          ")]),e._v(" "),n("button",{staticClass:"modal-default-button",on:{click:function(t){e.$emit("close")}}},[e._v("\n              OK\n            ")])],2)])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Examples")]),e._v(" "),n("div",{staticClass:"pure-g"},[e._l(this.$store.state.examples,function(t){return[n("div",{staticClass:"pure-u-1-8",staticStyle:{"text-align":"center"}},[n("span",[e._v("X")])]),e._v(" "),n("div",{staticClass:"pure-u-7-8 truncate-overflow",staticStyle:{"box-sizing":"border-box"}},[n("a",{attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[n("span",{domProps:{textContent:e._s(t.name)}})])])]})],2),e._v(" "),n("div",{staticClass:"pure-g"},[n("div",{staticClass:"pure-u-3-8 grid__padding--right"},[n("configurator-input",{ref:"inputName",attrs:{placeholder:"Name"}})],1),e._v(" "),n("div",{staticClass:"pure-u-5-8 grid__padding--left"},[n("configurator-input",{ref:"inputUrl",attrs:{placeholder:"Url"}})],1),e._v(" "),n("vue-r-button",{attrs:{label:"Add Example",onClick:e.addExample}})],1)])},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.4b82526d30faf9c723da.js.map