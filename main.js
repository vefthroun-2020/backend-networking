const app = require('express')()
const fetch = require('node-fetch');
const port = 3000

let data = [];
fetch("https://api.themoviedb.org/3/movie/550?api_key=ac9072541cd6db7decca6d46df8c0034")
.then(r=>{  
    return r.json()
})
.then(function(d){
    data=d;
})

app.get('/myapi', (req, res) => {
res.send(data);

})
setInterval(function(){
    fetch("https://api.themoviedb.org/3/movie/550?api_key=ac9072541cd6db7decca6d46df8c0034")
    .then(r=>{  
        return r.json()
    })
    .then(function(d){
        data=d;
    })

    app.get('/myapi', (req, res) => {
    res.send(data);
    
    })
}, 1000*60*60)


app.get('/', (req, res) => {
    res.send('this is the default route')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})