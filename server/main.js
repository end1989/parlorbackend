import { Meteor } from "meteor/meteor";
import { Stylist } from "../imports/collections/stylists";
var fs = Npm.require("fs");

Meteor.startup(() => {
    // code to run on server at startup
    console.log("Server Started");
});

Meteor.methods({
    "stylist.add": function(loc) {
        console.log("Working");

        var user = this.userId;
        if (!user) {
            console.log("user not signed in");
            return;
        }
        console.log("Adding Stylist...");
        var range = 0.035;
        var range1 = Math.random() > 0.5 ? range : -range;
        var range2 = Math.random() > 0.5 ? range : -range;
        var long = loc.longitude;

        long = long + Math.random() * range1;
        var lat = loc.latitude;
        lat = lat + Math.random() * range2;

        // var iconPath = process.env.PWD + "/public";
        // var icons = fs.readdirSync(iconPath);

        var min = Math.ceil(0);
        var max = Math.ceil(250);
        var random = Math.floor(Math.random() * (max - min)) + min;

        return Stylist.insert({
            image: "test",
            longitude: long,
            latitude: lat
        });

        return Stylists.insert({ image: icons });
    }
});
