const path = require('path');
const htmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.js', '.jsx'],
    },
    module:{
        rules:[{
            test:/\.js$|jsx/,
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader'
            }
        },{
            test:/\.html$/,
            use:[{
                loader: 'html-loader'
            }]
        },{
            test:/\.s[ac]ss$/i,
            use:[
                "style-loader",
                "css-loader",
                "Sass-loader",
            ]
        }
    ]
    },

    plugins:[
        new htmlWebPackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
    ],
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:3005,
    }

}