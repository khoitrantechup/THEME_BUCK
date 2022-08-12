/**
 * generates the dist/index.html and dist/demo.js files
 * to demo the component.
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    plugins: [
        new webpack.EnvironmentPlugin({
            "process.env.NODE_ENV": process.env.NODE_ENV
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    entry: {
        demo: "./src/webpack-dev-server.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["postcss-preset-env"]]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "remote-component.config.js": path.resolve("./remote-component.config.js")
        },
        fallback: {
            https: require.resolve("https-browserify"),
            http: require.resolve("stream-http"),
            buffer: require.resolve("buffer/"),
            url: require.resolve("url/")
        }
    }
};
