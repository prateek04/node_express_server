let {Boot} =  require('./boot/server');
let {restCalls} = require("./controllers/sample");
class Bootstrap {
    constructor(){
        new Boot();
        new restCalls();
    }
}
new Bootstrap();