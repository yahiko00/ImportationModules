require.config({
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore'
    }
});
require(['app'], function (app) {
    app.start();
}, function (err) {
    console.error('ERROR: ', err.requireType);
    console.error('MODULES: ', err.requireModules);
});
