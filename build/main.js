/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
System.register(['angular2/platform/browser', './app.component', 'angular2/router', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU90RSxtQkFBUyxDQUFDLDRCQUFZLEVBQUU7Z0JBQ3BCLHlCQUFnQjtnQkFDaEIsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUM7YUFDOUQsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cblxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gICAgZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUywgUk9VVEVSX0RJUkVDVElWRVMsIExvY2F0aW9uLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gICAgUk9VVEVSX1BST1ZJREVSUywgXG4gICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSlcbl0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
