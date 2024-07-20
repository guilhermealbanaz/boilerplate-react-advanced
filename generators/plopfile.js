module.exports = (plop) => {
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the component?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/Component.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/styles.tsx',
                templateFile: 'templates/styles.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/stories.tsx',
                templateFile: 'templates/stories.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/test.tsx',
                templateFile: 'templates/test.tsx.hbs'
            }
        ]
    })
}
