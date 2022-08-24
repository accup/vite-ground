import{d as f,o,c as d,b as e,u as t,F as p,r as h,m as u,t as y,e as x,f as C,g as k,h as b}from"./vue.34679079.js";import"./modulepreload-polyfill.c7c6310f.js";const L=["id"],E=["id","d"],S=["id","d"],A={class:"content"},v=["href","stroke","fill"],$=["begin","values"],N=["begin","values"],O=["values","dur"],B=["values","dur"],D=["begin","end"],T={key:0,x:"50",y:"50",dx:"1",dy:"7","text-anchor":"middle",fill:"white","font-size":"15"},z=["id","href"],M={display:"none"},w=["begin","end"],Q=["fill"],P=["begin","values"],V=["values","dur"],W=["href","startOffset","textLength","font-size"],Z=["begin","values"],I=["values","dur"],j={class:"auxiliary"},H=["href"],R=["href","stroke"],g=f({__name:"Shape",props:{resetDuration:null,shapeProps:null},setup(r){const{resetDuration:n,shapeProps:i}=r,{id:a,content:s}=i,c={"stroke-linejoin":"round","stroke-linecap":"round"},_={fill:"freeze",calcMode:"spline",keySplines:"0.5 0 0.5 1"};return(mt,bt)=>(o(),d("svg",{id:`book__${t(a)}`,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},[e("defs",null,[e("path",{id:`book__defs_${t(a)}`,d:t(s).d},null,8,E),(o(!0),d(p,null,h(t(s).segments,(l,m)=>(o(),d("path",{id:`book__defs_${t(a)}_${m}`,d:l.d},null,8,S))),256))]),e("g",A,[e("use",u({href:`#book__defs_${t(a)}`,"stroke-width":"3",stroke:t(s).startShapeStroke,fill:t(s).startShapeFill},t(c)),[e("animate",u({begin:`book__${t(a)}_ui.click`,attributeName:"stroke",values:`${t(s).startShapeStroke};${t(s).endShapeStroke}`,dur:"0.5s"},t(_)),null,16,$),e("animate",u({begin:`book__${t(a)}_ui.click + 2s`,attributeName:"fill",values:`${t(s).startShapeFill};${t(s).endShapeFill}`,dur:"1s"},t(_)),null,16,N),e("animate",u({begin:"reset_animate_display.end",attributeName:"stroke",values:`${t(s).endShapeStroke};${t(s).startShapeStroke}`,dur:r.resetDuration},t(_)),null,16,O),e("animate",u({begin:"reset_animate_display.end",attributeName:"fill",values:`${t(s).endShapeFill};${t(s).startShapeFill}`,dur:r.resetDuration},t(_)),null,16,B)],16,v),e("g",null,[e("set",{begin:`book__${t(a)}_ui.click`,end:`book__${t(a)}_animate_display.end`,attributeName:"display",to:"none"},null,8,D),t(s).clickText!=null?(o(),d("text",T,y(t(s).clickText),1)):x("",!0),e("use",u({id:`book__${t(a)}_ui`,class:"pointer",href:`#book__defs_${t(a)}`,"stroke-width":"3",stroke:"transparent",fill:"transparent"},t(c)),null,16,z)]),e("g",M,[e("set",{begin:`book__${t(a)}_ui.click`,end:`book__${t(a)}_animate_display.end`,attributeName:"display",to:"inline"},null,8,w),(o(!0),d(p,null,h(t(s).segments,(l,m)=>(o(),d("text",{dy:"1",fill:t(s).startTextFill,"text-rendering":"geometricPrecision"},[e("animate",u({begin:`book__${t(a)}_ui.click + 2s`,attributeName:"fill",values:`${t(s).startTextFill};${t(s).endTextFill}`,dur:"1s"},t(_)),null,16,P),e("animate",u({begin:"reset_animate_display.end",attributeName:"fill",values:`${t(s).endTextFill};${t(s).startTextFill}`,dur:r.resetDuration},t(_)),null,16,V),e("textPath",{href:`#book__defs_${t(a)}_${m}`,startOffset:l.startOffset,textLength:l.textLength,"font-size":l.fontSize},[e("animate",u({begin:`book__${t(a)}_ui.click + 1s`,attributeName:"startOffset",values:`${l.startOffset};${l.endOffset}`,dur:"2s"},t(_)),null,16,Z),e("animate",u({begin:"reset_animate_display.end",attributeName:"startOffset",values:`${l.endOffset};${l.startOffset}`,dur:r.resetDuration},t(_)),null,16,I),C(" "+y(l.text),1)],8,W)],8,Q))),256))])]),e("g",j,[e("use",u({href:`#book__defs_${t(a)}`,stroke:"blue","stroke-width":"2",fill:"none",opacity:"0.4"},t(c)),null,16,H),(o(!0),d(p,null,h(t(s).segments,(l,m)=>{var F;return o(),d("use",u({href:`#book__defs_${t(a)}_${m}`,stroke:(F=l.auxiliary)==null?void 0:F.stroke,"stroke-width":"1",fill:"none",opacity:"0.4"},t(c)),null,16,R)}),256))])],8,L))}}),Y=f({__name:"Spade",props:{resetDuration:null},setup(r){const n=r,i={id:"spade",content:{d:`
      M50 10
      Q35 27 20 40
      C-10 66 30 95 45 70
      L40 90
      L60 90
      L55 70
      C70 95 110 66 80 40
      Q65 27 50 10
      Z
    `,clickText:"Click!",startShapeStroke:"rgba(16, 16, 80, 1)",endShapeStroke:"rgba(16, 16, 80, 0)",startShapeFill:"rgba(108, 108, 160, 0)",endShapeFill:"rgba(108, 108, 160, 1)",startTextFill:"rgba(16, 16, 80, 1)",endTextFill:"rgba(255, 255, 255, 1)",segments:[{text:"\u30B9\u30DA\u30FC\u30C9 (spade) \u306F\u3001\u30C8\u30E9\u30F3\u30D7\u306A\u3069\u3067\u4F7F\u7528\u3055\u308C\u308B",textLength:60,d:`
          M20 43
          L80 43
          C110 43 70 -10 50 10
          Q35 27 20 40
          C-10 66 30 95 45 70
        `,startOffset:133,endOffset:0,fontSize:2.5,auxiliary:{stroke:"orange"}},{text:"\u30B9\u30FC\u30C8\u306E\u3072\u3068\u3064\u3067\u3042\u308B\u3002\u30AB\u30FC\u30C9\u30B2\u30FC\u30E0\u3067\u306F\u30B9\u30DA\u30FC\u30C9\u306E",textLength:64,d:`
          M18 48
          L82 48
          C112 48 50 20 20 40
          C-10 66 30 95 45 70
          L40 90
          L60 90
          L55 70
        `,startOffset:151,endOffset:0,fontSize:2.5,auxiliary:{stroke:"lightyellow"}},{text:"\u30AB\u30FC\u30C9\u304C\u4E00\u756A\u5F37\u3044\u30EB\u30FC\u30EB\u3068\u3057\u3066\u3044\u308B\u3082\u306E\u304C\u591A\u3044\u300215\u4E16\u7D00\u306B",textLength:70,d:`
          M15 53
          L85 53
          C115 53 50 50 45 70
          L40 90
          L60 90
          L55 70
          C70 95 110 66 80 40
        `,startOffset:132,endOffset:0,fontSize:2.5,auxiliary:{stroke:"lightgreen"}},{text:"\u30D5\u30E9\u30F3\u30B9\u306E\u30EB\u30FC\u30A2\u30F3\u3068\u30EA\u30E8\u30F3\u3067\u4F7F\u308F\u308C\u59CB\u3081\u305F\u3068\u3044\u308F\u308C\u3066\u3044\u308B\u3002",textLength:74,d:`
          M13.5 58
          L87.5 58
          C95 58 90 50 85 45
          C75 30 40 45 55 70
          C70 95 110 66 80 40
          Q65 27 50 10
        `,startOffset:148,endOffset:0,fontSize:2.5,auxiliary:{stroke:"skyblue"}},{text:"\u51FA\u5178: \u30D5\u30EA\u30FC\u767E\u79D1\u4E8B\u5178\u300E\u30A6\u30A3\u30AD\u30DA\u30C7\u30A3\u30A2\uFF08Wikipedia\uFF09\u300F",textLength:53,d:`
          M33 65
          L86 65
          C100 65 95 53 80 40
          Q65 27 50 10
          Q35 27 20 40
        `,startOffset:90,endOffset:0,fontSize:2,auxiliary:{stroke:"violet"}}]}};return(a,s)=>(o(),k(g,u(n,{"shape-props":i}),null,16))}}),q=f({__name:"Heart",props:{resetDuration:null},setup(r){const n=r,i={id:"heart",content:{d:`
      M50 40
      C50 10 10 10 10 40
      Q10 60 50 90
      Q90 60 90 40
      C90 10 50 10 50 40
      Z
    `,startShapeStroke:"rgba(240, 80, 80, 1)",endShapeStroke:"rgba(240, 80, 80, 0)",startShapeFill:"rgba(248, 108, 108, 0)",endShapeFill:"rgba(248, 108, 108, 1)",startTextFill:"rgba(240, 80, 80, 1)",endTextFill:"rgba(255, 255, 255, 1)",segments:[{text:"\u30CF\u30FC\u30C8\uFF08\u82F1: heart\uFF09\u3001\u30CF\u30FC\u30C8\u30DE\u30FC\u30AF\u306F\u3001",textLength:50,d:`
          M25 43
          L75 43
          C110 43 50 100 50 40
          C50 10 10 10 10 40
          Q10 60 50 90
        `,startOffset:149,endOffset:0,fontSize:2.5,auxiliary:{stroke:"orange"}},{text:"\u5FC3\u81D3\u3092\u8868\u3059\u30B7\u30F3\u30DC\u30EB\u3002\u4E00\u822C\u7684\u306B\u8272\u306F\u8D64\u3067\u793A\u3055\u308C\u308B\u3002",textLength:64,d:`
          M18 48
          L82 48
          Q90 48 90 40
          C90 0 10 0 10 40
          Q10 60 50 90
        `,startOffset:191,endOffset:0,fontSize:2.5,auxiliary:{stroke:"lightyellow"}},{text:"\u306A\u304A\u3001\u65E5\u672C\u306E\u5EFA\u7BC9\u306A\u3069\u3067\u307F\u3089\u308C\u308B\u540C\u69D8\u306E\u5F62\u306E",textLength:56,d:`
          M22 53
          L78 53
          C120 53 50 140 50 40
          C50 10 90 10 90 40
          Q90 60 50 90
        `,startOffset:189.5,endOffset:0,fontSize:2.5,auxiliary:{stroke:"lightgreen"}},{text:"\u6587\u69D8\u3084\u900F\u304B\u3057\u5F6B\u308A\u306F\u732A\u76EE\u3068\u547C\u3070\u308C\u308B\u3002",textLength:50,d:`
          M25 58
          L75 58
          Q94 58 98 40
          C102 27 90 20 90 40
          Q90 60 50 90
        `,startOffset:131,endOffset:0,fontSize:2.5,auxiliary:{stroke:"skyblue"}},{text:"\u51FA\u5178: \u30D5\u30EA\u30FC\u767E\u79D1\u4E8B\u5178",textLength:20,d:`
          M40 66
          L60 66
          C110 66 10 88 10 40
          C10 10 50 10 50 40
        `,startOffset:162,endOffset:0,fontSize:2,auxiliary:{stroke:"violet"}},{text:"\u300E\u30A6\u30A3\u30AD\u30DA\u30C7\u30A3\u30A2\uFF08Wikipedia\uFF09\u300F",textLength:34,d:`
          M33 70
          L67 70
          C80 70 80 60 65 55
          Q50 50 50 40
          C50 10 90 10 90 40
        `,startOffset:83,endOffset:0,fontSize:2,auxiliary:{stroke:"violet"}}]}};return(a,s)=>(o(),k(g,u(n,{"shape-props":i}),null,16))}}),G=f({__name:"Diamond",props:{resetDuration:null},setup(r){const n=r,i={id:"diamond",content:{d:`
      M50 10
      L20 50
      L50 90
      L80 50
      Z
    `,startShapeStroke:"rgba(255, 200, 120, 1)",endShapeStroke:"rgba(255, 200, 120, 0)",startShapeFill:"rgba(248, 180, 100, 0)",endShapeFill:"rgba(248, 180, 100, 1)",startTextFill:"rgba(255, 200, 120, 1)",endTextFill:"rgba(255, 255, 255, 1)",segments:[{text:"\u30C0\u30A4\u30E4\u307E\u305F\u306F",textLength:20,d:`
          M40 30
          L60 30
          L50 10
          L20 50
        `,startOffset:42,endOffset:0,fontSize:2.5,auxiliary:{stroke:"orange"}},{text:"\u30C0\u30A4\u30E4\u30E2\u30F3\u30C9 (diamond) \u306F\u3001",textLength:33,d:`
          M34.5 35
          L67.5 35
          L50 10
          L20 50
        `,startOffset:84,endOffset:0,fontSize:2.5,auxiliary:{stroke:"lightyellow"}},{text:"\u7D44\u7248\u3084\u30C7\u30B6\u30A4\u30F3\u3067\u4F7F\u308F\u308C\u308B\u56F3\u5F62\u3067\u3001",textLength:39,d:`
          M31.5 40
          L70.5 40
          L50 90
          L20 50
        `,startOffset:92,endOffset:0,fontSize:2.5,auxiliary:{stroke:"lightgreen"}},{text:"\u9802\u70B9\u304C\u4E0A\u4E0B\u5DE6\u53F3\u3092\u5411\u3044\u305F\u83F1\u5F62\u3067\u3042\u308B\u3002",textLength:46,d:`
          M28 45
          L74 45
          L50 90
          L20 50
          L50 10
        `,startOffset:134.5,endOffset:0,fontSize:2.5,auxiliary:{stroke:"skyblue"}},{text:"\u3084\u3084\u7E26\u9577\u306E\u300C\u2662 \u2666\u300D\u306F\u3001\u30C8\u30E9\u30F3\u30D7\u306A\u3069\u3067",textLength:50,d:`
          M25 50
          L75 50
          L80 50
          L50 90
        `,startOffset:54,endOffset:0,fontSize:2.5,auxiliary:{stroke:"violet"}},{text:"\u4F7F\u7528\u3055\u308C\u308B4\u3064\u306E\u30B9\u30FC\u30C8\u306E1\u3064\u3067\u3042\u308B\u3002",textLength:46,d:`
          M28 55
          L74 55
          L80 50
          L50 90
          L20 50
        `,startOffset:103,endOffset:0,fontSize:2.5,auxiliary:{stroke:"darkorange"}},{text:"\u51FA\u5178: \u30D5\u30EA\u30FC\u767E\u79D1\u4E8B\u5178",textLength:20,d:`
          M40 62.5
          L60 62.5
          L80 50
          L50 10
        `,startOffset:43,endOffset:0,fontSize:2,auxiliary:{stroke:"darkgreen"}},{text:"\u300E\u30A6\u30A3\u30AD\u30DA\u30C7\u30A3\u30A2\uFF08Wikipedia\uFF09\u300F",textLength:31,d:`
          M34.5 66
          L65.5 66
          L80 50
          L50 10
        `,startOffset:72,endOffset:0,fontSize:2,auxiliary:{stroke:"darkblue"}}]}};return(a,s)=>(o(),k(g,u(n,{"shape-props":i}),null,16))}}),J=f({__name:"Club",props:{resetDuration:null},setup(r){const n=r,i={id:"club",content:{d:`
      M55 65
      C90 100 110 30 65 40
      C80 0 20 0 35 40
      C-10 30 10 100 45 65
      L40 90
      L60 90
      Z
    `,startShapeStroke:"rgba(16, 80, 16, 1)",endShapeStroke:"rgba(16, 80, 16, 0)",startShapeFill:"rgba(108, 160, 108, 0)",endShapeFill:"rgba(108, 160, 108, 1)",startTextFill:"rgba(16, 80, 16, 1)",endTextFill:"rgba(255, 255, 255, 1)",segments:[{text:"\u30AF\u30E9\u30D6 (club) \u3042\u308B\u3044\u306F\u30AF\u30ED\u30FC\u30D0\u30FC (clover) \u306F\u3001\u30C8\u30E9\u30F3\u30D7\u306A\u3069\u3067",textLength:72,d:`
          M14 46
          L86 46
          C110 46 20 30 55 65
          C90 100 110 30 65 40
        `,startOffset:154.5,endOffset:0,fontSize:2.5,auxiliary:{stroke:"orange"}},{text:"\u4F7F\u7528\u3055\u308C\u308B\u30B9\u30FC\u30C8\u306E\u3072\u3068\u3064\u3067\u3042\u308B\u300215\u4E16\u7D00\u306B\u30D5\u30E9\u30F3\u30B9\u306E\u30EB\u30FC\u30A2\u30F3\u3068",textLength:74,d:`
          M13 51
          L87 51
          C112 51 80 50 35 40
          C-10 30 10 100 45 65
        `,startOffset:144,endOffset:0,fontSize:2.5,auxiliary:{stroke:"lightyellow"}},{text:"\u30EA\u30E8\u30F3\u3067\u4F7F\u308F\u308C\u59CB\u3081\u305F\u3068\u3044\u308F\u308C\u3066\u3044\u308B\u3002\u30AA\u30EA\u30B8\u30CA\u30EB\u306F\u30D5\u30E9\u30F3\u30B9\u67C4\u306E",textLength:76,d:`
          M12 56
          L88 56
          C120 56 35 120 65 40
          C80 0 20 0 35 40
        `,startOffset:169.5,endOffset:0,fontSize:2.5,auxiliary:{stroke:"lightgreen"}},{text:"\u201CTr\xE8fle\u201D \u3067\u82F1\u8A9E\u3067\u306F clover, \u65E5\u672C\u8A9E\u3067\u306F\u4E09\u3064\u8449\u3092\u610F\u5473\u3059\u308B\u3002",textLength:68,d:`
          M16 61
          L84 61
          C120 61 50 40 45 65
          L40 90
          L60 90
          L55 65
        `,startOffset:137,endOffset:0,fontSize:2.5,auxiliary:{stroke:"skyblue"}},{text:"\u51FA\u5178: \u30D5\u30EA\u30FC\u767E\u79D1\u4E8B\u5178",textLength:20,d:`
          M65 40
          C110 30 90 100 55 65
          C20 30 20 26 40 26
          L60 26
        `,startOffset:67,endOffset:147,fontSize:2,auxiliary:{stroke:"violet"}},{text:"\u300E\u30A6\u30A3\u30AD\u30DA\u30C7\u30A3\u30A2\uFF08Wikipedia\uFF09\u300F",textLength:30,d:`
          M35 30
          L65 30
          C80 30 80 30 45 65
          C10 100 -10 30 35 40
        `,startOffset:83,endOffset:0,fontSize:2,auxiliary:{stroke:"violet"}}]}};return(a,s)=>(o(),k(g,u(n,{"shape-props":i}),null,16))}}),K=e("input",{id:"auxiliary",type:"checkbox"},null,-1),U=e("label",{for:"auxiliary"},"\u88DC\u52A9\u7DDA\u3092\u898B\u308B",-1),X={id:"book",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",xmlns:"http://www.w3.org/2000/svg"},tt={transform:"translate(0 0)"},et={transform:"scale(0.2)","transform-origin":"50 50"},ut={transform:"translate(-27 19)",opacity:"0",display:"none"},at=["end"],st={transform:"scale(0.2)","transform-origin":"50 50"},nt={transform:"translate(20 -20)",opacity:"0",display:"none"},it=["click"],rt={transform:"scale(0.2)","transform-origin":"50 50"},ot={transform:"translate(0 26)",opacity:"0",display:"none"},lt=["end"],dt={transform:"scale(0.2)","transform-origin":"50 50"},_t={transform:"translate(0 26)",opacity:"0",display:"none"},ft=e("set",{id:"reset_animate_display",begin:"book__club_ui.click + 2s",end:"reset.click + 0.5s",attributeName:"display",to:"inline"},null,-1),ct=e("g",{transform:"scale(0.2)","transform-origin":"50 50"},null,-1),gt=f({__name:"Index",setup(r){const n="3s",i={fill:"freeze"},a={fill:"freeze",calcMode:"spline",keySplines:"0.5 0 0.5 1"};return(s,c)=>(o(),d(p,null,[K,U,(o(),d("svg",X,[e("g",tt,[e("animateTransform",u({begin:"book__heart_ui.click",attributeName:"transform",type:"translate",values:"0 0;135 -95",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__diamond_ui.click",attributeName:"transform",type:"translate",values:"135 -95;575 -415",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__club_ui.click",attributeName:"transform",type:"translate",values:"575 -415;2875 -2205",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({id:"book__spade_animate_display",begin:"reset_animate_display.end",attributeName:"transform",type:"translate",values:"2875 -2205;0 0",dur:n},t(a)),null,16),e("g",et,[e("animateTransform",u({begin:"book__spade_ui.click",attributeName:"transform",type:"scale",values:"0.2;1",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__heart_ui.click",attributeName:"transform",type:"scale",values:"1;5",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__diamond_ui.click",attributeName:"transform",type:"scale",values:"5;25",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__club_ui.click",attributeName:"transform",type:"scale",values:"25;125",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"reset_animate_display.end",attributeName:"transform",type:"scale",values:"125;0.2",dur:n},t(a)),null,16),b(Y,{width:"100",height:"100","reset-duration":n})])]),e("g",ut,[e("set",{id:"book__heart_animate_display",begin:"book__spade_ui.click + 2s",end:`reset_animate_display.end + ${n}`,attributeName:"display",to:"inline"},null,8,at),e("animate",u({begin:"book__spade_ui.click + 2s",attributeName:"opacity",values:"0;1",dur:"1s"},t(a)),null,16),e("animateTransform",u({begin:"book__heart_ui.click",attributeName:"transform",type:"translate",values:"-27 19;0 0",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__diamond_ui.click",attributeName:"transform",type:"translate",values:"0 0;-100 100",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__club_ui.click",attributeName:"transform",type:"translate",values:"-100 100;-500 370",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"reset_animate_display.end",attributeName:"transform",type:"translate",values:"-500 370;-5.4 3.8",dur:n},t(a)),null,16),e("set",u({begin:"book__heart_animate_display.end",end:"book__heart_animate_display.end",attributeName:"opacity",to:"0"},t(i)),null,16),e("set",u({begin:"book__heart_animate_display.end",attributeName:"transform",to:"translate(-27 19)"},t(i)),null,16),e("g",st,[e("animateTransform",u({begin:"book__heart_ui.click",attributeName:"transform",type:"scale",values:"0.2;1",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__diamond_ui.click",attributeName:"transform",type:"scale",values:"1;5",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__club_ui.click",attributeName:"transform",type:"scale",values:"5;25",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"reset_animate_display.end",attributeName:"transform",type:"scale",values:"25;0.04",dur:n},t(a)),null,16),e("set",u({begin:"book__heart_animate_display.end",attributeName:"transform",to:"scale(0.2)"},t(i)),null,16),b(q,{width:"100",height:"100","reset-duration":n})])]),e("g",nt,[e("set",{id:"book__diamond_animate_display",begin:"book__heart_ui.click + 2s",click:`reset_animate_display.end + ${n}`,attributeName:"display",to:"inline"},null,8,it),e("animate",u({begin:"book__heart_ui.click + 2s",attributeName:"opacity",values:"0;1",dur:"1s"},t(a)),null,16),e("animateTransform",u({begin:"book__diamond_ui.click",attributeName:"transform",type:"translate",values:"20 -20;0 0",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__club_ui.click",attributeName:"transform",type:"translate",values:"0 0;0 -130",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"reset_animate_display.end",attributeName:"transform",type:"translate",values:"0 -130;-4.6 3",dur:n},t(a)),null,16),e("set",u({begin:"book__diamond_animate_display.end",attributeName:"opacity",to:"0"},t(i)),null,16),e("set",u({begin:"book__diamond_animate_display.end",attributeName:"transform",to:"translate(20 -20)"},t(i)),null,16),e("g",rt,[e("animateTransform",u({begin:"book__diamond_ui.click",attributeName:"transform",type:"scale",values:"0.2;1",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"book__club_ui.click",attributeName:"transform",type:"scale",values:"1;5",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"reset_animate_display.end",attributeName:"transform",type:"scale",values:"5;0.008",dur:n},t(a)),null,16),e("set",u({begin:"book__diamond_animate_display.end",attributeName:"transform",to:"scale(0.2)"},t(i)),null,16),b(G,{width:"100",height:"100","reset-duration":n})])]),e("g",ot,[e("set",{id:"book__club_animate_display",begin:"book__diamond_ui.click + 2s",end:`reset_animate_display + ${n}`,attributeName:"display",to:"inline"},null,8,lt),e("animate",u({begin:"book__diamond_ui.click + 2s",attributeName:"opacity",values:"0;1",dur:"1s"},t(a)),null,16),e("animateTransform",u({begin:"book__club_ui.click",attributeName:"transform",type:"translate",values:"0 26;0 0",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"reset_animate_display.end",attributeName:"transform",type:"translate",values:"0 0;-4.6 3.208",dur:n},t(a)),null,16),e("set",u({begin:"book__club_animate_display.end",attributeName:"opacity",to:"0"},t(i)),null,16),e("set",u({begin:"book__club_animate_display.end",attributeName:"transform",to:"translate(0 26)"},t(i)),null,16),e("g",dt,[e("animateTransform",u({begin:"book__club_ui.click",attributeName:"transform",type:"scale",values:"0.2;1",dur:"0.7s"},t(a)),null,16),e("animateTransform",u({begin:"reset_animate_display.end",attributeName:"transform",type:"scale",values:"1;0.0016",dur:n},t(a)),null,16),e("set",u({begin:"book__club_animate_display.end",attributeName:"transform",to:"scale(0.2)"},t(i)),null,16),b(J,{width:"100",height:"100","reset-duration":n})])]),e("g",_t,[ft,e("animate",u({begin:"book__club_ui.click + 2s",attributeName:"opacity",values:"0;1",dur:"1s"},t(a)),null,16),e("animate",u({begin:"reset.click",attributeName:"opacity",values:"1;0",dur:"0.5s"},t(a)),null,16),ct])]))],64))}});export{gt as default};
