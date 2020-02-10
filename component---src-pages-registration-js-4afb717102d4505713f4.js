(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Bl7J:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("FqMQ"),o=function(){return n.a.createElement("footer",null,n.a.createElement("div",null,n.a.createElement("h3",{className:r.baseColor+"-text"},"Sitemap"),n.a.createElement("ul",null,r.navigationItems.main.map((function(e){return n.a.createElement("li",{key:e.title},n.a.createElement("a",{href:e.url,className:r.baseColor+"-text"},e.title))})))),n.a.createElement("div",null,n.a.createElement("h3",{className:r.baseColor+"-text"},"Get in touch"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:r.baseColor+"-text",href:"/theteam"},"The Team")),n.a.createElement("li",null,n.a.createElement("a",{className:r.baseColor+"-text",href:"https://twitter.com/jscraftcamp"},"Twitter")),n.a.createElement("li",null,n.a.createElement("a",{className:r.baseColor+"-text",href:"/imprint.html"},"Imprint")),n.a.createElement("li",null,n.a.createElement("a",{className:r.baseColor+"-text",href:"/privacypolicy"},"Privacy Policy")))),n.a.createElement("div",{style:{flex:1.5}},n.a.createElement("h3",{className:r.baseColor+"-text"},"Archive"),n.a.createElement("ul",null,r.navigationItems.archive.map((function(e){return n.a.createElement("li",{key:e.title},n.a.createElement("a",{className:r.baseColor+"-text",href:e.url+".html"},e.title))})))))},c=function(){return n.a.createElement("nav",{className:r.baseColor},n.a.createElement("div",{className:"nav-wrapper container"},n.a.createElement("a",{href:"/",className:"brand-logo"},"JS CraftCamp"),n.a.createElement("a",{href:"#","data-activates":"mobile-demo",className:"button-collapse"},n.a.createElement("i",{className:"material-icons"},"menu")),n.a.createElement("ul",{id:"nav-desktop",className:"right hide-on-med-and-down"},r.navigationItems.main.map((function(e){return n.a.createElement("li",{key:e.title},n.a.createElement("a",{href:e.url,className:e.cssClasses},e.title))})),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/jscraftcamp"},n.a.createElement("i",{className:"fa fa-twitter fa-fw"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/jscraftcamp/website"},n.a.createElement("i",{className:"fa fa-github fa-fw"})))),n.a.createElement("ul",{id:"mobile-demo",className:"side-nav"},r.navigationItems.main.map((function(e){return n.a.createElement("li",{key:e.title},n.a.createElement("a",{href:e.url,className:e.cssClasses},e.title))})),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/jscraftcamp"},n.a.createElement("i",{className:"fa fa-twitter fa-fw"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/jscraftcamp/website"},n.a.createElement("i",{className:"fa fa-github fa-fw"}))))))};t.a=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement(c,null)),t,n.a.createElement(o,null))}},FqMQ:function(e){e.exports=JSON.parse('{"baseColor":"colorOfTheYear","pageTitle":"JSCraftCamp - July 2020 in Munich","colorVoting":{"active":false,"url":"https://twitter.com/JSCraftCamp/status/1106878975589138434"},"navigationItems":{"main":[{"url":"/","title":"Home"},{"url":"https://github.com/jscraftcamp/website/projects/10","title":"Sponsoring"},{"url":"/values","title":"Values"}],"archive":[{"url":"/info2019","title":"2019 - Home"},{"url":"/info2018","title":"2018 - Home"},{"url":"/photos2018","title":"2018 - Photos"},{"url":"/info2017","title":"2017 - Home"},{"url":"/photos2017","title":"2017 - Photos"},{"url":"/info2016","title":"2016 - Home"},{"url":"/photos2016","title":"2016 - Photos"}]},"theteam":[{"name":"Wolfram Kriesing","photo":"wolfram.jpg","email":"w@kriesing.de"},{"name":"Robert Hostlowsky","photo":"robert.png","email":"robert.hostlowsky@codecentric.de"},{"name":"Marco Emrich","photo":"marco.jpg","email":"marco.emrich@codecentric.de"},{"name":"Marc Emmanuel","photo":"marc.jpg","email":"marc.emmanuel@virtual-identity.com"},{"name":"Sebastian Frerichs","photo":"sebastian.jpg","email":"sebastian.frerichs@codecentric.de"}]}')},K2Fk:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("FqMQ"),c=a("Bl7J");t.default=function(){return n.a.createElement(c.a,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m12"},n.a.createElement("h1",{className:"header center "+o.baseColor+"-text"},"Registration"),n.a.createElement("h3",{className:"header center light"},"Create a JSON File and submit it via a GitHub Pull Request"),n.a.createElement("p",null,"To register for JSCraftCamp you have to add a json file with your name and some other information to our",n.a.createElement("a",{href:"https://github.com/jscraftcamp/website",rel:"noreferrer noopener",target:"_blank"},"GitHub Repository")," via a",n.a.createElement("a",{href:"http://stackoverflow.com/questions/14680711/how-to-do-a-github-pull-request",rel:"noreferrer noopener",target:"_blank"},"Pull Request"),". Registration is free of charge. Your json file should follow the naming scheme ",n.a.createElement("code",null,"$firstname_$lastname.json")," and must be placed in the folder ",n.a.createElement("code",null,"participants"),". The structure of the file is described below."),n.a.createElement("p",null,"To test if your json file is a valid registration you can run ",n.a.createElement("code",null,"npm test"),"(more details about this are in the ",n.a.createElement("a",{href:"https://github.com/jscraftcamp/website/blob/master/README.md",rel:"noreferrer noopener",target:"_blank"},"README"),"). Invalid registrations will be rejected.",n.a.createElement("br",null),"If you need any help with registration, don't hesitate to contact one of ",n.a.createElement("a",{href:"./theteam"},"the team")),n.a.createElement("p",null,"Out of these files a page with information about ",n.a.createElement(r.Link,{to:"/participants"},"all participants")," is generated."),n.a.createElement("p",null),n.a.createElement("p",null,"To unregister please write another pull request or ",n.a.createElement("a",{href:"mailto:team@jscraftcamp.org"},"let us know"),".")),n.a.createElement("div",{className:"col s12 m12"},n.a.createElement("h4",{className:"header center colorOfTheYear-text"},"The JSON Format")),n.a.createElement("div",{className:"col s12 m12"},n.a.createElement("pre",{className:"card-panel language-json",style:{background:"white"}},n.a.createElement("code",{className:"language-json",dangerouslySetInnerHTML:{__html:'\n{\n    "name": "Your real name (OR a nickname)",\n    "company": "optionally, your company name",\n    "when": {\n    "friday": true,\n    "friday_party": true,\n    "saturday": true\n},\n    "tags": ["any", "tag", "you like"],\n    "vegan": true/false,\n    "vegetarian": true/false,\n    "allergies": "...",\n    "what_is_my_connection_to_javascript": "Say something about you and JS ...",\n    "what_can_i_contribute": "How can you contribute to the event? If you don\'t know yet, feel free to give it some thought ...",\n    "tshirt": "W-S",\n    "twitter": "handle"\n}\n'}}))),n.a.createElement("div",{className:"col s12 m12",style:{background:"white"}},n.a.createElement("table",{className:"bordered"},n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"name"),"*"),"  ",n.a.createElement("td",null,"first name and last name or a nick name")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"company"))," ",n.a.createElement("td",null,"A company name")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"when.friday"),"*")," ",n.a.createElement("td",null,"If you are attending on Friday (Boolean value)")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"when.friday_party"),"*")," ",n.a.createElement("td",null,"If you want to join us on the free Party that will happen Friday after the event (same location). Drinks and food sponsored!")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"when.saturday"),"*"),n.a.createElement("td",null,"If you are attending on Saturday (Boolean value)")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"tags"),"*"),n.a.createElement("td",null,"Share what you think is important, use at least one tag. (Array of strings)")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"vegan"),"*"),n.a.createElement("td",null,"Let us know if you are a vegan** (Boolean value)")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"vegetarian"),"*"),n.a.createElement("td",null,"Let us know if you are a vegetarian** (Boolean value)")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"allergies")),n.a.createElement("td",null,"Tell us if you have any special dietary requirements**")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"what_is_my_connection_to_javascript"),"*"),n.a.createElement("td",null," 2-5 sentences about your experience with JavaScript or related technologies.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"what_can_i_contribute")),n.a.createElement("td",null,"1-3 sentences about what you would like to contribute to the BarCamp.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"tshirt"))," ",n.a.createElement("td",null,"We will have a limited number of t-shirts with the event and sponsor logos. If you want one: fit (W=women, M=Man) and size (S,M,L,XL), e.g. W-S or M-XL. If your rregistration is shortly before the event there might be no time to have a T-Shirt produced for you, please be aware.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"twitter"))," ",n.a.createElement("td",null,"Your Twitter handle without the leading ",n.a.createElement("code",null,"@"),"."))),n.a.createElement("p",null,"*: mandatory field"),n.a.createElement("p",null,"**: This is a free and completely sponsored event. Even though we want to try, we can not guarantee to be able to respect every dietary requirement")))))}}}]);
//# sourceMappingURL=component---src-pages-registration-js-4afb717102d4505713f4.js.map