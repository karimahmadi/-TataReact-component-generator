import inquirer from 'inquirer';

module.exports = {
  askComponentProps: () => {
    const questions = [
      {
        name: 'name',
        type: 'input',
        message: 'Enter name of your Component:',
        validate(value) {
          if (value.length) {
            return true;
          }
          return 'Please enter name of Component.';
        },
      },
      {
        name: 'description',
        type: 'input',
        message: 'Enter description of Component:',
        validate(value) {
          if (value.length) {
            return true;
          }
          return 'Please enter description of Component.';
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
