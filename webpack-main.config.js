/**
 * generates:
 *  - dist/main.js
 *  - dist/manifest.json
 *  - dist/webpack-bundle-analyzer-report.html
 */
const webpack = require("webpack");
const path = require("path");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const remoteComponentConfig = require("./remote-component.config").resolve;

const externals = Object.keys(remoteComponentConfig).reduce((obj, key) => ({ ...obj, [key]: key }), {});

module.exports = {
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
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            "process.env.NODE_ENV": process.env.NODE_ENV
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
            reportFilename: "webpack-bundle-analyzer-report.html"
        }),
        new WebpackAssetsManifest()
    ],
    entry: {
        main: "./src/index.js"
    },
    output: {
        libraryTarget: "commonjs"
    },
    externals: {
        ...externals,
        "remote-component.config.js": "remote-component.config.js"
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
    }
};
