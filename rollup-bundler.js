const fs         = require( 'fs' );
const path       = require( 'path' );
const stream     = require( 'stream' );
const es         = require( 'event-stream' );
const rollup     = require( 'rollup-stream' );
const { minify } = require( 'uglify-js' );

// takes string, converts to stream
function stringToStream( string ) {
    const readStream = new stream.Readable({
        objectMode: true
    })
    readStream._read = function () {
        this.push( string );
        this.push( null );
    };
    return readStream;
}

// return path from folder root
const fromRoot = fileName => path.join( process.cwd(), fileName );
// fetches file synchronously
const fetchFile = fileName => fs.readFileSync( fromRoot( fileName ), 'utf8' ); 

// application shims
const shims = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js'
];
// #docregion moduleId
let minifiedShims = 'window.module="aot"';
// loop through the shims files and minify them
shims.forEach( index => minifiedShims += ';' + minify( fetchFile( index ), {
        fromString: true
    }).code
);

// dist directory
const distDirectory = fromRoot( 'dist' );
// check if distDirectory exists if not then make it
fs.existsSync( distDirectory ) || fs.mkdirSync( distDirectory );

// bundle minified-shims with rollup-ed file 
es.merge([
  stringToStream( minifiedShims ),
  rollup( 'rollup-config.js' )
])
  .pipe( fs.createWriteStream( './dist/build.js' ) );