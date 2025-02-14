function error500(res){
    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
        'Content-Type': 'application/json'
      }
        res.writeHead(500, headers);
        res.write(JSON.stringify({ 
        status: "error",
        message: "伺服器錯誤"
    }));     
    res.end();
}
module.exports = error500;