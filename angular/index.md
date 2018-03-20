###### *[Home](https://tashbalrai.github.io)*, **Angular Fundamentals**,

## Angular
A framework and platform to build applications with HTML and TypeScript. Itself developed in TypeScript.

### Modules
```NgModules``` are basic building blocks of any angular applications.
At least one root module called ```AppModule``` which acts as bootstrap. 
NgModules are like ES2015 modules but with better features. 
NgModule provides component and other related code a context within which they execute and become a functional unit containing all related codes and functionality.
Easy to maintain and manage code.
Allows lazy-loading, only modules required are loaded on demand.

### Component
Every angular applications have at least 1 root component that connects the component hierarchy with page DOM.
Component class contains application logic, data and HTML view attached to it.
```@Component``` decorates the class as component.

### Templates
Combines HTML with Angular markup, modifies data before displaying it.

### Template Directives
Template directives contain program logic.

### Data Binding
Binds DOM elements with data of Angular program. Any change to DOM element data reflects back in the code.

1. *Event binding* lets your app interact with user input events.
2. *Property binding* lets your app manipulate DOM element values.

Angular evaluate and resolve the binding syntax before the HTML is displayed to the user.

### Dependency Injections
For common or shared code you can create injectable service classes with ```@Injectable``` decorator.
You can then inject these services to component to keep the components code lean and manageable.

### Router
A router maps the navigational links in the address bar to the data states and views of the application.

