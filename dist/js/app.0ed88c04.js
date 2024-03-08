(function(){"use strict";var A={328:function(A,e,i){var a=i(963),n=i(252);function t(A,e){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}var o=i(744);const s={},r=(0,o.Z)(s,[["render",t]]);var l=r,M=i(201),d=i.p+"img/logo_pointfinder.e228cfbb.png";const g=(0,n._)("div",{class:"title-container"},[(0,n._)("h1",null,"Welcome on PointFinder !"),(0,n._)("h4",null,"Please Login or subscribe to access the application")],-1),c={class:"tabs-container"},m={key:0},I=(0,n._)("button",{type:"submit",class:"sign-button"},"Sign-in",-1),u={key:1},y={class:"form-group"},p={class:"form-group"},h={class:"form-group"},E={class:"form-group"},w=(0,n._)("button",{type:"submit",class:"sign-button"},"Sign-up",-1),C={class:"modal"},B=(0,n._)("h2",null,"Reset Password",-1),Q=(0,n._)("button",{type:"submit"},"Send Reset Link",-1);function Y(A,e,i,t,o,s){const r=(0,n.up)("tabs");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[(0,n._)("img",{class:"logo",src:d,onClick:e[0]||(e[0]=(...A)=>s.redirectHomePage&&s.redirectHomePage(...A))}),g,(0,n._)("div",c,[(0,n.Wm)(r,{tabs:o.tabs,onTabChanged:s.updateActiveTab},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.tabs,((A,i)=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{key:i},[0===i?((0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("form",{onSubmit:e[4]||(e[4]=(0,a.iM)(((...A)=>s.signin&&s.signin(...A)),["prevent"]))},[(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[1]||(e[1]=A=>o.login=A),type:"text",placeholder:"Login",required:""},null,512),[[a.nr,o.login]]),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[2]||(e[2]=A=>o.password=A),type:"password",placeholder:"Password",required:""},null,512),[[a.nr,o.password]]),(0,n._)("div",null,[(0,n._)("a",{href:"#",class:"forgot-password",onClick:e[3]||(e[3]=A=>o.showResetPasswordModal=!0)},"Forgot password?")]),I])],32)])):(0,n.kq)("",!0),1===i?((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("form",{onSubmit:e[9]||(e[9]=(0,a.iM)(((...A)=>s.signup&&s.signup(...A)),["prevent"]))},[(0,n._)("div",y,[(0,n.wy)((0,n._)("input",{id:"login","onUpdate:modelValue":e[5]||(e[5]=A=>o.login=A),type:"text",placeholder:"Login",required:""},null,512),[[a.nr,o.login]])]),(0,n._)("div",p,[(0,n.wy)((0,n._)("input",{id:"mail","onUpdate:modelValue":e[6]||(e[6]=A=>o.mail=A),type:"mail",placeholder:"E-mail",required:""},null,512),[[a.nr,o.mail]])]),(0,n._)("div",h,[(0,n.wy)((0,n._)("input",{id:"password","onUpdate:modelValue":e[7]||(e[7]=A=>o.password=A),type:"password",placeholder:"Password",required:""},null,512),[[a.nr,o.password]])]),(0,n._)("div",E,[(0,n.wy)((0,n._)("input",{id:"confirmpassword","onUpdate:modelValue":e[8]||(e[8]=A=>o.confirmpassword=A),type:"password",placeholder:"Confirm your password",required:""},null,512),[[a.nr,o.confirmpassword]])]),w],32)])):(0,n.kq)("",!0)])),[[a.F8,o.activeTab===i]]))),128))])),_:1},8,["tabs","onTabChanged"])])]),o.showResetPasswordModal?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal-overlay",onClick:e[12]||(e[12]=(0,a.iM)((A=>o.showResetPasswordModal=!1),["self"]))},[(0,n._)("div",C,[B,(0,n._)("form",{onSubmit:e[11]||(e[11]=(0,a.iM)(((...A)=>s.resetPassword&&s.resetPassword(...A)),["prevent"]))},[(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":e[10]||(e[10]=e=>A.resetEmail=e),placeholder:"Enter your email",required:""},null,512),[[a.nr,A.resetEmail]]),Q],32)])])):(0,n.kq)("",!0)],64)}var v=i(577);const f={class:"tabs"},J=["onClick"],D={class:"tab-content"};function T(A,e,i,t,o,s){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.tabs,((A,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,onClick:A=>s.selectTab(e),class:(0,v.C_)({active:o.activeTab===e})},(0,v.zw)(A.label),11,J)))),128))]),(0,n._)("div",D,[(0,n.wy)((0,n._)("div",null,[(0,n.WI)(A.$slots,"default",{activeTab:o.activeTab},void 0,!0)],512),[[a.F8,i.tabs[o.activeTab]]])])])}var j={data(){return{activeTab:0}},props:{tabs:{type:Array,required:!0}},methods:{selectTab(A){this.activeTab=A,this.$emit("tab-changed",A)}}};const b=(0,o.Z)(j,[["render",T],["__scopeId","data-v-1dd013b3"]]);var k=b,z={components:{Tabs:k},data(){return{tabs:[{label:"Sign-in"},{label:"Sign-up"}],activeTab:0,login:"",password:"",mail:"",confirmpassword:"",showResetPasswordModal:!1}},methods:{redirectHomePage(){this.$router.push({path:"/"})},updateActiveTab(A){this.activeTab=A},async signup(){if(this.password===this.confirmpassword)try{const A=await fetch("https://pointfinder.alwaysdata.net/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:this.login,password:this.password,mail:this.mail})});200===A.status?(console.log("Inscription réussie"),this.sessionStorageCredentials()):console.error("Erreur d'inscription")}catch(A){console.error("Erreur:",A)}else console.log("Les mots de passe ne correspondent pas")},async signin(){try{const A=await fetch("https://pointfinder.alwaysdata.net/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:this.login,password:this.password})});200===A.status?(console.log("Connexion réussie:"),this.sessionStorageCredentials()):console.error("Erreur de connexion:")}catch(A){console.error("Erreur:",A)}},resetPassword(){},async sessionStorageCredentials(){try{const A=await fetch("https://pointfinder.alwaysdata.net/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:this.login})});if(200===A.status){const e=await A.json();sessionStorage.setItem("user",JSON.stringify({username:e.login,mail:e.mail})),console.log(e.login),console.log(e.mail),this.$router.push({path:"/map"})}else console.error("Erreur de réponse du serveur:",A.status)}catch(A){console.error("Erreur:",A)}}}};const _=(0,o.Z)(z,[["render",Y]]);var P=_,S={class:"grid-container"},G={class:"grid-item-banniere"},U={class:"grid-item",id:"description"},O={class:"grid-item",id:"tutoriel"},H={class:"grid-item",id:"equipe"},x={class:"grid-item",id:"contact"};function Z(A,e,i,a,t,o){var s=(0,n.up)("Bandeau"),r=(0,n.up)("Banniere"),l=(0,n.up)("Description"),M=(0,n.up)("Tutoriel"),d=(0,n.up)("Team"),g=(0,n.up)("Contact");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s),(0,n._)("div",S,[(0,n._)("div",G,[(0,n.Wm)(r)]),(0,n._)("div",U,[(0,n.Wm)(l)]),(0,n._)("div",O,[(0,n.Wm)(M)]),(0,n._)("div",H,[(0,n.Wm)(d)]),(0,n._)("div",x,[(0,n.Wm)(g)])])],64)}var F=i.p+"img/icon_pointfinder2.d835c8b8.png";const N=(0,n.uE)('<div class="header-section section-1"><img src="'+F+'" alt="Logo" class="image-modifiee"></div><div class="header-section section-2"><a href="#description">Project</a><a href="#tutoriel">Tutorial</a><a href="#equipe">About Us</a><a href="#contact">Contact</a></div>',2),q={class:"header-section section-3"};function R(A,e,i,a,t,o){return(0,n.wg)(),(0,n.iD)("header",{ref:"header",class:(0,v.C_)(["header",{"gray-header":t.isScrolled}])},[N,(0,n._)("div",q,[(0,n._)("button",{class:"access-button",onClick:e[0]||(e[0]=(...A)=>o.redirect&&o.redirect(...A))},"Access to the Application")])],2)}var K={data(){return{isScrolled:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.isScrolled=window.scrollY>700},redirect(){this.$router.push({path:"/sign"})}}};const V=(0,o.Z)(K,[["render",R]]);var L=V,X=i.p+"img/image.058569c5.jpeg";const W=A=>((0,n.dD)("data-v-5946483c"),A=A(),(0,n.Cn)(),A),$={class:"outer-grid"},AA=W((()=>(0,n._)("div",{class:"inner-grid text"},[(0,n._)("h1",null,"PointFinder"),(0,n._)("h3",null,"Mapping Moments, Finding memories"),(0,n._)("p",null,[(0,n.Uk)(" Our web and mobile solution allows you to display key locations around you. "),(0,n._)("br"),(0,n._)("br"),(0,n._)("br"),(0,n.Uk)(" Easy to use, PointFinder offers you a personalized map ideal for helping you discover the city of your choice. ")])],-1))),eA=W((()=>(0,n._)("div",{class:"inner-grid"},[(0,n._)("img",{src:X,alt:"Capture de l'application",class:"image_temporaire"})],-1))),iA=[AA,eA];function aA(A,e){return(0,n.wg)(),(0,n.iD)("div",$,iA)}const nA={},tA=(0,o.Z)(nA,[["render",aA],["__scopeId","data-v-5946483c"]]);var oA=tA,sA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5kAAAK1CAYAAABCTyrfAAAACXBIWXMAAC4jAAAuIwF4pT92AAAPyElEQVR4nO3XQQ3CAAAEwYMgBGk4QRs2+kIKItikSTOjYL97O47jue05AAAA+NNj22vb++QOAAAALuB+dgAAAADXYTIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMg8tn23fU7uAAAA4AJ+gGYKvKjQxxgAAAAASUVORK5CYII=",rA=i.p+"img/texture.ad35cdd0.png",lA=i.p+"img/logo_slog2.774d550e.svg";const MA=A=>((0,n.dD)("data-v-c9fa5e98"),A=A(),(0,n.Cn)(),A),dA={class:"image-container"},gA=MA((()=>(0,n._)("img",{src:sA,alt:"Fond",class:"fond"},null,-1))),cA=MA((()=>(0,n._)("img",{src:rA,alt:"Texture",class:"texture"},null,-1))),mA=MA((()=>(0,n._)("img",{src:lA,alt:"Logo et Slogan",class:"texte"},null,-1))),IA=[gA,cA,mA];function uA(A,e){return(0,n.wg)(),(0,n.iD)("div",dA,IA)}const yA={},pA=(0,o.Z)(yA,[["render",uA],["__scopeId","data-v-c9fa5e98"]]);var hA=pA;const EA=A=>((0,n.dD)("data-v-426e9fce"),A=A(),(0,n.Cn)(),A),wA={class:"outer-grid"},CA=EA((()=>(0,n._)("div",{class:"inner-grid"},[(0,n._)("img",{src:X,alt:"Capture de l'application",class:"image_temporaire"})],-1))),BA=EA((()=>(0,n._)("div",{class:"inner-grid text"},[(0,n._)("h1",null,"Do you have some problem?"),(0,n._)("p",null,[(0,n.Uk)(" Carefree! We have the solution! "),(0,n._)("br"),(0,n._)("br"),(0,n.Uk)(" Just watch our explanatory video! "),(0,n._)("br"),(0,n._)("br"),(0,n._)("br"),(0,n.Uk)(" Afterwards, our application will no longer have any secrets for you! ")])],-1))),QA=[CA,BA];function YA(A,e){return(0,n.wg)(),(0,n.iD)("div",wA,QA)}const vA={},fA=(0,o.Z)(vA,[["render",YA],["__scopeId","data-v-426e9fce"]]);var JA=fA,DA=i.p+"img/marion.fdc63346.png",TA=i.p+"img/romain.cc779855.png",jA=i.p+"img/terence.ead0c113.png",bA=i.p+"img/delpin.4de6b10f.png";const kA=(0,n.uE)('<h1>Team</h1><div class="image-grid"><div class="image-item"><img src="'+DA+'" alt="Photo de Marion" class="photo_equipe"><h2> Marion DEFFEE</h2><p>Product Owner</p></div><div class="image-item"><img src="'+TA+'" alt="Photo de Romain" class="photo_equipe"><h2>Romain TAMIN</h2><p>Back-End Developer</p></div><div class="image-item"><img src="'+jA+'" alt="Photo de Térence" class="photo_equipe"><h2> Térence ROUSIC </h2><p>Front-end Web Developer</p></div><div class="image-item"><img src="'+bA+'" alt="Photo de Delphine" class="photo_equipe"><h2> Delphine ALLANO </h2><p> Front-end Mobile Developer</p></div></div>',2),zA=[kA];function _A(A,e){return(0,n.wg)(),(0,n.iD)("div",null,zA)}const PA={},SA=(0,o.Z)(PA,[["render",_A]]);var GA=SA,UA=i.p+"img/mail.4eea768b.png",OA=i.p+"img/telephone.fc00c127.png";const HA=A=>((0,n.dD)("data-v-362f388f"),A=A(),(0,n.Cn)(),A),xA={class:"outer-grid"},ZA=(0,n.uE)('<div class="inner-grid content" data-v-362f388f><div class="grid-item1" data-v-362f388f><h1 data-v-362f388f>Contactez-nous</h1></div><div class="grid-item2" data-v-362f388f><div class="sub-grid" data-v-362f388f><div class="image-container" data-v-362f388f><img src="'+UA+'" alt="Logo Mail" class="logo-mail" data-v-362f388f></div></div><div class="sub-grid" data-v-362f388f><p data-v-362f388f>Courriel : pointfinder.projet@gmail.com</p></div></div><div class="grid-item2" data-v-362f388f><div class="sub-grid" data-v-362f388f><div class="image-container" data-v-362f388f><img src="'+OA+'" alt="Logo Mail" class="logo-telephone" data-v-362f388f></div></div><div class="sub-grid" data-v-362f388f><p data-v-362f388f>Téléphone : 06 46 74 73 59</p></div></div><div class="grid-item1" data-v-362f388f><p data-v-362f388f>Based in Brest (29), our goal is to meet your needs.</p></div></div>',1),FA={class:"inner-grid formuls"},NA=HA((()=>(0,n._)("label",{for:"name"},"First name: *",-1))),qA=HA((()=>(0,n._)("label",{for:"prenom"},"Last Name: *",-1))),RA=HA((()=>(0,n._)("label",{for:"email"},"Email: *",-1))),KA=HA((()=>(0,n._)("label",{for:"numero"},"Phone number:",-1))),VA=HA((()=>(0,n._)("label",{for:"Sujet"},"Subject: *",-1))),LA=HA((()=>(0,n._)("label",{for:"message"},"Message: *",-1))),XA=HA((()=>(0,n._)("button",{class:"button-form-contact",type:"submit"},"SEND",-1))),WA={key:0};function $A(A,e,i,t,o,s){return(0,n.wg)(),(0,n.iD)("div",xA,[ZA,(0,n._)("div",FA,[(0,n._)("form",{onSubmit:e[6]||(e[6]=(0,a.iM)(((...A)=>s.submitForm&&s.submitForm(...A)),["prevent"]))},[NA,(0,n.wy)((0,n._)("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=A=>o.first_name=A),required:""},null,512),[[a.nr,o.first_name]]),qA,(0,n.wy)((0,n._)("input",{type:"text",id:"prenom","onUpdate:modelValue":e[1]||(e[1]=A=>o.last_name=A),required:""},null,512),[[a.nr,o.last_name]]),RA,(0,n.wy)((0,n._)("input",{type:"email",id:"email","onUpdate:modelValue":e[2]||(e[2]=A=>o.email=A),required:""},null,512),[[a.nr,o.email]]),KA,(0,n.wy)((0,n._)("input",{id:"number","onUpdate:modelValue":e[3]||(e[3]=A=>o.phone=A)},null,512),[[a.nr,o.phone]]),VA,(0,n.wy)((0,n._)("input",{id:"sujet","onUpdate:modelValue":e[4]||(e[4]=A=>o.subject=A),required:""},null,512),[[a.nr,o.subject]]),LA,(0,n.wy)((0,n._)("textarea",{id:"message","onUpdate:modelValue":e[5]||(e[5]=A=>o.message=A),required:""},null,512),[[a.nr,o.message]]),XA],32),o.formSubmitted?((0,n.wg)(),(0,n.iD)("div",WA,[(0,n._)("p",null,"Dear "+(0,v.zw)(o.first_name)+" "+(0,v.zw)(o.last_name)+", thank you for your message!",1)])):(0,n.kq)("",!0)])])}var Ae={data(){return{first_name:"",last_name:"",email:"",phone:"",subject:"",message:"",formSubmitted:!1}},methods:{submitForm(){console.log("First Name:",this.first_name),console.log("Last Name:",this.last_name),console.log("Email:",this.email),console.log("Phone:",this.phone),console.log("Subject:",this.subject),console.log("Message:",this.message),this.email="",this.phone="",this.subject="",this.message="",this.formSubmitted=!0}}};const ee=(0,o.Z)(Ae,[["render",$A],["__scopeId","data-v-362f388f"]]);var ie=ee,ae={components:{Bandeau:L,Banniere:hA,Description:oA,Tutoriel:JA,Team:GA,Contact:ie}};const ne=(0,o.Z)(ae,[["render",Z],["__scopeId","data-v-190d2e04"]]);var te=ne;const oe=(0,n._)("h1",null,"This is the Map page !",-1),se=[oe];function re(A,e,i,a,t,o){return(0,n.wg)(),(0,n.iD)("div",null,se)}var le={created(){const A=JSON.parse(localStorage.getItem("user"));A||this.$router.push({path:"/login"})}};const Me=(0,o.Z)(le,[["render",re]]);var de=Me,ge=i.p+"img/icone-utilisateur.b5d7513a.png";const ce={class:"profile-page"},me=(0,n._)("div",{class:"profile-header"},[(0,n._)("img",{src:ge,alt:"Profil utilisateur"}),(0,n._)("h2",null,"Username Profil")],-1),Ie={class:"panel",id:"changeEmail"},ue=["src"],ye=(0,n._)("span",null,"Change My Email",-1),pe={key:0,class:"content-container"},he=(0,n._)("br",null,null,-1),Ee={class:"panel",id:"changePassword"},we=["src"],Ce=(0,n._)("span",null,"Change My Password",-1),Be={key:0,class:"content-container"},Qe=(0,n._)("br",null,null,-1),Ye={class:"panel",id:"deleteAccount"},ve=["src"],fe=(0,n._)("span",null,"Delete Account",-1),Je={key:0,class:"content-container"};function De(A,e,t,o,s,r){return(0,n.wg)(),(0,n.iD)("div",ce,[(0,n._)("img",{class:"logo",src:d,onClick:e[0]||(e[0]=(...A)=>r.redirectHomePage&&r.redirectHomePage(...A))}),me,(0,n._)("div",Ie,[(0,n._)("div",{onClick:e[1]||(e[1]=A=>r.togglePanel("changeEmail")),class:"panel-button"},[(0,n._)("img",{src:"changeEmail"===s.activePanel?i(226):i(453),class:"arrow-icon"},null,8,ue),ye]),"changeEmail"===s.activePanel?((0,n.wg)(),(0,n.iD)("div",pe,[(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":e[2]||(e[2]=A=>s.email=A),placeholder:"Current Email"},null,512),[[a.nr,s.email]]),(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":e[3]||(e[3]=A=>s.newEmail=A),placeholder:"New Email"},null,512),[[a.nr,s.newEmail]]),(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":e[4]||(e[4]=A=>s.confirmEmail=A),placeholder:"Confirm New Email"},null,512),[[a.nr,s.confirmEmail]]),(0,n._)("button",{onClick:e[5]||(e[5]=(...A)=>r.updateEmail&&r.updateEmail(...A))},"Update Email")])):(0,n.kq)("",!0)]),he,(0,n._)("div",Ee,[(0,n._)("div",{onClick:e[6]||(e[6]=A=>r.togglePanel("changePassword")),class:"panel-button"},[(0,n._)("img",{src:"changePassword"===s.activePanel?i(226):i(453),class:"arrow-icon"},null,8,we),Ce]),"changePassword"===s.activePanel?((0,n.wg)(),(0,n.iD)("div",Be,[(0,n.wy)((0,n._)("input",{type:"password","onUpdate:modelValue":e[7]||(e[7]=A=>s.currentPassword=A),placeholder:"Current Password"},null,512),[[a.nr,s.currentPassword]]),(0,n.wy)((0,n._)("input",{type:"password","onUpdate:modelValue":e[8]||(e[8]=A=>s.newPassword=A),placeholder:"New Password"},null,512),[[a.nr,s.newPassword]]),(0,n.wy)((0,n._)("input",{type:"password","onUpdate:modelValue":e[9]||(e[9]=A=>s.confirmPassword=A),placeholder:"Confirm New Password"},null,512),[[a.nr,s.confirmPassword]]),(0,n._)("button",{onClick:e[10]||(e[10]=(...A)=>r.updatePassword&&r.updatePassword(...A))},"Update Password")])):(0,n.kq)("",!0)]),Qe,(0,n._)("div",Ye,[(0,n._)("div",{onClick:e[11]||(e[11]=A=>r.togglePanel("deleteAccount")),class:"panel-button"},[(0,n._)("img",{src:"deleteAccount"===s.activePanel?i(226):i(453),class:"arrow-icon"},null,8,ve),fe]),"deleteAccount"===s.activePanel?((0,n.wg)(),(0,n.iD)("div",Je,[(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":e[12]||(e[12]=A=>s.emailToDelete=A),placeholder:"Your Email"},null,512),[[a.nr,s.emailToDelete]]),(0,n.wy)((0,n._)("input",{type:"password","onUpdate:modelValue":e[13]||(e[13]=A=>s.passwordToDelete=A),placeholder:"Your Password"},null,512),[[a.nr,s.passwordToDelete]]),(0,n._)("button",{onClick:e[14]||(e[14]=(...A)=>r.deleteAccount&&r.deleteAccount(...A))},"Delete Account")])):(0,n.kq)("",!0)])])}var Te={data(){return{activePanel:null,email:"",newEmail:"",confirmEmail:"",currentPassword:"",newPassword:"",confirmPassword:"",emailToDelete:"",passwordToDelete:""}},methods:{togglePanel(A){this.activePanel=this.activePanel===A?null:A},updateEmail(){},updatePassword(){},deleteAccount(){},redirectHomePage(){this.$router.push({path:"/"})}}};const je=(0,o.Z)(Te,[["render",De]]);var be=je,ke=[{path:"/",name:"Home",component:te},{path:"/sign",name:"Sign",component:P},{path:"/map",name:"Map",component:de},{path:"/profil",name:"Profil",component:be}],ze=(0,M.p7)({history:(0,M.PO)("/"),routes:ke});ze.beforeEach((function(A,e,i){var a=localStorage.getItem("user");"/sign"===A.path||a?"/sign"===A.path&&a?i("/map"):i():i("/sign")}));var _e=ze;(0,a.ri)(l).use(_e).mount("#app")},226:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAM4SURBVHic7d29alRBHIbxJ5hGSEA0id9Y2CjaWFlYKX4EMZfgJeg1KFprKXYWVtqphSAq1haCKWInqAjRFArRkICuxdmFRdaNmz0zc2bO84OBQEjyn33fGZZk2YAkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSWq6iZq+z35gATgDHABmgK/AB+AZ8AT4UtPPaovdwCXgHHAQmAVWgE/Ac+Ax8DnZdF37gLvABtAZsn4Ct4BdacbMygxwG1hj+GO6AdwB9qYZE04By0MGHLQ+AidTDJuJE8B7RntMV4DTsQe9CKyPOGhvrQHzsQfOwDybn/p/rXWqTKI4Cnzf4qCWYLBxwu+tb8CRGMO+GHPQ/tYuxBi44c4zfvi99SrGsHUM6k1QqePk/73Ohhz4fs3DtvkmqPPk9697oQaeoHrGWffAbbwJQpz83gr2+5bZQAO37SYIdfL7184Qgx8PPHQbboKQJ79/HQsx/OEIg5d8E8Q4+b11KMQGpoDfkTZQ2k0Q6+R3gF/A9lAbeRNpEyXdBDFPfgd4HXIzNyJupISbIObJ761rITe0B/gReUO53gSxT34HWKX6M3JQNyNvKsebIMXJ7wDXY2xuEniZYHO53AQpTn6H6m80kxH2B1S/FFoMvKEcb4JUJ3+RKpOoZoG3Yw5e0k2Q6uQvUT03S8ISVC7QwvB72l6CVoff09YSGH6ftpXA8AdoSwkMf4jSS2D4/6HUEhj+CEorgeFvQSklMPwx5F4Cw69BriUw/BrlVgLDDyCXEhh+QE0vgeFH0NQSGH5ETSuB4SfQlBIYfkKpS2D4DTBHutcYpnoN31wtj1xBUt0EnvwGKb0ESyR8W7dclFoCwx9BaSUw/C0opQSGP4bcS2D4Nci1BIZfo9xKYPgB5FICww+o6SUw/AiaWgLDj6hpJTD8BJpSAsNPKHUJDL8BUpXA8BskdgkMv4FilcDwGyx0CQw/A6FKYPgZqbsEhp+hukpg+Bkb99XGvnq3ANPAI0YP/ymwI8G8CmAbcJXqP2ptFvwycKX7NSrMNHAZeAi8o3p//dXuxw+6n5tKNp0kSZIkSZIkSZIkSZIkSZIkSZIkSZIkSdIAfwCHj0fOYebyPAAAAABJRU5ErkJggg=="},453:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOwAAADsAEnxA+tAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAnFJREFUeJzt3b1qFFEYh/HHjyhq4QUI3oOI9noNVjaKGjUXY5MmZbqICtrYCzYWXoCIhZBWBBsbxV0LGzFgZnbmvHPOeZ8fbJ0Z/s9+ZSdZkCRJkiRJkiRJkiRJUldOLH0AA5wH7gI3gYvAB+Ap8G7BY1KQq8AhsP7ntgJ2ga3lDk2lXQK+cHT8v28vMYJu7fL/8Y2gcx8ZFsAaeA2cXeYwVcoPhgfgI0GHxozvI0GHNgnACDqyaQBG0IkpARhBB6YGYASNmyMAI2jYXAEYQaPmDMAIGjR3AEbQmBIBGEFDSgVgBI1YUTYCPzuo3HHXAhhB555TPgAjqNgVxn8kbASduUf51wJGULn7wC9iIvDdQaWMQEYgIxBGIIxAGIEwAmEEwgiEEQgjEEYgjEAYgTACYQTCCIQRCCMQRiDgEXFXGx/Qxr/kTScygttB56SRop4O3kadkMaLiOB72NmMdHLpA6hAxPPzKuBnaAMPiHkKeBN1Qhou8kXgraBz0kCPiRt/P+icNFDUw/4aeAGcjjktDbGN46fl+Ik5fmKOn5jjJ7ZN3Fs9x6+M4yfm+Ik5fmKOn5jjJ/YQx0/L8RNz/MQcPzHHT8zxE3P8xCIv4HT8yjh+YjvEjf8Mx6/KdeAnjp/WKxw/tW84flpbOH5qZyg7vq/2K1cyAMdvQKkAHL8RJQJw/IbMHYDjN2bOABy/QXMF4PiNmiMAx2/Y1AAcv3FTAnD8DmwagON34hTj/67f3+135jPe81Pbw3t+apeBrzh+ateAQ44OvwKe4PiTtfBNFheAO8AN4BzwiT/fwvF+yYOSJEmSJEmSJEmSJEmSqvQbrEcvieO83scAAAAASUVORK5CYII="}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var t=e[a]={exports:{}};return A[a](t,t.exports,i),t.exports}i.m=A,function(){var A=[];i.O=function(e,a,n,t){if(!a){var o=1/0;for(M=0;M<A.length;M++){a=A[M][0],n=A[M][1],t=A[M][2];for(var s=!0,r=0;r<a.length;r++)(!1&t||o>=t)&&Object.keys(i.O).every((function(A){return i.O[A](a[r])}))?a.splice(r--,1):(s=!1,t<o&&(o=t));if(s){A.splice(M--,1);var l=n();void 0!==l&&(e=l)}}return e}t=t||0;for(var M=A.length;M>0&&A[M-1][2]>t;M--)A[M]=A[M-1];A[M]=[a,n,t]}}(),function(){i.d=function(A,e){for(var a in e)i.o(e,a)&&!i.o(A,a)&&Object.defineProperty(A,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){i.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){i.p="/"}(),function(){var A={143:0};i.O.j=function(e){return 0===A[e]};var e=function(e,a){var n,t,o=a[0],s=a[1],r=a[2],l=0;if(o.some((function(e){return 0!==A[e]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(r)var M=r(i)}for(e&&e(a);l<o.length;l++)t=o[l],i.o(A,t)&&A[t]&&A[t][0](),A[t]=0;return i.O(M)},a=self["webpackChunkpointfinder"]=self["webpackChunkpointfinder"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(328)}));a=i.O(a)})();
//# sourceMappingURL=app.0ed88c04.js.map