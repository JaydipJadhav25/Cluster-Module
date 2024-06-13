const express = require('express')
const cluster = require('node:cluster');
const os = require('node:os')


const totalcpu = os.cpus().length

// console.log("total CUP : ", totalcpu);


//cluster primary mhanje main server / load balancer
if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

     // Fork workers. //jevde maze cpu ahe tevde thread bnv 
  for (let i = 0; i < totalcpu; i++) {
    cluster.fork();
  }
  
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });

}
else  {

// jr primary nsel tr express server run ..

 const app = express()
 const PORT = 3000;

app.get('/', function (req, res) {
//   res.send('Hello World')
     return res.json({
        massage : `hiii from express server 😍 ${process.pid}` 
     })
});

app.listen(PORT, () => console.log(`server is running At PORT :${PORT}`))

}







