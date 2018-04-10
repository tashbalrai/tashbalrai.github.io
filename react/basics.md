## Setup New React App
Install the create-react-app application to create the basic application structure.

```npm
npm install -g --save-dev create-react-app
create-react-app my-app
```

## Manual Installation (Advanced)
Have a package manager either Yarn or npm. We will proceed with npm.

```
npm init
npm install --save react react-dom
```

```npm init``` will initialize the package manager and will create a package.json file. Then we install react and react-dom packages and save them into package.json file as dependencies.

For compatibility purposes, all react packages should be of same version.

## Setting Up Transpiler (Babel)
Setup babel to support ES6 and JSX. 

First you need to install Gulp tool to automate the processes.

```
npm install --save-dev gulp
```

Now install the gulp-babel plugin.
```
npm install --save-dev gulp-babel
```

Install the babel-preset-env for ES transpiling and install babel-preset-react for JSX and other react related transpiling.
```
npm install --save-dev babel-preset-env babel-preset-react
```

Create .babelrc file and configure the presets.
```json
{
  "plugins": ["babel-preset-env", "babel-preset-react"]
}
```

Install webpack
```
npm install --save-dev webpack
```


