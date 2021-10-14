const db = require("./dbConfig");
const { v4: uuidv4 } = require("uuid");
let sql = "INSERT INTO atable(aaa, bbb, ccc, ddd) VALUES ";
let sqlValues = "";
let sqlWhere = [];

async function aaa () {
    for(let x = 1; x <= 5000; x++) {
        await bvd()
        console.log(x)
    }
    console.log("完全成功")
}
aaa()

function bvd () {
  return  new Promise( (res, rej) => {
    sql = "INSERT INTO atable(aaa, bbb, ccc, ddd) VALUES "
    sqlValues = ""
    sqlWhere = []
    for (let i = 1; i <= 20000; i++) {
        if(i == 20000) {
            sqlValues += `(?, ?, ?, ?)`;
        }
        else {
            sqlValues += `(?, ?, ?, ?), `;
        }
        sqlWhere.push(uuidv4())
        sqlWhere.push(uuidv4())
        sqlWhere.push(uuidv4())
        sqlWhere.push(uuidv4())
    }
    sql += sqlValues;
    db.query(sql, sqlWhere, (err) => {
        if(err) {
           console.log(err)
           rej()
        }
        console.log("成功")
        res()
    })
  })
}