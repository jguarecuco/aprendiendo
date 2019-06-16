appProfiles=new Mongo.Collection("appprofiles");
appProfiles.allow({
    insert:function () {
        return false;
    },update:function () {
        return false;
    },remove:function () {
        return false;
    }
})