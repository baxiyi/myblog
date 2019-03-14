const path=require('path');
module.exports = {
    mode:'production',
    entry: '../scripts/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'webpack.bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:'css-loader'}
        ]
    }
}