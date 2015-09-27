import {Component, View} from 'angular2/angular2';

@Component({ selector: 'my-dashboard' })
@View({
	template: `
	<h2>Tour of Heroes Starts Here</h2>
	<img src="./app/ng.png"/>
	`
})
export class DashboardComponent { }
