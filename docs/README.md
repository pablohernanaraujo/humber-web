## Installing dependencies

## ESLint 

To enable eslint on VSCode, install [this extention](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), then open settings file ([instructions](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations)) and add:
```json
"eslint.autoFixOnSave": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
        "language": "typescript",
        "autoFix": true
    },
    {
        "language": "typescriptreact",
        "autoFix": true
    }
],      
"eslint.alwaysShowStatus": true,
```