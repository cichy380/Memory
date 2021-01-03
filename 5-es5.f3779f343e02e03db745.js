!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{VY05:function(e,i,a){"use strict";a.r(i),a.d(i,"GameModule",(function(){return nt}));var c=a("ofXK"),o=a("PCNd"),s=a("tyNb"),r=a("quSY"),d=a("/uUt"),l=a("l7P3"),p=a("6s34"),u=function(t){return t.game},b=Object(l.p)(u,(function(t){return t.deck})),f=Object(l.p)(u,(function(t){return t.flipped})),g=Object(l.p)(u,(function(t){return t.matched})),m=Object(l.p)(u,(function(t){return t.justFlippedIdx})),h=Object(l.p)(u,(function(t){return t.move}));function v(t,e){return t.toString()===e.toString()}var y,_,O,k=a("R0Ic"),w=Object(k.m)("listAnimation",[Object(k.l)("* => *",[Object(k.g)(":enter",[Object(k.k)({opacity:0}),Object(k.i)("60ms",Object(k.e)("600ms ease-out",Object(k.k)({opacity:1})))],{optional:!0}),Object(k.g)(":leave",Object(k.e)("200ms",Object(k.k)({opacity:0})),{optional:!0})])]),C=a("AytR"),P=function(){function e(){t(this,e),this.assetsPath=C.a.production?"assets":"../../../assets"}return n(e,[{key:"load",value:function(t){var e=this;t.forEach((function(t){new Audio("".concat(e.assetsPath,"/audio/").concat(t)).load()}))}},{key:"play",value:function(t){new Audio("".concat(this.assetsPath,"/audio/").concat(t)).play()}}]),e}(),M=a("fXoL"),j=a("qXsx"),x=a("tgey"),A=a("hZJE"),I=a("NFeN"),Q=function(t){return{"game-heading-icon_active":t}},D=function(t){return{"game-heading-text_active":t}},T=((y=function(){function e(){t(this,e)}return n(e,[{key:"matched",set:function(t){var e=this;this.innerMatched=t,this.justMatched=!0,setTimeout((function(){return e.justMatched=!1}),1e3)},get:function(){return this.innerMatched}}]),e}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=M.Eb({type:y,selectors:[["app-game-heading"]],inputs:{matched:"matched",move:"move",cards:"cards"},decls:8,vars:8,consts:[[1,"game-heading-icon","mr-1"],[1,"game-heading-text","mr-3"],[1,"game-heading-icon","mr-1",3,"ngClass"],[1,"game-heading-text","mr-3",3,"ngClass"]],template:function(t,e){1&t&&(M.Qb(0,"mat-icon",0),M.vc(1,"loop"),M.Pb(),M.Qb(2,"span",1),M.vc(3),M.Pb(),M.Qb(4,"mat-icon",2),M.vc(5,"emoji_events"),M.Pb(),M.Qb(6,"span",3),M.vc(7),M.Pb()),2&t&&(M.Ab(3),M.xc("#",e.move,""),M.Ab(1),M.gc("ngClass",M.ic(4,Q,e.justMatched&&e.matched)),M.Ab(2),M.gc("ngClass",M.ic(6,D,e.justMatched&&e.matched)),M.Ab(1),M.wc(e.matched+"/"+e.cards/2))},directives:[I.a,c.i],styles:["[_nghost-%COMP%]{display:flex;align-items:center}.game-heading-icon[_ngcontent-%COMP%]{opacity:.33;transition:opacity .25s ease .3s,color .25s ease .3s}.game-heading-icon_active[_ngcontent-%COMP%]{opacity:1;color:#fdd835}.game-heading-text[_ngcontent-%COMP%]{font-weight:500;font-size:16px;transition:color .25s ease .3s}.game-heading-text_active[_ngcontent-%COMP%]{color:#fbc02d}"]}),y),z=a("zkoq"),F=function(t){return{"animation-duration.ms":t}},S=((_=function e(){t(this,e)}).\u0275fac=function(t){return new(t||_)},_.\u0275cmp=M.Eb({type:_,selectors:[["app-pie-timer"]],inputs:{time:"time"},decls:4,vars:9,consts:[[1,"pie-timer","bg-body"],[1,"pie","spinner","bg-accent",3,"ngStyle"],[1,"pie","filler","bg-accent",3,"ngStyle"],[1,"mask",3,"ngStyle"]],template:function(t,e){1&t&&(M.Qb(0,"div",0),M.Lb(1,"div",1),M.Lb(2,"div",2),M.Lb(3,"div",3),M.Pb()),2&t&&(M.Ab(1),M.gc("ngStyle",M.ic(3,F,e.time)),M.Ab(1),M.gc("ngStyle",M.ic(5,F,e.time)),M.Ab(1),M.gc("ngStyle",M.ic(7,F,e.time)))},directives:[c.l],styles:[".pie-timer[_ngcontent-%COMP%]{width:24px;height:24px;position:relative;margin:40px auto}.pie-timer[_ngcontent-%COMP%], .pie-timer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.pie[_ngcontent-%COMP%]{width:50%;height:100%;transform-origin:100% 50%;position:absolute}.spinner[_ngcontent-%COMP%]{border-radius:100% 0 0 100%/50% 0 0 50%;z-index:200;border-right:0;-webkit-animation:rota 0s linear 1;animation:rota 0s linear 1}.filler[_ngcontent-%COMP%]{border-radius:0 100% 100% 0/0 50% 50% 0;left:50%;opacity:0;z-index:100;animation:opa 0s steps(1) 1 reverse;border-left:0}.mask[_ngcontent-%COMP%]{width:50%;height:100%;position:absolute;background:inherit;opacity:1;z-index:300;-webkit-animation:opa 0s steps(1) 1;animation:opa 0s steps(1) 1}@-webkit-keyframes rota{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rota{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes opa{0%{opacity:1}50%,to{opacity:0}}@keyframes opa{0%{opacity:1}50%,to{opacity:0}}"],changeDetection:0}),_),$=a("Wp6s"),R=a("FKr1"),L=function(t){return{"card-wrapper_disabled":t}},E=function(t){return{card_flipped:t}},K=((O=function(){function e(n){t(this,e),this.sound=n}return n(e,[{key:"disabled",set:function(t){this.isDisabled=t}},{key:"flipped",set:function(t){this.isFlipped=t,!0===t&&this.sound.play("card.wav")}}]),e}()).\u0275fac=function(t){return new(t||O)(M.Kb(P))},O.\u0275cmp=M.Eb({type:O,selectors:[["app-card"]],inputs:{card:"card",disabled:"disabled",flipped:"flipped"},decls:8,vars:9,consts:[[1,"card-wrapper",3,"ngClass"],[1,"card",3,"ngClass"],["matRipple","",1,"card__back",3,"matRippleDisabled"],[1,"card__icon"],[1,"card__face"],[3,"className"]],template:function(t,e){1&t&&(M.Qb(0,"div",0),M.Qb(1,"div",1),M.Qb(2,"mat-card",2),M.Qb(3,"mat-icon",3),M.vc(4,"lightbulb_outline"),M.Pb(),M.Pb(),M.Qb(5,"mat-card",4),M.Qb(6,"mat-icon",5),M.vc(7),M.Pb(),M.Pb(),M.Pb(),M.Pb()),2&t&&(M.gc("ngClass",M.ic(5,L,e.isDisabled&&!e.isFlipped)),M.Ab(1),M.gc("ngClass",M.ic(7,E,e.isFlipped)),M.Ab(1),M.gc("matRippleDisabled",e.isDisabled||e.isFlipped),M.Ab(4),M.gc("className","card__icon card-color_"+e.card.color),M.Ab(1),M.xc(" ",e.card.suit," "))},directives:[c.i,$.a,R.f,I.a],styles:["[_nghost-%COMP%]{height:100%;width:100%}.card-wrapper[_ngcontent-%COMP%]{perspective:1000px;opacity:1;transition:opacity .3s}.card-wrapper_disabled[_ngcontent-%COMP%]{opacity:.5}.card[_ngcontent-%COMP%]{transform-style:preserve-3d;position:relative;transform:rotateY(0deg);transition:transform .3s}.card_flipped[_ngcontent-%COMP%]{transform:rotateY(180deg);transition-duration:.6s}.card[_ngcontent-%COMP%], .card-wrapper[_ngcontent-%COMP%], .card__back[_ngcontent-%COMP%], .card__face[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.card__icon[_ngcontent-%COMP%]{height:auto;width:auto;font-size:80px}.card__back[_ngcontent-%COMP%], .card__face[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0}.card__back[_ngcontent-%COMP%]{z-index:2;transform:rotateY(0deg);background-color:#90a4ae;color:hsla(0,0%,100%,.1)}.card__face[_ngcontent-%COMP%]{transform:rotateY(180deg);background-color:#fff;color:#455a64}"]}),O);function N(t,e){if(1&t&&M.Lb(0,"app-pie-timer",9),2&t){var n=M.bc(2);M.gc("time",n.moveDelay)}}function X(t,e){if(1&t){var n=M.Rb();M.Qb(0,"div",10),M.Xb("click",(function(){return M.mc(n),M.bc(2).removeMoveDelay()})),M.Pb()}}var Y=function(t){return{"game__tile_out-of-the-game":t}},J=function(t){return{"game__card-matched":t}};function q(t,e){if(1&t){var n=M.Rb();M.Qb(0,"mat-grid-tile",11),M.cc(1,"async"),M.Qb(2,"app-card",12),M.Xb("click",(function(){M.mc(n);var t=e.index;return M.bc(2).onClickCard(t)})),M.Pb(),M.Pb()}if(2&t){var i=e.$implicit,a=e.index,c=M.bc(2);M.gc("ngClass",M.ic(7,Y,c.flippingDisabled&&!M.dc(1,5,c.justFlippedCardIdx$).includes(a))),M.Ab(2),M.gc("card",i)("flipped",c.flipped[a])("ngClass",M.ic(9,J,c.matched[a]))("disabled",c.flippingDisabled)}}function G(t,e){if(1&t){var n=M.Rb();M.Qb(0,"div"),M.Qb(1,"app-page-header"),M.Lb(2,"app-page-header-back",1),M.Lb(3,"app-game-heading",2),M.cc(4,"async"),M.uc(5,N,1,1,"app-pie-timer",3),M.Pb(),M.Qb(6,"div",4),M.Qb(7,"div",5),M.uc(8,X,1,0,"div",6),M.Qb(9,"mat-grid-list",7),M.Xb("resize",(function(t){return M.mc(n),M.bc().onResize(t)}),!1,M.lc),M.uc(10,q,3,11,"mat-grid-tile",8),M.Pb(),M.Pb(),M.Pb(),M.Pb()}if(2&t){var i=e.ngIf,a=M.bc();M.Ab(2),M.gc("link","/"),M.Ab(1),M.gc("move",M.dc(4,9,a.move$))("matched",a.matchedPairs)("cards",i.length),M.Ab(2),M.gc("ngIf",a.showTimer),M.Ab(3),M.gc("ngIf",a.flippingDisabled),M.Ab(1),M.gc("cols",a.columns)("@listAnimation",i.length),M.Ab(1),M.gc("ngForOf",i)}}var H,W,U,B,V=((W=function(){function e(n,i,a){t(this,e),this.store=n,this.notification=i,this.sound=a,this.moveDelay=3e3,a.load(["card.wav","success.flac","win.wav"]),this.columns=e.getColumns(window.innerWidth),this.subscription=new r.a,this.flippingDisabled=!1,this.deck$=n.pipe(Object(l.s)(b)),this.flipped$=n.pipe(Object(l.s)(f),Object(d.a)((function(t,e){return v(t,e)}))),this.matched$=n.pipe(Object(l.s)(g),Object(d.a)((function(t,e){return v(t,e)}))),this.move$=n.pipe(Object(l.s)(h),Object(d.a)()),this.justFlippedCardIdx$=n.pipe(Object(l.s)(m))}return n(e,[{key:"onClickCard",value:function(t){!1===this.flipped[t]&&!1===this.flippingDisabled&&this.store.dispatch(Object(p.a)({cardIndex:t}))}},{key:"onMatchJustFlippedCard",value:function(){var t=this;this.showTimer=!1,setTimeout((function(){return t.sound.play("success.flac")}),333),this.matched.every((function(t){return t}))?setTimeout((function(){t.sound.play("win.wav"),t.notification.showSuccess("All pairs matched!",2600)}),600):setTimeout((function(){clearTimeout(t.delayTimeoutId),t.store.dispatch(Object(p.g)())}),500)}},{key:"ngOnInit",value:function(){var t=this;this.subscription.add(this.justFlippedCardIdx$.subscribe((function(e){2===e.length?(t.flippingDisabled=!0,t.showTimer=!0,t.delayTimeoutId=setTimeout((function(){t.store.dispatch(Object(p.g)()),t.showTimer=!1,t.sound.play("card.wav")}),3e3)):t.flippingDisabled=!1}))),this.subscription.add(this.flipped$.subscribe((function(e){return t.flipped=e}))),this.subscription.add(this.matched$.subscribe((function(e){t.matched=e,t.matchedPairs=e.filter((function(t){return t})).length/2,e.some((function(t){return t}))&&t.onMatchJustFlippedCard()})))}},{key:"removeMoveDelay",value:function(){clearTimeout(this.delayTimeoutId),this.store.dispatch(Object(p.g)()),this.showTimer=!1,this.sound.play("card.wav")}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"onResize",value:function(t){this.columns=e.getColumns(t.target.innerWidth)}}],[{key:"getColumns",value:function(t){return t>=992?6:t>=768?4:3}}]),e}()).\u0275fac=function(t){return new(t||W)(M.Kb(l.h),M.Kb(j.a),M.Kb(P))},W.\u0275cmp=M.Eb({type:W,selectors:[["app-game"]],features:[M.zb([P])],decls:2,vars:3,consts:[[4,"ngIf"],["ariaLabel","Back to homepage",3,"link"],[3,"move","matched","cards"],[3,"time",4,"ngIf"],[1,"page-content","game-content"],[1,"container","position-relative"],["class","cover game-cover",3,"click",4,"ngIf"],["rowHeight","1:1.2","gutterSize","16px",3,"cols","resize"],["class","game__tile",3,"ngClass",4,"ngFor","ngForOf"],[3,"time"],[1,"cover","game-cover",3,"click"],[1,"game__tile",3,"ngClass"],[3,"card","flipped","ngClass","disabled","click"]],template:function(t,e){1&t&&(M.uc(0,G,11,11,"div",0),M.cc(1,"async")),2&t&&M.gc("ngIf",M.dc(1,1,e.deck$))},directives:[c.k,x.a,A.a,T,z.a,c.j,S,z.c,c.i,K],pipes:[c.b],styles:[".game-content[_ngcontent-%COMP%], [_nghost-%COMP%]{flex-grow:1;display:flex;flex-direction:column}.game__card-matched[_ngcontent-%COMP%]{-webkit-animation:ScaleAnimation .5s ease .3s;animation:ScaleAnimation .5s ease .3s}.game__tile[_ngcontent-%COMP%]{transition:-webkit-filter .3s;transition:filter .3s;transition:filter .3s,-webkit-filter .3s;overflow:visible}.game__tile_out-of-the-game[_ngcontent-%COMP%]{-webkit-filter:blur(2px);filter:blur(2px)}.game-cover[_ngcontent-%COMP%]{z-index:1050}@-webkit-keyframes ScaleAnimation{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}@keyframes ScaleAnimation{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}"],data:{animation:[w]}}),W),Z=((H=function(){function e(n){t(this,e),this.store=n}return n(e,[{key:"resolve",value:function(t,e){this.store.dispatch(Object(p.d)())}}]),e}()).\u0275fac=function(t){return new(t||H)(M.Ub(l.h))},H.\u0275prov=M.Gb({token:H,factory:H.\u0275fac}),H),tt=[{path:"",component:V,resolve:[Z],runGuardsAndResolvers:"always"},{path:"new",redirectTo:""}],et=((B=function e(){t(this,e)}).\u0275mod=M.Ib({type:B}),B.\u0275inj=M.Hb({factory:function(t){return new(t||B)},imports:[[s.f.forChild(tt)],s.f]}),B),nt=((U=function e(){t(this,e)}).\u0275mod=M.Ib({type:U}),U.\u0275inj=M.Hb({factory:function(t){return new(t||U)},providers:[Z],imports:[[c.c,o.a,et]]}),U)}}])}();