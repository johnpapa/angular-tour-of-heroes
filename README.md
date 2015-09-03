# Getting Started

1. Must install pre-requisites

	```bash
	npm install -g tsd typescript live-server
	```

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
	mkdir src
	cd src
	```

1. Install typings files

	```bash
	tsd install angular2 -r -o -s -a
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

1. Run the TypeScript compiler and watch for changes `npm run tsc`

1. Open 2nd terminal and launch the app in the browser `npm start`
