/*
 * .attach xxx/controller to express web framework
 */
var express = require('express');
var fs = require('fs');

module.exports = function(app, options){
    var verbose = options.verbose;
    fs.readdirSync(__dirname + '/busyness').forEach(function(name){

        var obj = require(__dirname+'/busyness/' + name + '/controller.js');
        var prefix = obj.prefix || '/';
        var entry = obj.entry || name;

        verbose && console.log('app use [%s]\n', name);
        app.use('/api' + prefix + entry, obj);
    });
};
