(function(){"use strict";var A={11:function(A,e,t){var i=t(963),o=t(252);function s(A,e){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var a=t(744);const n={},r=(0,a.Z)(n,[["render",s]]);var l=r,d=t(201),g=t(577),c=t.p+"img/logo_pointfinder.e228cfbb.png";const m=(0,o._)("div",{class:"title-container"},[(0,o._)("h1",null,"Welcome on PointFinder !"),(0,o._)("h4",null,"Please Login or subscribe to access the application")],-1),u={class:"tabs-container"},M={key:0},I=(0,o._)("button",{type:"submit",class:"sign-button"},"Sign-in",-1),p={key:1},h={class:"form-group"},w={class:"form-group"},E={class:"form-group"},y={class:"form-group"},C=(0,o._)("button",{type:"submit",class:"sign-button"},"Sign-up",-1),B={key:0,class:"toast-container"},Q={class:"toast-message"},v={class:"modal"},J=(0,o._)("h2",null,"Reset Password",-1),D=(0,o._)("button",{type:"submit"},"Send Reset Link",-1);function f(A,e,t,s,a,n){const r=(0,o.up)("tabs");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[(0,o._)("img",{class:"logo",src:c,onClick:e[0]||(e[0]=(...A)=>n.redirectHomePage&&n.redirectHomePage(...A))}),m,(0,o._)("div",u,[(0,o.Wm)(r,{tabs:a.tabs,onTabChanged:n.updateActiveTab},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.tabs,((A,t)=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{key:t},[0===t?((0,o.wg)(),(0,o.iD)("div",M,[(0,o._)("form",{onSubmit:e[4]||(e[4]=(0,i.iM)(((...A)=>n.signin&&n.signin(...A)),["prevent"]))},[(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=A=>a.login=A),type:"text",placeholder:"Username or email",required:""},null,512),[[i.nr,a.login]]),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[2]||(e[2]=A=>a.password=A),type:"password",placeholder:"Password",required:""},null,512),[[i.nr,a.password]]),(0,o._)("div",null,[(0,o._)("a",{href:"#",class:"forgot-password",onClick:e[3]||(e[3]=A=>a.showResetPasswordModal=!0)},"Forgot password?")]),I])],32)])):(0,o.kq)("",!0),1===t?((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("form",{onSubmit:e[9]||(e[9]=(0,i.iM)(((...A)=>n.signup&&n.signup(...A)),["prevent"]))},[(0,o._)("div",h,[(0,o.wy)((0,o._)("input",{id:"login","onUpdate:modelValue":e[5]||(e[5]=A=>a.login=A),type:"text",placeholder:"Username",required:""},null,512),[[i.nr,a.login]])]),(0,o._)("div",w,[(0,o.wy)((0,o._)("input",{id:"mail","onUpdate:modelValue":e[6]||(e[6]=A=>a.mail=A),type:"mail",placeholder:"E-mail",required:""},null,512),[[i.nr,a.mail]])]),(0,o._)("div",E,[(0,o.wy)((0,o._)("input",{id:"password","onUpdate:modelValue":e[7]||(e[7]=A=>a.password=A),type:"password",placeholder:"Password",required:""},null,512),[[i.nr,a.password]])]),(0,o._)("div",y,[(0,o.wy)((0,o._)("input",{id:"confirmpassword","onUpdate:modelValue":e[8]||(e[8]=A=>a.confirmpassword=A),type:"password",placeholder:"Confirm your password",required:""},null,512),[[i.nr,a.confirmpassword]])]),C],32)])):(0,o.kq)("",!0)])),[[i.F8,a.activeTab===t]]))),128))])),_:1},8,["tabs","onTabChanged"]),a.showErrorMessage?((0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("span",Q,(0,g.zw)(a.errorMessage),1)])):(0,o.kq)("",!0)])]),a.showResetPasswordModal?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"modal-overlay",onClick:e[12]||(e[12]=(0,i.iM)((A=>a.showResetPasswordModal=!1),["self"]))},[(0,o._)("div",v,[J,(0,o._)("form",{onSubmit:e[11]||(e[11]=(0,i.iM)(((...A)=>n.sendEmailResetPassword&&n.sendEmailResetPassword(...A)),["prevent"]))},[(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":e[10]||(e[10]=A=>a.resetEmail=A),placeholder:"Enter your email",required:""},null,512),[[i.nr,a.resetEmail]]),D],32)])])):(0,o.kq)("",!0)],64)}const Y={class:"tabs"},T=["onClick"],b={class:"tab-content"};function j(A,e,t,s,a,n){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",Y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.tabs,((A,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e,onClick:A=>n.selectTab(e),class:(0,g.C_)({active:a.activeTab===e})},(0,g.zw)(A.label),11,T)))),128))]),(0,o._)("div",b,[(0,o.wy)((0,o._)("div",null,[(0,o.WI)(A.$slots,"default",{activeTab:a.activeTab},void 0,!0)],512),[[i.F8,t.tabs[a.activeTab]]])])])}var k={data(){return{activeTab:0}},props:{tabs:{type:Array,required:!0}},methods:{selectTab(A){this.activeTab=A,this.$emit("tab-changed",A)}}};const S=(0,a.Z)(k,[["render",j],["__scopeId","data-v-1dd013b3"]]);var z=S,P=t(2),G={setup(){const A=(0,P.pm)();return{toast:A}},components:{Tabs:z},data(){return{tabs:[{label:"Sign-in"},{label:"Sign-up"}],activeTab:0,login:"",password:"",mail:"",confirmpassword:"",resetEmail:"",showResetPasswordModal:!1,showErrorMessage:!1,errorMessage:""}},methods:{redirectHomePage(){this.$router.push({path:"/"})},updateActiveTab(A){this.activeTab=A},async signup(){if(this.password===this.confirmpassword)try{const A=await fetch("https://pointfinder.alwaysdata.net/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:this.login,password:this.password,mail:this.mail})});200===A.status?(console.log("Inscription réussie"),this.sessionStorageCredentials()):this.toast.error("Subscription error: user already exists",{position:"top-right",timeout:5e3,closeButton:"button"})}catch(A){console.error("Erreur:",A),this.toast.error("Server error",{position:"top-right",timeout:5e3,closeButton:"button"})}else this.toast.error("Subscription error: passwords do not match",{position:"top-right",timeout:5e3,closeButton:"button"})},async signin(){try{const A=await fetch("https://pointfinder.alwaysdata.net/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:this.login,password:this.password})});200===A.status?(console.log("Connexion réussie:"),this.sessionStorageCredentials()):this.toast.error("Connection error: login or password incorrect",{position:"top-right",timeout:5e3,closeButton:"button"})}catch(A){console.error("Erreur:",A),this.toast.error("Server error",{position:"top-right",timeout:5e3,closeButton:"button"})}},async sessionStorageCredentials(){try{const A=await fetch("https://pointfinder.alwaysdata.net/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:this.login})});if(200===A.status){const e=await A.json();sessionStorage.setItem("user",JSON.stringify({username:e.login,mail:e.mail})),this.$router.push({path:"/map"})}else console.error("Erreur de réponse du serveur:",A.status)}catch(A){console.error("Erreur:",A)}},async sendEmailResetPassword(){try{const A=await fetch("https://pointfinder.alwaysdata.net/send-reset-password-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:this.resetEmail})});if(200===A.status){console.log("Email envoyé avec succès:");const e=await A.json();this.updatePassword(e)}else this.toast.error("Reset password error: please enter a valid email",{position:"bottom-center",timeout:5e3,closeButton:"button"})}catch(A){console.error("Erreur:",A)}},async updatePassword(A){try{const e=await fetch("https://pointfinder.alwaysdata.net/updatepwd",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:this.resetEmail,newpwd:A})});200===e.status?(console.log(A),console.log("Mot de passe mis à jour")):console.log("Erreur de changement de mot de passe")}catch(e){console.error("Erreur:",e)}}}};const U=(0,a.Z)(G,[["render",f]]);var O=U,H={class:"grid-container"},_={class:"grid-item-banniere"},F={class:"grid-item",id:"description"},R={class:"grid-item",id:"tutoriel"},x={class:"grid-item",id:"equipe"},K={class:"grid-item",id:"contact"};function N(A,e,t,i,s,a){var n=(0,o.up)("Bandeau"),r=(0,o.up)("Banniere"),l=(0,o.up)("Description"),d=(0,o.up)("Tutoriel"),g=(0,o.up)("Team"),c=(0,o.up)("Contact");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(n),(0,o._)("div",H,[(0,o._)("div",_,[(0,o.Wm)(r)]),(0,o._)("div",F,[(0,o.Wm)(l)]),(0,o._)("div",R,[(0,o.Wm)(d)]),(0,o._)("div",x,[(0,o.Wm)(g)]),(0,o._)("div",K,[(0,o.Wm)(c)])])],64)}var L=t.p+"img/icon_pointfinder2.d835c8b8.png";const V=(0,o.uE)('<div class="header-section section-1"><img src="'+L+'" alt="Logo" class="image-modifiee"></div><div class="header-section section-2"><a href="#description">Project</a><a href="#tutoriel">Tutorial</a><a href="#equipe">About Us</a><a href="#contact">Contact</a></div>',2),X={class:"header-section section-3"};function Z(A,e,t,i,s,a){return(0,o.wg)(),(0,o.iD)("header",{ref:"header",class:(0,g.C_)(["header",{"gray-header":s.isScrolled}])},[V,(0,o._)("div",X,[(0,o._)("button",{class:"access-button",onClick:e[0]||(e[0]=(...A)=>a.redirect&&a.redirect(...A))},"Access to the Application")])],2)}var q={data(){return{isScrolled:!1,showParametersButton:!1}},created(){const A=JSON.parse(sessionStorage.getItem("user"));A&&(this.showParametersButton=!0)},mounted(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.isScrolled=window.scrollY>700},redirect(){this.$router.push({path:"/sign"})}}};const W=(0,a.Z)(q,[["render",Z]]);var $=W,AA=t.p+"img/image.058569c5.jpeg";const eA=A=>((0,o.dD)("data-v-5946483c"),A=A(),(0,o.Cn)(),A),tA={class:"outer-grid"},iA=eA((()=>(0,o._)("div",{class:"inner-grid text"},[(0,o._)("h1",null,"PointFinder"),(0,o._)("h3",null,"Mapping Moments, Finding memories"),(0,o._)("p",null,[(0,o.Uk)(" Our web and mobile solution allows you to display key locations around you. "),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)(" Easy to use, PointFinder offers you a personalized map ideal for helping you discover the city of your choice. ")])],-1))),oA=eA((()=>(0,o._)("div",{class:"inner-grid"},[(0,o._)("img",{src:AA,alt:"Capture de l'application",class:"image_temporaire"})],-1))),sA=[iA,oA];function aA(A,e){return(0,o.wg)(),(0,o.iD)("div",tA,sA)}const nA={},rA=(0,a.Z)(nA,[["render",aA],["__scopeId","data-v-5946483c"]]);var lA=rA,dA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5kAAAK1CAYAAABCTyrfAAAACXBIWXMAAC4jAAAuIwF4pT92AAAPyElEQVR4nO3XQQ3CAAAEwYMgBGk4QRs2+kIKItikSTOjYL97O47jue05AAAA+NNj22vb++QOAAAALuB+dgAAAADXYTIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMiYTAAAADImEwAAgIzJBAAAIGMyAQAAyJhMAAAAMiYTAACAjMkEAAAgYzIBAADImEwAAAAyJhMAAICMyQQAACBjMgEAAMg8tn23fU7uAAAA4AJ+gGYKvKjQxxgAAAAASUVORK5CYII=",gA=t.p+"img/texture.ad35cdd0.png",cA=t.p+"img/logo_slog2.774d550e.svg";const mA=A=>((0,o.dD)("data-v-c9fa5e98"),A=A(),(0,o.Cn)(),A),uA={class:"image-container"},MA=mA((()=>(0,o._)("img",{src:dA,alt:"Fond",class:"fond"},null,-1))),IA=mA((()=>(0,o._)("img",{src:gA,alt:"Texture",class:"texture"},null,-1))),pA=mA((()=>(0,o._)("img",{src:cA,alt:"Logo et Slogan",class:"texte"},null,-1))),hA=[MA,IA,pA];function wA(A,e){return(0,o.wg)(),(0,o.iD)("div",uA,hA)}const EA={},yA=(0,a.Z)(EA,[["render",wA],["__scopeId","data-v-c9fa5e98"]]);var CA=yA;const BA=A=>((0,o.dD)("data-v-426e9fce"),A=A(),(0,o.Cn)(),A),QA={class:"outer-grid"},vA=BA((()=>(0,o._)("div",{class:"inner-grid"},[(0,o._)("img",{src:AA,alt:"Capture de l'application",class:"image_temporaire"})],-1))),JA=BA((()=>(0,o._)("div",{class:"inner-grid text"},[(0,o._)("h1",null,"Do you have some problem?"),(0,o._)("p",null,[(0,o.Uk)(" Carefree! We have the solution! "),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)(" Just watch our explanatory video! "),(0,o._)("br"),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)(" Afterwards, our application will no longer have any secrets for you! ")])],-1))),DA=[vA,JA];function fA(A,e){return(0,o.wg)(),(0,o.iD)("div",QA,DA)}const YA={},TA=(0,a.Z)(YA,[["render",fA],["__scopeId","data-v-426e9fce"]]);var bA=TA,jA=t.p+"img/marion.fdc63346.png",kA=t.p+"img/romain.cc779855.png",SA=t.p+"img/terence.ead0c113.png",zA=t.p+"img/delpin.4de6b10f.png";const PA=(0,o.uE)('<h1>Team</h1><div class="image-grid"><div class="image-item"><img src="'+jA+'" alt="Photo de Marion" class="photo_equipe"><h2> Marion DEFFEE</h2><p>Product Owner / Front-end Web Developer</p></div><div class="image-item"><img src="'+kA+'" alt="Photo de Romain" class="photo_equipe"><h2>Romain TAMIC</h2><p>Back-End Developer</p></div><div class="image-item"><img src="'+SA+'" alt="Photo de Térence" class="photo_equipe"><h2> Térence ROUSIC </h2><p>Front-end Web Developer</p></div><div class="image-item"><img src="'+zA+'" alt="Photo de Delphine" class="photo_equipe"><h2> Delphine ALLANO </h2><p> Front-end Mobile Developer</p></div></div>',2),GA=[PA];function UA(A,e){return(0,o.wg)(),(0,o.iD)("div",null,GA)}const OA={},HA=(0,a.Z)(OA,[["render",UA]]);var _A=HA,FA=t.p+"img/mail.4eea768b.png",RA=t.p+"img/telephone.fc00c127.png";const xA=A=>((0,o.dD)("data-v-362f388f"),A=A(),(0,o.Cn)(),A),KA={class:"outer-grid"},NA=(0,o.uE)('<div class="inner-grid content" data-v-362f388f><div class="grid-item1" data-v-362f388f><h1 data-v-362f388f>Contactez-nous</h1></div><div class="grid-item2" data-v-362f388f><div class="sub-grid" data-v-362f388f><div class="image-container" data-v-362f388f><img src="'+FA+'" alt="Logo Mail" class="logo-mail" data-v-362f388f></div></div><div class="sub-grid" data-v-362f388f><p data-v-362f388f>Courriel : pointfinder.projet@gmail.com</p></div></div><div class="grid-item2" data-v-362f388f><div class="sub-grid" data-v-362f388f><div class="image-container" data-v-362f388f><img src="'+RA+'" alt="Logo Mail" class="logo-telephone" data-v-362f388f></div></div><div class="sub-grid" data-v-362f388f><p data-v-362f388f>Téléphone : 06 46 74 73 59</p></div></div><div class="grid-item1" data-v-362f388f><p data-v-362f388f>Based in Brest (29), our goal is to meet your needs.</p></div></div>',1),LA={class:"inner-grid formuls"},VA=xA((()=>(0,o._)("label",{for:"name"},"First name: *",-1))),XA=xA((()=>(0,o._)("label",{for:"prenom"},"Last Name: *",-1))),ZA=xA((()=>(0,o._)("label",{for:"email"},"Email: *",-1))),qA=xA((()=>(0,o._)("label",{for:"numero"},"Phone number:",-1))),WA=xA((()=>(0,o._)("label",{for:"Sujet"},"Subject: *",-1))),$A=xA((()=>(0,o._)("label",{for:"message"},"Message: *",-1))),Ae=xA((()=>(0,o._)("button",{class:"button-form-contact",type:"submit"},"SEND",-1))),ee={key:0};function te(A,e,t,s,a,n){return(0,o.wg)(),(0,o.iD)("div",KA,[NA,(0,o._)("div",LA,[(0,o._)("form",{onSubmit:e[6]||(e[6]=(0,i.iM)(((...A)=>n.submitForm&&n.submitForm(...A)),["prevent"]))},[VA,(0,o.wy)((0,o._)("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=A=>a.first_name=A),required:""},null,512),[[i.nr,a.first_name]]),XA,(0,o.wy)((0,o._)("input",{type:"text",id:"prenom","onUpdate:modelValue":e[1]||(e[1]=A=>a.last_name=A),required:""},null,512),[[i.nr,a.last_name]]),ZA,(0,o.wy)((0,o._)("input",{type:"email",id:"email","onUpdate:modelValue":e[2]||(e[2]=A=>a.email=A),required:""},null,512),[[i.nr,a.email]]),qA,(0,o.wy)((0,o._)("input",{id:"number","onUpdate:modelValue":e[3]||(e[3]=A=>a.phone=A)},null,512),[[i.nr,a.phone]]),WA,(0,o.wy)((0,o._)("input",{id:"sujet","onUpdate:modelValue":e[4]||(e[4]=A=>a.subject=A),required:""},null,512),[[i.nr,a.subject]]),$A,(0,o.wy)((0,o._)("textarea",{id:"message","onUpdate:modelValue":e[5]||(e[5]=A=>a.message=A),required:""},null,512),[[i.nr,a.message]]),Ae],32),a.formSubmitted?((0,o.wg)(),(0,o.iD)("div",ee,[(0,o._)("p",null,"Dear "+(0,g.zw)(a.first_name)+" "+(0,g.zw)(a.last_name)+", thank you for your message!",1)])):(0,o.kq)("",!0)])])}var ie={data(){return{first_name:"",last_name:"",email:"",phone:"",subject:"",message:"",formSubmitted:!1}},methods:{submitForm(){console.log("First Name:",this.first_name),console.log("Last Name:",this.last_name),console.log("Email:",this.email),console.log("Phone:",this.phone),console.log("Subject:",this.subject),console.log("Message:",this.message),this.email="",this.phone="",this.subject="",this.message="",this.formSubmitted=!0}}};const oe=(0,a.Z)(ie,[["render",te],["__scopeId","data-v-362f388f"]]);var se=oe,ae={components:{Bandeau:$,Banniere:CA,Description:lA,Tutoriel:bA,Team:_A,Contact:se}};const ne=(0,a.Z)(ae,[["render",N],["__scopeId","data-v-190d2e04"]]);var re=ne;const le=(0,o._)("h1",null,"This is the Map page !",-1),de=[le];function ge(A,e,t,i,s,a){return(0,o.wg)(),(0,o.iD)("div",null,de)}var ce={};const me=(0,a.Z)(ce,[["render",ge]]);var ue=me,Me=t.p+"img/icone-utilisateur.b5d7513a.png",Ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAShklEQVR4nO3df2yd1X3H8TdXd5ZleZYVRVEUoSqyLJYxFKF1yiLasYxCCpSVtRTS0kJCfzDoYBRSVrGqiirK0o4y1gY2+htoS2HQ8KvhZwYsMIYYY1nFWIZYhLIIRVZmRVHkedbVzf74+grj+l773nvOc77neT4vyQInzvN8bd/zvef5nl8nHD9+nAwNzn7UgaE5H8Nz/pzZz+cbBmoL/HnrWr0YmP3wbApopg5ijiZwLHUQ8xwDngEO4+tnFU198S9xYxnw28BZwOnAGDCK/4YneTkCPAX8DHhu9vPSOsF5D6AGjAPXAucCq8graUm+msB+4O+AH8z+f+l4TQA1YD2wFTgPvctLWtPAvcB24I3EsQTlMQGsAL4KfIqFn+FFUjkMfB+4EaupZM9TAhgALgZuwrr6Il79ErgaeIHMi4ULVcNTGAZ2AN9DjV/8WwvsAq7DTxvqiYcewDhWZDk9dSAiXWoAd2O1qixHC1IngDVYJh1LGYRIn3YDF5JhEkjZfVkDPIgav+TvTOA+rICdlVQ9gJOAx1Hjl3LZDVwAHE0dyFKl6AEMY8U+NX4pmzOxuQLZFAaLDrQO3IwKflJelwNXpA5iqYp+BNgCfAfN7JNyOwx8AJsv4FqRCWAl8K+z/xUpuxeBPwBmUgfSSVGPADXgK6jxS3WsBy5NHcRiiuoBrAOeBkaKuJmIE/uA38MeCVwqogdQA25AjV+qZw3OewFF9ADGgP9AhT+ppv3Ab+K0FlDE5hpXkrbxN3n3iq3GvM/n//1i/74bjR7/XVHXy8Fir9Ea7Xuyc/+uPue/tSVcN5QxbE+LnQXdryuxewDLgX8GVke6fhPYiw23HAT+B5uF1ZqTPT37MTf7Ts+7xgydG1Zjkb/vZIawy0VDX8+7Gou/eXT6mjrvNPTBOV9bn/18BXAOsBF7rcayE5sh6E7sBHARtrdajFrDW1ht4RFKsjmDJFHDEsFWbBJPjFrVIeC9wNsRrt2XmEXAOrAp0j2eAH4X26ZJjV/60cQa6PXA7wNvRrjHCuCUCNftW8wEsAI4I8J19wCbgYkI15Zq2wucD7we+Lo1bBMRd2ImgFOxbbtDmgAuQY1f4nkd+Azhzyz4rcDXCyKbVUuzvgUcSB2ElN5LwHcDX3MVDtubu4A6mAR+mDoIqYzbCVtfWo7DuTA5JYAXcTylUkrnEGHPABjB4aE2OSWA56nmRBhJY5qww3ZDOGxv7gLqQO/+UqTW8GAo7Q6lTcpdQB14O0lWyi/k3n6tmYiuuAuogypNgRUfQr7puCsAQl4JYP4cfpHY/jfw9YYCX69vOSUAl8sppdRCv+loFEAkI6VfZ5JLAuhnTb5Ir0IPO+sRoEdN9AggxQs98qRHABHxQwlApL1szvjrlRKASIXlkgAaaB6ASHC5JADQKIAUb/4O0qWTUwIQKVrpd2FWAhCpMCUAkfb0CODEDCoCSvGUAESkvJQARNor9bs/KAGIdDJNyfehVAIQqTAlAJEKUwIQaU8TgUQqTMOAjpT6FyGSQi4JQDsCiUSQSwIQSUE1AJEKK/1mtEoAIhUWMwG42wJZpEulfveHuAlAvQvJXeipwO5WtKqRihTH3UiWEoBIhSkBiLRX+mFAd0cVSanVseLwSqxxHcLhc/EcpV4KDOoBSDEGgYuBXcB/A/8J/BfwL8AZCeNazAzwECXuBSgBSGwjwI+Bu4CNs5+DvfZOBn4ObMHna7EJXAt8DYcFvBA8/tClPAaA24GP0f5xcxT4HnArPueOzADbgMso4VmBuSSA0k/JLKmNwMeX8HV14E+BHwHLokbUu3uATcDbqQMJKacE4LlYJAvbSneF5ouAx4HxOOH07Qngg8BrqQMJJacEIHlZBpzaw79bhyWB08KGE8xrwDnAM6kDCSGXBCD5ORGr/vdiHHgY+Gi4cII6CFyAPRZ08+Z0LE44vVMCkFhW0t88k+XAz4AvYMVEb44Am4FvsvQRAnc9WSUAiWWI/l9fA8A3gFvwOWmtAXwZuIZMhwmVACSWYcK8vgaAq4AHsV6FNw3gDuyR4FDiWLqmBCCxhO62n4fVBbyOEPwCOB/YnzqQbigBSCy9FgA7WQc8jd8RgpeBs4CXcPi8vxAlAIkl1jP7aqwnsJQJRinsx3oCj6QOZCmUACSWmJX75diswS/gszg4AXwSqw24XlGoBCCxxHgEmH/9m4FvYQVHb6aAq4EbcDxCoAQgOasDV2C9gdHEsSykgc0T+BwOJwGBEoDkr4atNnwSvyMEdwMfwuF6FiUAieXXCr7fOuBRelt/UIQ92GOBK0oAEkuKtf1rsJ7AhxPcO0s5JYAsxlUluRXYGoIr8DlC4EouCaCB40qquDOEjQ5sx+dCIjdySQAi3RoAvojtReh1l6HklAAkFi/7+12EbTy6KnUgHikBSCxeXls1YAPwD/gdIUjGyy9JJLZxbJjw7NSBeKIEILF4rMCfiD0OXIpe+4B+CBJP7LUAvRrCziHYhkYIlACkkgaAPwd24HMhUWFiJgAvVWCRhdSBy4H7qfAIQcwE4PEZUIqTyxvA2dgGI2OpA0lBjwASS05vAL8DPAucnjqQoikBiJj3YDsP/1HqQIqkBCCx5PjaWgb8FL9bjQWX4y9J8pBrdX0IO4hkO/nUMXpWiSyX2ChwCtX7WXvcomupasB12MShK7FjwEqpai/KIo0An8I2hTwxcSzSvRq29fh7sB1+30oaTSQ5PQLktCHIOHbE9Q7U+HN3GrCLki4kyiUBNHC4oWIbZwL/hL1wcvn5SmcnA38PbKRkv9NSfTMOjGPzzJenDkSCWwbcB2yhRO2mNN+IA0PY/vSrE8ch8YwCf4utIyjFQiIlgHA+j99DKyWcAWwlYSkWEikBhDEOXI9+nlVRBz6L7T6c9X6DesGGcQq2HbVURw04DxvtOSlxLD1TAhDpzzpsmHBt6kB6oQQg0r9xbJjww2TWprIKVsSx5dhCostTB9INJQCRcIZ550Qir3sivosSgEhYA8CfYRPC3A8TKgGIhFcDLsZmDroeHVICEImjBpyLFQfdDhMqAYjEdQo2TLg+dSALUQIQia+1PNzdfoNKACLFGAV+DFyBo3bnJhCRCmgNE96Ek9WESgAixWoNE34HB/smKgGIFK+GnVB8P4k3j1ECEEmjhm0f9zS25ViyIEQknVOBR7HjyQqnBCCS3hjwJLa/QKFtUglAxIfWsWRbirypEoCIHyPYpqNfpKBDe5QARHwZwJYT30IBS4pjJgAXEx1EMlQHrgJ+gPUKoomZALLYEEHEqdaS4vuJuKRYjwAivq0n4mEzSgAifr0NXAC8HOsGOh5cxKe3gAuBV2LeRD0AEX9eBT5I5MYPSgAi3uwGzgHeKOJmSgAiPjSBe4BNwERRN1UCEElvBvgmsBmYLPLGKgKKpDUN3ADcBjSKvrkSgEg6R4DLgIdSBaAEIJLGQazL/0zKIJQARIq3D5vg83rqQFQEFCnWc9gYf/LGD0oAIkXaib3zH0gdSIsSgEh8DeDbwCcoeJhvMaoBiMTVAL4M/DU23u+KEoBIPJPANdgMv2biWBakBCASxyHgkyQe5luMagAi4b2OLehx3fhBCUAktD1Y49+bOpClUAIQCecRnA3zLUYJQKR/DazKvwk4nDiWrqgIKNKfaWAb8FckWM3XLyWAMCaxX75+ntUyCfwxNsPP5TDfYvQIEMZL2POfVMcB4CPAA2Ta+EEJIJQZbLaXq2meEs1ebEHPntSB9EsJIJx9wLU4nO4pwTSBJ7Bhvn2JYwlCCSCse4A7yLhLKB3djS3oOZQ6kFBySQA18jhstAF8CfgqMJU4FglnGvgL4DPYNl6lkVMCyKXCPg18DRsT/mXiWKR/09iCnm2UsGeXS6PKTRP4BfAUcBHwIfJJtqFsIOKptgU5hL3rP5Y6kFiUAOKaAX4y+1E1z5J3AngTW80X7WBOD2ImgMGI1xb/plMH0IdXsEe4/akDiS1mt1S9i2rLdTh0JzbMV/rGD9V7LhVppwl8F7iEzBb09EMJQMSGbL8E/AkVG75VN11iOZY6gCU6ijX8KhZqlQAkmhzGzA9gx3M9lziOZJQApKpewyr9Lk7oSUU1AInF8+YYu7FKf6UbPygBSDwe5wE0sWf987HTeStPCUCqogF8HfgcFav0d6IagFTBMWArNs4vcygBSCxe3mUnKPmCnn4oAUgsHoYB3wQuJJNDOlLIpQZQI59YxYcXyOiEnlRy6QHksiOQpNfai2EzJdu9Jwa9q0osKYYBG8C3sQk+avxLoAQgsfxfwfdrbc1+PT7nIIzgsL25C0ikB4ex3Xv+Ep8zEMeAx4HR1IHMl0sNQKSdt7Gtur0e0rEWuB84KXUgC1EPQGIpohv+KvAB/Db+c4Encdr4QQlA4om9JdhT+D2hpwZ8GrgPWJk4lo6UACSWWBOBGsCdWKV/ItI9+jGAnSFwOzCcOJZFqQYgscSYCjyDLei5EZ/FvmFgB7AlcRxLpgQgsYRuoFPYCT13Rrh2CMuBu4CzUwfSDSUAiSXknoCHsN16dwe8ZkhrgJ8DJ6cOpFuqAUgsRwjzTr0P+EP8Nv73A7vIsPGDEoDEc5j+EkATeBE4Czupx5sadu7jLmyiT5aUACSWA/ReCGwCD+B36646cB32zD/Sxb9zd1yeEoDEcgR7B+9Wa0HPZnye0DMI3AJsp/sG7W5Fay4JoIYKljm6me5mBLa27tra5b8rygrgp8BVlOT1mEsCqOMwe8qiXgDuWOLXHsPe9W/Dx25C860CHgU+Sj7tZlGl+UbEpSa2RPf7dC4I7seKfTvx2fjXA88D61IHEpoSgMQ2BVyJjeM/hk3fnZsM9mJz+l8qPrQlOQ94mIwr/Z2U4jlG3GsA92KV/QGseDY0+3dH8HuQ6CA2p39F6kBiUQKQIjVmP6aAycSxLEXpi896BBBpb5CSt5FSf3Mi0lnMBODlZBgRaSNmAvA4nCPSjTph24i7DUL0CCDS3gBh24i79uYuIBEpjhKASIUpAYi0N4DmAbhR6l+EuJRT++hJLt9g6WdkiaSQSwIQSaFGydtIzG/O49bNIt3QVOA+aCagiHOlzm4i0pkSgEh7oacCu1Pqb06kT6GnArtT6m9ORDrLJQFoV2CRCHJJAKUfjxWXBin5BLSYjWom4rVFJICYCcDjyS4i3Sj1uz+oWy3SiVYDOlFDRUCR4HKZCqzVgCIRaFNQkfa6Pf47O7k8AoikUPrHzpgJIOR5b3oEkBSUAJxQApAUQicAd0vkNRFIpL3QB3m42yQnp4lAufRWpDz0CNCH0N2docW/RCSo0KMAIetiQagHINLerwe8VhOHQ+OxE0DIb7j0Y7LiTsgaQOj2EETsiUAhewGjAa8lshTLAl7rGBVMACHrAL8R8FoiixkAVgW83hQVSwANwiaAM3B4vrqU1ggwFvB6lesBNICjAa+3Blgf8HoinWwgbA9gkorNA2gARwJerwZsQzMCJb5R4MbA15zA4eS42DMBJwJf8zTgOjQkKPEMAtuxHmdIbwa+XhCxG9L+wNdr9QI+Hfi6ImC9y1uBz0a49r9FuGbfYieAf49wzSHgduAWYHmE60v11IC1wMPA5YR/zDwKvBb4mkGccPz48ZjXXwv8I/Gq9/uAHcCrWJHlKPboMTX7X3dVV3FlBFgHXAh8fPbzGF4B3ofDGkDsBDAAPI/9kGOanv2YwYqPrcbf5J3hyGkWrsJOtfnzlhl6/8WFHvt1OZQUUZ2lrwGp86uzRQd494KeodmvG579GAJWEH/Rzw3A1yPfoyexEwDApcBdsW8i4tQUNontYOpAFlJENf0B4I0C7iPi0U6cNn4oJgFMATdRra6rCFhN6tbUQXRS1Hj6TuDlgu4l4sW9wN7UQXRSRA2g5VxsmEUz+aQKJoH3Am8ljqOjImfUPQb8pMD7iaTSBL6C88YPxfYAAFYCzxJ+mqWIJw8BnyCDA3KLTgAApwMPEnazBREv9gFn4bjyP1eKRTV7gGtwuDRSpE+HgUvIpPFDulV192Czo9xNjRTp0SSwGZv2m40UjwAtdeDz2KIejQxIzo4Am4CnUgfSrZTr6hvAbcCVhN04RKRIB4CPkGHjh7Q9gLk2AD8CVqcNQ6QrLwCX4XSzj6XwsrPOc1jl9Ak0ZVj8mwH+BjifjBs/+OkBtNSBLdiuPyemDUXkVzSxjT22ArsTxxKEtwTQMgZcje3OojMBxYMJ4BvAnVjFvxS8JoCW1Vgi+BjWI/DyyCLVMIMtZb8L+CElavgt3hNAyzJgIzbUsgEdEyZxHcSq+vdhhb7QJ127kUsCaKlhWzhtRCMGEserwIuU8N1+If8P2JMsZIMp3aEAAAAASUVORK5CYII=";const pe={class:"profile-page"},he={class:"profile-header"},we=(0,o._)("img",{src:Me,alt:"Profil utilisateur"},null,-1),Ee={class:"logout-button"},ye=(0,o._)("img",{src:Ie,alt:"Logout"},null,-1),Ce={class:"panel",id:"changeEmail"},Be=["src"],Qe=(0,o._)("span",null,"Change my email",-1),ve={key:0,class:"content-container"},Je=(0,o._)("br",null,null,-1),De={class:"panel",id:"changePassword"},fe=["src"],Ye=(0,o._)("span",null,"Change my password",-1),Te={key:0,class:"content-container"},be=(0,o._)("br",null,null,-1),je={class:"panel",id:"deleteAccount"},ke=["src"],Se=(0,o._)("span",null,"Delete account",-1),ze={key:0,class:"content-container"};function Pe(A,e,s,a,n,r){return(0,o.wg)(),(0,o.iD)("div",pe,[(0,o._)("img",{class:"logo",src:c,onClick:e[0]||(e[0]=(...A)=>r.redirectHomePage&&r.redirectHomePage(...A))}),(0,o._)("div",he,[we,(0,o._)("h2",null,(0,g.zw)(r.username)+"'s profil",1),(0,o._)("h3",null,(0,g.zw)(r.mail),1)]),(0,o._)("div",Ee,[(0,o._)("button",{onClick:e[1]||(e[1]=(...A)=>r.logout&&r.logout(...A))},[ye,(0,o.Uk)(" Logout ")])]),(0,o._)("div",Ce,[(0,o._)("div",{onClick:e[2]||(e[2]=A=>r.togglePanel("changeEmail")),class:"panel-button"},[(0,o._)("img",{src:"changeEmail"===n.activePanel?t(226):t(453),class:"arrow-icon"},null,8,Be),Qe]),"changeEmail"===n.activePanel?((0,o.wg)(),(0,o.iD)("div",ve,[(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":e[3]||(e[3]=A=>n.currentEmail=A),placeholder:"Current email"},null,512),[[i.nr,n.currentEmail]]),(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":e[4]||(e[4]=A=>n.newEmail=A),placeholder:"New email"},null,512),[[i.nr,n.newEmail]]),(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":e[5]||(e[5]=A=>n.confirmEmail=A),placeholder:"Confirm new email"},null,512),[[i.nr,n.confirmEmail]]),(0,o._)("button",{class:"validate-button",onClick:e[6]||(e[6]=(...A)=>r.updateEmail&&r.updateEmail(...A))},"Update email")])):(0,o.kq)("",!0)]),Je,(0,o._)("div",De,[(0,o._)("div",{onClick:e[7]||(e[7]=A=>r.togglePanel("changePassword")),class:"panel-button"},[(0,o._)("img",{src:"changePassword"===n.activePanel?t(226):t(453),class:"arrow-icon"},null,8,fe),Ye]),"changePassword"===n.activePanel?((0,o.wg)(),(0,o.iD)("div",Te,[(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":e[8]||(e[8]=A=>n.currentEmailPassword=A),placeholder:"Email"},null,512),[[i.nr,n.currentEmailPassword]]),(0,o.wy)((0,o._)("input",{type:"password","onUpdate:modelValue":e[9]||(e[9]=A=>n.newPassword=A),placeholder:"New password"},null,512),[[i.nr,n.newPassword]]),(0,o.wy)((0,o._)("input",{type:"password","onUpdate:modelValue":e[10]||(e[10]=A=>n.confirmPassword=A),placeholder:"Confirm new password"},null,512),[[i.nr,n.confirmPassword]]),(0,o._)("button",{class:"validate-button",onClick:e[11]||(e[11]=(...A)=>r.updatePassword&&r.updatePassword(...A))},"Update password")])):(0,o.kq)("",!0)]),be,(0,o._)("div",je,[(0,o._)("div",{onClick:e[12]||(e[12]=A=>r.togglePanel("deleteAccount")),class:"panel-button"},[(0,o._)("img",{src:"deleteAccount"===n.activePanel?t(226):t(453),class:"arrow-icon"},null,8,ke),Se]),"deleteAccount"===n.activePanel?((0,o.wg)(),(0,o.iD)("div",ze,[(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":e[13]||(e[13]=A=>n.emailToDelete=A),placeholder:"Your email"},null,512),[[i.nr,n.emailToDelete]]),(0,o.wy)((0,o._)("input",{type:"password","onUpdate:modelValue":e[14]||(e[14]=A=>n.passwordToDelete=A),placeholder:"Your password"},null,512),[[i.nr,n.passwordToDelete]]),(0,o._)("button",{class:"validate-button",onClick:e[15]||(e[15]=(...A)=>r.deleteAccount&&r.deleteAccount(...A))},"Delete account")])):(0,o.kq)("",!0)])])}var Ge={setup(){const A=(0,P.pm)();return{toast:A}},data(){return{activePanel:null,currentEmail:"",newEmail:"",confirmEmail:"",currentEmailPassword:"",newPassword:"",confirmPassword:"",emailToDelete:"",passwordToDelete:""}},computed:{username(){const A=JSON.parse(sessionStorage.getItem("user"));return A?A.username:"Guest"},mail(){const A=JSON.parse(sessionStorage.getItem("user"));return A?A.mail:"No email"}},methods:{togglePanel(A){this.activePanel=this.activePanel===A?null:A},async updateEmail(){if(this.newEmail===this.confirmEmail)try{const A=await fetch("https://pointfinder.alwaysdata.net/updatemail",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:this.currentEmail,newmail:this.newEmail})});200===A.status?(console.log(this.newEmail),this.toast.success("Email address successfully updated !",{position:"top-right",timeout:5e3,closeButton:"button"})):this.toast.error("Update email error: please enter an existing email address",{position:"top-right",timeout:5e3,closeButton:"button"})}catch(A){console.error("Erreur:",A)}else this.toast.error("Update email error: email adresses do not match",{position:"top-right",timeout:5e3,closeButton:"button"})},async updatePassword(){if(this.newPassword===this.confirmPassword)try{const A=await fetch("https://pointfinder.alwaysdata.net/updatepwd",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:this.currentEmailPassword,newpwd:this.newPassword})});200===A.status?(console.log(this.newPassword),this.toast.success("Password successfully updated !",{position:"top-right",timeout:5e3,closeButton:"button"})):this.toast.error("Update password error: please verify the email you entered",{position:"top-right",timeout:5e3,closeButton:"button"})}catch(A){console.error("Erreur:",A)}else this.toast.error("Update password error: passwords do not match",{position:"top-right",timeout:5e3,closeButton:"button"})},async deleteAccount(){try{const A=await fetch("https://pointfinder.alwaysdata.net/inactiveuser",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:this.emailToDelete,password:this.passwordToDelete})});200===A.status?(console.log("Compte suspendu"),this.logout()):console.log("Erreur de suspension de compte")}catch(A){console.error("Erreur:",A)}},redirectHomePage(){this.$router.push({path:"/"})},logout(){sessionStorage.removeItem("user"),this.$router.push({path:"/"})}}};const Ue=(0,a.Z)(Ge,[["render",Pe]]);var Oe=Ue;const He={class:"admin-page-container"},_e=(0,o._)("img",{class:"user-image",src:Me},null,-1),Fe={class:"user-info"},Re=["onClick"];function xe(A,e,t,i,s,a){return(0,o.wg)(),(0,o.iD)("div",He,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.users,(A=>((0,o.wg)(),(0,o.iD)("div",{class:"user-card",key:A.mail},[_e,(0,o._)("div",Fe,[(0,o._)("h3",null,(0,g.zw)(A.login),1),(0,o._)("p",null,(0,g.zw)(A.mail),1)]),(0,o._)("button",{class:"delete-btn",onClick:e=>a.deleteUser(A.mail,A.password)},"Delete User",8,Re)])))),128))])}var Ke={data(){return{users:[]}},mounted(){this.fetchUsers()},methods:{async fetchUsers(){try{const A=await fetch("https://pointfinder.alwaysdata.net/allusers",{method:"GET",headers:{"Content-Type":"application/json"}});if(200===A.status){const e=await A.json();console.log(e)}else console.log("Erreur lors de la récupération des utilisateurs")}catch(A){console.error("Erreur :",A)}},deleteUser(A){console.log(`Suppression de l'utilisateur ${A}`)}}};const Ne=(0,a.Z)(Ke,[["render",xe]]);var Le=Ne,Ve=[{path:"/",name:"Home",component:re},{path:"/sign",name:"Sign",component:O},{path:"/map",name:"Map",component:ue},{path:"/profil",name:"Profil",component:Oe},{path:"/admin",name:"Admin",component:Le}],Xe=(0,d.p7)({history:(0,d.PO)("/"),routes:Ve});Xe.beforeEach((function(A,e,t){var i=sessionStorage.getItem("user");"/sign"===A.path||"/"===A.path||i?"/sign"===A.path&&i?t("/map"):t():t("/sign")}));var Ze=Xe;t(343);(0,i.ri)(l).use(Ze).use(P.ZP,{transition:"Vue-Toastification__bounce",maxToasts:1}).mount("#app")},226:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAM4SURBVHic7d29alRBHIbxJ5hGSEA0id9Y2CjaWFlYKX4EMZfgJeg1KFprKXYWVtqphSAq1haCKWInqAjRFArRkICuxdmFRdaNmz0zc2bO84OBQEjyn33fGZZk2YAkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSWq6iZq+z35gATgDHABmgK/AB+AZ8AT4UtPPaovdwCXgHHAQmAVWgE/Ac+Ax8DnZdF37gLvABtAZsn4Ct4BdacbMygxwG1hj+GO6AdwB9qYZE04By0MGHLQ+AidTDJuJE8B7RntMV4DTsQe9CKyPOGhvrQHzsQfOwDybn/p/rXWqTKI4Cnzf4qCWYLBxwu+tb8CRGMO+GHPQ/tYuxBi44c4zfvi99SrGsHUM6k1QqePk/73Ohhz4fs3DtvkmqPPk9697oQaeoHrGWffAbbwJQpz83gr2+5bZQAO37SYIdfL7184Qgx8PPHQbboKQJ79/HQsx/OEIg5d8E8Q4+b11KMQGpoDfkTZQ2k0Q6+R3gF/A9lAbeRNpEyXdBDFPfgd4HXIzNyJupISbIObJ761rITe0B/gReUO53gSxT34HWKX6M3JQNyNvKsebIMXJ7wDXY2xuEniZYHO53AQpTn6H6m80kxH2B1S/FFoMvKEcb4JUJ3+RKpOoZoG3Yw5e0k2Q6uQvUT03S8ISVC7QwvB72l6CVoff09YSGH6ftpXA8AdoSwkMf4jSS2D4/6HUEhj+CEorgeFvQSklMPwx5F4Cw69BriUw/BrlVgLDDyCXEhh+QE0vgeFH0NQSGH5ETSuB4SfQlBIYfkKpS2D4DTBHutcYpnoN31wtj1xBUt0EnvwGKb0ESyR8W7dclFoCwx9BaSUw/C0opQSGP4bcS2D4Nci1BIZfo9xKYPgB5FICww+o6SUw/AiaWgLDj6hpJTD8BJpSAsNPKHUJDL8BUpXA8BskdgkMv4FilcDwGyx0CQw/A6FKYPgZqbsEhp+hukpg+Bkb99XGvnq3ANPAI0YP/ymwI8G8CmAbcJXqP2ptFvwycKX7NSrMNHAZeAi8o3p//dXuxw+6n5tKNp0kSZIkSZIkSZIkSZIkSZIkSZIkSZIkSdIAfwCHj0fOYebyPAAAAABJRU5ErkJggg=="},453:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOwAAADsAEnxA+tAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAnFJREFUeJzt3b1qFFEYh/HHjyhq4QUI3oOI9noNVjaKGjUXY5MmZbqICtrYCzYWXoCIhZBWBBsbxV0LGzFgZnbmvHPOeZ8fbJ0Z/s9+ZSdZkCRJkiRJkiRJkiRJUldOLH0AA5wH7gI3gYvAB+Ap8G7BY1KQq8AhsP7ntgJ2ga3lDk2lXQK+cHT8v28vMYJu7fL/8Y2gcx8ZFsAaeA2cXeYwVcoPhgfgI0GHxozvI0GHNgnACDqyaQBG0IkpARhBB6YGYASNmyMAI2jYXAEYQaPmDMAIGjR3AEbQmBIBGEFDSgVgBI1YUTYCPzuo3HHXAhhB555TPgAjqNgVxn8kbASduUf51wJGULn7wC9iIvDdQaWMQEYgIxBGIIxAGIEwAmEEwgiEEQgjEEYgjEAYgTACYQTCCIQRCCMQRiDgEXFXGx/Qxr/kTScygttB56SRop4O3kadkMaLiOB72NmMdHLpA6hAxPPzKuBnaAMPiHkKeBN1Qhou8kXgraBz0kCPiRt/P+icNFDUw/4aeAGcjjktDbGN46fl+Ik5fmKOn5jjJ7ZN3Fs9x6+M4yfm+Ik5fmKOn5jjJ/YQx0/L8RNz/MQcPzHHT8zxE3P8xCIv4HT8yjh+YjvEjf8Mx6/KdeAnjp/WKxw/tW84flpbOH5qZyg7vq/2K1cyAMdvQKkAHL8RJQJw/IbMHYDjN2bOABy/QXMF4PiNmiMAx2/Y1AAcv3FTAnD8DmwagON34hTj/67f3+135jPe81Pbw3t+apeBrzh+ateAQ44OvwKe4PiTtfBNFheAO8AN4BzwiT/fwvF+yYOSJEmSJEmSJEmSJEmSqvQbrEcvieO83scAAAAASUVORK5CYII="}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return A[i](s,s.exports,t),s.exports}t.m=A,function(){var A=[];t.O=function(e,i,o,s){if(!i){var a=1/0;for(d=0;d<A.length;d++){i=A[d][0],o=A[d][1],s=A[d][2];for(var n=!0,r=0;r<i.length;r++)(!1&s||a>=s)&&Object.keys(t.O).every((function(A){return t.O[A](i[r])}))?i.splice(r--,1):(n=!1,s<a&&(a=s));if(n){A.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=A.length;d>0&&A[d-1][2]>s;d--)A[d]=A[d-1];A[d]=[i,o,s]}}(),function(){t.d=function(A,e){for(var i in e)t.o(e,i)&&!t.o(A,i)&&Object.defineProperty(A,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){t.p="/"}(),function(){var A={143:0};t.O.j=function(e){return 0===A[e]};var e=function(e,i){var o,s,a=i[0],n=i[1],r=i[2],l=0;if(a.some((function(e){return 0!==A[e]}))){for(o in n)t.o(n,o)&&(t.m[o]=n[o]);if(r)var d=r(t)}for(e&&e(i);l<a.length;l++)s=a[l],t.o(A,s)&&A[s]&&A[s][0](),A[s]=0;return t.O(d)},i=self["webpackChunkpointfinder"]=self["webpackChunkpointfinder"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(11)}));i=t.O(i)})();
//# sourceMappingURL=app.8d9586f0.js.map