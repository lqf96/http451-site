var path = require("path");
var _ = require("lodash");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

//Build mode
var mode = (process.env["NODE_ENV"]||"dev").toLowerCase();

//Mode-specific meta configuration
var meta_mode_config = {
    //Development mode
    dev: {
        //Build directory
        build_dir: "build"
    },
    //Production mode
    production: {
        build_dir: "dist"
    }
};

//Webpack base configuration
var webpack_base_config = {
    //Webpack bundle entries
    entry: {
        //Site
        "site": path.resolve(__dirname, "src/site.js"),
    },
    //External dependencies
    externals: {
        "lodash": "_",
        "vue": "Vue",
        "vue-router": "VueRouter",
        "bootstrap-vue": "window['bootstrap-vue']"
    },
    //Modules
    module: {
        //Loaders
        loaders: [
            //Vue single-page component
            {
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: /node_modules/
            },
            //Javascript
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["env"],
                    plugins: [
                        "syntax-dynamic-import"
                    ]
                }
            }
        ]
    },
    //Build output
    output: {
        //Build path
        path: path.resolve(__dirname, meta_mode_config[mode].build_dir, "bundles"),
        //Public path
        publicPath: "/bundles/",
    },
    //Plugins
    plugins: [
        //Site index HTML page
        new HtmlWebpackPlugin({
            chunks: ["site"],
            filename: path.resolve(__dirname, meta_mode_config[mode].build_dir, "index.html"),
            template: path.resolve(__dirname, "src/index.html"),
            title: "HTTP 451"
        })
    ],
    //Build target
    target: "web"
};

//Webpack mode-specific configuration
var webpack_mode_config = {
    //Developement mode
    dev: {
        //Source map
        devtool: "source-map",
        //Build output
        output: {
            //Bundle name
            filename: "[name].js"
        },
    },
    //Production mode
    production: {
        //Build output
        output: {
            //Bundle name
            filename: "[name].[chunkhash].js"
        },
        //Plugins
        plugins: [
            //Minimiaze Javascript code
            new webpack.optimize.UglifyJsPlugin()
        ]
    }
};

function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

//Merge and export Webpack configuration
module.exports = _.mergeWith(
    webpack_base_config,
    webpack_mode_config[mode],
    customizer
);
