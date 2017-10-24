/**
 * Created by chandrimaghosh on 6/7/16.
 */
module.exports = function() {

    var mongoose = require('mongoose');
  //  mongoose.connect('mongodb://localhost/cs5610summer1');


    var connectionString = 'mongodb://Chandrima:mongo123@ds229835.mlab.com:29835/form-maker';

    // if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    //     connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
    //         process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    //         process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    //         process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    //         process.env.OPENSHIFT_APP_NAME;
    // }


    mongoose.connect(connectionString);

    var models = {
        userModel: require("./user/user.model.server")(),
        websiteModel: require("./website/website.model.server")(),
        pageModel: require("./page/page.model.server")(),
        widgetModel: require("./widget/widget.model.server")()

        
    };

    return models;
};