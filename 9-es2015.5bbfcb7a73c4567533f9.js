(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{qRw5:function(t,e,i){"use strict";i.r(e),i.d(e,"UsersModule",(function(){return U}));var n=i("ofXK"),r=i("tyNb"),a=i("fXoL");let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Gb({type:t,selectors:[["app-users"]],decls:1,vars:0,template:function(t,e){1&t&&a.Nb(0,"router-outlet")},directives:[r.g],styles:[""]}),t})();var o=i("+0xr"),s=i("l7P3"),l=i("Ja7q"),u=i("CAyM");const{selectAll:d}=u.b.getSelectors(),b=Object(s.o)("users"),f=Object(s.q)(b,d),h=Object(s.q)(b,t=>t.totalCount);var m=i("dr/9"),p=i("Dh3D"),S=i("M9IT"),g=i("kmnG"),w=i("qFsG"),C=i("oWy8"),v=i("bTqV"),x=i("NFeN");function R(t,e){1&t&&(a.Sb(0,"th",15),a.xc(1,"Id"),a.Rb())}function y(t,e){if(1&t&&(a.Sb(0,"td",16),a.xc(1),a.Rb()),2&t){const t=e.$implicit;a.Bb(1),a.zc("",t.id," ")}}function P(t,e){1&t&&(a.Sb(0,"th",15),a.xc(1,"First Name"),a.Rb())}function I(t,e){if(1&t&&(a.Sb(0,"td",16),a.xc(1),a.Rb()),2&t){const t=e.$implicit;a.Bb(1),a.zc(" ",t.firstName," ")}}function D(t,e){1&t&&(a.Sb(0,"th",15),a.xc(1,"Last Name"),a.Rb())}function z(t,e){if(1&t&&(a.Sb(0,"td",16),a.xc(1),a.Rb()),2&t){const t=e.$implicit;a.Bb(1),a.zc("",t.lastName," ")}}function F(t,e){1&t&&(a.Sb(0,"th",15),a.xc(1,"Email"),a.Rb())}function N(t,e){if(1&t&&(a.Sb(0,"td",16),a.xc(1),a.Rb()),2&t){const t=e.$implicit;a.Bb(1),a.zc("",t.email," ")}}function k(t,e){1&t&&(a.Sb(0,"th",15),a.xc(1,"Actions"),a.Rb())}function T(t,e){if(1&t){const t=a.Tb();a.Sb(0,"td",16),a.Sb(1,"button",2),a.Zb("click",(function(){a.oc(t);const i=e.$implicit;return a.dc().onEdit(i)})),a.Sb(2,"mat-icon"),a.xc(3,"edit"),a.Rb(),a.Rb(),a.Rb()}}function $(t,e){1&t&&a.Nb(0,"tr",17)}function j(t,e){1&t&&a.Nb(0,"tr",18)}function B(t,e){1&t&&(a.Sb(0,"div",19),a.xc(1," No users found.\n"),a.Rb())}function O(t,e){1&t&&(a.Sb(0,"div",19),a.xc(1," Loading users...\n"),a.Rb())}const M=function(){return[10,20,50]},Q=[{path:"",component:c,children:[{path:"list",component:(()=>{class t{constructor(t,e,i){this.store=t,this.activatedRoute=e,this.router=i,this.displayedColumns=[],this.currentFilter="",this.defaultSort={active:"id",direction:"asc"},this.defaultPageIndex=0,this.defaultPageSize=10}ngOnInit(){this.users$=this.store.pipe(Object(s.t)(f)),this.loading$=this.store.pipe(Object(s.t)(m.a)),this.totalCount$=this.store.pipe(Object(s.t)(h)),this.users$.subscribe(t=>{this.dataSourceForTable=new o.k(t)}),this.activatedRoute.queryParams.subscribe(t=>{(null==t?void 0:t.sortField)&&(null==t?void 0:t.sortDirection)?this.currentSort={active:t.sortField,direction:t.sortDirection}:this.setCurrentSort(this.defaultSort),(null==t?void 0:t.pageIndex)&&(null==t?void 0:t.pageSize)?(this.currentPageIndex=t.pageIndex,this.currentPageSize=t.pageSize):this.setCurrentPageIndexAndSize(this.defaultPageIndex,this.defaultPageSize),(null==t?void 0:t.filter)&&(this.currentFilter=t.filter),(null==t?void 0:t.sortField)&&(null==t?void 0:t.sortDirection)&&(null==t?void 0:t.pageIndex)&&(null==t?void 0:t.pageSize)&&this.loadUsers()}),this.setDisplayedColumns()}onRefresh(){this.loadUsers()}onMatSortChange(t){this.setCurrentSort(t)}onClear(){this.onFilterChange("")}onPageChange(t){this.setCurrentPageIndexAndSize(t.pageIndex,t.pageSize)}onFilterChange(t){this.currentFilter=t,this.updateQueryParamToUrl({filter:""===t?null:t})}onEdit(t){console.log("Clicked: ",t)}loadUsers(){this.store.dispatch(Object(l.a)({collectionParams:{filter:this.currentFilter,sortDirection:this.currentSort.direction,sortField:this.currentSort.active,pageIndex:this.currentPageIndex,pageSize:this.currentPageSize}}))}setDisplayedColumns(){this.displayedColumns=["id","firstName","lastName","email","actions"]}setCurrentSort(t){this.currentSort=t,this.updateQueryParamToUrl({sortField:t.active,sortDirection:t.direction})}updateQueryParamToUrl(t){this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:t,queryParamsHandling:"merge"})}setCurrentPageIndexAndSize(t,e){this.currentPageIndex=t,this.currentPageSize=e,this.updateQueryParamToUrl({pageIndex:t,pageSize:e})}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(s.h),a.Mb(r.a),a.Mb(r.d))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-users-list"]],viewQuery:function(t,e){var i;1&t&&(a.Ac(p.a,!0),a.sc(S.a,!0)),2&t&&(a.lc(i=a.ac())&&(e.sort=i.first),a.lc(i=a.ac())&&(e.paginator=i.first))},decls:36,vars:24,consts:[["matInput","","appInput","",3,"value","delayedInput"],["mat-icon-button","",3,"disabled","click"],["mat-icon-button","",3,"click"],["mat-table","","matSort","","matSortDisableClear","",1,"w-100",3,"dataSource","matSortActive","matSortDirection","matSortChange"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["matColumnDef","lastName"],["matColumnDef","email"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","row-info",4,"ngIf"],[3,"length","pageIndex","pageSize","pageSizeOptions","page"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],[1,"row-info"]],template:function(t,e){1&t&&(a.xc(0),a.ec(1,"async"),a.Sb(2,"mat-form-field"),a.Sb(3,"mat-label"),a.xc(4,"Search"),a.Rb(),a.Sb(5,"input",0),a.Zb("delayedInput",(function(t){return e.onFilterChange(t)})),a.Rb(),a.Rb(),a.Sb(6,"button",1),a.Zb("click",(function(){return e.onClear()})),a.Sb(7,"mat-icon"),a.xc(8,"clear"),a.Rb(),a.Rb(),a.Sb(9,"button",2),a.Zb("click",(function(){return e.onRefresh()})),a.Sb(10,"mat-icon"),a.xc(11,"refresh"),a.Rb(),a.Rb(),a.Sb(12,"table",3),a.Zb("matSortChange",(function(t){return e.onMatSortChange(t)})),a.Qb(13,4),a.wc(14,R,2,0,"th",5),a.wc(15,y,2,1,"td",6),a.Pb(),a.Qb(16,7),a.wc(17,P,2,0,"th",5),a.wc(18,I,2,1,"td",6),a.Pb(),a.Qb(19,8),a.wc(20,D,2,0,"th",5),a.wc(21,z,2,1,"td",6),a.Pb(),a.Qb(22,9),a.wc(23,F,2,0,"th",5),a.wc(24,N,2,1,"td",6),a.Pb(),a.Qb(25,10),a.wc(26,k,2,0,"th",5),a.wc(27,T,4,0,"td",6),a.Pb(),a.wc(28,$,1,0,"tr",11),a.wc(29,j,1,0,"tr",12),a.Rb(),a.wc(30,B,2,0,"div",13),a.ec(31,"async"),a.wc(32,O,2,0,"div",13),a.ec(33,"async"),a.Sb(34,"mat-paginator",14),a.Zb("page",(function(t){return e.onPageChange(t)})),a.ec(35,"async"),a.Rb()),2&t&&(a.zc("Users (",a.fc(1,15,e.totalCount$),") "),a.Bb(5),a.ic("value",e.currentFilter),a.Bb(1),a.ic("disabled",!e.currentFilter),a.Bb(6),a.ic("dataSource",e.dataSourceForTable)("matSortActive",e.currentSort.active)("matSortDirection",e.currentSort.direction),a.Bb(16),a.ic("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),a.Bb(1),a.ic("matRowDefColumns",e.displayedColumns),a.Bb(1),a.ic("ngIf",0===e.dataSourceForTable.data.length&&!a.fc(31,17,e.loading$)),a.Bb(2),a.ic("ngIf",0===e.dataSourceForTable.data.length&&a.fc(33,19,e.loading$)),a.Bb(2),a.ic("length",a.fc(35,21,e.totalCount$))("pageIndex",e.currentPageIndex)("pageSize",e.currentPageSize)("pageSizeOptions",a.jc(23,M)))},directives:[g.c,g.g,w.b,C.a,v.a,x.a,o.j,p.a,o.c,o.e,o.b,o.g,o.i,n.l,S.a,o.d,p.b,o.a,o.f,o.h],pipes:[n.b],styles:[".row-info[_ngcontent-%COMP%]{height:48px;display:flex;align-items:center;justify-content:center;background:#fff}"]}),t})()},{path:"",redirectTo:"list",pathMatch:"full"}]}];let q=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[r.f.forChild(Q)],r.f]}),t})();var A=i("PCNd");let U=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[n.c,q,A.a]]}),t})()}}]);