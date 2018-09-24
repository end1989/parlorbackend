import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Stylist = new Mongo.Collection("stylist");

Meteor.publish("stylist", () => {
    return Stylist.find({});
});
