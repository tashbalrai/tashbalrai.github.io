---
slug: angular/lifecycle-hooks
title: AngularJS - Life Cycle hooks
excerpt: Angular component has a lifecycle, managed by Angular. You can hook up with these moments when these occur in the lifecycle. Directives have same set of lifecycle. We can tap into the key moments of the angular lifecycle by implementing the lifecycle hooks interface. Each interface has a single hook method whose name is same as the interface but prefixed with `ng`.
category: Javascript
tags: [angular, frontend, framework, javascript]
seoTitle: Introduction to Angular, a Javascript framework for frontend development
seoKeywords: angular js, frontend javascript framework, javascript software development
seoDescription: Introduction to Angular, a Javascript framework for frontend development
publishedAt: "2017-02-16"
---

###### _[Home](https://tashbalrai.github.io)_, **Lifecycle Hooks**,

Angular component has a lifecycle, managed by Angular. You can hook up with these moments when these occur in the lifecycle.

Directives have same set of lifecycle.

We can tap into the key moments of the angular lifecycle by implementing the lifecycle hooks interface. Each interface has a single hook method whose name is same as the interface but prefixed with `ng`.

For example: `OnInit` interface name, `ngOnInit` method name.

Hook methods will be called only if they are defined.
