const path = require('path');
const fs = require('fs');
module.exports = function (plop) {
    // create your generators here
    plop.setActionType('createDirectory', function (answers, config, plop) {
        // do something
        try {
            const dir = config.dir;
            if(dir) {
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);
                }
            }else{
                throw new Error('directory not defined');
            }
        }catch(error){
            throw error;
        }
    });

    plop.setGenerator('CreateComponent', {
        description: 'this is a skeleton plopfile',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Please enter a name for your component:'
        }],
        actions: [{
            type:'createDirectory',
            dir:path.join(process.cwd(), '{{name}}'),
        },{
            type: 'add',
            path: path.join(process.cwd(),'{{name}}','src/{{name}}.js'),
            templateFile: 'templates/component.hbs'
        },
        {
            type: 'add',
            path: path.join(process.cwd(),'{{name}}','src/index.js'),
            templateFile: 'templates/index.hbs'
        },
        {
            type: 'add',
            path: path.join(process.cwd(),'{{name}}','src/stories.js'),
            templateFile: 'templates/stories.hbs'
        },
        {
            type: 'add',
            path: 'source/.npmignore',
            templateFile: 'templates/npmignore.hbs'
        },
        {
            type: 'add',
            path: 'source/package.json',
            templateFile: 'templates/package.hbs'
        },
        {
            type: 'addMany',
            destination: path.join(process.cwd(), '{{name}}'),
            base:'source',
            globOptions:{
                dot:true
            },
            templateFiles: 'source/**/*'
        }]
    });
};
