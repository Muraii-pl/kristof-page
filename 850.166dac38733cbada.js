"use strict";(self.webpackChunkKristofPage=self.webpackChunkKristofPage||[]).push([[850],{8850:(q,g,l)=>{l.r(g),l.d(g,{OrdersModule:()=>B});var d=l(9808),h=l(3902),N=l(9476),e=l(1223),p=l(63),u=l(4929),Z=l(7690),_=l(787),P=l(2039),r=l(2382),f=l(2852),C=l(282),O=l(7145),T=l(1135);function A(n,i){if(1&n&&(e.TgZ(0,"span",8),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.selectedOption[t.internalConfig.label]," ")}}function J(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"li",9),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().select(s)}),e.TgZ(1,"span"),e._uU(2),e.qZA()()}if(2&n){const t=i.$implicit,o=e.oxw();e.xp6(2),e.Oqu(t[o.internalConfig.label])}}function F(n,i){1&n&&(e.TgZ(0,"span",8),e._uU(1,"Wybierz warto\u015b\u0107"),e.qZA())}let M=(()=>{class n{constructor(t){this._cdr=t,this.internalConfig={id:"id",label:"name"},this.isOpen$=new T.X(!1),this._isDisable=!1,this.onChange=o=>{},this.onTouch=()=>{}}set options(t){t&&(this._options=t,console.log(this.selectedOption),this.selectedOption&&"number"==typeof this.selectedOption&&(this.selectedOption=this.options.find(o=>o[this.internalConfig.id]===this.selectedOption),this._cdr.detectChanges()))}ngOnInit(){if(this.config)for(const t of Object.keys(this.config))this.internalConfig[t]=this.config[t]}set selectedOption(t){this._selectedOption=t}get selectedOption(){return this._selectedOption}get options(){return this._options}get isDisable(){return this._isDisable}select(t){this.isOpen$.next(!1),this.selectedOption=t,this.onChange(t[this.internalConfig.id])}toggle(){this.isOpen$.next(!this.isOpen$.value)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}setDisabledState(t){this.isDisable=t}writeValue(t){this.selectedOption=t}set isDisable(t){this._isDisable=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dropdown"]],inputs:{options:"options",config:"config"},features:[e._Bn([{provide:r.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}])],decls:11,vars:9,consts:[[1,"dropdown"],[1,"dropdown__value",3,"click"],["class","dropdown__value_text",4,"ngIf","ngIfElse"],[1,"pr","pr-angle",3,"ngClass"],[1,"dropdown__list_wrapper",3,"ngClass"],[1,"dropdown__list"],["class","dropdown__list_item",3,"click",4,"ngFor","ngForOf"],["placeholder",""],[1,"dropdown__value_text"],[1,"dropdown__list_item",3,"click"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return o.toggle()}),e.YNc(2,A,2,1,"span",2),e._UZ(3,"i",3),e.ALo(4,"async"),e.qZA(),e.TgZ(5,"div",4),e.ALo(6,"async"),e.TgZ(7,"ul",5),e.YNc(8,J,3,1,"li",6),e.qZA()()(),e.YNc(9,F,2,0,"ng-template",null,7,e.W1O)),2&t){const a=e.MAs(10);e.xp6(2),e.Q6J("ngIf",o.selectedOption)("ngIfElse",a),e.xp6(1),e.Q6J("ngClass",e.lcZ(4,5,o.isOpen$)?"pr-angle--open":"pr-angle--close"),e.xp6(2),e.Q6J("ngClass",e.lcZ(6,7,o.isOpen$)?"dropdown__list_wrapper--open":"dropdown__list_wrapper--close"),e.xp6(3),e.Q6J("ngForOf",o.options)}},directives:[d.O5,d.mk,d.sg],pipes:[d.Ov],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box;font-family:"DIN 2014",sans-serif;margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-bottom:0}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}li[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{outline:none}a[_ngcontent-%COMP%]{text-decoration:none;color:#3b3b3b;line-height:initial}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:0;outline:0}p[_ngcontent-%COMP%]{margin-bottom:0}button[_ngcontent-%COMP%]{border:0;outline:0;background-color:transparent;padding:0;margin:0}@keyframes pulse{0%{background-color:#a5a5a51a}50%{background-color:#a5a5a54d}to{background-color:#a5a5a51a}}@font-face{font-family:PRFont;src:url(pr-font.287a98fde3815eca.ttf) format("truetype"),url(pr-font.9d5c244f608d2f5c.eot) format("embedded-opentype"),url(pr-font.58a4f94bb4082127.svg) format("svg"),url(pr-font.9b5407e08210e199.woff) format("woff")}.pr[_ngcontent-%COMP%]{display:inline-block;font: 16px/1 PRFont!important;font-weight:400;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pr-edit[_ngcontent-%COMP%]:before{content:"\\e905"}.pr-delete[_ngcontent-%COMP%]:before{content:"\\e9ac"}.pr-add[_ngcontent-%COMP%]:before{content:"\\ea0a"}.pr-angle[_ngcontent-%COMP%]:before{content:"\\e933"}.dropdown[_ngcontent-%COMP%]{width:240px;height:32px;position:relative;border:1px solid #5198cf;display:flex;align-items:center;cursor:pointer;background-color:#fff;border-radius:4px}.dropdown__value[_ngcontent-%COMP%]{width:100%;padding:4px;display:flex;justify-content:space-between}.dropdown__value_text[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.dropdown__value[_ngcontent-%COMP%]   .pr-angle[_ngcontent-%COMP%]{transition:transform .3s ease-in-out}.dropdown__value[_ngcontent-%COMP%]   .pr-angle--open[_ngcontent-%COMP%]{transform:rotateX(180deg)}.dropdown__list_wrapper[_ngcontent-%COMP%]{position:absolute;width:calc(100% + 2px);top:28px;left:-1px;background:#ffffff;border:1px solid #4887b8;border-radius:0 0 4px 4px}.dropdown__list_wrapper--open[_ngcontent-%COMP%]{display:block}.dropdown__list_wrapper--close[_ngcontent-%COMP%]{display:none}.dropdown__list_item[_ngcontent-%COMP%]{padding:4px}.dropdown__list_item[_ngcontent-%COMP%]:hover{background:#deeefa;color:#1b3345}.dropdown__list_item[_ngcontent-%COMP%]:last-child{border-radius:0 0 4px 4px}'],changeDetection:0}),n})(),b=(()=>{class n{constructor(){this.lPosition="top",this.onChange=()=>{},this.onTouch=()=>{}}ngOnInit(){}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}writeValue(t){this.value=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-text-area"]],inputs:{title:"title",lPosition:"lPosition",fControlName:"fControlName",fGroup:"fGroup"},features:[e._Bn([{provide:r.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}])],decls:5,vars:6,consts:[[3,"formGroup"],[1,"form-group__label"],[1,"form-group__textarea",3,"formControlName"]],template:function(t,o){1&t&&(e.ynx(0,0),e.TgZ(1,"div")(2,"label",1),e._uU(3),e.qZA(),e._UZ(4,"textarea",2),e.qZA(),e.BQk()),2&t&&(e.Q6J("formGroup",o.fGroup),e.xp6(1),e.Gre("form-group label-position-",o.lPosition,""),e.xp6(2),e.Oqu(o.title),e.xp6(1),e.Q6J("formControlName",o.fControlName))},directives:[r.JL,r.sg,r.Fj,r.JJ,r.u],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box;font-family:"DIN 2014",sans-serif;margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-bottom:0}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}li[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{outline:none}a[_ngcontent-%COMP%]{text-decoration:none;color:#3b3b3b;line-height:initial}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:0;outline:0}p[_ngcontent-%COMP%]{margin-bottom:0}button[_ngcontent-%COMP%]{border:0;outline:0;background-color:transparent;padding:0;margin:0}@keyframes pulse{0%{background-color:#a5a5a51a}50%{background-color:#a5a5a54d}to{background-color:#a5a5a51a}}@font-face{font-family:PRFont;src:url(pr-font.287a98fde3815eca.ttf) format("truetype"),url(pr-font.9d5c244f608d2f5c.eot) format("embedded-opentype"),url(pr-font.58a4f94bb4082127.svg) format("svg"),url(pr-font.9b5407e08210e199.woff) format("woff")}.pr[_ngcontent-%COMP%]{display:inline-block;font: 16px/1 PRFont!important;font-weight:400;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pr-edit[_ngcontent-%COMP%]:before{content:"\\e905"}.pr-delete[_ngcontent-%COMP%]:before{content:"\\e9ac"}.pr-add[_ngcontent-%COMP%]:before{content:"\\ea0a"}.pr-angle[_ngcontent-%COMP%]:before{content:"\\e933"}.form-group[_ngcontent-%COMP%]{display:flex;width:514px;margin-bottom:16px}.form-group__label[_ngcontent-%COMP%]{font-size:18px;font-weight:500;width:100%}.form-group__textarea[_ngcontent-%COMP%]{font-size:24px;border:1px solid #5AA9E6;border-radius:4px;width:100%;resize:none;min-height:96px}.label-position-top[_ngcontent-%COMP%]{flex-flow:column wrap}.label-position-top[_ngcontent-%COMP%]   .form-group__label[_ngcontent-%COMP%]{margin-bottom:4px}.label-position-left[_ngcontent-%COMP%]{flex-flow:row wrap}'],changeDetection:0}),n})();var v=l(3064);function z(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"app-confirmation-modal",15),e.NdJ("actionResult",function(a){return e.CHM(t),e.oxw().close(a)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("name",t.editConfirmModalName)("title","")("mainText","Twoje zmiany nie zostaly napisane. Czy napewno chcesz wyj\u015b\u0107?")}}const D=function(){return{label:"model",id:"deviceId"}},I=function(){return{label:"model"}};let w=(()=>{class n extends P.d{constructor(t,o,a,s,c,m){super(c,m),this.orderService=t,this.clientsService=o,this.devicesService=a,this.producersService=s,this.cdr=c,this.modalService=m,this.source=[this.clientsService.getAll(),this.devicesService.getAll(),this.producersService.getAll()],this.isEditModal=!1}ngOnInit(){this.orderForm=new r.cw({id:new r.NI({value:"",disabled:!0}),deviceId:new r.NI(""),model:new r.NI(""),description:new r.NI(""),comment:new r.NI(""),manufactureId:new r.NI(""),clientId:new r.NI(""),price:new r.NI("")})}open(t){t&&this.subs.push(this.orderService.getAll().subscribe(o=>this.devicesList=o))}close(t){t===f.F.SAVE?this.save():t===f.F.CANCEL?this.modalService.close(this.name):t===f.F.DISCARD_CHANGES?(this.orderForm.reset(),this.modalService.close(this.name)):this.isEditModal&&this.orderForm.dirty?this.modalService.open(this.editConfirmModalName):this.modalService.close(this.name)}save(){this.subs.push(this.orderService.post(this.orderForm.value).subscribe(t=>{})),this.orderForm.reset(),this.close(f.F.DISCARD)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.Nz),e.Y36(p.ak),e.Y36(p.Ih),e.Y36(p.Tu),e.Y36(e.sBO),e.Y36(u.Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-order-modal"]],features:[e.qOj],decls:26,vars:27,consts:[[3,"title","modalName","isOpen","closeModal"],[1,"modal"],[1,"form",3,"formGroup"],[1,"form__array"],[3,"title","type","fControlName","fGroup"],[1,"form__input_label"],[3,"options","formControlName","config"],["title","Model","type","text","fControlName","model",3,"fGroup"],["title","Kwota","type","text","fControlName","price",3,"fGroup"],["title","Opis","fControlName","description",3,"fGroup"],["title","Komentarz","fControlName","comment",3,"fGroup"],[1,"form__array","form__array--buttons"],[3,"label","size","theme","click"],[3,"label","size","click"],[3,"name","title","mainText","actionResult",4,"ngIf"],[3,"name","title","mainText","actionResult"]],template:function(t,o){1&t&&(e.TgZ(0,"app-base-modal",0),e.NdJ("isOpen",function(s){return o.open(s)})("closeModal",function(s){return o.close(s)}),e.TgZ(1,"div",1)(2,"form",2)(3,"div",3),e._UZ(4,"app-form-input",4),e.TgZ(5,"div")(6,"label",5),e._uU(7,"Urz\u0105dzenie"),e.qZA(),e._UZ(8,"app-dropdown",6),e.qZA()(),e.TgZ(9,"div",3),e._UZ(10,"app-form-input",7)(11,"app-form-input",8),e.qZA(),e.TgZ(12,"div",3)(13,"div")(14,"label",5),e._uU(15,"Firma"),e.qZA(),e._UZ(16,"app-dropdown",6),e.qZA(),e._UZ(17,"div"),e.qZA(),e.TgZ(18,"div",3),e._UZ(19,"app-text-area",9),e.qZA(),e.TgZ(20,"div",3),e._UZ(21,"app-text-area",10),e.qZA(),e.TgZ(22,"div",11)(23,"app-primary-button",12),e.NdJ("click",function(){return o.close(o.modalAction.DISCARD)}),e.qZA(),e.TgZ(24,"app-primary-button",13),e.NdJ("click",function(){return o.save()}),e.qZA()()()()(),e.YNc(25,z,1,3,"app-confirmation-modal",14)),2&t&&(e.Q6J("title",o.title)("modalName",o.name),e.xp6(2),e.Q6J("formGroup",o.orderForm),e.xp6(2),e.Q6J("title","Numer zam\xf3wienia")("type","text")("fControlName","id")("fGroup",o.orderForm),e.xp6(4),e.Q6J("options",o.devicesList)("formControlName","deviceId")("config",e.DdM(25,D)),e.xp6(2),e.Q6J("fGroup",o.orderForm),e.xp6(1),e.Q6J("fGroup",o.orderForm),e.xp6(5),e.Q6J("options",o.producersList)("formControlName","manufactureId")("config",e.DdM(26,I)),e.xp6(1),e.Udp("width","240px"),e.xp6(2),e.Q6J("fGroup",o.orderForm),e.xp6(2),e.Q6J("fGroup",o.orderForm),e.xp6(2),e.Q6J("label","Anuluj")("size","sm")("theme","secondary"),e.xp6(1),e.Q6J("label","Dodaj")("size","sm"),e.xp6(1),e.Q6J("ngIf",o.isEditModal))},directives:[C.u,r._Y,r.JL,r.sg,O.s,M,r.JJ,r.u,b,v.C,d.O5,_.Y],styles:[".modal[_ngcontent-%COMP%]{padding:8px;min-width:600px;min-height:480px}"],changeDetection:0}),n})();function Q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"app-confirmation-modal",15),e.NdJ("actionResult",function(a){return e.CHM(t),e.oxw().close(a)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("name",t.editConfirmModalName)("title","")("mainText","Twoje zmiany nie zostaly napisane. Czy napewno chcesz wyj\u015b\u0107?")}}const G=function(){return{label:"model",id:"deviceId"}},U=function(){return{label:"model"}};let E=(()=>{class n extends w{constructor(t,o,a,s,c,m){super(t,o,a,s,c,m),this.orderService=t,this.clientsService=o,this.devicesService=a,this.producersService=s,this.cdr=c,this.modalService=m,this.isEditModal=!0,this.editConfirmModalName="editConfirmModalName"}set orderId(t){t&&this.loadData(t)}loadData(t){this.subs.push(this.orderService.getOne(t).subscribe(o=>{this.orderForm.patchValue(o),this.cdr.detectChanges()}))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.Nz),e.Y36(p.ak),e.Y36(p.Ih),e.Y36(p.Tu),e.Y36(e.sBO),e.Y36(u.Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-order-modal"]],inputs:{orderId:"orderId"},features:[e.qOj],decls:26,vars:27,consts:[[3,"title","modalName","isOpen","closeModal"],[1,"modal"],[1,"form",3,"formGroup"],[1,"form__array"],[3,"title","type","fControlName","fGroup"],[1,"form__input_label"],[3,"options","formControlName","config"],["title","Model","type","text","fControlName","model",3,"fGroup"],["title","Kwota","type","text","fControlName","price",3,"fGroup"],["title","Opis","fControlName","description",3,"fGroup"],["title","Komentarz","fControlName","comment",3,"fGroup"],[1,"form__array","form__array--buttons"],[3,"label","size","theme","click"],[3,"label","size","click"],[3,"name","title","mainText","actionResult",4,"ngIf"],[3,"name","title","mainText","actionResult"]],template:function(t,o){1&t&&(e.TgZ(0,"app-base-modal",0),e.NdJ("isOpen",function(s){return o.open(s)})("closeModal",function(s){return o.close(s)}),e.TgZ(1,"div",1)(2,"form",2)(3,"div",3),e._UZ(4,"app-form-input",4),e.TgZ(5,"div")(6,"label",5),e._uU(7,"Urz\u0105dzenie"),e.qZA(),e._UZ(8,"app-dropdown",6),e.qZA()(),e.TgZ(9,"div",3),e._UZ(10,"app-form-input",7)(11,"app-form-input",8),e.qZA(),e.TgZ(12,"div",3)(13,"div")(14,"label",5),e._uU(15,"Firma"),e.qZA(),e._UZ(16,"app-dropdown",6),e.qZA(),e._UZ(17,"div"),e.qZA(),e.TgZ(18,"div",3),e._UZ(19,"app-text-area",9),e.qZA(),e.TgZ(20,"div",3),e._UZ(21,"app-text-area",10),e.qZA(),e.TgZ(22,"div",11)(23,"app-primary-button",12),e.NdJ("click",function(){return o.close(o.modalAction.DISCARD)}),e.qZA(),e.TgZ(24,"app-primary-button",13),e.NdJ("click",function(){return o.save()}),e.qZA()()()()(),e.YNc(25,Q,1,3,"app-confirmation-modal",14)),2&t&&(e.Q6J("title",o.title)("modalName",o.name),e.xp6(2),e.Q6J("formGroup",o.orderForm),e.xp6(2),e.Q6J("title","Numer zam\xf3wienia")("type","text")("fControlName","id")("fGroup",o.orderForm),e.xp6(4),e.Q6J("options",o.devicesList)("formControlName","deviceId")("config",e.DdM(25,G)),e.xp6(2),e.Q6J("fGroup",o.orderForm),e.xp6(1),e.Q6J("fGroup",o.orderForm),e.xp6(5),e.Q6J("options",o.producersList)("formControlName","manufactureId")("config",e.DdM(26,U)),e.xp6(1),e.Udp("width","240px"),e.xp6(2),e.Q6J("fGroup",o.orderForm),e.xp6(2),e.Q6J("fGroup",o.orderForm),e.xp6(2),e.Q6J("label","Anuluj")("size","sm")("theme","secondary"),e.xp6(1),e.Q6J("label","Dodaj")("size","sm"),e.xp6(1),e.Q6J("ngIf",o.isEditModal))},directives:[C.u,r._Y,r.JL,r.sg,O.s,M,r.JJ,r.u,b,v.C,d.O5,_.Y],styles:[".modal[_ngcontent-%COMP%]{padding:8px;min-width:600px;min-height:480px}"],changeDetection:0}),n})();const k=[{path:"",component:(()=>{class n extends N.f{constructor(t,o,a){super(t,o,a),this.cdr=t,this.pageService=o,this.modalService=a,this.tableHeader=[{name:"Nazwa",value:"model"},{name:"Nr. Zam\xf3wienia",value:"id"},{name:"Data",value:"accepted"},{name:"Klient",value:"clientId"},{name:"Kwota \u0141\u0105czna Z\u0141",value:"price"}],this.newModalName="newOrderModal",this.editModalName="editOrderModal",this.confirmModalName="deleteOrderModal"}ngOnInit(){super.ngOnInit()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(p.Nz),e.Y36(u.Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-order-page"]],features:[e.qOj],decls:4,vars:10,consts:[[3,"tableHeader","tableData","tableAction"],[3,"title","name","mainText"],[3,"title","name"],[3,"title","name","orderId"]],template:function(t,o){1&t&&(e.TgZ(0,"app-table",0),e.NdJ("tableAction",function(s){return o.openModal(s)}),e.qZA(),e._UZ(1,"app-confirmation-modal",1)(2,"app-new-order-modal",2)(3,"app-edit-order-modal",3)),2&t&&(e.Q6J("tableHeader",o.tableHeader)("tableData",o.tableData),e.xp6(1),e.Q6J("title","")("name",o.confirmModalName)("mainText","Czy napewno chcesz usun\u0107 to zam\xf3wienie?"),e.xp6(1),e.Q6J("title","Dodaj nowe zam\xf3wienie")("name",o.newModalName),e.xp6(1),e.Q6J("title","Edytuj zam\xf3wienie")("name",o.editModalName)("orderId",o.itemId))},directives:[Z.a,_.Y,w,E],styles:[""],changeDetection:0}),n})()}];let S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.Bz.forChild(k)],h.Bz]}),n})();var Y=l(6759),x=l(908),y=l(4267),j=l(2958);let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,j.W,r.UX,y._,x.W]]}),n})(),B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,S,Y.Y,x.W,y._,R]]}),n})()}}]);