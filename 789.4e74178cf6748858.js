"use strict";(self.webpackChunkKristofPage=self.webpackChunkKristofPage||[]).push([[789],{789:(B,m,a)=>{a.r(m),a.d(m,{OrdersModule:()=>I});var r=a(9808),g=a(3902),M=a(9476),e=a(1223),c=a(63);let u=(()=>{class n{constructor(){this._modals=[]}generateModal(t){this._modals.push(t),console.log(this._modals)}destroyModal(t){this._modals=this._modals.filter(o=>o!==this.getModal(t))}open(t){const o=this.getModal(t);null==o||o.isOpen$.next(!0)}close(t){const o=this.getModal(t);null==o||o.isOpen$.next(!1)}getModal(t){return this._modals.find(o=>o.modalName===t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var b=a(2332);let _=(()=>{class n{constructor(t){this.cdr=t,this.subs=[]}set name(t){this._name=t}set title(t){this._title=t}ngOnInit(){}get name(){return this._name}get title(){return this._title}ngOnDestroy(){for(let t=0;t<this.subs.length;t++)this.subs[t].unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO))},n.\u0275dir=e.lG2({type:n,inputs:{name:"name",title:"title"}}),n})();var f=a(1135);function v(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),e._uU(4),e.qZA(),e.TgZ(5,"button",5),e.NdJ("click",function(){return e.CHM(t),e.oxw().close()}),e._uU(6," X "),e.qZA()(),e.TgZ(7,"div",6),e.Hsn(8),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.title," ")}}const w=["*"];let h=(()=>{class n{constructor(t,o){this._cdr=t,this._modalService=o,this.title="Testowy tytu\u0142",this.isOpen=new e.vpe,this.subs=[],this.isOpen$=new f.X(!1)}set modalName(t){t&&(this._modalName=t,this._modalService.generateModal(this))}ngOnInit(){this.subs.push(this.isOpen$.subscribe(t=>{this.isOpen.emit(t)}))}get modalName(){return this._modalName}close(){this._modalService.close(this.modalName)}ngOnDestroy(){this._modalService.destroyModal(this.modalName);for(let t=0;t<this.subs.length;t++)this.subs[t].unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(u))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-base-modal"]],inputs:{title:"title",modalName:"modalName"},outputs:{isOpen:"isOpen"},ngContentSelectors:w,decls:2,vars:3,consts:[["class","modal modal__backdrop",4,"ngIf"],[1,"modal","modal__backdrop"],[1,"modal__wrapper"],[1,"modal__header"],[1,"modal__header__title"],[1,"modal__header__button",3,"click"],[1,"modal__content"]],template:function(t,o){1&t&&(e.F$t(),e.YNc(0,v,9,1,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,o.isOpen$))},directives:[r.O5],pipes:[r.Ov],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box;font-family:"DIN 2014",sans-serif;margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-bottom:0}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}li[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{outline:none}a[_ngcontent-%COMP%]{text-decoration:none;color:#3b3b3b;line-height:initial}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:0;outline:0}p[_ngcontent-%COMP%]{margin-bottom:0}button[_ngcontent-%COMP%]{border:0;outline:0;background-color:transparent;padding:0;margin:0}@keyframes pulse{0%{background-color:#a5a5a51a}50%{background-color:#a5a5a54d}to{background-color:#a5a5a51a}}@font-face{font-family:PRFont;src:url(pr-font.287a98fde3815eca.ttf) format("truetype"),url(pr-font.9d5c244f608d2f5c.eot) format("embedded-opentype"),url(pr-font.58a4f94bb4082127.svg) format("svg"),url(pr-font.9b5407e08210e199.woff) format("woff")}.pr[_ngcontent-%COMP%]{display:inline-block;font: 16px/1 PRFont!important;font-weight:400;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pr-edit[_ngcontent-%COMP%]:before{content:"\\e905"}.pr-delete[_ngcontent-%COMP%]:before{content:"\\e9ac"}.pr-add[_ngcontent-%COMP%]:before{content:"\\ea0a"}.pr-angle[_ngcontent-%COMP%]:before{content:"\\e933"}.modal__backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1024;display:flex;justify-content:center;align-items:center}.modal__wrapper[_ngcontent-%COMP%]{min-width:300px;background:#eff6fd;max-width:calc(100vh - 32px);border-radius:4px}.modal__header[_ngcontent-%COMP%]{width:100%;height:32px;padding:4px;display:flex;justify-content:space-between;align-items:center}.modal__header__button[_ngcontent-%COMP%]{cursor:pointer}'],changeDetection:0}),n})(),P=(()=>{class n extends _{constructor(t){super(t),this.cdr=t}ngOnInit(){}save(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-confirmation-modal"]],features:[e.qOj],decls:3,vars:2,consts:[[3,"modalName","title"]],template:function(t,o){1&t&&(e.TgZ(0,"app-base-modal",0)(1,"div"),e._uU(2,"test"),e.qZA()()),2&t&&e.Q6J("modalName",o.name)("title",o.title)},directives:[h],styles:[""],changeDetection:0}),n})();var l=a(2382);function y(n,i){if(1&n&&(e.TgZ(0,"span",8),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.selectedOption[t.internalConfig.label]," ")}}function x(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"li",9),e.NdJ("click",function(){const d=e.CHM(t).$implicit;return e.oxw().select(d)}),e.TgZ(1,"span"),e._uU(2),e.qZA()()}if(2&n){const t=i.$implicit,o=e.oxw();e.xp6(2),e.Oqu(t[o.internalConfig.label])}}function N(n,i){1&n&&(e.TgZ(0,"span",8),e._uU(1,"Wybierz warto\u015b\u0107"),e.qZA())}let Z=(()=>{class n{constructor(){this.internalConfig={id:"id",label:"name"},this.isOpen$=new f.X(!1),this._isDisable=!1,this.onChange=t=>{},this.onTouch=()=>{}}set options(t){this._options=t}ngOnInit(){if(this.config){console.log(this.config);for(const t of Object.keys(this.config))this.internalConfig[t]=this.config[t]}}set selectedOption(t){this._selectedOption=t}get selectedOption(){return this._selectedOption}get options(){return this._options}get isDisable(){return this._isDisable}select(t){this.isOpen$.next(!1),this.selectedOption=t,this.onChange(t[this.internalConfig.id])}toggle(){this.isOpen$.next(!this.isOpen$.value)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}setDisabledState(t){this.isDisable=t}writeValue(t){this.selectedOption=t}set isDisable(t){this._isDisable=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dropdown"]],inputs:{options:"options",config:"config"},features:[e._Bn([{provide:l.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}])],decls:11,vars:9,consts:[[1,"dropdown"],[1,"dropdown__value",3,"click"],["class","dropdown__value_text",4,"ngIf","ngIfElse"],[1,"pr","pr-angle",3,"ngClass"],[1,"dropdown__list_wrapper",3,"ngClass"],[1,"dropdown__list"],["class","dropdown__list_item",3,"click",4,"ngFor","ngForOf"],["placeholder",""],[1,"dropdown__value_text"],[1,"dropdown__list_item",3,"click"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return o.toggle()}),e.YNc(2,y,2,1,"span",2),e._UZ(3,"i",3),e.ALo(4,"async"),e.qZA(),e.TgZ(5,"div",4),e.ALo(6,"async"),e.TgZ(7,"ul",5),e.YNc(8,x,3,1,"li",6),e.qZA()()(),e.YNc(9,N,2,0,"ng-template",null,7,e.W1O)),2&t){const s=e.MAs(10);e.xp6(2),e.Q6J("ngIf",o.selectedOption)("ngIfElse",s),e.xp6(1),e.Q6J("ngClass",e.lcZ(4,5,o.isOpen$)?"pr-angle--open":"pr-angle--close"),e.xp6(2),e.Q6J("ngClass",e.lcZ(6,7,o.isOpen$)?"dropdown__list_wrapper--open":"dropdown__list_wrapper--close"),e.xp6(3),e.Q6J("ngForOf",o.options)}},directives:[r.O5,r.mk,r.sg],pipes:[r.Ov],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box;font-family:"DIN 2014",sans-serif;margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-bottom:0}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}li[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{outline:none}a[_ngcontent-%COMP%]{text-decoration:none;color:#3b3b3b;line-height:initial}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:0;outline:0}p[_ngcontent-%COMP%]{margin-bottom:0}button[_ngcontent-%COMP%]{border:0;outline:0;background-color:transparent;padding:0;margin:0}@keyframes pulse{0%{background-color:#a5a5a51a}50%{background-color:#a5a5a54d}to{background-color:#a5a5a51a}}@font-face{font-family:PRFont;src:url(pr-font.287a98fde3815eca.ttf) format("truetype"),url(pr-font.9d5c244f608d2f5c.eot) format("embedded-opentype"),url(pr-font.58a4f94bb4082127.svg) format("svg"),url(pr-font.9b5407e08210e199.woff) format("woff")}.pr[_ngcontent-%COMP%]{display:inline-block;font: 16px/1 PRFont!important;font-weight:400;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pr-edit[_ngcontent-%COMP%]:before{content:"\\e905"}.pr-delete[_ngcontent-%COMP%]:before{content:"\\e9ac"}.pr-add[_ngcontent-%COMP%]:before{content:"\\ea0a"}.pr-angle[_ngcontent-%COMP%]:before{content:"\\e933"}.dropdown[_ngcontent-%COMP%]{width:200px;height:28px;position:relative;border:1px solid #5198cf;display:flex;align-items:center;cursor:pointer}.dropdown__value[_ngcontent-%COMP%]{width:100%;padding:4px;display:flex;justify-content:space-between}.dropdown__value_text[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.dropdown__value[_ngcontent-%COMP%]   .pr-angle[_ngcontent-%COMP%]{transition:transform .3s ease-in-out}.dropdown__value[_ngcontent-%COMP%]   .pr-angle--open[_ngcontent-%COMP%]{transform:rotateX(180deg)}.dropdown__list_wrapper[_ngcontent-%COMP%]{position:absolute;width:199px;top:26px;left:0;background:#eff6fd;padding:4px;border:1px solid #4887b8}.dropdown__list_wrapper--open[_ngcontent-%COMP%]{display:block}.dropdown__list_wrapper--close[_ngcontent-%COMP%]{display:none}'],changeDetection:0}),n})();const T=function(){return{label:"model"}};let k=(()=>{class n extends _{constructor(t,o,s,d,O,C){super(C),this.fb=t,this.orderService=o,this.clientsService=s,this.devicesService=d,this.producersService=O,this.cdr=C,this.source=[this.clientsService.getAll(),this.devicesService.getAll(),this.producersService.getAll()],this._formFields={id:[""],deviceId:[""],model:[""],description:[""],comment:[""],accepted:[""],finished:[""],status:[""],manufactureId:[""],clientId:[""],price:[""]}}ngOnInit(){this.orderForm=this.fb.group(this._formFields)}open(t){t&&this.subs.push(this.orderService.getAll().subscribe(o=>this.devicesList=o))}test(){console.log(this.orderForm.value)}save(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.qu),e.Y36(c.Nz),e.Y36(c.ak),e.Y36(c.Ih),e.Y36(c.Tu),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-order-modal"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"title","modalName","isOpen"],[1,"modal"],[3,"formGroup"],["formControlName","id"],[3,"options","formControlName","config"],[3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"app-base-modal",0),e.NdJ("isOpen",function(d){return o.open(d)}),e.TgZ(1,"div",1)(2,"form",2)(3,"div")(4,"div"),e._UZ(5,"input",3),e.qZA(),e.TgZ(6,"div"),e._UZ(7,"app-dropdown",4),e.qZA()(),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.test()}),e._uU(9,"test "),e.qZA()()()()),2&t&&(e.Q6J("title",o.title)("modalName",o.name),e.xp6(2),e.Q6J("formGroup",o.orderForm),e.xp6(5),e.Q6J("options",o.devicesList)("formControlName","deviceId")("config",e.DdM(6,T)))},directives:[h,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,Z],styles:[".modal[_ngcontent-%COMP%]{padding:8px;min-width:720px;min-height:688px}"],changeDetection:0}),n})();const D=[{path:"",component:(()=>{class n extends M.f{constructor(t,o,s){super(t,o),this.cdr=t,this.pageService=o,this._modalService=s,this.tableHeader=[{name:"Nazwa",value:"model"},{name:"Nr. Zam\xf3wienia",value:"id"},{name:"Data",value:"accepted"},{name:"Klient",value:"clientId"},{name:"Kwota \u0141\u0105czna Z\u0141",value:"price"}],this.newOrderModalName="newOrderModal"}ngOnInit(){super.ngOnInit()}test(){console.log("test"),this._modalService.open(this.newOrderModalName)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(c.Nz),e.Y36(u))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-order-page"]],features:[e.qOj],decls:5,vars:6,consts:[[3,"tableHeader","tableData"],[3,"click"],[3,"title","name"]],template:function(t,o){1&t&&(e._UZ(0,"app-table",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return o.test()}),e._uU(2," test open modal"),e.qZA(),e._UZ(3,"app-confirmation-modal",2)(4,"app-new-order-modal",2)),2&t&&(e.Q6J("tableHeader",o.tableHeader)("tableData",o.tableData),e.xp6(3),e.Q6J("title","")("name","confirmationDialog"),e.xp6(1),e.Q6J("title","Dodaj nowe zam\xf3wienie")("name",o.newOrderModalName))},directives:[b.a,P,k],styles:[""],changeDetection:0}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(D)],g.Bz]}),n})();var F=a(6759),p=a(908);let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,p.W]]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,p.W,l.UX]]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,A,F.Y,p.W,J,S]]}),n})()}}]);