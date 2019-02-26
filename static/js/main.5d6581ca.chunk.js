(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/tea.01a4b996.jpg"},function(e){e.exports={eventName:"Tara's Bridal Kitchen Hens Tea Shower Scavenger Hunt",generalLocation:"Kiama",questions:[{question:"big hole in the rock",answer:"The Blowhole (duh)",picture:"https://c1.staticflickr.com/9/8158/7374578438_52fd4aaac1_b.jpg"},{question:"white pointy building",answer:"Christ Church (aka Kiama Anglican)",picture:"https://www.ohta.org.au/images/KiamaAng.jpg"},{question:"q3",answer:"a3"},{question:"q4",answer:"a4"}]}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),s=(n(14),n(15),n(1)),c=n(2),u=n(4),l=n(3),h=n(5),p=(n(16),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={showWelcome:!0,showFinish:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",function(t){"undefined"!==typeof t.state.showWelcome&&e.setState(t.state)})}},{key:"handleStartClick",value:function(){window.history.pushState(this.state,""),this.setState({showWelcome:!1})}},{key:"render",value:function(){var e,t=this;return e=this.state.showWelcome?i.a.createElement(m,{eventName:this.props.eventName,generalLocation:this.props.generalLocation,onStartClick:function(){return t.handleStartClick()}}):this.state.showFinish?i.a.createElement(d,null):i.a.createElement(w,{questions:this.props.questions,onReturn:function(){return t.setState({showWelcome:!0})},onFinish:function(){return t.setState({showFinish:!0})}}),i.a.createElement("div",{className:"App"},e)}}]),t}(a.Component)),m=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"welcome container"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Welcome to ",this.props.eventName,"!")),i.a.createElement("div",null,i.a.createElement("p",null,"You will receive a series of clues that will direct you to locations around ",this.props.generalLocation,"."),i.a.createElement("p",null,'Once you think you know the answer, check it by clicking "Show Answer". If you got it right, take a photo then go on to the next one.'),i.a.createElement("p",null,"Have fun!")),i.a.createElement("div",null,i.a.createElement(j,{onClick:function(){return e.props.onStartClick()}},"Start")))}}]),t}(a.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"finish container"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Congratulations!")),i.a.createElement("div",{className:"question"},"Now it's definitely time for some tea."),i.a.createElement("div",{className:"vignette",style:{backgroundImage:"url("+n(17)+")",width:"260px",height:"231px"}}))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={currentQuestion:0,answerVisible:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.history.pushState(this.state,""),window.addEventListener("popstate",function(t){"undefined"!==typeof t.state.currentQuestion&&e.setState(t.state)})}},{key:"navigate",value:function(e){if(0===this.state.currentQuestion&&-1===e)this.props.onReturn();else if(this.state.currentQuestion===this.props.questions.length-1&&1===e)this.props.onFinish();else{this.setState({answerVisible:!1});var t=this.state.currentQuestion+e;this.setState({currentQuestion:t})}window.history.pushState(this.state,"")}},{key:"render",value:function(){var e=this,t=this.state.currentQuestion,n=this.props.questions[t];return i.a.createElement("div",{className:"game container"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Clue ",t+1)),i.a.createElement(f,{questionText:n.question}),i.a.createElement(b,{answerText:n.answer,image:n.picture,show:this.state.answerVisible,onShowAnswerClick:function(){return e.setState({answerVisible:!0})}}),i.a.createElement(v,{onClick:function(t){return e.navigate(t)},first:0===t,last:t===this.props.questions.length-1}))}}]),t}(a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"question"},this.props.questionText)}}]),t}(a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.props.show){var t="";return"undefined"!==typeof this.props.image&&(t=i.a.createElement("img",{className:"answer-image",src:this.props.image,alt:"The place you're meant to be at."})),i.a.createElement("div",{className:"answer"},i.a.createElement("h3",null,"Answer:"),this.props.answerText,t)}return i.a.createElement(j,{onClick:function(){return e.props.onShowAnswerClick()}},"Show Answer")}}]),t}(a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"nav"},i.a.createElement(j,{onClick:function(){return e.props.onClick(-1)}},"Back"),i.a.createElement(j,{onClick:function(){return e.props.onClick(1)}},this.props.last?"Finish":"Next"))}}]),t}(a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("button",{disabled:this.props.disabled,style:{backgroundColor:"#e689b0",borderColor:"#e689b0",color:"black"},onClick:function(){return e.props.onClick()}},this.props.children)}}]),t}(a.Component),k=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(18);o.a.render(i.a.createElement(k,{eventName:O.eventName,generalLocation:O.generalLocation,questions:O.questions}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.5d6581ca.chunk.js.map