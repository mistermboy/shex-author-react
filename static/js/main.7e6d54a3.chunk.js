(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){},26:function(e,t,a){e.exports=a(71)},31:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),l=a.n(i),o=(a(31),a(9)),c=a(14),u=a(1),s=a(10),p=a.n(s),h=(a(32),a(19),a(33),a(12)),f=a.n(h),v=function(){function e(){this.getYashe=function(){return this.yashe},this.setYashe=function(e){this.yashe=e},this.getPrefixes=function(){var e=v.getInstance().getYashe().getDefinedPrefixes(),t="";for(var a in e)t+="PREFIX "+a+":    <"+e[a]+">\n";return t+="\n"},this.draw=function(e){var t=this.getPrefixes();e.forEach((function(e){t+=e.toString()})),this.getYashe().setValue(t)}}var t;return{getInstance:function(){return t||(t=new e),t}}}(),m=v,d=a(7),g=a.n(d),y=a(2),w=a(3),b=a(5),E=a(4),O=a(6),j=function(){function e(t){Object(y.a)(this,e),this.value=t}return Object(w.a)(e,[{key:"getValue",value:function(){return this.value}},{key:"setValue",value:function(e){this.value=e}}]),e}(),x=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"http://example.org/";Object(y.a)(this,e),this.prefixName=t,this.prefixValue=a}return Object(w.a)(e,[{key:"getPrefixName",value:function(){return this.prefixName}},{key:"getPrefixValue",value:function(){return this.prefixValue}}]),e}(),k=function(e){function t(e){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new x,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(y.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,r))).context=e,a.prefix=n,a}return Object(O.a)(t,e),Object(w.a)(t,[{key:"getPrefix",value:function(){return this.prefix}},{key:"setPrefix",value:function(e){this.prefix=e}},{key:"getTypeName",value:function(){return"prefixedIri"}},{key:"toString",value:function(){return this.getPrefix().getPrefixName()+":"+this.getValue()}}]),t}(j),S=function(e){function t(e){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(y.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,n))).context=e,a}return Object(O.a)(t,e),Object(w.a)(t,[{key:"getTypeName",value:function(){return"iriRef"}},{key:"toString",value:function(){return"<"+this.getValue()+">"}}]),t}(j),N=function(e){function t(e){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"example";return Object(y.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,n))).context=e,a}return Object(O.a)(t,e),Object(w.a)(t,[{key:"getTypeName",value:function(){return"bnodeType"}},{key:"toString",value:function(){return"_:"+this.getValue()}}]),t}(j),T=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"string";return Object(y.a)(this,t),Object(b.a)(this,Object(E.a)(t).call(this,e))}return Object(O.a)(t,e),Object(w.a)(t,[{key:"getTypeName",value:function(){return"primitive"}},{key:"toString",value:function(){return"xsd:"+this.getValue()}}]),t}(j),C=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(y.a)(this,t),Object(b.a)(this,Object(E.a)(t).call(this,e))}return Object(O.a)(t,e),Object(w.a)(t,[{key:"getTypeName",value:function(){return"shape"}},{key:"setValue",value:function(e){this.value=e}},{key:"toString",value:function(){return this.value}}]),t}(j),I=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(y.a)(this,t),Object(b.a)(this,Object(E.a)(t).call(this,e))}return Object(O.a)(t,e),Object(w.a)(t,[{key:"getTypeName",value:function(){return"literal"}},{key:"toString",value:function(){return"Literal"}}]),t}(j),P=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(y.a)(this,t),Object(b.a)(this,Object(E.a)(t).call(this,e))}return Object(O.a)(t,e),Object(w.a)(t,[{key:"getTypeName",value:function(){return"nonliteralKind"}},{key:"toString",value:function(){return"NONLITERAL"}}]),t}(j),V=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(y.a)(this,t),Object(b.a)(this,Object(E.a)(t).call(this,e))}return Object(O.a)(t,e),Object(w.a)(t,[{key:"getTypeName",value:function(){return"iri"}},{key:"toString",value:function(){return"IRI"}}]),t}(j),B=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(y.a)(this,t),Object(b.a)(this,Object(E.a)(t).call(this,e))}return Object(O.a)(t,e),Object(w.a)(t,[{key:"getTypeName",value:function(){return"bnode"}},{key:"toString",value:function(){return"BNODE"}}]),t}(j),R=function(){function e(){Object(y.a)(this,e)}return Object(w.a)(e,[{key:"createType",value:function(e,t){var a;return"iriRef"==e&&(a=new S(t)),"prefixedIri"==e&&(a=new k(t)),"bnodeType"==e&&(a=new N(t)),"primitive"==e&&(a=new T),"shape"==e&&(a=new C("")),"literal"==e&&(a=new I(t)),"nonliteral"==e&&(a=new P(t)),"iri"==e&&(a=new V(t)),"bnode"==e&&(a=new B(t)),a}}]),e}(),D=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(y.a)(this,t),Object(b.a)(this,Object(E.a)(t).call(this,e))}return Object(O.a)(t,e),Object(w.a)(t,[{key:"getTypeName",value:function(){return"blank"}},{key:"toString",value:function(){return""}}]),t}(j),L=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new S("shapeName"),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new D;Object(y.a)(this,e),this.id=t,this.type=a,this.triples=n,this.triplesCount=this.triples.length,this.factory=new R,this.qualifier=r}return Object(w.a)(e,[{key:"addTriple",value:function(e){this.triples.push(e),this.triplesCount++}},{key:"removeTriple",value:function(e){this.triples=this.triples.filter((function(t){return t.id!=e}))}},{key:"getTriplesCount",value:function(){return this.triplesCount}},{key:"getId",value:function(){return this.id}},{key:"getType",value:function(){return this.type}},{key:"getTriples",value:function(){return this.triples}},{key:"setTriples",value:function(e){this.triples=e}},{key:"getQualifier",value:function(){return this.qualifier}},{key:"setQualifier",value:function(e){this.qualifier=this.factory.createType(e,"shapeName")}},{key:"setType",value:function(e){this.type=this.factory.createType(e,"shapeName")}},{key:"toString",value:function(){var e=this.type+" "+this.qualifier+" {\n";return this.triples.forEach((function(t){e+=t})),e+="}\n\n"}}]),e}(),q=0;function _(e){var t=m.getInstance().getYashe();void 0!=t&&g.a.signal(t,"humanEvent",e)}var Y,A={addShape:function(e){var t=e.length+q++,a=new L(t),n=[];return(n=Object.assign(n,e)).push(a),_(n),a},deleteShape:function(e,t,a){if(a||(a=window.confirm("Are you sure?")),1==a){var n=e.filter((function(e){return e.id!=t}));return _(n),n}return e},getShapeById:function(e,t){return e.filter((function(e){return e.id==t}))[0]},getShapeByName:function(e,t){for(var a in e)if(e[a].getType().getValue()==t)return e[a]},getTripleById:function(e,t){return e.getTriples().filter((function(e){return e.id==t}))[0]},emit:_},W=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(y.a)(this,e),this.shape=t}return Object(w.a)(e,[{key:"getShape",value:function(){return this.shape}},{key:"setShape",value:function(e){this.shape=e}},{key:"toString",value:function(){return this.shape?"@"+this.shape.getType().toString():""}}]),e}(),F=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new k("tripleName"),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new T,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new W,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";Object(y.a)(this,e),this.id=t,this.type=a,this.value=n,this.cardinality=i,this.inlineShape=r,this.factory=new R}return Object(w.a)(e,[{key:"getId",value:function(){return this.id}},{key:"getType",value:function(){return this.type}},{key:"setType",value:function(e){this.type=this.factory.createType(e,"tripleName")}},{key:"setValue",value:function(e){this.value=this.factory.createType(e,"valueName")}},{key:"setCardinality",value:function(e){this.cardinality=e}},{key:"getInlineShape",value:function(){return this.inlineShape}},{key:"setInlineShape",value:function(e){this.inlineShape=e}},{key:"getValue",value:function(){return this.value}},{key:"getCardinality",value:function(){return this.cardinality}},{key:"toString",value:function(){return"  "+this.getType().toString()+"          "+this.getValue().toString()+" "+this.getInlineShape().toString()+this.getCardinality()+"  ;\n"}}]),e}(),X=["string","integer","date","boolean"];function U(e,t,a){var n,r,i,l,o,c=e.length,u=new W,s=0;for(var p in t){var h=t[p];0==s?n=H(h.string,"tripleName"):("string-2"!=h.type&&"keyword"!=h.type&&"variable-3"!=h.type||(r=z(h.string)),"at"==h.type&&(l=M(h.string),Y.push({shapeId:a,tripleId:c,inlineName:l})),"card"==h.type&&(i=h.string)),s++}void 0!=l&&(void 0!=r&&(o=r.getTypeName()),r=new C(o));return new F(c,n,r,u,i)}function z(e){var t=(new R).createType(e.toLowerCase());if(void 0!=t)return t;if(e.startsWith("<")){var a=e.split("<")[1].split(">")[0];return new S("valueName",a)}var n=e.split(":"),r=m.getInstance().getYashe();if(2==n.length){if(function(e){for(var t in X)if(X[t]==e)return!0;return!1}(n[1]))return new T(n[1]);var i=n[0],l=Q(r.getDefinedPrefixes(),i),o=new x(i,l);return new k("valueName",o,n[1])}}function H(e,t){var a,n=m.getInstance().getYashe();if(e.startsWith("<"))return a=e.split("<")[1].split(">")[0],new S(t,a);if(e.startsWith("_:"))return a=e.split(":")[1],new N(t,a);a=e.split(":")[1];var r=e.split(":")[0],i=Q(n.getDefinedPrefixes(),r),l=new x(r,i);return new k(t,l,a)}function Q(e,t){var a;for(var n in e)n==t&&(a=e[n]);return a}function M(e){return e.startsWith("@<")?e.split("<")[1].split(">")[0]:e.split(":")[1]}function J(e){return e.filter((function(e){return"ws"!=e.type}))}var K={getTokens:function(){var e=m.getInstance().getYashe(),t=[];if(void 0!=e)for(var a=Object.keys(e.getDefinedPrefixes()).length+1;a<e.lineCount();++a){J(e.getLineTokens(a)).forEach((function(e){t.push(e)}))}return t},getDefinedShapes:function(e){var t=0,a=[],n=[];return e.forEach((function(e){a.push(e),"{"==e.string&&t++,"}"==e.string&&0==--t&&(n.push(a),a=[])})),n},getShapes:function(e){Y=[];var t=[];return m.getInstance().getYashe(),e.forEach((function(e){var a=t.length,n=H(e[0].string,"shapeName"),r=function(e){if("keyword"==e[1].type){var t=e[1].string.toLowerCase();return(new R).createType(t)}return new D}(e),i=function(e,t){for(var a=[],n=[],r=(m.getInstance().getYashe(),function(e){for(var t=0;t<e.length;t++)if("{"==e[t].string)return t+1}(t));r<t.length;r++)n.push(t[r]),"punc"==t[r].type&&1!=n.length&&(a.push(U(a,n,e)),n=[]);return a}(a,e);t.push(new L(a,n,i,r))})),t},updateInlines:function(e){for(var t in Y){var a=Y[t].shapeId,n=Y[t].tripleId,r=Y[t].inlineName,i=A.getShapeById(e,a),l=A.getTripleById(i,n),o=A.getShapeByName(e,r);l.getInlineShape().setShape(o)}}};var Z={DEFAULT_SHAPE:"PREFIX :       <http://example.org/>\nPREFIX schema: <http://schema.org/>\nPREFIX xsd:    <http://www.w3.org/2001/XMLSchema#>\n\n:User IRI {\n  schema:name          xsd:string  ;\n  schema:birthDate     xsd:date?  ;\n  schema:birthPlace    xsd:string+  ;\n  schema:knows          @:User*  \n}",replaceShapes:function(){var e=K.getTokens(),t=K.getDefinedShapes(e),a=K.getShapes(t);return K.updateInlines(a),a},updatePrefixes:function(){var e=[],t={},a=m.getInstance().getYashe();if(void 0!=a)for(var n=Object.keys(a.getDefinedPrefixes()),r=Object.values(a.getDefinedPrefixes()),i=0;i<n.length;i++)(t={}).key=n[i],t.val=r[i],e.push(t);return e}};var $=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],i=t[1],l=Object(n.useRef)(null),o=Object(n.useContext)(ye);Object(n.useEffect)((function(){if(!a){var e={persistent:!1,lineNumbers:!0,viewportMargin:1/0},t=f.a.fromTextArea(l.current,e);t.on("blur",(function(){t.hasErrors(t)||(c(),s())})),t.on("humanEvent",(function(e){m.getInstance().draw(e)})),t.on("prefixUpdate",(function(){s()})),t.on("themeChange",(function(){p()})),t.on("delete",(function(){c(),s()})),t.on("upload",(function(){setTimeout((function(){c(),s()}),10)})),t.on("keydown",(function(){t.hasErrors()||(c(),s())})),t.on("keyHandled",(function(){t.hasErrors()||(c(),s())})),t.setValue(Z.DEFAULT_SHAPE),t.refresh(),i(t),m.getInstance().setYashe(t),c(),s()}}),[a]);var c=function(){o.replaceShapes(Z.replaceShapes())},s=function(){o.updatePrefixes(Z.updatePrefixes())},p=function(){o.changeThemeStyle()};return r.a.createElement("div",{className:"col show"},r.a.createElement("textarea",{ref:l}))};var G=function(e){var t=Object(n.useContext)(ye),a=e.shape,i=e.triple,l=e.type,o=a.type.value;"triple"==l?o=i.type.value:"value"==l&&(o=i.value.value);var c=Object(n.useState)(o),s=Object(u.a)(c,2),p=s[0],h=s[1];return r.a.createElement("input",{className:a.type.context+" form-control col-4",context:"text",value:p,onChange:function(e){var n=e.target.value;"shape"==l?a.type.setValue(n):"triple"==l?i.type.setValue(n):i.value.setValue(n),t.emit(),h(n)}})};var ee=function(e){var t,a=Object(n.useContext)(ye),i=e.shape,l=e.triple,o=e.type,c=i.type.value;"shape"==o?t=i.type.prefix.prefixValue:"triple"==o?(c=l.type.value,t=l.type.prefix.prefixValue):(c=l.value.value,t=l.value.prefix.prefixValue);var s=Object(n.useState)(c),p=Object(u.a)(s,2),h=p[0],f=p[1],v=Object(n.useState)(t),d=Object(u.a)(v,2),g=d[0],y=d[1];return r.a.createElement("div",{className:"row col-6"},r.a.createElement("select",{className:function(){var e="prefixShape",t=i.type.context;return"tripleName"==t&&(e="prefixTriple"),"valueName"==t&&(e="prefixValue"),e}()+" col-5 form-control",value:g,onChange:function(e){var t=function(e){var t=m.getInstance().getYashe().getDefinedPrefixes();for(var a in t)if(t[a]==e)return new x(a,t[a]);return new x}(e.target.value);"shape"==o?i.type.setPrefix(t):"triple"==o?l.type.setPrefix(t):l.value.setPrefix(t),a.emit(),y(e.target.value)}},a.prefixes.map((function(e){return r.a.createElement("option",{key:e.key,value:e.val},e.key)}))),r.a.createElement("input",{className:i.type.value+" form-control col",context:"text",value:h,onChange:function(e){var t=e.target.value;"shape"==o?i.type.setValue(t):"triple"==o?l.type.setValue(t):l.value.setValue(t),a.emit(),f(t)}}))};var te=function(e){var t=Object(n.useContext)(ye),a=e.shape,i=a.type.value;""==i&&(i="example",a.type.setValue(c));var l=Object(n.useState)(i),o=Object(u.a)(l,2),c=o[0],s=o[1];return r.a.createElement("input",{className:a.type.context+" form-control col-4",context:"text",value:c,onChange:function(e){var n=e.target.value;a.type.setValue(n),t.emit(),s(n)}})},ae=["String","Integer","Date","Boolean"];var ne=function(e){var t=Object(n.useContext)(ye),a=(e.shape,e.triple),i=Object(n.useState)(a.value.value),l=Object(u.a)(i,2),o=l[0],c=l[1];return r.a.createElement("select",{className:"col-sm-4 form-control tripleValue",value:o,onChange:function(e){var n=e.target.value;a.value.setValue(n),t.emit(),c(n)}},ae.map((function(e){return r.a.createElement("option",{key:e,value:e.toLowerCase()},e)})))};var re=function(e){var t,a=Object(n.useContext)(ye),i=e.shape,l=e.triple,o=(e.value,e.scope);t="shape"==o?i.qualifier.getTypeName():l.value.value;var c=Object(n.useState)(t),s=Object(u.a)(c,2),p=s[0],h=s[1];return r.a.createElement("select",{className:"col form-control valueInlineShape",value:p,onChange:function(e){var t=e.target.value;"shape"==o?i.setQualifier(t):l.value.value=t,a.emit(),h(t)}},r.a.createElement("option",{value:"shape"}),r.a.createElement("option",{value:"iri"},"IRI"),r.a.createElement("option",{value:"literal"},"Literal"),r.a.createElement("option",{value:"nonliteral"},"NonLiteral"),r.a.createElement("option",{value:"bnode"},"BNODE"))};var ie=function(e){var t=Object(n.useContext)(ye),a=(e.shape,e.triple),i="";null!=a.inlineShape.shape&&(i=a.inlineShape.shape.id);var l=Object(n.useState)(i),o=Object(u.a)(l,2),c=o[0],s=o[1],p=Object(n.useState)(a.value.getTypeName()),h=Object(u.a)(p,2);return h[0],h[1],r.a.createElement("div",{className:"row col"},r.a.createElement("select",{className:"col form-control valueInlineShape",value:c,onChange:function(e){var n=e.target.value,r=null,i="";""!=n&&(i=(r=A.getShapeById(t.shapes,n)).id),a.getInlineShape().setShape(r),t.emit(),s(i)}},r.a.createElement("option",{value:""}),t.shapes.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},"@"+e.type)}))),r.a.createElement(re,{triple:a,scope:"triple"}))};var le=function(e){var t=e.shape,a=e.triple,n=e.type,i=e.instance;return"iriRef"==i?r.a.createElement(G,{shape:t,triple:a,type:n}):"prefixedIri"==i?r.a.createElement(ee,{shape:t,triple:a,type:n}):"bnodeType"==i?r.a.createElement(te,{shape:t}):"primitive"==i?r.a.createElement(ne,{shape:t,triple:a}):"shape"==i?r.a.createElement(ie,{shape:t,triple:a}):null};var oe=function(e){var t=Object(n.useContext)(ye),a=e.shape,i=e.triple,l=e.deleteTriple,o=e.handeCollapse,c=Object(n.useState)(i.type.getTypeName()),s=Object(u.a)(c,2),p=s[0],h=s[1],f=Object(n.useState)("expand_more"),v=Object(u.a)(f,2),m=v[0],d=v[1];return r.a.createElement("div",{className:"row col triples-header"},r.a.createElement("label",{className:"col-xs-1 tripleLabel"},"Triple"),r.a.createElement("select",{className:"col-2 form-control tripleType",value:p,onChange:function(e){var a=e.target.value;i.setType(a),t.emit(),h(a)}},r.a.createElement("option",{value:"iriRef"},"IriRef"),r.a.createElement("option",{value:"prefixedIri"},"Prefixed")),r.a.createElement(le,{shape:a,triple:i,type:"triple",instance:i.type.getTypeName()}),r.a.createElement("button",{className:"col-xs-1  colapseButton mdc-icon-button material-icons btn-primary",onClick:function(e){d("expand_more"==m?"expand_less":"expand_more"),o()}},m),r.a.createElement("button",{className:"col-xs-1 deletePropButton mdc-icon-button material-icons btn-danger",onClick:function(){return l(i.id)}},"delete"))};var ce=function(e){var t=e.shape,a=e.triple,i=Object(n.useContext)(ye),l=Object(n.useState)(a.value.getTypeName()),o=Object(u.a)(l,2),c=o[0],s=o[1];return r.a.createElement("div",{className:"row col-10"},r.a.createElement("select",{className:"col-5 form-control valueType",value:c,onChange:function(e){var t=e.target.value;"shape"!=t&&(a.inlineShape.shape=null),a.setValue(t),i.emit(),s(t)}},r.a.createElement("option",{value:"primitive"},"Primitive"),r.a.createElement("option",{value:"shape"},"Shape"),r.a.createElement("option",{value:"iriRef"},"IriRef"),r.a.createElement("option",{value:"prefixedIri"},"Prefixed"),r.a.createElement("option",{value:"literal"},"Literal"),r.a.createElement("option",{value:"nonliteral"},"NonLiteral"),r.a.createElement("option",{value:"iri"},"IRI"),r.a.createElement("option",{value:"bnode"},"BNODE")),r.a.createElement(le,{shape:t,triple:a,type:"value",instance:a.value.getTypeName()}))};var ue=function(e){e.shape;var t=e.triple,a=Object(n.useContext)(ye),i=Object(n.useState)(t.cardinality.toString()),l=Object(u.a)(i,2),o=l[0],c=l[1];return r.a.createElement("div",{className:"row col-4"},r.a.createElement("select",{className:"col  form-control tripleCardinality",value:o,onChange:function(e){var n=e.target.value;t.setCardinality(n),a.emit(),c(n)}},r.a.createElement("option",{value:""},"Exactly one"),r.a.createElement("option",{value:"*"},"Zero or more"),r.a.createElement("option",{value:"+"},"One at least"),r.a.createElement("option",{value:"?"},"One or none")))};var se=function(e){Object(n.useContext)(ye);var t=e.shape,a=e.triple,i=e.colapse;return r.a.createElement("div",{ref:i,className:"col-12 valuesCol"},r.a.createElement("div",{className:"row values-container"},r.a.createElement("div",{className:"col-10 triplesVal "},r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-3 valueLabel"},"Value"),r.a.createElement(ce,{shape:t,triple:a}),r.a.createElement("label",{className:"col-3 cardiLabel"},"Cardinality"),r.a.createElement(ue,{shape:t,triple:a})))))};var pe=function(e){var t=e.shape,a=e.triple,n=e.deleteTriple;return r.a.createElement(p.a,{duration:180,collapsed:!0,render:function(e){var i=e.toggle,l=e.setCollapsibleElement;e.progress;return r.a.createElement("div",{className:"row tripleRow"},r.a.createElement(oe,{shape:t,triple:a,deleteTriple:n,handeCollapse:i}),r.a.createElement(se,{shape:t,triple:a,colapse:l}))}})};var he=function(e){var t=Object(n.useContext)(ye),a=e.shape,i=e.colapse,l=Object(n.useState)(a.type.getTypeName()),o=Object(u.a)(l,2),c=o[0],s=o[1],p=Object(n.useState)("expand_more"),h=Object(u.a)(p,2),f=h[0],v=h[1];return r.a.createElement("div",{className:"row col-8"},r.a.createElement("select",{className:"col-3 form-control shapeType",value:c,onChange:function(e){var n=e.target.value;a.setType(n),t.emit(),s(n)}},r.a.createElement("option",{value:"iriRef"},"IriRef"),r.a.createElement("option",{value:"prefixedIri"},"Prefixed"),r.a.createElement("option",{value:"bnodeType"},"BNode")),r.a.createElement(le,{shape:a,triple:null,type:"shape",instance:a.type.getTypeName()}),r.a.createElement("button",{className:"col-xs-1  colapseButton mdc-icon-button material-icons btn-primary",onClick:function(e){v("expand_more"==f?"expand_less":"expand_more"),i()}},f),r.a.createElement("button",{className:"col-xs-1 deleteShapeButton mdc-icon-button material-icons btn-danger",onClick:function(){return t.deleteShape(a.id)}},"delete"))};var fe=function(e){var t=Object(n.useContext)(ye),a=e.shape,i=Object(n.useState)(a.triples),l=Object(u.a)(i,2),o=l[0],s=l[1],h=Object(n.useState)("expand_less"),f=Object(u.a)(h,2),v=f[0],m=f[1],d=function(){var e=a.getTriplesCount(),n=new F(e);s([].concat(Object(c.a)(o),[n])),a.addTriple(n),t.emit()},g=function(e){var n=a.triples.filter((function(t){return t.id!=e}));s(n),a.setTriples(n),t.emit()};return r.a.createElement("div",{className:"shapes-container",style:t.currentStyle},r.a.createElement(p.a,{duration:180,collapsed:!0,render:function(e){var n=e.toggle,i=e.setCollapsibleElement;e.progress;return r.a.createElement("div",null,r.a.createElement("div",{className:"row shapes-header",style:t.currentStyle},r.a.createElement("label",{className:"col-sm-2"},"Shape "),r.a.createElement(he,{shape:a,colapse:n})),r.a.createElement("div",{className:"row qualifier",ref:i,style:t.currentStyle},r.a.createElement("label",{className:"col-2 qualiLabel"},"Qualifier "),r.a.createElement("div",{className:"col-2"},r.a.createElement(re,{shape:a,scope:"shape"}))))}}),r.a.createElement(p.a,{duration:180,render:function(e){var n=e.toggle,i=e.setCollapsibleElement;e.progress;return r.a.createElement("div",null,r.a.createElement("button",{className:"col-xs-1  colapseTriplesBtn mdc-icon-button material-icons btn-primary",onClick:function(){return function(e){m("expand_more"==v?"expand_less":"expand_more"),e()}(n)}},v),r.a.createElement("div",{ref:i},r.a.createElement("div",{className:"triples-container col-xs ",style:t.currentStyle},o.map((function(e){return r.a.createElement(pe,{key:e.id,shape:a,triple:e,deleteTriple:g})}))),r.a.createElement("button",{className:"btn-primary addPropButton col-xs-3",onClick:d},"+ Triple")))}}))};var ve=function(e){var t=Object(n.useContext)(ye),a=e.colapse;return r.a.createElement("div",{ref:a,id:"assistant-container",className:"assistant col-lg-6",style:t.currentStyle},t.shapes.map((function(e){return r.a.createElement(fe,{key:e.id,shape:e})})),r.a.createElement("button",{id:"addShapeButton",className:"btn-primary addShapeButton",onClick:t.addShape},"+ Shape"))};var me=function(e){var t=e.namespaces,a=function(e){var a=m.getInstance().getYashe(),n=a.getValue(),r=(a.getDefinedPrefixes(),e.target.value),i="http://example.org/";for(var l in t)for(var o in t[l])o==r&&(i=t[l][o]);a.setValue("PREFIX "+r+": <"+i+">\n"+n),g.a.signal(a,"prefixUpdate")};return r.a.createElement("div",null,r.a.createElement("button",{className:"form-control",onClick:a},"Example Prefix"),Object.keys(t).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("select",{className:"form-control",onChange:a},r.a.createElement("option",null,e),Object.keys(t[e]).map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))})))},de={Wikidata:{wikibase:"http://wikiba.se/ontology#",wd:"http://www.wikidata.org/entity/",wdt:"http://www.wikidata.org/prop/direct/",wdtn:"http://www.wikidata.org/prop/direct-normalized/",wds:"http://www.wikidata.org/entity/statement/",p:"http://www.wikidata.org/prop/",wdref:"http://www.wikidata.org/reference/",wdv:"http://www.wikidata.org/value/",ps:"http://www.wikidata.org/prop/statement/",psv:"http://www.wikidata.org/prop/statement/value/",psn:"http://www.wikidata.org/prop/statement/value-normalized/",pq:"http://www.wikidata.org/prop/qualifier/",pqv:"http://www.wikidata.org/prop/qualifier/value/",pqn:"http://www.wikidata.org/prop/qualifier/value-normalized/",pr:"http://www.wikidata.org/prop/reference/",prv:"http://www.wikidata.org/prop/reference/value/",prn:"http://www.wikidata.org/prop/reference/value-normalized/",wdno:"http://www.wikidata.org/prop/novalue/",wdata:"http://www.wikidata.org/wiki/Special:EntityData/"},W3C:{rdfs:"http://www.w3.org/2000/01/rdf-schema#",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",owl:"http://www.w3.org/2002/07/owl#",skos:"http://www.w3.org/2004/02/skos/core#",xsd:"http://www.w3.org/2001/XMLSchema#",prov:"http://www.w3.org/ns/prov#"},"Social/Other":{schema:"http://schema.org/",geo:"http://www.opengis.net/ont/geosparql#",geof:"http://www.opengis.net/def/geosparql/function/"},Blazegraph:{bd:"http://www.bigdata.com/rdf#",bds:"http://www.bigdata.com/rdf/search#",gas:"http://www.bigdata.com/rdf/gas#",hint:"http://www.bigdata.com/queryHints#"}};var ge=function(e){var t=e.toggle;return r.a.createElement("div",{className:"row editor-nav"},r.a.createElement("button",{className:"btn btn-default assistantBtn ",type:"button",onClick:t},"Assistant"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-default dropdown-toggle",type:"button","data-toggle":"dropdown"},"Prefixes",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},r.a.createElement("li",null,r.a.createElement("div",{id:"prefixesDropdown",className:"prefixes"},r.a.createElement(me,{namespaces:de}))))))},ye=r.a.createContext();var we=function(){var e,t=Object(n.useState)([]),a=Object(u.a)(t,2),i=a[0],l=a[1],s=Object(n.useState)([{key:"",val:"http://example.org/"}]),h=Object(u.a)(s,2),f=h[0],v=h[1],m={background:"#2B2B2B",color:"white"},d={background:"#eaf3ff",color:"black"},g=Object(n.useState)(d),y=Object(u.a)(g,2),w=y[0],b=y[1],E="light";return r.a.createElement(ye.Provider,{value:(e={shapes:i},Object(o.a)(e,"shapes",i),Object(o.a)(e,"addShape",(function(){l([].concat(Object(c.a)(i),[A.addShape(i)]))})),Object(o.a)(e,"deleteShape",(function(e){l(A.deleteShape(i,e,!1))})),Object(o.a)(e,"replaceShapes",(function(e){l([]),l(e)})),Object(o.a)(e,"prefixes",f),Object(o.a)(e,"updatePrefixes",(function(e){v(e)})),Object(o.a)(e,"emit",(function(){A.emit(i)})),Object(o.a)(e,"currentStyle",w),Object(o.a)(e,"changeThemeStyle",(function(){"light"==E?(b(m),E="dark"):(E="light",b(d))})),e)},r.a.createElement(p.a,{duration:500,collapsed:!0,render:function(e){var t=e.toggle,a=e.setCollapsibleElement;e.progress;return r.a.createElement("div",null,r.a.createElement(ge,{toggle:t}),r.a.createElement("div",{className:"row separator",style:w},r.a.createElement(ve,{colapse:a,initialShapes:i}),r.a.createElement($,null)))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.7e6d54a3.chunk.js.map