(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(30)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),l=n.n(r),o=(n(17),n(1)),i=n(2),s=n(4),u=n(3),d=n(5),m=n(6),p=n.n(m),h=(n(19),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isFocused:n.props.defaultFocused},n.inputRef=null,n.focus=function(){n.inputRef&&n.inputRef.focus()},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.valid,c=t.value,r=t.onChange,l=t.label,o=t.pattern,i=t.width,s=t.numeric,u=t.dotted,d=t.className,m=this.state.isFocused,h=u?"password":s?"tel":"text";return a.createElement("div",{className:p()(d,{"text-input":!0,invalid:!n,focused:m,"not-empty":""!==c}),onClick:this.focus,style:{width:i}},l&&a.createElement("label",null,l),a.createElement("input",{type:h,ref:function(t){return e.inputRef=t},value:c,onChange:function(e){var t=e.currentTarget.value;return r(t)},autoFocus:m,onFocus:function(){return e.setState({isFocused:!0})},onBlur:function(){return e.setState({isFocused:!1})},pattern:o}))}}]),t}(a.Component));h.defaultProps={valid:!0,defaultFocused:!1};n(20);var v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isFocused:n.props.defaultFocused},n.inputRef=null,n.focus=function(){n.inputRef&&n.inputRef.focus()},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.valid,c=t.value,r=t.onChange,l=t.label,o=t.pattern,i=t.width,s=t.numeric,u=t.dotted,d=t.className,m=t.placeholder,h=this.state.isFocused,v=u?"password":s?"tel":"text";return a.createElement("div",{className:p()(d,{"text-input":!0,invalid:!n,focused:h,"not-empty":""!==c}),onClick:this.focus,style:{width:i}},l&&a.createElement("label",{className:"input-label"},l),m&&a.createElement("div",{className:"input-placeholder"},m),a.createElement("input",{type:v,ref:function(t){return e.inputRef=t},value:c,onChange:function(e){var t=e.currentTarget.value;return r(t)},autoFocus:h,onFocus:function(){return e.setState({isFocused:!0})},onBlur:function(){return e.setState({isFocused:!1})},pattern:o}))}}]),t}(a.Component);v.defaultProps={valid:!0,defaultFocused:!1};var f=n(10),y=(n(21),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).portalRef=document.createElement("div"),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.portalRef.classList.add("modal-container"),document.body.appendChild(this.portalRef),document.body.classList.add("no-scroll"),document.body.ontouchmove=function(e){return e.preventDefault()},this.props.onOpen&&this.props.onOpen()}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.portalRef),document.body.classList.remove("no-scroll"),document.body.ontouchmove=function(e){return!0},this.props.onClose&&this.props.onClose()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,c=e.onClose;return l.a.createPortal(a.createElement(a.Fragment,null,a.createElement("div",{className:"clickable modal-background",onClick:c}),a.createElement("div",{className:p()("modal-content",n)},t)),this.portalRef)}}]),t}(a.Component)),b=function(e){var t=e.open,n=e.children,c=Object(f.a)(e,["open","children"]);return t?a.createElement(y,c,n):null},k=n(7),E=n.n(k),w=(n(22),["\u041f\u041d","\u0412\u0422","\u0421\u0420","\u0427\u0422","\u041f\u0422","\u0421\u0411","\u0412\u0421"]),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,r=new Array(c),l=0;l<c;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getDaysForMonth=function(){for(var e,t=E()(n.props.displayedDate),a=[],c=parseInt(t.date(1).format("e")),r=t.daysInMonth(),l=[],o=0;o<6;o++){l=[];for(var i=0;i<7;i++)(e=7*o+i+1)>c&&e-c<=r?l.push(E()(t).date(e-c)):l.push(void 0);a.push(l)}return a},n.renderDay=function(e,t){if(void 0===e)return a.createElement("div",{key:t,className:"day placeholder"});var c=n.props,r=c.selectedDate,l=c.onDayClick;return a.createElement("div",{key:t,className:"clickable day "+p()({selected:r.isSame(e,"day"),weekend:e.weekday()>=5}),onClick:function(){l(e.startOf("D"))}},e.date())},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return a.createElement("div",{className:"month"},a.createElement("div",{className:"week"},w.map(function(e,t){return a.createElement("div",{key:t,className:"weekday"},e)})),this.getDaysForMonth().map(function(t,n){return a.createElement("div",{className:"week",key:n},t.map(e.renderDay))}))}}]),t}(a.Component),C=(n(23),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).selectedDate=void 0!==n.props.value?E()(n.props.value):E()(),n.state={calendarDate:n.selectedDate,yearString:n.selectedDate.year().toString(),monthString:(n.selectedDate.month()+1).toString()},n.handleYearChange=function(e){if(/^[0-9]{0,4}$/.test(e)){var t=parseInt(e);n.setState(function(n){var a=n.calendarDate;return{yearString:e,calendarDate:E()(a).year(t)}})}},n.handleMonthChange=function(e){var t=parseInt(e)-1;t>=0&&t<=11?n.setState(function(n){var a=n.calendarDate;return{monthString:e,calendarDate:E()(a).month(t)}}):/^[0-9]{0,2}$/.test(e)&&n.setState({monthString:e})},n.handleMonthDecrease=function(){var e=E()(n.state.calendarDate);e.subtract(1,"month"),n.setState({calendarDate:e})},n.handleMonthIncrease=function(){var e=E()(n.state.calendarDate);e.add(1,"month"),n.setState({calendarDate:e})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&(this.selectedDate=void 0!==this.props.value?E()(this.props.value):E()())}},{key:"render",value:function(){var e=this.state,t=e.calendarDate,n=e.yearString,c=e.monthString,r=this.props.onDayClick;return a.createElement("div",{className:"calendar"},a.createElement("div",{className:"month-input"},a.createElement(h,{label:"\u041c\u0435\u0441\u044f\u0446",value:c,onChange:this.handleMonthChange,width:60,numeric:!0}),a.createElement(h,{label:"\u0413\u043e\u0434",value:n,onChange:this.handleYearChange,width:60,numeric:!0})),a.createElement("div",{className:"month-selector"},a.createElement("div",{className:"clickable left arrow",onClick:this.handleMonthDecrease}),a.createElement("label",{className:"selected-month"},t.format("MMMM YYYY")),a.createElement("div",{className:"clickable right arrow",onClick:this.handleMonthIncrease})),a.createElement(g,{selectedDate:this.selectedDate,displayedDate:t,onDayClick:function(e){return r(e)}}))}}]),t}(a.Component)),O=(n(24),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isModalOpen:!1},n.onDayClick=function(e){n.props.onChange(e),n.setState({isModalOpen:!1})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.value,c=t.label,r=this.state.isModalOpen;return a.createElement("div",{className:"datepicker-input"},a.createElement("div",{className:"clickable trigger-button".concat(void 0!==n?" not-empty":""),onClick:function(){return e.setState({isModalOpen:!0})}},c&&a.createElement("label",{className:"clickable"},c),void 0!==n&&n.format("DD-MM-YYYY")),a.createElement(b,{open:r,onClose:function(){return e.setState({isModalOpen:!1})}},a.createElement("div",{className:"datepicker-modal"},a.createElement("div",{className:"clickable close-button",onClick:function(){return e.setState({isModalOpen:!1})}}),c&&a.createElement("h2",null,c),a.createElement(C,{value:n,onDayClick:this.onDayClick}))))}}]),t}(a.Component)),N=(n(25),function(e){var t=e.data,n=e.selectedKey,c=e.onChange,r=e.label,l=e.width,o="".concat(100/t.length,"%");return a.createElement("div",{className:"segmented-switch",style:{minWidth:l}},r&&a.createElement("label",{className:"segments-label"},r),a.createElement("div",{className:"segments-container"},t.map(function(e){return a.createElement("div",{key:e.key,className:p()("clickable segment",{active:e.key===n}),onClick:function(){return c(e.key)},style:{width:o}},e.text)})))}),D=(n(26),function(e){var t=e.value,n=e.onChange;return a.createElement("div",{className:p()("clickable","switch",{active:t}),onClick:function(){return n(!t)}},a.createElement("div",{className:"container"},a.createElement("div",{className:"grip"})))}),j=(n(27),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isActive:!1},n.dropdownRef=null,n.handleDropdownClick=function(){null!==n.dropdownRef&&(n.state.isActive?n.dropdownRef.blur():n.dropdownRef.focus())},n.handleInputClick=function(e){e.preventDefault(),n.state.isActive?n.dropdownRef.blur():n.dropdownRef.focus()},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isActive,n=this.props,c=n.data,r=n.selectedKey,l=n.onChange,o=n.label,i=void 0!==r?c.find(function(e){return e.key===r}).text:void 0;return a.createElement("div",{className:"clickable dropdown "+p()({active:t,empty:void 0===r}),title:i},o&&a.createElement("label",null,o),a.createElement("input",{type:"text",className:"clickable fake-input",ref:function(t){return e.dropdownRef=t},onBlur:function(t){t.preventDefault(),e.setState({isActive:!1})},onFocus:function(t){t.preventDefault(),e.setState({isActive:!0})},onMouseDown:this.handleInputClick,readOnly:!0}),i&&a.createElement("div",{className:"displayed-value"},i),a.createElement("div",{className:"arrow"}),a.createElement("div",{className:"list"},c.map(function(e){return a.createElement("div",{key:e.key,className:"option".concat(e.key===r?" selected":""),onMouseDown:function(){return l(e.key)}},e.text)})))}}]),t}(a.Component)),S=(n(28),[{key:0,value:1,text:"\u041b\u0435\u0432\u044b\u0439"},{key:1,value:2,text:"\u041f\u0440\u0430\u0432\u044b\u0439"}]),M=[{key:0,value:1,text:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439"},{key:1,value:2,text:"\u0421\u0438\u043d\u0438\u0439"},{key:2,value:3,text:"\u0427\u0451\u0440\u043d\u044b\u0439"},{key:3,value:4,text:"\u0411\u0435\u043b\u044b\u0439"},{key:4,value:5,text:"\u0416\u0451\u043b\u0442\u044b\u0439"},{key:5,value:6,text:"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439"}],x=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={firstInputText:"",secondInputText:"",switchEnabled:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.firstInputText,a=t.secondInputText,r=t.date,l=t.switchSelectedKey,o=t.switchEnabled,i=t.dropdownSelectedKey;return c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,"UI-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"),c.a.createElement("h2",null,"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044f"),c.a.createElement(h,{label:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435",value:n,onChange:function(t){return e.setState({firstInputText:t})},valid:"\u0445"!==n.toLowerCase()[0]}),c.a.createElement("br",null),c.a.createElement(v,{label:"\u0414\u0440\u0443\u0433\u043e\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435",placeholder:"\u0422\u0443\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u0438\u0441\u0430\u0442\u044c",value:a,onChange:function(t){return e.setState({secondInputText:t})},valid:"\u0445"!==a.toLowerCase()[0]}),c.a.createElement("p",{className:"hint"},'\u0421\u043b\u043e\u0432\u0430, \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u043d\u0430 "\u0445", \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c\u0438'),c.a.createElement("div",{className:"divider"}),c.a.createElement("h2",null,"\u0412\u044b\u0431\u043e\u0440 \u0434\u0430\u0442\u044b"),c.a.createElement(O,{label:"\u0414\u0430\u0442\u0430",value:r,onChange:function(t){return e.setState({date:t})}}),c.a.createElement("div",{className:"divider"}),c.a.createElement("h2",null,"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u0438"),c.a.createElement(j,{label:"\u041b\u044e\u0431\u0438\u043c\u044b\u0439 \u0446\u0432\u0435\u0442",data:M,selectedKey:i,onChange:function(t){return e.setState({dropdownSelectedKey:t})}}),c.a.createElement("br",null),c.a.createElement("div",{className:"labeled-switch"},c.a.createElement("label",{className:"app-label"},"\u041f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0449\u0451\u043b\u043a\u0430\u0442\u044c"),c.a.createElement(D,{value:o,onChange:function(t){return e.setState({switchEnabled:t})}})),c.a.createElement("br",null),c.a.createElement(N,{label:"\u041b\u0435\u0432\u044b\u0439 \u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u044b\u0439?",width:200,data:S,selectedKey:l,onChange:function(t){return e.setState({switchSelectedKey:t})}}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(29);l.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.59f74e8f.chunk.js.map