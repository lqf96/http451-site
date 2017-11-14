//Utility libraries
var path = require("path");
var _ = require("lodash");
//Webpack
var webpack = require("webpack");
//Webpack plugins
var HtmlWebpackPlugin = require("html-webpack-plugin");
var WebpackCdnPlugin = require("webpack-cdn-plugin");

//Build mode
var mode = (process.env["NODE_ENV"]||"dev").toLowerCase();

//Meta mode-specific configuration
let meta_mode_config = {
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
let webpack_base_config = {
    //Webpack bundle entries
    entry: {
        //Site
        "site": path.resolve(__dirname, "src/site.js"),
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
                    presets: [
                        "env",
                        "stage-2"
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
        //SPA entry page
        new HtmlWebpackPlugin({
            chunks: ["site"],
            filename: path.resolve(__dirname, meta_mode_config[mode].build_dir, "index.html"),
            template: path.resolve(__dirname, "src/index.html"),
            title: "HTTP 451"
        }),
        //SPA redirect page
        new HtmlWebpackPlugin({
            chunks: [],
            filename: path.resolve(__dirname, meta_mode_config[mode].build_dir, "200.html"),
            template: path.resolve(__dirname, "src/200.html"),
            title: "HTTP 451"
        }),
        //CDN resources
        new WebpackCdnPlugin({
            prodUrl: "https://cdn.jsdelivr.net/npm/:name@:version/:path",
            modules: [
                //Bootstrap
                {
                    name: "bootstrap",
                    style: "dist/css/bootstrap.min.css",
                    cssOnly: true
                },
                //Font Awesome
                {
                    name: "font-awesome",
                    style: "css/font-awesome.min.css",
                    cssOnly: true
                },
                //Core JS
                {
                    name: "core-js",
                    path: "client/core.min.js",
                    var: "null"
                },
                //Lodash
                {
                    name: "lodash",
                    path: "lodash.min.js",
                    var: "_"
                },
                //Vue
                {
                    name: "vue",
                    path: "dist/vue.runtime.min.js",
                    var: "Vue"
                },
                //Vue Router
                {
                    name: "vue-router",
                    path: "dist/vue-router.min.js",
                    var: "VueRouter"
                },
                //Bootstrap Vue
                {
                    name: "bootstrap-vue",
                    path: "dist/bootstrap-vue.min.js",
                    style: "dist/bootstrap-vue.css",
                    var: "window['bootstrap-vue']"
                }
            ]
        })
    ],
    //Resolve settings
    resolve: {
        //Search path
        modules: [
            path.resolve(__dirname, "src"),
            path.resolve("node_modules")
        ]
    },
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
            //Chunk filename
            filename: "[name].js"
        },
    },
    //Production mode
    production: {
        //Build output
        output: {
            //Chunk filename
            filename: "[name].[chunkhash].js"
        },
        //Plugins
        plugins: [
            //Minimiaze Javascript code
            new webpack.optimize.UglifyJsPlugin()
        ]
    }
};

//Merge customizer
function merge_customizer(target, source) {
    //Concatenate instead of replace array
    if (_.isArray(target))
        return target.concat(source);
}

//Merge and export Webpack configuration
module.exports = _.mergeWith(
    webpack_base_config,
    webpack_mode_config[mode],
    merge_customizer
);
