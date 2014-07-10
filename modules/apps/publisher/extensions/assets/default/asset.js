log.info('Start of scriptqq!');
asset.manager = function(ctx) {
    return {
        create: function(ctx) {
        	this._super.create(options);
            log.info('Create called!');
        }
    };
};
asset.server = function(ctx) {
    return {
        onUserLoggedIn: function() {},
        endpoints: {
            apis: [{
                url: 'test',
                path: 'test.jag'
            }],
            pages: [{
                title: 'Bookmarks'
                url: 'bookmarks',
                path: 'bookmarks.jag'
            }]
        }
    };
};
asset.configure = function() {
    return {
        table: {
            overview: {
                fields: {
                    name: {
                        name: {
                            name: 'name',
                            label: 'Name'
                        },
                        required: false,
                        validation: function() {}
                    },
                    version: {
                        name: {
                            label: 'Super Version'
                        }
                    }
                }
            }
        },
        meta: {
            lifeCycle: {
                name: 'SimpleLifecycle',
                commentRequired: true
            }
        }
    };
};
asset.renderer = function(ctx) {
    return {
        create: function(asset) {},
        update: function(asset) {},
        listAsset: function(asset) {},
        listAssets:function(asset){},
        leftNav: function(asset) {},
        topNav: function(asset) {}
    };
};