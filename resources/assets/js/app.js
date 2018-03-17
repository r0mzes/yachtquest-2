
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');
window.Vue = require('vue');
var moment = require('moment');
require('moment/locale/ru');
exports.install = function (Vue, options) {
    Vue.prototype.moment = function (...args) {
        return moment(...args);
    };
}
Vue.use(moment);
Vue.use(exports);

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('welcome', require('./components/welcome.vue'));
Vue.component('quest', require('./components/quest.vue'));
Vue.component('about', require('./components/about.vue'));
const app = new Vue({
    el: '#app'
});
