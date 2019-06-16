profiles=new Mongo.Collection("profiles");

profiles.allow({
    insert:function () {
        return false;
    },update:function () {
        return false;
    },remove:function () {
        return false;
    }
})