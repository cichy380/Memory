!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{VY05:function(e,i,a){"use strict";a.r(i),a.d(i,"GameModule",(function(){return tt}));var c=a("ofXK"),o=a("PCNd"),r=a("tyNb"),s=a("quSY"),d=a("/uUt"),p=a("l7P3"),l=a("6s34"),b=function(t){return t.game},u=Object(p.p)(b,(function(t){return t.deck})),m=Object(p.p)(b,(function(t){return t.flipped})),f=Object(p.p)(b,(function(t){return t.matched})),g=Object(p.p)(b,(function(t){return t.justFlippedIdx})),h=Object(p.p)(b,(function(t){return t.move}));function v(t,e){return t.toString()===e.toString()}var y=a("R0Ic"),_=Object(y.m)("listAnimation",[Object(y.l)("* => *",[Object(y.g)(":enter",[Object(y.k)({opacity:0}),Object(y.i)("60ms",Object(y.e)("600ms ease-out",Object(y.k)({opacity:1})))],{optional:!0}),Object(y.g)(":leave",Object(y.e)("200ms",Object(y.k)({opacity:0})),{optional:!0})])]),O=a("AytR");function P(t){var e=new Audio("".concat(O.a.assetsPath,"/audio/").concat(t));e.load(),e.play()}var C,k,w,j=a("fXoL"),M=a("qXsx"),x=a("tgey"),A=a("hZJE"),Q=a("NFeN"),S=function(t){return{"game-heading-icon_active":t}},z=function(t){return{"game-heading-text_active":t}},F=((C=function(){function e(){t(this,e)}return n(e,[{key:"matched",set:function(t){var e=this;this.innerMatched=t,this.justMatched=!0,setTimeout((function(){return e.justMatched=!1}),1e3)},get:function(){return this.innerMatched}}]),e}()).\u0275fac=function(t){return new(t||C)},C.\u0275cmp=j.Eb({type:C,selectors:[["app-game-heading"]],inputs:{matched:"matched",move:"move",cards:"cards"},decls:8,vars:8,consts:[[1,"game-heading-icon","mr-1"],[1,"game-heading-text","mr-3"],[1,"game-heading-icon","mr-1",3,"ngClass"],[1,"game-heading-text","mr-3",3,"ngClass"]],template:function(t,e){1&t&&(j.Qb(0,"mat-icon",0),j.vc(1,"loop"),j.Pb(),j.Qb(2,"span",1),j.vc(3),j.Pb(),j.Qb(4,"mat-icon",2),j.vc(5,"emoji_events"),j.Pb(),j.Qb(6,"span",3),j.vc(7),j.Pb()),2&t&&(j.Ab(3),j.xc("#",e.move,""),j.Ab(1),j.gc("ngClass",j.ic(4,S,e.justMatched&&e.matched)),j.Ab(2),j.gc("ngClass",j.ic(6,z,e.justMatched&&e.matched)),j.Ab(1),j.wc(e.matched+"/"+e.cards/2))},directives:[Q.a,c.i],styles:["[_nghost-%COMP%]{display:flex;align-items:center}.game-heading-icon[_ngcontent-%COMP%]{opacity:.33;transition:opacity .25s ease .3s,color .25s ease .3s}.game-heading-icon_active[_ngcontent-%COMP%]{opacity:1;color:#fdd835}.game-heading-text[_ngcontent-%COMP%]{font-weight:500;font-size:16px;transition:color .25s ease .3s}.game-heading-text_active[_ngcontent-%COMP%]{color:#fbc02d}"]}),C),R=a("zkoq"),I=function(t){return{"animation-duration.ms":t}},$=((k=function e(){t(this,e)}).\u0275fac=function(t){return new(t||k)},k.\u0275cmp=j.Eb({type:k,selectors:[["app-pie-timer"]],inputs:{time:"time"},decls:4,vars:9,consts:[[1,"pie-timer","bg-body"],[1,"pie","spinner","bg-accent",3,"ngStyle"],[1,"pie","filler","bg-accent",3,"ngStyle"],[1,"mask",3,"ngStyle"]],template:function(t,e){1&t&&(j.Qb(0,"div",0),j.Lb(1,"div",1),j.Lb(2,"div",2),j.Lb(3,"div",3),j.Pb()),2&t&&(j.Ab(1),j.gc("ngStyle",j.ic(3,I,e.time)),j.Ab(1),j.gc("ngStyle",j.ic(5,I,e.time)),j.Ab(1),j.gc("ngStyle",j.ic(7,I,e.time)))},directives:[c.l],styles:[".pie-timer[_ngcontent-%COMP%]{width:24px;height:24px;position:relative;margin:40px auto}.pie-timer[_ngcontent-%COMP%], .pie-timer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.pie[_ngcontent-%COMP%]{width:50%;height:100%;transform-origin:100% 50%;position:absolute}.spinner[_ngcontent-%COMP%]{border-radius:100% 0 0 100%/50% 0 0 50%;z-index:200;border-right:0;-webkit-animation:rota 0s linear 1;animation:rota 0s linear 1}.filler[_ngcontent-%COMP%]{border-radius:0 100% 100% 0/0 50% 50% 0;left:50%;opacity:0;z-index:100;animation:opa 0s steps(1) 1 reverse;border-left:0}.mask[_ngcontent-%COMP%]{width:50%;height:100%;position:absolute;background:inherit;opacity:1;z-index:300;-webkit-animation:opa 0s steps(1) 1;animation:opa 0s steps(1) 1}@-webkit-keyframes rota{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rota{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes opa{0%{opacity:1}50%,to{opacity:0}}@keyframes opa{0%{opacity:1}50%,to{opacity:0}}"]}),k),D=a("Wp6s"),T=a("FKr1"),L=function(t){return{"card-container_matched":t}},E=function(t){return{"card-wrapper_disabled":t}},N=function(t){return{card_flipped:t}},Y=((w=function e(){t(this,e)}).\u0275fac=function(t){return new(t||w)},w.\u0275cmp=j.Eb({type:w,selectors:[["app-card"]],inputs:{card:"card",flipped:"flipped",matched:"matched",disabled:"disabled"},decls:9,vars:12,consts:[[1,"card-container",3,"ngClass"],[1,"card-wrapper",3,"ngClass"],[1,"card",3,"ngClass"],["matRipple","",1,"card__back",3,"matRippleDisabled"],[1,"card__icon"],[1,"card__face"],[3,"className"]],template:function(t,e){1&t&&(j.Qb(0,"div",0),j.Qb(1,"div",1),j.Qb(2,"div",2),j.Qb(3,"mat-card",3),j.Qb(4,"mat-icon",4),j.vc(5,"lightbulb_outline"),j.Pb(),j.Pb(),j.Qb(6,"mat-card",5),j.Qb(7,"mat-icon",6),j.vc(8),j.Pb(),j.Pb(),j.Pb(),j.Pb(),j.Pb()),2&t&&(j.gc("ngClass",j.ic(6,L,e.matched)),j.Ab(1),j.gc("ngClass",j.ic(8,E,e.disabled&&!e.flipped)),j.Ab(1),j.gc("ngClass",j.ic(10,N,e.flipped)),j.Ab(1),j.gc("matRippleDisabled",e.disabled||e.flipped),j.Ab(4),j.gc("className","card__icon card-color_"+e.card.color),j.Ab(1),j.xc(" ",e.card.suit," "))},directives:[c.i,D.a,T.f,Q.a],styles:["[_nghost-%COMP%]{height:100%;width:100%}.card-wrapper[_ngcontent-%COMP%]{perspective:1000px;opacity:1;transition:opacity .3s}.card-wrapper_disabled[_ngcontent-%COMP%]{opacity:.5}.card[_ngcontent-%COMP%]{transform-style:preserve-3d;position:relative;transform:rotateY(0deg);transition:transform .3s}.card_flipped[_ngcontent-%COMP%]{transform:rotateY(180deg);transition-duration:.6s}.card-container_matched[_ngcontent-%COMP%]{-webkit-animation:ScaleAnimation .5s ease .3s;animation:ScaleAnimation .5s ease .3s}@-webkit-keyframes ScaleAnimation{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}@keyframes ScaleAnimation{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}.card[_ngcontent-%COMP%], .card-container[_ngcontent-%COMP%], .card-wrapper[_ngcontent-%COMP%], .card__back[_ngcontent-%COMP%], .card__face[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.card__icon[_ngcontent-%COMP%]{height:auto;width:auto;font-size:80px}.card__back[_ngcontent-%COMP%], .card__face[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0}.card__back[_ngcontent-%COMP%]{z-index:2;transform:rotateY(0deg);background-color:#90a4ae;color:hsla(0,0%,100%,.1)}.card__face[_ngcontent-%COMP%]{transform:rotateY(180deg);background-color:#fff;color:#455a64}"]}),w);function J(t,e){if(1&t&&j.Lb(0,"app-pie-timer",8),2&t){var n=j.bc(2);j.gc("time",n.moveDelay)}}function X(t,e){if(1&t){var n=j.Rb();j.Qb(0,"mat-grid-tile",9),j.Qb(1,"app-card",10),j.Xb("click",(function(){j.mc(n);var t=e.index;return j.bc(2).onClickCard(t)})),j.Pb(),j.Pb()}if(2&t){var i=e.$implicit,a=e.index,c=j.bc(2);j.Ab(1),j.gc("card",i)("flipped",c.flipped[a])("matched",c.matched[a])("disabled",c.flippingDisabled)}}function K(t,e){if(1&t){var n=j.Rb();j.Qb(0,"div"),j.Qb(1,"app-page-header"),j.Lb(2,"app-page-header-back",1),j.Lb(3,"app-game-heading",2),j.cc(4,"async"),j.uc(5,J,1,1,"app-pie-timer",3),j.Pb(),j.Qb(6,"div",4),j.Qb(7,"div",5),j.Qb(8,"mat-grid-list",6),j.Xb("resize",(function(t){return j.mc(n),j.bc().onResize(t)}),!1,j.lc),j.uc(9,X,2,4,"mat-grid-tile",7),j.Pb(),j.Pb(),j.Pb(),j.Pb()}if(2&t){var i=e.ngIf,a=j.bc();j.Ab(2),j.gc("link","/"),j.Ab(1),j.gc("move",j.dc(4,8,a.move$))("matched",a.matchedPairs)("cards",i.length),j.Ab(2),j.gc("ngIf",a.timeForRemember),j.Ab(3),j.gc("cols",a.columns)("@listAnimation",i.length),j.Ab(1),j.gc("ngForOf",i)}}var q,G,H,W,U=((G=function(){function e(n,i){t(this,e),this.store=n,this.notification=i,this.moveDelay=3e3,this.columns=e.getColumns(window.innerWidth),this.subscription=new s.a,this.flippingDisabled=!1,this.deck$=n.pipe(Object(p.s)(u)),this.flipped$=n.pipe(Object(p.s)(m),Object(d.a)((function(t,e){return v(t,e)}))),this.matched$=n.pipe(Object(p.s)(f),Object(d.a)((function(t,e){return v(t,e)}))),this.move$=n.pipe(Object(p.s)(h),Object(d.a)()),this.justFlippedCardIdx$=n.pipe(Object(p.s)(g))}return n(e,[{key:"onClickCard",value:function(t){!1===this.flipped[t]&&!1===this.flippingDisabled&&this.store.dispatch(Object(l.a)({cardIndex:t}))}},{key:"onMatchJustFlippedCard",value:function(){var t=this;setTimeout((function(){return P("success.flac")}),333),this.matched.every((function(t){return t}))?setTimeout((function(){P("win.wav"),t.notification.showSuccess("All pairs matched!",2600)}),600):(this.timeForRemember=!1,setTimeout((function(){clearTimeout(t.delayTimeout),t.store.dispatch(Object(l.g)())}),500))}},{key:"ngOnInit",value:function(){var t=this;this.subscription.add(this.justFlippedCardIdx$.subscribe((function(e){2===e.length?(t.flippingDisabled=!0,t.timeForRemember=!0,t.delayTimeout=setTimeout((function(){t.store.dispatch(Object(l.g)()),t.timeForRemember=!1}),3e3)):t.flippingDisabled=!1}))),this.subscription.add(this.flipped$.subscribe((function(e){void 0!==t.flipped&&P("card.wav"),t.flipped=e}))),this.subscription.add(this.matched$.subscribe((function(e){t.matched=e,t.matchedPairs=e.filter((function(t){return t})).length/2,e.some((function(t){return t}))&&t.onMatchJustFlippedCard()})))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"onResize",value:function(t){this.columns=e.getColumns(t.target.innerWidth)}}],[{key:"getColumns",value:function(t){return t>=992?6:t>=768?4:3}}]),e}()).\u0275fac=function(t){return new(t||G)(j.Kb(p.h),j.Kb(M.a))},G.\u0275cmp=j.Eb({type:G,selectors:[["app-game"]],decls:2,vars:3,consts:[[4,"ngIf"],["ariaLabel","Back to homepage",3,"link"],[3,"move","matched","cards"],[3,"time",4,"ngIf"],[1,"page-content","game-content"],[1,"container"],["rowHeight","1:1.2","gutterSize","16px",3,"cols","resize"],["class","overflow-visible",4,"ngFor","ngForOf"],[3,"time"],[1,"overflow-visible"],[3,"card","flipped","matched","disabled","click"]],template:function(t,e){1&t&&(j.uc(0,K,10,10,"div",0),j.cc(1,"async")),2&t&&j.gc("ngIf",j.dc(1,1,e.deck$))},directives:[c.k,x.a,A.a,F,R.a,c.j,$,R.c,Y],pipes:[c.b],styles:[".game-content[_ngcontent-%COMP%], [_nghost-%COMP%]{flex-grow:1;display:flex;flex-direction:column}"],data:{animation:[_]}}),G),B=((q=function(){function e(n){t(this,e),this.store=n}return n(e,[{key:"resolve",value:function(t,e){this.store.dispatch(Object(l.d)())}}]),e}()).\u0275fac=function(t){return new(t||q)(j.Ub(p.h))},q.\u0275prov=j.Gb({token:q,factory:q.\u0275fac}),q),V=[{path:"",component:U,resolve:[B],runGuardsAndResolvers:"always"},{path:"new",redirectTo:""}],Z=((W=function e(){t(this,e)}).\u0275mod=j.Ib({type:W}),W.\u0275inj=j.Hb({factory:function(t){return new(t||W)},imports:[[r.f.forChild(V)],r.f]}),W),tt=((H=function e(){t(this,e)}).\u0275mod=j.Ib({type:H}),H.\u0275inj=j.Hb({factory:function(t){return new(t||H)},providers:[B],imports:[[c.c,o.a,Z]]}),H)}}])}();