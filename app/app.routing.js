"use strict";
var router_1 = require('@angular/router');
var register_user_component_1 = require('./register-user/register-user.component');
var homepage_component_1 = require('./homepage/homepage.component');
var pagenotfound_component_1 = require('./pagenotfound.component');
var appRoutes = [
    {
        path: '',
        component: homepage_component_1.HomePageComponent,
        data: {
            title: 'Passengair - Welcome'
        }
    },
    {
        path: 'register',
        component: register_user_component_1.RegisterUserComponent,
        data: {
            title: 'Register - Passengair'
        }
    },
    {
        path: 'become_host',
        component: homepage_component_1.HomePageComponent,
        data: {
            title: 'Become Host - Passengair'
        }
    },
    {
        path: '**',
        component: pagenotfound_component_1.PageNotFoundComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map