const fs = require('fs');

const myReadStreming = fs.ReadStream(`${__dirname}/bigdata.txt`, 'utf8');

const myWriteStreaming =fs.WriteStream(`${__dirname}/output.txt`);
 

// myReadStreming.on('data',(chunk)=>{
//     // myWriteStreaming.write(chunk)
//     console.log(chunk.toString());
//  })

myReadStreming.pipe(myWriteStreaming);
