const e=require("request");module.exports={isAlibaba:()=>new Promise(s=>{e({url:"https://ice.alibaba-inc.com/check.node",timeout:1e3},(e,t,c)=>{e?s(!1):200===t.statusCode&&/success/.test(c)?s(!0):s(!1)})})};