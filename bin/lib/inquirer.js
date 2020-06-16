const inquirer = require('inquirer');

module.exports = {
    askComponentProps: () => {
        const questions = [
            {
                name: 'name',
                type: 'input',
                message: 'Enter name of your Component:',
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter name of Component.';
                    }
                }
            },
            {
                name: 'description',
                type: 'input',
                message: 'Enter description of Component:',
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter description of Component.';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
};