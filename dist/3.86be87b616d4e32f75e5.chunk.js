webpackJsonp([3],{"7fD3":function(n,t,e){"use strict";function o(n,t,e,o){var i=Array.isArray(e)?e:[e],r=i.findIndex(function(n){return"auto"===n});r>=0&&["top","right","bottom","left"].forEach(function(n){null==i.find(function(t){return-1!==t.search("^"+n+"|^"+n+"-")})&&i.splice(r++,1,n)});for(var u,a=0,c=0,s=b.getAvailablePlacements(n,t),p=0,d=l(i);p<d.length;p++){var g=d[p],_=g.item,h=g.index;if("break"===function(e,l){if(null!=s.find(function(n){return n===e})||i.length===l+1){u=e;var r=b.positionElements(n,t,e,o);return a=r.top,c=r.left,"break"}}(_,h))break}return t.style.top=a+"px",t.style.left=c+"px",u}function l(n){return n.map(function(n,t){return{item:n,index:t}})}function i(n){return p._45(0,[(n()(),p._21(0,0,null,null,41,"div",[["class","pos-f-t fixed-top header"]],null,null,null,null,null)),(n()(),p._43(-1,null,["\n    "])),(n()(),p._21(2,0,null,null,38,"nav",[["class","navbar navbar-inverse bg-inverse navbar-toggleable-md"]],null,null,null,null,null)),(n()(),p._43(-1,null,["\n        "])),(n()(),p._21(4,0,null,null,3,"button",[["class","navbar-toggler navbar-toggler-right"]],null,[[null,"click"]],function(n,t,e){var o=!0,l=n.component;if("click"===t){o=!1!==l.toggleSidebar()&&o}return o},null,null)),(n()(),p._43(-1,null,["\n            "])),(n()(),p._21(6,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(n()(),p._43(-1,null,["\n        "])),(n()(),p._43(-1,null,["\n        "])),(n()(),p._21(9,0,null,null,1,"a",[["class","navbar-brand"],["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),p._43(-1,null,["Bank Tryout"])),(n()(),p._43(-1,null,["\n        "])),(n()(),p._21(12,0,null,null,27,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(n()(),p._43(-1,null,["\n            "])),(n()(),p._21(14,0,null,null,24,"ul",[["class","navbar-nav ml-auto mt-2 mt-md-0"]],null,null,null,null,null)),(n()(),p._43(-1,null,["\n                "])),(n()(),p._21(16,0,null,null,21,"li",[["class","nav-item dropdown"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(n,t,e){var o=!0;if("keyup.esc"===t){o=!1!==p._35(n,17).closeFromOutsideEsc()&&o}if("document:click"===t){o=!1!==p._35(n,17).closeFromClick(e)&&o}return o},null,null)),p._19(17,212992,null,2,P,[f,p.J],null,null),p._41(335544320,1,{_menu:0}),p._41(335544320,2,{_toggle:0}),(n()(),p._43(-1,null,["\n                    "])),(n()(),p._21(21,0,null,null,6,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(n,t,e){var o=!0;if("click"===t){o=!1!==p._35(n,22).toggleOpen()&&o}return o},null,null)),p._19(22,16384,[[2,4]],0,M,[P,p.q],null,null),(n()(),p._43(-1,null,["\n                        "])),(n()(),p._21(24,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(n()(),p._43(-1,null,[" Manager "])),(n()(),p._21(26,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(n()(),p._43(-1,null,["\n                    "])),(n()(),p._43(-1,null,["\n                    "])),(n()(),p._21(29,0,null,null,7,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(n()(),p._43(-1,null,["\n                        "])),(n()(),p._21(31,0,null,null,4,"a",[["class","dropdown-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0,l=n.component;if("click"===t){o=!1!==p._35(n,32).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o}if("click"===t){o=!1!==l.onLoggedout()&&o}return o},null,null)),p._19(32,671744,null,0,O.n,[O.l,O.a,v.h],{routerLink:[0,"routerLink"]},null),p._36(33,1),(n()(),p._21(34,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(n()(),p._43(35,null,[" "," "])),(n()(),p._43(-1,null,["\n                    "])),(n()(),p._43(-1,null,["\n                "])),(n()(),p._43(-1,null,["\n            "])),(n()(),p._43(-1,null,["\n        "])),(n()(),p._43(-1,null,["\n    "])),(n()(),p._43(-1,null,["\n"])),(n()(),p._43(-1,null,["\n"]))],function(n,t){n(t,17,0),n(t,32,0,n(t,33,0,"/login"))},function(n,t){n(t,16,0,p._35(t,17).isOpen()),n(t,21,0,p._35(t,22).dropdown.isOpen()),n(t,31,0,p._35(t,32).target,p._35(t,32).href);n(t,35,0,"Log Out")})}function r(n){return p._45(0,[(n()(),p._21(0,0,null,null,1,"app-header",[],null,null,null,i,w)),p._19(1,114688,null,0,h.a,[O.l],null,null)],function(n,t){n(t,1,0)},null)}function u(n){return p._45(0,[(n()(),p._21(0,0,null,null,38,"nav",[["class","sidebar"]],null,null,null,null,null)),p._19(1,278528,null,0,v.i,[p.B,p.C,p.q,p.P],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),p._38(2,{sidebarPushRight:0}),(n()(),p._43(-1,null,["\n    "])),(n()(),p._21(4,0,null,null,33,"ul",[["class","list-group"]],null,null,null,null,null)),(n()(),p._43(-1,null,["\n        "])),(n()(),p._21(6,0,null,null,8,"a",[["class","list-group-item"],["routerLink","/dashboard"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;if("click"===t){o=!1!==p._35(n,7).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o}return o},null,null)),p._19(7,671744,[[2,4]],0,O.n,[O.l,O.a,v.h],{routerLink:[0,"routerLink"]},null),p._19(8,1720320,null,2,O.m,[O.l,p.q,p.Q,p.j],{routerLinkActive:[0,"routerLinkActive"]},null),p._41(603979776,1,{links:1}),p._41(603979776,2,{linksWithHrefs:1}),p._36(11,1),(n()(),p._43(-1,null,["\n            "])),(n()(),p._21(13,0,null,null,0,"i",[["class","fa fa-fw fa-dashboard"]],null,null,null,null,null)),(n()(),p._43(14,null,["\xa0","\n        "])),(n()(),p._43(-1,null,["\n        "])),(n()(),p._21(16,0,null,null,9,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;if("click"===t){o=!1!==p._35(n,17).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o}return o},null,null)),p._19(17,671744,[[4,4]],0,O.n,[O.l,O.a,v.h],{routerLink:[0,"routerLink"]},null),p._36(18,1),p._19(19,1720320,null,2,O.m,[O.l,p.q,p.Q,p.j],{routerLinkActive:[0,"routerLinkActive"]},null),p._41(603979776,3,{links:1}),p._41(603979776,4,{linksWithHrefs:1}),p._36(22,1),(n()(),p._43(-1,null,["\n            "])),(n()(),p._21(24,0,null,null,0,"i",[["class","fa fa-fw fa-book"]],null,null,null,null,null)),(n()(),p._43(25,null,["\xa0","\n        "])),(n()(),p._43(-1,null,["\n        "])),(n()(),p._21(27,0,null,null,9,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;if("click"===t){o=!1!==p._35(n,28).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o}return o},null,null)),p._19(28,671744,[[6,4]],0,O.n,[O.l,O.a,v.h],{routerLink:[0,"routerLink"]},null),p._36(29,1),p._19(30,1720320,null,2,O.m,[O.l,p.q,p.Q,p.j],{routerLinkActive:[0,"routerLinkActive"]},null),p._41(603979776,5,{links:1}),p._41(603979776,6,{linksWithHrefs:1}),p._36(33,1),(n()(),p._43(-1,null,["\n            "])),(n()(),p._21(35,0,null,null,0,"i",[["class","fa fa-fw fa-search"]],null,null,null,null,null)),(n()(),p._43(36,null,["\xa0","\n        "])),(n()(),p._43(-1,null,["\n    "])),(n()(),p._43(-1,null,["\n"])),(n()(),p._43(-1,null,["\n"]))],function(n,t){n(t,1,0,"sidebar",n(t,2,0,t.component.isActive));n(t,7,0,"/dashboard"),n(t,8,0,n(t,11,0,"router-link-active")),n(t,17,0,n(t,18,0,"/account")),n(t,19,0,n(t,22,0,"router-link-active")),n(t,28,0,n(t,29,0,"/audit")),n(t,30,0,n(t,33,0,"router-link-active"))},function(n,t){n(t,6,0,p._35(t,7).target,p._35(t,7).href);n(t,14,0,"Dashboard"),n(t,16,0,p._35(t,17).target,p._35(t,17).href);n(t,25,0,"Accounts"),n(t,27,0,p._35(t,28).target,p._35(t,28).href);n(t,36,0,"Audit")})}function a(n){return p._45(0,[(n()(),p._21(0,0,null,null,1,"app-sidebar",[],null,null,null,u,L)),p._19(1,49152,null,0,x.a,[],null,null)],null,null)}function c(n){return p._45(0,[(n()(),p._21(0,0,null,null,1,"app-header",[],null,null,null,i,w)),p._19(1,114688,null,0,h.a,[O.l],null,null),(n()(),p._43(-1,null,["\n"])),(n()(),p._21(3,0,null,null,1,"app-sidebar",[],null,null,null,u,L)),p._19(4,49152,null,0,x.a,[],null,null),(n()(),p._43(-1,null,["\n"])),(n()(),p._21(6,0,null,null,4,"section",[["class","main-container"]],null,null,null,null,null)),(n()(),p._43(-1,null,["\n    "])),(n()(),p._21(8,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),p._19(9,212992,null,0,O.p,[O.b,p._3,p.m,[8,null],p.j],null,null),(n()(),p._43(-1,null,["\n"])),(n()(),p._43(-1,null,["\n"]))],function(n,t){n(t,1,0),n(t,9,0)},null)}function s(n){return p._45(0,[(n()(),p._21(0,0,null,null,1,"app-layout",[],null,null,null,c,S)),p._19(1,114688,null,0,A,[O.l],null,null)],function(n,t){n(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var p=e("/oeL"),d=function(){function n(){}return n}(),g=[".main-container[_ngcontent-%COMP%]{margin-top:60px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}"],_=[".topnav[_ngcontent-%COMP%]{border-radius:0;background-color:#222;padding:6px;z-index:2}.topnav[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]{text-align:center;padding-left:0;cursor:pointer}.topnav[_ngcontent-%COMP%]   .top-right-nav[_ngcontent-%COMP%]   .buy-now[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.topnav[_ngcontent-%COMP%]   .top-right-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:40px;right:-5px;left:auto}.topnav[_ngcontent-%COMP%]   .top-right-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .message-preview[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .media-heading[_ngcontent-%COMP%]{font-size:14px;font-weight:700;margin-bottom:0}.topnav[_ngcontent-%COMP%]   .top-right-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .message-preview[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.topnav[_ngcontent-%COMP%]   .top-right-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .message-preview[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   p.last[_ngcontent-%COMP%]{font-size:13px;margin-bottom:0}.topnav[_ngcontent-%COMP%]   .top-right-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin-top:1px;margin-bottom:4px}.messages[_ngcontent-%COMP%]{width:300px}.messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}.messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}.messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}.messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}.messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{background:#222!important}"],h=e("o+mL"),f=function(){function n(){this.autoClose=!0,this.placement="bottom-left"}return n}();f.decorators=[{type:p.x}],f.ctorParameters=function(){return[]};var m=function(){function n(){}return n.prototype.getAllStyles=function(n){return window.getComputedStyle(n)},n.prototype.getStyle=function(n,t){return this.getAllStyles(n)[t]},n.prototype.isStaticPositioned=function(n){return"static"===(this.getStyle(n,"position")||"static")},n.prototype.offsetParent=function(n){for(var t=n.offsetParent||document.documentElement;t&&t!==document.documentElement&&this.isStaticPositioned(t);)t=t.offsetParent;return t||document.documentElement},n.prototype.position=function(n,t){void 0===t&&(t=!0);var e,o={width:0,height:0,top:0,bottom:0,left:0,right:0};if("fixed"===this.getStyle(n,"position"))e=n.getBoundingClientRect();else{var l=this.offsetParent(n);e=this.offset(n,!1),l!==document.documentElement&&(o=this.offset(l,!1)),o.top+=l.clientTop,o.left+=l.clientLeft}return e.top-=o.top,e.bottom-=o.top,e.left-=o.left,e.right-=o.left,t&&(e.top=Math.round(e.top),e.bottom=Math.round(e.bottom),e.left=Math.round(e.left),e.right=Math.round(e.right)),e},n.prototype.offset=function(n,t){void 0===t&&(t=!0);var e=n.getBoundingClientRect(),o={top:window.pageYOffset-document.documentElement.clientTop,left:window.pageXOffset-document.documentElement.clientLeft},l={height:e.height||n.offsetHeight,width:e.width||n.offsetWidth,top:e.top+o.top,bottom:e.bottom+o.top,left:e.left+o.left,right:e.right+o.left};return t&&(l.height=Math.round(l.height),l.width=Math.round(l.width),l.top=Math.round(l.top),l.bottom=Math.round(l.bottom),l.left=Math.round(l.left),l.right=Math.round(l.right)),l},n.prototype.positionElements=function(n,t,e,o){var l=o?this.offset(n,!1):this.position(n,!1),i=this.getAllStyles(t),r=t.getBoundingClientRect(),u=e.split("-")[0]||"top",a=e.split("-")[1]||"center",c={height:r.height||t.offsetHeight,width:r.width||t.offsetWidth,top:0,bottom:r.height||t.offsetHeight,left:0,right:r.width||t.offsetWidth};switch(u){case"top":c.top=l.top-(t.offsetHeight+parseFloat(i.marginBottom));break;case"bottom":c.top=l.top+l.height;break;case"left":c.left=l.left-(t.offsetWidth+parseFloat(i.marginRight));break;case"right":c.left=l.left+l.width}switch(a){case"top":c.top=l.top;break;case"bottom":c.top=l.top+l.height-t.offsetHeight;break;case"left":c.left=l.left;break;case"right":c.left=l.left+l.width-t.offsetWidth;break;case"center":"top"===u||"bottom"===u?c.left=l.left+l.width/2-t.offsetWidth/2:c.top=l.top+l.height/2-t.offsetHeight/2}return c.top=Math.round(c.top),c.bottom=Math.round(c.bottom),c.left=Math.round(c.left),c.right=Math.round(c.right),c},n.prototype.getAvailablePlacements=function(n,t){var e=[],o=n.getBoundingClientRect(),l=t.getBoundingClientRect(),i=document.documentElement;return l.width<o.left&&(o.top+o.height/2-t.offsetHeight/2>0&&e.splice(e.length,1,"left"),this.setSecondaryPlacementForLeftRight(o,l,"left",e)),l.height<o.top&&(e.splice(e.length,1,"top"),this.setSecondaryPlacementForTopBottom(o,l,"top",e)),(window.innerWidth||i.clientWidth)-o.right>l.width&&(o.top+o.height/2-t.offsetHeight/2>0&&e.splice(e.length,1,"right"),this.setSecondaryPlacementForLeftRight(o,l,"right",e)),(window.innerHeight||i.clientHeight)-o.bottom>l.height&&(e.splice(e.length,1,"bottom"),this.setSecondaryPlacementForTopBottom(o,l,"bottom",e)),e},n.prototype.setSecondaryPlacementForLeftRight=function(n,t,e,o){var l=document.documentElement;t.height<=n.bottom&&o.splice(o.length,1,e+"-bottom"),(window.innerHeight||l.clientHeight)-n.top>=t.height&&o.splice(o.length,1,e+"-top")},n.prototype.setSecondaryPlacementForTopBottom=function(n,t,e,o){var l=document.documentElement;(window.innerHeight||l.clientHeight)-n.left>=t.width&&o.splice(o.length,1,e+"-left"),t.width<=n.right&&o.splice(o.length,1,e+"-right")},n}(),b=new m,C=function(){function n(n,t,e){this.dropdown=n,this._elementRef=t,this._renderer=e,this.placement="bottom",this.isOpen=!1}return n.prototype.isEventFrom=function(n){return this._elementRef.nativeElement.contains(n.target)},n.prototype.position=function(n,t){this.applyPlacement(o(n,this._elementRef.nativeElement,t))},n.prototype.applyPlacement=function(n){this._renderer.removeClass(this._elementRef.nativeElement.parentElement,"dropup"),this.placement=n,-1!==n.search("^top")&&this._renderer.addClass(this._elementRef.nativeElement.parentElement,"dropup")},n}();C.decorators=[{type:p.p,args:[{selector:"[ngbDropdownMenu]",host:{"[class.dropdown-menu]":"true","[class.show]":"dropdown.isOpen()"}}]}],C.ctorParameters=function(){return[{type:void 0,decorators:[{type:p.w,args:[Object(p._8)(function(){return P})]}]},{type:p.q},{type:p.Q}]};var M=function(){function n(n,t){this.dropdown=n,this._elementRef=t,this.anchorEl=t.nativeElement}return n.prototype.toggleOpen=function(){this.dropdown.toggle()},n.prototype.isEventFrom=function(n){return this._elementRef.nativeElement.contains(n.target)},n}();M.decorators=[{type:p.p,args:[{selector:"[ngbDropdownToggle]",host:{class:"dropdown-toggle","aria-haspopup":"true","[attr.aria-expanded]":"dropdown.isOpen()","(click)":"toggleOpen()"}}]}],M.ctorParameters=function(){return[{type:void 0,decorators:[{type:p.w,args:[Object(p._8)(function(){return P})]}]},{type:p.q}]};var P=function(){function n(n,t){var e=this;this._open=!1,this.openChange=new p.s,this.placement=n.placement,this.autoClose=n.autoClose,this._zoneSubscription=t.onStable.subscribe(function(){e._positionMenu()})}return n.prototype.ngOnInit=function(){this._menu&&this._menu.applyPlacement(Array.isArray(this.placement)?this.placement[0]:this.placement)},n.prototype.isOpen=function(){return this._open},n.prototype.open=function(){this._open||(this._open=!0,this._positionMenu(),this.openChange.emit(!0))},n.prototype.close=function(){this._open&&(this._open=!1,this.openChange.emit(!1))},n.prototype.toggle=function(){this.isOpen()?this.close():this.open()},n.prototype.closeFromClick=function(n){this.autoClose&&2!==n.button&&!this._isEventFromToggle(n)&&(!0===this.autoClose?this.close():"inside"===this.autoClose&&this._isEventFromMenu(n)?this.close():"outside"!==this.autoClose||this._isEventFromMenu(n)||this.close())},n.prototype.closeFromOutsideEsc=function(){this.autoClose&&this.close()},n.prototype.ngOnDestroy=function(){this._zoneSubscription.unsubscribe()},n.prototype._isEventFromToggle=function(n){return!!this._toggle&&this._toggle.isEventFrom(n)},n.prototype._isEventFromMenu=function(n){return!!this._menu&&this._menu.isEventFrom(n)},n.prototype._positionMenu=function(){this.isOpen()&&this._menu&&this._toggle&&this._menu.position(this._toggle.anchorEl,this.placement)},n}();P.decorators=[{type:p.p,args:[{selector:"[ngbDropdown]",exportAs:"ngbDropdown",host:{"[class.show]":"isOpen()","(keyup.esc)":"closeFromOutsideEsc()","(document:click)":"closeFromClick($event)"}}]}],P.ctorParameters=function(){return[{type:f},{type:p.J}]},P.propDecorators={_menu:[{type:p.n,args:[C]}],_toggle:[{type:p.n,args:[M]}],autoClose:[{type:p.A}],_open:[{type:p.A,args:["open"]}],placement:[{type:p.A}],openChange:[{type:p.L}]};var O=e("BkNc"),v=e("qbdv"),y=[_],w=p._18({encapsulation:0,styles:y,data:{}}),k=(p._16("app-header",h.a,r,{},{},[]),[".sidebar[_ngcontent-%COMP%]{position:fixed;z-index:1000;top:55px;left:235px;width:235px;margin-left:-235px;border:none;border-radius:0;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#999;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:.75rem 1.5rem;padding-top:1rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:none;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}"]),x=e("aoCP"),E=[k],L=p._18({encapsulation:0,styles:E,data:{}}),A=(p._16("app-sidebar",x.a,a,{},{},[]),function(){function n(n){this.router=n}return n.prototype.ngOnInit=function(){"/"===this.router.url&&this.router.navigate(["/dashboard"])},n.ctorParameters=function(){return[{type:O.l}]},n}()),F=[g],S=p._18({encapsulation:0,styles:F,data:{}}),H=p._16("app-layout",A,s,{},{},[]),R=[P,M,C],B=function(){function n(){}return n.forRoot=function(){return{ngModule:n,providers:[f]}},n}();B.decorators=[{type:p.E,args:[{declarations:R,exports:R}]}],B.ctorParameters=function(){return[]};var D=function(){function n(){}return n}();e.d(t,"LayoutModuleNgFactory",function(){return K});var K=p._17(d,[],function(n){return p._32([p._33(512,p.m,p._13,[[8,[H]],[3,p.m],p.H]),p._33(4608,v.m,v.l,[p.D]),p._33(4608,f,f,[]),p._33(512,v.b,v.b,[]),p._33(512,B,B,[]),p._33(512,O.o,O.o,[[2,O.t],[2,O.l]]),p._33(512,D,D,[]),p._33(512,d,d,[]),p._33(1024,O.j,function(){return[[{path:"",component:A,children:[{path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule"},{path:"account",loadChildren:"./account/account.module#AccountModule"},{path:"audit",loadChildren:"./audit/audit.module#AuditModule"}]}]]},[])])})}});