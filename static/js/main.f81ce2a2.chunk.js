(this.webpackJsonpphonecontact=this.webpackJsonpphonecontact||[]).push([[0],{14:function(e,t,n){e.exports={enter:"pop_enter__2o-3r",enterActive:"pop_enterActive__21AXF",exit:"pop_exit__1k8As",exitActive:"pop_exitActive__MO-E_"}},18:function(e,t,n){e.exports={item:"ContactItem_item__3cxAy",btnDelete:"ContactItem_btnDelete__1Ok5q"}},19:function(e,t,n){e.exports={allTitle:"App_allTitle__9MV1m"}},2:function(e,t,n){e.exports={addContact:"ContactFrom_addContact__3AygE",input:"ContactFrom_input__30MbL",widthInput:"ContactFrom_widthInput__3Gt90",widthBtn:"ContactFrom_widthBtn__32qrm"}},23:function(e,t,n){e.exports={list:"ContactList_list__1Bf4_"}},24:function(e,t,n){e.exports={findContact:"Filter_findContact__3u0da"}},27:function(e,t,n){e.exports=n(44)},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(6),r=n.n(c),o=n(25),i=n(10),m=n(11),u=n(12),s=n(16),f=n(13),h=n(17),p=n(5),d=n.n(p),b=n(46),C=n(45),_=n(2),g=n.n(_),v={name:d.a.generate(),number:d.a.generate(),filter:d.a.generate()},E=n(22),y=function(e){Object(E.confirmAlert)({message:e,buttons:[{label:"Yes"}]})},O=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",number:""},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(i.a)({},a,l))},n.reset=function(e){var t=n.state,a=t.name,l=t.number;if(e.preventDefault(),a.length>=3&&10===l.length)n.props.handleSubmit(e),n.setState({name:"",number:""});else{y("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u043f\u043e \u0448\u043b\u0430\u0431\u043b\u043e\u043d\u0443, name o\u0442 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043d\u043e\u043c\u0435\u0440 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!")}},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return l.a.createElement("form",{className:g.a.addContact,onSubmit:this.reset},l.a.createElement("label",{className:g.a.input,htmlFor:v.name},"Name",l.a.createElement("input",{autoComplete:"off",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]{3,20}",type:"text",value:t,onChange:this.handleChange,id:v.name,name:"name",className:g.a.widthInput})),l.a.createElement("label",{className:g.a.input,htmlFor:v.number},"Number",l.a.createElement("input",{autoComplete:"off",pattern:"[0-9]{10}",type:"number",value:n,onChange:this.handleChange,id:v.number,name:"number",className:g.a.widthInput})),l.a.createElement("button",{type:"submit",className:g.a.widthBtn},"Add contact"))}}]),t}(a.Component),N=n(18),x=n.n(N),k=function(e){var t=e.item,n=e.onClickDelete;return l.a.createElement("li",{className:x.a.item},l.a.createElement("h3",null,t.name,":"),l.a.createElement("h3",null,t.number," "),l.a.createElement("button",{type:"button",id:t.id,onClick:n,className:x.a.btnDelete},"Delete"))},S=n(23),j=n.n(S),A=n(14),w=n.n(A),F=function(e){var t=e.filterContacts,n=e.onClickDelete;return l.a.createElement("ul",{className:j.a.list},t().map((function(e){return l.a.createElement(C.a,{in:!0,key:e.id,classNames:w.a,timeout:250},l.a.createElement(k,{item:e,onClickDelete:n}))})))},D=n(24),I=n.n(D),B=function(e){var t=e.length,n=e.filter,a=e.handleChange;return l.a.createElement(l.a.Fragment,null,t>1&&l.a.createElement(C.a,{in:!0,timeout:250,unmountOnExit:!0,classNames:w.a},l.a.createElement("label",{className:I.a.findContact,htmlFor:v.filter},"Find contacts by name",l.a.createElement("input",{type:"text",id:v.filter,value:n,onChange:a,name:"filter"}))))},V=n(19),J=n.n(V),L=(n(42),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={contacts:[],filter:""},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(i.a)({},a,l))},n.handleSubmit=function(e){var t=e.target.elements,a=t.name,l=t.number,c=n.state.contacts,r=c.find((function(e){return e.name===a.defaultValue})),i="".concat(a.defaultValue," is allready in contacts. "),m={id:d.a.generate(),name:a.defaultValue,number:l.defaultValue};r?y(i):n.setState({contacts:[].concat(Object(o.a)(c),[m])})},n.deleteContact=function(e){var t=e.target.id,a=n.state.contacts.filter((function(e){return e.id!==t}));n.setState({contacts:a})},n.filterContacts=function(){var e=n.state,t=e.contacts,a=e.filter;return t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t=(e="contacts",JSON.parse(localStorage.getItem(e)));null!==t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){var n,a,l=this.state.contacts;t.contacts!==l&&(n="contacts",a=l,localStorage.setItem(n,JSON.stringify(a)))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter;return l.a.createElement(b.a,{component:null},l.a.createElement(C.a,{in:!0,timeout:500,unmountOnExit:!0,classNames:"logo",appear:!0},l.a.createElement("h3",{className:J.a.allTitle},"Phonebook")),l.a.createElement(O,{handleSubmit:this.handleSubmit}),t.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:J.a.allTitle},"Contacts"),l.a.createElement(B,{length:t.length,filter:n,handleChange:this.handleChange}),l.a.createElement(F,{filterContacts:this.filterContacts,onClickDelete:this.deleteContact})):l.a.createElement(l.a.Fragment,null))}}]),t}(a.Component));n(43);r.a.render(l.a.createElement(L,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f81ce2a2.chunk.js.map