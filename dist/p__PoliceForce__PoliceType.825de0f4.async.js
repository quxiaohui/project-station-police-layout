(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[736],{80381:function(U){U.exports={policeType:"policeType___2hksu",list:"list___vjW2C",pagination:"pagination___3vcNf"}},35909:function(U,B,t){"use strict";t.r(B);var _=t(71194),o=t(50146),E=t(77883),c=t(49747),b=t(47673),O=t(29730),x=t(14781),T=t(23492),w=t(54421),v=t(38272),F=t(94233),C=t(51890),$=t(62350),j=t(24565),Y=t(57663),Z=t(71577),z=t(9715),P=t(903),m=t(2824),D=t(11849),g=t(39428),y=t(3182),s=t(34792),a=t(48086),u=t(67294),p=t(80381),e=t.n(p),ue=t(52473),I=t(65308),le=t(7085),_e=t(49101),ie=t(28465),n=t(85893),oe=function(h,M){var f=new FileReader;f.addEventListener("load",function(){return M(f.result)}),f.readAsDataURL(h)},pe=function(h){var M=h.type==="image/jpeg"||h.type==="image/png";M||a.ZP.error("You can only upload JPG/PNG file!");var f=h.size/1024/1024<2;return f||a.ZP.error("Image must smaller than 2MB!"),M&&f},de=function(){var h=function(l){(0,I.wh)(l).then(function(i){Me(i.data.data),Te(i.data.totalCount),R(!1)})},M=function(){var d=(0,y.Z)((0,g.Z)().mark(function l(i){return(0,g.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,I.BT)({policePowerId:i});case 3:return L("\u5220\u9664"),r.abrupt("return",!0);case 7:return r.prev=7,r.t0=r.catch(0),a.ZP.error("\u5220\u9664\u5931\u8D25"),r.abrupt("return",!1);case 11:case"end":return r.stop()}},l,null,[[0,7]])}));return function(i){return d.apply(this,arguments)}}(),f=function(){A(!1)},L=function(l){a.ZP.success("".concat(l,"\u6210\u529F")),h(ae),f()},ce=function(){var d=(0,y.Z)((0,g.Z)().mark(function l(i){return(0,g.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(Q!=="add"){r.next=14;break}return r.prev=1,r.next=4,(0,I.bM)((0,D.Z)((0,D.Z)({},i),{},{image:"yigedizhi"}));case 4:return L("\u6DFB\u52A0"),r.abrupt("return",!0);case 8:return r.prev=8,r.t0=r.catch(1),a.ZP.error("\u6DFB\u52A0\u5931\u8D25"),r.abrupt("return",!1);case 12:r.next=25;break;case 14:return r.prev=14,r.next=17,(0,I.JQ)((0,D.Z)((0,D.Z)({},i),{},{typeId:K==null?void 0:K.typeId}));case 17:return L("\u7F16\u8F91"),r.abrupt("return",!0);case 21:return r.prev=21,r.t1=r.catch(14),a.ZP.error("\u7F16\u8F91\u5931\u8D25"),r.abrupt("return",!1);case 25:case"end":return r.stop()}},l,null,[[1,8],[14,21]])}));return function(i){return d.apply(this,arguments)}}(),me=function(l){A(!0),V("edit"),Le(l),W.setFieldsValue(l)},Ee=function(l,i){je({pageIndex:l,pageSize:i}),h({pageIndex:l,pageSize:i})},Pe=P.Z.useForm(),he=(0,m.Z)(Pe,1),W=he[0],fe=(0,u.useState)(!1),N=(0,m.Z)(fe,2),De=N[0],A=N[1],ve=(0,u.useState)(""),J=(0,m.Z)(ve,2),Q=J[0],V=J[1],Ze=(0,u.useState)(!1),H=(0,m.Z)(Ze,2),X=H[0],R=H[1],ge=(0,u.useState)([]),k=(0,m.Z)(ge,2),ye=k[0],Me=k[1],Oe=(0,u.useState)(0),q=(0,m.Z)(Oe,2),ee=q[0],Te=q[1],Ce=(0,u.useState)({pageIndex:1,pageSize:10}),te=(0,m.Z)(Ce,2),ae=te[0],je=te[1],Be=(0,u.useState)(),re=(0,m.Z)(Be,2),ne=re[0],Ie=re[1],Ue=(0,u.useState)(),se=(0,m.Z)(Ue,2),K=se[0],Le=se[1],We=function(l){l.file.status==="uploading"&&R(!0),l.file.status==="done"&&oe(l.file.originFileObj,function(i){console.log(i,"==="),R(!1),Ie(i)})};(0,u.useEffect)(function(){h({pageIndex:1,pageSize:10})},[]);var Ae=(0,n.jsxs)("div",{children:[X?(0,n.jsx)(le.Z,{}):(0,n.jsx)(_e.Z,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,n.jsxs)(ue.ZP,{children:[(0,n.jsxs)("div",{className:e().policeType,children:[(0,n.jsx)(Z.Z,{type:"primary",onClick:function(){A(!0),V("add"),W.resetFields()},children:"\u65B0\u589E"}),(0,n.jsx)("div",{className:e().list,children:(0,n.jsx)(v.ZP,{itemLayout:"horizontal",dataSource:ye,loading:X,renderItem:function(l,i){return(0,n.jsx)(v.ZP.Item,{actions:[(0,n.jsx)("a",{onClick:function(){return me(l)},children:"\u7F16\u8F91"},"list-loadmore-edit"),(0,n.jsx)(j.Z,{title:"\u786E\u8BA4\u5220\u9664\u8BE5\u8B66\u529B\u7C7B\u578B?",onConfirm:function(){return M(l==null?void 0:l.typeId)},okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",children:(0,n.jsx)("a",{children:"\u5220\u9664"})})],children:(0,n.jsx)(v.ZP.Item.Meta,{avatar:(0,n.jsx)(C.C,{src:l.image}),title:(0,n.jsx)("a",{children:l.name}),description:""})})}})}),(0,n.jsx)("div",{className:e().pagination,children:(0,n.jsx)(T.Z,{total:ee,showTotal:function(){return"\u5171".concat(ee,"\u6761\u6570\u636E")},showQuickJumper:!0,showSizeChanger:!0,current:ae.pageIndex,onChange:Ee})})]}),(0,n.jsx)(o.Z,{title:Q==="add"?"\u65B0\u589E":"\u7F16\u8F91",open:De,onCancel:f,footer:null,children:(0,n.jsxs)(P.Z,{form:W,labelCol:{span:4},wrapperCol:{span:20},style:{maxWidth:600},onFinish:ce,autoComplete:"off",children:[(0,n.jsx)(P.Z.Item,{label:"\u7C7B\u578B\u540D\u79F0",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"}],children:(0,n.jsx)(O.Z,{placeholder:"\u8BF7\u8F93\u5165"})}),(0,n.jsx)(P.Z.Item,{label:"\u56FE\u7247",name:"image",children:(0,n.jsx)(ie.Z,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",beforeUpload:pe,onChange:We,children:ne?(0,n.jsx)("img",{src:ne,alt:"avatar",style:{width:"100%"}}):Ae})}),(0,n.jsx)(P.Z.Item,{label:"\u5E8F\u53F7",name:"sortNo",children:(0,n.jsx)(c.Z,{placeholder:"\u8BF7\u8F93\u5165"})}),(0,n.jsx)(P.Z.Item,{wrapperCol:{offset:10,span:10},children:(0,n.jsx)(Z.Z,{type:"primary",htmlType:"submit",children:"\u786E\u8BA4"})})]})})]})};B.default=de},65308:function(U,B,t){"use strict";t.d(B,{wh:function(){return b},bM:function(){return x},JQ:function(){return w},BT:function(){return F},fK:function(){return $},eA:function(){return Y},Li:function(){return z},He:function(){return m},kZ:function(){return g}});var _=t(39428),o=t(11849),E=t(3182),c=t(25377);function b(s,a){return O.apply(this,arguments)}function O(){return O=(0,E.Z)((0,_.Z)().mark(function s(a,u){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.WY)("/api/PolicePowerTypes",(0,o.Z)({method:"GET",params:(0,o.Z)({},a)},u||{})));case 1:case"end":return e.stop()}},s)})),O.apply(this,arguments)}function x(s,a){return T.apply(this,arguments)}function T(){return T=(0,E.Z)((0,_.Z)().mark(function s(a,u){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.WY)("/api/PolicePowerTypes",(0,o.Z)({method:"POST",data:a},u||{})));case 1:case"end":return e.stop()}},s)})),T.apply(this,arguments)}function w(s,a){return v.apply(this,arguments)}function v(){return v=(0,E.Z)((0,_.Z)().mark(function s(a,u){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.WY)("/api/PolicePowerTypes",(0,o.Z)({method:"PUT",data:a},u||{})));case 1:case"end":return e.stop()}},s)})),v.apply(this,arguments)}function F(s,a){return C.apply(this,arguments)}function C(){return C=(0,E.Z)((0,_.Z)().mark(function s(a,u){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.abrupt("return",(0,c.WY)("/api/PolicePowerTypes",(0,o.Z)({method:"DELETE",params:(0,o.Z)({},a)},u||{})));case 2:case"end":return e.stop()}},s)})),C.apply(this,arguments)}function $(s,a){return j.apply(this,arguments)}function j(){return j=(0,E.Z)((0,_.Z)().mark(function s(a,u){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.WY)("/api/policePowerDeployments",(0,o.Z)({method:"GET",params:(0,o.Z)({},a)},u||{})));case 1:case"end":return e.stop()}},s)})),j.apply(this,arguments)}function Y(s,a){return Z.apply(this,arguments)}function Z(){return Z=(0,E.Z)((0,_.Z)().mark(function s(a,u){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.WY)("/api/policePowerDeployments",(0,o.Z)({method:"POST",data:a},u||{})));case 1:case"end":return e.stop()}},s)})),Z.apply(this,arguments)}function z(s,a){return P.apply(this,arguments)}function P(){return P=(0,E.Z)((0,_.Z)().mark(function s(a,u){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.WY)("/api/policePowerDeployments",(0,o.Z)({method:"PUT",data:a},u||{})));case 1:case"end":return e.stop()}},s)})),P.apply(this,arguments)}function m(s,a){return D.apply(this,arguments)}function D(){return D=(0,E.Z)((0,_.Z)().mark(function s(a,u){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.abrupt("return",(0,c.WY)("/api/policePowerDeployments",(0,o.Z)({method:"DELETE",params:(0,o.Z)({},a)},u||{})));case 2:case"end":return e.stop()}},s)})),D.apply(this,arguments)}function g(s){return y.apply(this,arguments)}function y(){return y=(0,E.Z)((0,_.Z)().mark(function s(a){return(0,_.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,c.WY)("/api/policePowerTypes/selector",(0,o.Z)({method:"GET"},(a==null?void 0:a.data)||[])));case 1:case"end":return p.stop()}},s)})),y.apply(this,arguments)}}}]);