# Setup für Angular 2 Programme

# Component

## tsconfig.json


```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": true,
        "moduleResolution": "node",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false
    },
    "exclude": [
        "node_modules"
    ]
}
```
Verursacht Fehler:

```
0 info it worked if it ends with ok
1 verbose cli [ '/usr/local/bin/node', '/usr/local/bin/npm', 'start' ]
2 info using npm@2.15.9
3 info using node@v4.5.0
4 verbose run-script [ 'prestart', 'start', 'poststart' ]
5 info prestart angular2setup@1.0.0
6 info start angular2setup@1.0.0
7 verbose unsafe-perm in lifecycle true
8 info angular2setup@1.0.0 Failed to exec start script
9 verbose stack Error: angular2setup@1.0.0 start: `tsc && concurrently "npm run tsc:w" "npm run lite"`
9 verbose stack Exit status 2
9 verbose stack     at EventEmitter.<anonymous> (/usr/local/lib/node_modules/npm/lib/utils/lifecycle.js:217:16)
9 verbose stack     at emitTwo (events.js:87:13)
9 verbose stack     at EventEmitter.emit (events.js:172:7)
9 verbose stack     at ChildProcess.<anonymous> (/usr/local/lib/node_modules/npm/lib/utils/spawn.js:24:14)
9 verbose stack     at emitTwo (events.js:87:13)
9 verbose stack     at ChildProcess.emit (events.js:172:7)
9 verbose stack     at maybeClose (internal/child_process.js:829:16)
9 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:211:5)
10 verbose pkgid angular2setup@1.0.0
11 verbose cwd /Users/gotzverdieck/Documents/Projekte/AngularJS/code/beispiele/angular-2_Setup
12 error Darwin 16.5.0
13 error argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
14 error node v4.5.0
15 error npm  v2.15.9
16 error code ELIFECYCLE
17 error angular2setup@1.0.0 start: `tsc && concurrently "npm run tsc:w" "npm run lite"`
17 error Exit status 2
18 error Failed at the angular2setup@1.0.0 start script 'tsc && concurrently "npm run tsc:w" "npm run lite"'.
18 error This is most likely a problem with the angular2setup package,
18 error not with npm itself.
18 error Tell the author that this fails on your system:
18 error     tsc && concurrently "npm run tsc:w" "npm run lite"
18 error You can get information on how to open an issue for this project with:
18 error     npm bugs angular2setup
18 error Or if that isn't available, you can get their info via:
18 error
18 error     npm owner ls angular2setup
18 error There is likely additional logging output above.
19 verbose exit [ 1, true ]


```
gelöscht => funktioniert

## Starten
npm start



Links:
[Basis des Setups:](https://github.com/netTrek/angular-2-training/)https://github.com/netTrek/angular-2-training/