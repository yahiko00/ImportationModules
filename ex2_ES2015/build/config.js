require(['app'], function (app) {
    app.start();
}, function (err) {
    console.error('ERROR: ', err.requireType);
    console.error('MODULES: ', err.requireModules);
});
