# Component Generator 

[bitbucket source code](http://vcs.tiddev.com/scm/~ahmadi.k/reactseam-component-generator.git) 


## Install and Usage

before execute the command make sure to add scoped registry in your .npmrc file:

add line to content of .npmrc file:  
``
@TataReact:registry=http://192.168.100.192:4873
``

in terminal run :

``
npx @TataReact/component-generator
``

answer the questions to generate component boilerplate project 

# Change log
## [Unreleased] 

## [0.2.0] - 1399/04/15

### Added
1. create lib folder in src folder
2. install webpack-dev-server  
`
yarn add webpack-dev-server
`
3. create index.html file in root of project with content :
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="main.js"></script>
    </body>
    </html>
    
    ```

4. add start script in package.json in "scripts" part :
    ```
    "start": "webpack-dev-server --open",
    ```
5. added .reactseamrc config file for featuer tools like migration

### Changed
1. move component js file to lib folder and rename it to index.js
2. changed source of src\index.js file to :
    ```
    
    import React from 'react';
    import { render } from "react-dom";
    import your-combo from "./lib";
    
    const App = () => (
        <your-component  {...props of your component} />
    );
    
    render(<App />, document.getElementById("root"));
    
    ```
3. changed webpack.config.js to :
    ```
    const path = require('path');
    
    var config = {
        mode: 'development',
        entry: './src/index.js',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        {loader: 'style-loader'},
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'},
                    ],
                },
                {
                    test: /\.(png|gif|jpg|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 50000,
                        },
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            publicPath: '',
            filename: 'main.js',
            libraryTarget: 'umd',
        }
    };
    
    module.exports = (env, argv) => {
    
        if (argv.mode === 'production') {
            config.mode='production';
            config.entry='./src/lib/index.js';
            return config;
        }
    
        return config;
    
    };
    
    ```

### Removed
1. delete .storybook folder
2. delete dependency @storybook/* from package.json
3. delete storybook scripts from package.json 
4. delete stories.js file from src folder  