# Component Generator 

[bitbucket source code](http://vcs.tiddev.com/scm/~ahmadi.k/reactseam-component-generator.git) 


## execute command in terminal 

before execute the command make sure to add scoped registry in your .npmrc file:

add line to content of .npmrc file:  
``
@ReactSeam:registry=http://192.168.100.192:4873
``

in terminal run :

``
npx @ReactSeam/component-generator
``

## change applied to version 0.2.0
##1. remove storybook
- delete .storybook folder
- delete dependency @storybook/* from package.json
- delete storybook scripts from package.json 
- delete stories.js file from src folder  
 
##2. create lib folder
- create lib folder in src folder 
- move component js file to lib folder and rename it to index.js 

 
##3. add example / demo for development 
- install webpack-dev-server  
`
yarn add webpack-dev-server
`
- open src\index.js file and delete all source code
- copy below source code into index.js file 
```

import React from 'react';
import { render } from "react-dom";
import your-combo from "./lib";

const App = () => (
	<your-component  {...props of your component} />
);

render(<App />, document.getElementById("root"));

```  
- create index.html file in root 
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

##4. change webpack.config.js
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
 
##5. add start script
in package.json add start in "scripts" part :
```
"start": "webpack-dev-server --open",
```

for development 
```angular2html
yarn start
```
for production 
```angular2html
yarn build
```