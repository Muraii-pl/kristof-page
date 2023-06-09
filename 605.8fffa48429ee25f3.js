"use strict";(self.webpackChunkKristofPage=self.webpackChunkKristofPage||[]).push([[605],{1605:(E,f,a)=>{a.r(f),a.d(f,{ClientsModule:()=>I});var r=a(9808),C=a(3902),g=a(9476),e=a(1223),d=a(63),c=a(4929),_=a(7690),u=a(787),J=a(2039),p=a(2852),m=a(2382),h=a(282),N=a(7145),M=a(3064);function T(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"app-confirmation-modal",9),e.NdJ("actionResult",function(i){return e.CHM(t),e.oxw().close(i)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("name",t.editConfirmModalName)("title","")("mainText","Twoje zmiany nie zostaly napisane. Czy napewno chcesz wyj\u015b\u0107?")}}let v=(()=>{class n extends J.d{constructor(t,o,i){super(o,i),this.clientsService=t,this.cdr=o,this.modalService=i,this.isEditModal=!1}ngOnInit(){this.clientForm=new m.cw({id:new m.NI(""),name:new m.NI(""),firstName:new m.NI(""),lastName:new m.NI(""),phoneNumber:new m.NI(""),email:new m.NI("",[m.kI.email])})}close(t){t===p.F.SAVE?this.save():t===p.F.CANCEL?this.modalService.close(this.name):t===p.F.DISCARD_CHANGES?(this.clientForm.reset(),this.modalService.close(this.name)):this.isEditModal&&this.clientForm.dirty?this.modalService.open(this.editConfirmModalName):this.modalService.close(this.name)}save(){var t;null===(t=this.clientForm.get("name"))||void 0===t||t.patchValue(`${this.clientForm.value.firstName}-${this.clientForm.value.lastName}`),this.subs.push(this.clientsService[this.isEditModal?"put":"post"](this.clientForm.value,this.clientForm.value.id).subscribe(()=>{})),this.clientForm.reset(),this.close(p.F.DISCARD)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.ak),e.Y36(e.sBO),e.Y36(c.Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-client-modal"]],features:[e.qOj],decls:13,vars:25,consts:[[3,"title","modalName","closeModal"],[1,"modal"],[1,"form",3,"formGroup"],[1,"form__array"],[3,"title","type","fControlName","fGroup"],[1,"form__array","form__array--buttons"],[3,"label","size","theme","click"],[3,"label","size","click"],[3,"name","title","mainText","actionResult",4,"ngIf"],[3,"name","title","mainText","actionResult"]],template:function(t,o){1&t&&(e.TgZ(0,"app-base-modal",0),e.NdJ("closeModal",function(s){return o.close(s)}),e.TgZ(1,"div",1)(2,"form",2)(3,"div",3),e._UZ(4,"app-form-input",4)(5,"app-form-input",4),e.qZA(),e.TgZ(6,"div",3),e._UZ(7,"app-form-input",4)(8,"app-form-input",4),e.qZA(),e.TgZ(9,"div",5)(10,"app-primary-button",6),e.NdJ("click",function(){return o.close(o.modalAction.DISCARD)}),e.qZA(),e.TgZ(11,"app-primary-button",7),e.NdJ("click",function(){return o.save()}),e.qZA()()()()(),e.YNc(12,T,1,3,"app-confirmation-modal",8)),2&t&&(e.Q6J("title",o.title)("modalName",o.name),e.xp6(2),e.Q6J("formGroup",o.clientForm),e.xp6(2),e.Q6J("title","Imi\u0119")("type","text")("fControlName","firstName")("fGroup",o.clientForm),e.xp6(1),e.Q6J("title","Nazwisko")("type","text")("fControlName","lastName")("fGroup",o.clientForm),e.xp6(2),e.Q6J("title","Email")("type","text")("fControlName","email")("fGroup",o.clientForm),e.xp6(1),e.Q6J("title","Nr. telefonu")("type","text")("fControlName","phoneNumber")("fGroup",o.clientForm),e.xp6(2),e.Q6J("label","Anuluj")("size","sm")("theme","secondary"),e.xp6(1),e.Q6J("label","Dodaj")("size","sm"),e.xp6(1),e.Q6J("ngIf",o.isEditModal))},directives:[h.u,m._Y,m.JL,m.sg,N.s,M.C,r.O5,u.Y],styles:[".modal[_ngcontent-%COMP%]{padding:8px;min-width:600px;min-height:200px}"],changeDetection:0}),n})();function b(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"app-confirmation-modal",9),e.NdJ("actionResult",function(i){return e.CHM(t),e.oxw().close(i)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("name",t.editConfirmModalName)("title","")("mainText","Twoje zmiany nie zostaly napisane. Czy napewno chcesz wyj\u015b\u0107?")}}let F=(()=>{class n extends v{constructor(t,o,i){super(t,o,i),this.clientsService=t,this.cdr=o,this.modalService=i,this.isEditModal=!0,this.editConfirmModalName="editConfirmModalName"}set userId(t){t&&this.loadData(t)}loadData(t){this.subs.push(this.clientsService.getOne(t).subscribe(o=>{this.clientForm.patchValue(o),this.cdr.detectChanges()}))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.ak),e.Y36(e.sBO),e.Y36(c.Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-client-modal"]],inputs:{userId:"userId"},features:[e.qOj],decls:13,vars:25,consts:[[3,"title","modalName","closeModal"],[1,"modal"],[1,"form",3,"formGroup"],[1,"form__array"],[3,"title","type","fControlName","fGroup"],[1,"form__array","form__array--buttons"],[3,"label","size","theme","click"],[3,"label","size","click"],[3,"name","title","mainText","actionResult",4,"ngIf"],[3,"name","title","mainText","actionResult"]],template:function(t,o){1&t&&(e.TgZ(0,"app-base-modal",0),e.NdJ("closeModal",function(s){return o.close(s)}),e.TgZ(1,"div",1)(2,"form",2)(3,"div",3),e._UZ(4,"app-form-input",4)(5,"app-form-input",4),e.qZA(),e.TgZ(6,"div",3),e._UZ(7,"app-form-input",4)(8,"app-form-input",4),e.qZA(),e.TgZ(9,"div",5)(10,"app-primary-button",6),e.NdJ("click",function(){return o.close(o.modalAction.DISCARD)}),e.qZA(),e.TgZ(11,"app-primary-button",7),e.NdJ("click",function(){return o.save()}),e.qZA()()()()(),e.YNc(12,b,1,3,"app-confirmation-modal",8)),2&t&&(e.Q6J("title",o.title)("modalName",o.name),e.xp6(2),e.Q6J("formGroup",o.clientForm),e.xp6(2),e.Q6J("title","Imi\u0119")("type","text")("fControlName","firstName")("fGroup",o.clientForm),e.xp6(1),e.Q6J("title","Nazwisko")("type","text")("fControlName","lastName")("fGroup",o.clientForm),e.xp6(2),e.Q6J("title","Email")("type","text")("fControlName","email")("fGroup",o.clientForm),e.xp6(1),e.Q6J("title","Nr. telefonu")("type","text")("fControlName","phoneNumber")("fGroup",o.clientForm),e.xp6(2),e.Q6J("label","Anuluj")("size","sm")("theme","secondary"),e.xp6(1),e.Q6J("label","Dodaj")("size","sm"),e.xp6(1),e.Q6J("ngIf",o.isEditModal))},directives:[h.u,m._Y,m.JL,m.sg,N.s,M.C,r.O5,u.Y],styles:[".modal[_ngcontent-%COMP%]{padding:8px;min-width:600px;min-height:200px}"],changeDetection:0}),n})();const Z=[{path:"",component:(()=>{class n extends g.f{constructor(t,o,i){super(t,o,i),this.cdr=t,this.pageService=o,this.modalService=i,this.tableHeader=[{name:"Nazwa",value:"name"},{name:"Imi\u0119",value:"firstName"},{name:"Nazwisko",value:"lastName"},{name:"E-mail",value:"email"},{name:"Nr. Telefonu",value:"phoneNumber"}],this.editModalName="editClientModal",this.newModalName="newClientModal",this.confirmModalName="confirmationModal"}ngOnInit(){super.ngOnInit()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(d.ak),e.Y36(c.Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-clients-page"]],features:[e.qOj],decls:4,vars:10,consts:[[3,"tableHeader","tableData","tableAction"],[3,"title","name","mainText"],[3,"title","name"],[3,"title","name","userId"]],template:function(t,o){1&t&&(e.TgZ(0,"app-table",0),e.NdJ("tableAction",function(s){return o.openModal(s)}),e.qZA(),e._UZ(1,"app-confirmation-modal",1)(2,"app-new-client-modal",2)(3,"app-edit-client-modal",3)),2&t&&(e.Q6J("tableHeader",o.tableHeader)("tableData",o.tableData),e.xp6(1),e.Q6J("title","")("name",o.confirmModalName)("mainText","Czy napewno chcesz usun\u0107 tego clienta?"),e.xp6(1),e.Q6J("title","Dodaj nowego klienta")("name",o.newModalName),e.xp6(1),e.Q6J("title","Edytuj klienta")("name",o.editModalName)("userId",o.itemId))},directives:[_.a,u.Y,v,F],styles:[""],changeDetection:0}),n})()}];let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[C.Bz.forChild(Z)],C.Bz]}),n})();var A=a(6759),x=a(908),y=a(4267);let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,m.UX,x.W,y._]]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,w,A.Y,z,y._]]}),n})()}}]);