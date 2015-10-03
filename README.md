# Getting Started

1. Clone this repo

1. `npm install`

1. Run the TypeScript compiler and watch for changes `npm run tsc`

1. Open 2nd terminal and launch the app in the browser `npm start`

## Notes

- Add redirectTo and/or otherwise routes
- Fix http as it evolves
- Manual typings fix for Pipes https://github.com/angular/angular/issues/4279
- Update to use tsd 0.6.5 when out of beta
- Replace mocks with http when ready

## From Scratch


1. Create empty `package.json`

	```bash
	npm init -y
	```

1. Install npm packages

	```bash
	npm install --save angular2 systemjs traceur
	```

1. Make a source folder

	```bash
	mkdir -p src/app
	```

1. Install typings files

	```bash
	tsd install angular2 -rosa --config src/tsd.json
	```

1. Create a `tsconfig.json` file, in an editor

	```json
	{
		"compilerOptions": {
			"target": "ES5",
			"module": "commonjs",
			"sourceMap": true,
			"emitDecoratorMetadata": true,
			"experimentalDecorators": true,
			"removeComments": false,
			"noImplicitAny": true
		}
	}
	```

1. Create `app.ts` and enter

	```javascript
	import {bootstrap, Component, View} from 'angular2/angular2';

	@Component({
		selector: 'app'
	})
	@View({
		template: '<h1>My First Angular 2 App</h1>'
	})
	export class AppComponent { }

	bootstrap(AppComponent);
	```
