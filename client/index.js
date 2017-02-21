var $ = require("jquery"),
    Backbone = require("backbone"),
    origianlSync = Backbone.sync,
    CSRFModel;
/*
Backbone.sync = function(method, model, options) {
    options.beforeSend = function(request) {
        request.setRequestHeader("x-csrf-token", $(".csrf-token").val());
        origianlSync.call(this, method, model, options)
    }
};
*/

Backbone.$.ajaxSetup({
    headers: {
        "x-csrf-token": $(".csrf-token").val()
    }
});

CSRFModel = Backbone.Model.extend({
    url: function () {
        return "/user";
    }
});


var csrf = new CSRFModel();
csrf.fetch({
    success: function (data) {
        console.log(data);
    }
});