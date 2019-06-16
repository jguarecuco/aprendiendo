configurations = new Mongo.Collection("configurations")
configurations.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});