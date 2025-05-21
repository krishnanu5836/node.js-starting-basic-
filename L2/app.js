//require("./sum.js");//commonjs-  is a module system used in Node.js for managing JavaScript code in separate files. It allows you to export and import functionality between files.
const ok=require("./sum.js");
ok(1,2);
const greet=require("./hindi");
greet();
const gr=require("./english");
gr();

module.exports={
    greet:hindi,
    gr:english
}
