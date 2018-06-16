let express = require('express')
let cors= require('cors')
class Boot {
    constructor(){
        Boot.App.use(cors());
        Boot.App.use(express.static('public'));

        Boot.App.listen(8081, function () {
            var host = this.address().address
            var port = this.address().port
            console.log("Example app listening at http://%s:%s", host, port)
            Boot.Address={host, port};
        });
    }
    getApp(){
        return Boot.App;
    }
};
Boot.App = express();
Boot.Address={};
exports.Boot = Boot;