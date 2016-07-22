require.config({
    shim: {
        'metal': {
            deps: ['mineral'],
            exports: 'Metal'
        }
    }
});

require(
    ['app'],

    function (app: any) {
        app.start();
    },

    function (err: any) {
        console.error('ERROR: ', err.requireType);
        console.error('MODULES: ', err.requireModules);
    }
);
