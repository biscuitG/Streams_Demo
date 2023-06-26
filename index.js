const fs=require('fs');
const transFormStream=require('stream');
let FileStream=fs.createReadStream(__dirname + '/input.txt')

let outputStream=process.stdout;

let middleStream=new transFormStream.Transform({
    transform(chunk,encoding,next){
        let modified=chunk.toString().toUpperCase();
        this.push(modified);
        setTimeout(next,0);
    }
});
//FileStream.pipe(outputStream);
let newReadStream=FileStream.pipe(middleStream);
newReadStream.pipe(outputStream);