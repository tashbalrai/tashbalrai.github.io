###### *[Home](https://tashbalrai.github.io)*, **Lifecycle Hooks**,

Angular component has a lifecycle, managed by Angular. You can hook up with these moments when these occur in the lifecycle.

Directives have same set of lifecycle.

We can tap into the key moments of the angular lifecycle by implementing the lifecycle hooks interface. Each interface has a single hook method whose name is same as the interface but prefixed with ```ng```.

For example: ```OnInit``` interface name, ```ngOnInit``` method name.

Hook methods will be called only if they are defined.

