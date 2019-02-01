define(["lodash","angular","app/core/core"],function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t){var e="default";for(var n in t)if("kentik-ds"===t[n].type)return e=t[n].jsonData.region;return e}n.d(e,"a",function(){return r})},function(t,n){t.exports=e},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n(5),a=n(0);function i(t){var e="";e+=t.status?"("+t.status+") ":"",e+=t.statusText?t.statusText+": ":"",t.data&&t.data.error?e+=t.data.error:t.err?e+=t.err:a.isString(t)&&(e+=t),r.appEvents.emit("alert-error",["Can't connect to Kentik API",e])}function o(t,e,n){var i="";i+=e.status?"("+e.status+") ":"",i+=e.statusText?e.statusText+": ":"",e.data&&e.data.error?i+=e.data.error:e.err?i+=e.err:a.isString(e)&&(i+=e),r.appEvents.emit("alert-"+n,[t,i])}},function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(2),a=n.n(r),i=n(1),o=function(t,e,n,r){return new(n||(n=Promise))(function(a,i){function o(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(o,s)}c((r=r.apply(t,e||[])).next())})},s=function(t,e){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(t){i=[6,t],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},c=function(){function t(t){var e=this;this.backendSrv=t,this.apiReady=!1,this.baseUrl="/api/plugin-proxy/kentik-app",t.get("/api/datasources").then(function(t){e.region=Object(i.a)(t),e.setRegion(e.region),e.apiReady=!0})}return t.$inject=["backendSrv"],t.prototype.setRegion=function(t){this.region=t},t.prototype.getDevices=function(){return o(this,void 0,void 0,function(){var t,e=this;return s(this,function(n){switch(n.label){case 0:return this.backendSrv.get("/api/datasources").then(function(t){e.region=Object(i.a)(t),e.setRegion(e.region),e.apiReady=!0}),[4,this._get("/api/v5/devices")];case 1:return(t=n.sent()).data&&t.data.devices?[2,t.data.devices]:[2,[]]}})})},t.prototype.getUsers=function(){return this._get("/api/v5/users")},t.prototype.getFieldValues=function(t){var e="SELECT DISTINCT "+t+" FROM all_devices ORDER BY "+t+" ASC";return this.invokeSQLQuery(e)},t.prototype.getCustomDimensions=function(){return o(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this._get("/api/v5/customdimensions")];case 1:return[2,t.sent().data.customDimensions]}})})},t.prototype.getSavedFilters=function(){return o(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this._get("/api/v5/saved-filters")];case 1:return[2,t.sent().data]}})})},t.prototype.invokeTopXDataQuery=function(t){var e={queries:[{query:t,bucketIndex:0}]};return this._post("/api/v5/query/topXdata",e)},t.prototype.invokeSQLQuery=function(t){var e={query:t};return this._post("/api/v5/query/sql",e)},t.prototype._get=function(t){return o(this,void 0,void 0,function(){var e=this;return s(this,function(n){switch(n.label){case 0:return void 0!==this.region?[3,2]:[4,this.backendSrv.get("/api/datasources").then(function(t){e.setRegion(Object(i.a)(t))})];case 1:n.sent(),n.label=2;case 2:return[2,this.backendSrv.datasourceRequest({method:"GET",url:this.baseUrl+"/"+this.region+t}).catch(function(t){return console.error(t),t.err?Promise.reject(t.err):Promise.reject(t)})]}})})},t.prototype._post=function(t,e){return o(this,void 0,void 0,function(){var n=this;return s(this,function(r){switch(r.label){case 0:return void 0!==this.region?[3,2]:[4,this.backendSrv.get("/api/datasources").then(function(t){n.setRegion(Object(i.a)(t))})];case 1:r.sent(),r.label=2;case 2:return[2,this.backendSrv.datasourceRequest({method:"POST",url:this.baseUrl+"/"+this.region+t,data:e}).then(function(t){return t.data?t.data:[]}).catch(function(t){return console.error(t),t.err?Promise.reject(t.err):Promise.reject(t)})]}})})},t}();a.a.module("grafana.services").service("kentikAPISrv",c)},function(t,e){t.exports=n},,function(t,e){t.exports='<h3 class="page-heading">Enter your Kentik Credentials</h3>\n<div class="gf-form-group">\n  <div class="gf-form" ng-if="ctrl.apiError && ctrl.appModel.enabled">\n    <i class="fa fa-exclamation-circle" style="color: #ca4333;">\n      <span>Invalid API credentials. This app wont work until the credentials are updated.</span>\n    </i>\n  </div>\n  <div class="gf-form">\n    <label class="gf-form-label width-10">Email</label>\n    \x3c!-- Hidden input to stop chrome from autofilling --\x3e\n    <input style="display:none;" type="text" name="somefakename" />\n    <input type="text" class="gf-form-input max-width-20" ng-model=\'ctrl.appModel.jsonData.email\' placeholder="email" />\n  </div>\n\n  <div class="gf-form">\n    <label class="gf-form-label width-10">Region\n      <tip>US and EU regions are available. Default is US</tip>\n    </label>\n    <div class="gf-form-select-wrapper">\n      <select class="gf-form-input" ng-model="ctrl.appModel.jsonData.region" ng-options="f.value as f.text for f in ctrl.regionTypes"></select>\n    </div>\n  </div>\n\n  <div class="gf-form-inline">\n    <div class="gf-form kentik-inline-field-margin--right">\n      <label class="gf-form-label width-10">Api Token</label>\n      \x3c!-- Hidden input to stop chrome from autofilling --\x3e\n      <input style="display:none;" type="password" name="anotherfakename" />\n      <input type="password" class="gf-form-input max-width-20" ng-model="ctrl.appModel.secureJsonData.token" ng-if="!ctrl.appModel.jsonData.tokenSet"\n        placeholder="api token" />\n      <div ng-if="ctrl.appModel.jsonData.tokenSet" class="gf-form">\n        <input type="text" class="gf-form-input max-width-20" disabled="disabled" value="saved" />\n        <div ng-if="ctrl.appModel.enabled">\n          <i class="fa fa-exclamation-triangle" ng-if="!ctrl.apiValidated" alt="Could not validate api Token."></i>\n        </div>\n      </div>\n    </div>\n    <div class="gf-form">\n      <a class="btn btn-danger btn-small" href="#" ng-click="ctrl.reset()" ng-if="ctrl.appModel.jsonData.tokenSet">reset</a>\n    </div>\n  </div>\n</div>\n\n<div ng-if="ctrl.appModel.jsonData.tokenSet" class="kentik-enabled-box">\n  <i class="icon-gf icon-gf-check icon-gf-check kentik-icon-success"></i> Successfully enabled. <strong>Next up:\n  </strong><a href="dashboard/db/kentik-home" class="external-link">Go to Kentik Home Dashboard</a>\n</div>\n'},function(t,e,n){"use strict";n.r(e),n.d(e,"ConfigCtrl",function(){return l});var r=n(7),a=n.n(r),i=n(4),o=n(3),s=n(0),c=function(t,e,n,r){return new(n||(n=Promise))(function(a,i){function o(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(o,s)}c((r=r.apply(t,e||[])).next())})},u=function(t,e){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(t){i=[6,t],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},l=function(){function t(t,e,n){this.backendSrv=n,this.regionTypes=[{value:"default",text:"US (default)"},{value:"eu",text:"EU"}],this.appEditCtrl.setPreUpdateHook(this.preUpdate.bind(this)),this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this)),this.appModel.jsonData||(this.appModel.jsonData={}),this.appModel.secureJsonData||(this.appModel.secureJsonData={}),void 0===this.appModel.jsonData.region&&(this.appModel.jsonData.region="default"),this.apiValidated=!1,this.apiError=!1,this.kentik=new i.a(this.backendSrv),this.kentik.setRegion(this.appModel.jsonData.region),this.appModel.enabled&&this.appModel.jsonData.tokenSet&&this.validateApiConnection()}return t.$inject=["$scope","$injector","backendSrv"],t.prototype.preUpdate=function(){return this.appModel.secureJsonData.token&&(this.appModel.jsonData.tokenSet=!0),this.initDatasource()},t.prototype.postUpdate=function(){return c(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return this.appModel.enabled?[4,this.validateApiConnection()]:[2,Promise.resolve()];case 1:return t.sent(),[4,this.appEditCtrl.importDashboards()];case 2:return t.sent(),[2,{url:"dashboard/db/kentik-home",message:"Kentik Connect Pro app installed!"}]}})})},t.prototype.validateApiConnection=function(){return c(this,void 0,void 0,function(){var t;return u(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.kentik.getUsers()];case 1:return e.sent(),this.apiValidated=!0,[3,3];case 2:return t=e.sent(),Object(o.a)(t),this.apiValidated=!1,this.apiError=!0,[3,3];case 3:return[2]}})})},t.prototype.reset=function(){this.appModel.jsonData.email="",this.appModel.jsonData.tokenSet=!1,this.appModel.jsonData.region="default",this.appModel.secureJsonData={},this.apiValidated=!1},t.prototype.initDatasource=function(){var t=this,e=this;return e.backendSrv.get("/api/datasources").then(function(n){var r=!1,a=!1,i=NaN;s.forEach(n,function(e){if("kentik-ds"===e.type)return r=!0,i=e.id,void(e.jsonData.region!==t.appModel.jsonData.region&&(a=!0))});var o=[];if(!r||a){var c={name:"kentik",type:"kentik-ds",access:"proxy",jsonData:e.appModel.jsonData};a?o.push(e.backendSrv.put("/api/datasources/"+i,c)):o.push(e.backendSrv.post("/api/datasources",c))}return Promise.all(o)})},t}();l.template=a.a}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vLy4vZGF0YXNvdXJjZS9yZWdpb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL2RhdGFzb3VyY2UvYWxlcnRIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YXNvdXJjZS9rZW50aWtBUEkudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXyIsImdldFJlZ2lvbiIsImRhdGFzb3VyY2VzIiwiYVJlZ2lvbiIsImluZGV4IiwidHlwZSIsImpzb25EYXRhIiwicmVnaW9uIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXyIsInNob3dBbGVydCIsInNob3dDdXN0b21BbGVydCIsImdyYWZhbmFfYXBwX2NvcmVfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwibG9kYXNoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18iLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImVyciIsImVtaXQiLCJleGNlcHRpb25EYXRhIiwiZXhjZXB0aW9uVHlwZSIsImVyck1lc3NhZ2UiLCJLZW50aWtBUEkiLCJiYWNrZW5kU3J2IiwiX3RoaXMiLCJ0aGlzIiwiYXBpUmVhZHkiLCJiYXNlVXJsIiwidGhlbiIsImFsbERTIiwiX3JlZ2lvbkhlbHBlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwic2V0UmVnaW9uIiwiJGluamVjdCIsInJlc3AiLCJfYSIsInNlbnQiLCJkZXZpY2VzIiwiZ2V0VXNlcnMiLCJfZ2V0IiwiZ2V0RmllbGRWYWx1ZXMiLCJmaWVsZCIsInF1ZXJ5IiwiaW52b2tlU1FMUXVlcnkiLCJpbnZva2VUb3BYRGF0YVF1ZXJ5Iiwia2VudGlrVjVRdWVyeSIsInF1ZXJpZXMiLCJidWNrZXRJbmRleCIsIl9wb3N0IiwiZGF0YXNvdXJjZVJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJjYXRjaCIsImNvbnNvbGUiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJLZW50aWtDb25maWdDdHJsIiwiJHNjb3BlIiwiJGluamVjdG9yIiwicmVnaW9uVHlwZXMiLCJ0ZXh0IiwiYXBwRWRpdEN0cmwiLCJzZXRQcmVVcGRhdGVIb29rIiwicHJlVXBkYXRlIiwic2V0UG9zdFVwZGF0ZUhvb2siLCJwb3N0VXBkYXRlIiwiYXBwTW9kZWwiLCJzZWN1cmVKc29uRGF0YSIsImFwaVZhbGlkYXRlZCIsImFwaUVycm9yIiwia2VudGlrIiwiX2RhdGFzb3VyY2Vfa2VudGlrQVBJX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18iLCJlbmFibGVkIiwidG9rZW5TZXQiLCJ2YWxpZGF0ZUFwaUNvbm5lY3Rpb24iLCJ0b2tlbiIsImluaXREYXRhc291cmNlIiwibGFiZWwiLCJyZXNvbHZlIiwiaW1wb3J0RGFzaGJvYXJkcyIsImVfMSIsIl9kYXRhc291cmNlX2FsZXJ0SGVscGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18iLCJyZXNldCIsImVtYWlsIiwic2VsZiIsInJlc3VsdHMiLCJmb3VuZEtlbnRpa0RTIiwidXBkYXRlS2VudGlrRFMiLCJkc0lEIiwiTmFOIiwiZHMiLCJpZCIsInByb21pc2VzIiwiYWNjZXNzIiwicHVzaCIsInB1dCIsInBvc3QiLCJhbGwiXSwibWFwcGluZ3MiOiIrRUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBMERBLE9BckRBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEVBQUEsQ0FBMENLLFlBQUEsRUFBQUMsSUFBQUwsS0FLMUNaLEVBQUFrQixFQUFBLFNBQUFoQixHQUNBLG9CQUFBaUIsZUFBQUMsYUFDQU4sT0FBQUMsZUFBQWIsRUFBQWlCLE9BQUFDLFlBQUEsQ0FBd0RDLE1BQUEsV0FFeERQLE9BQUFDLGVBQUFiLEVBQUEsY0FBaURtQixPQUFBLEtBUWpEckIsRUFBQXNCLEVBQUEsU0FBQUQsRUFBQUUsR0FFQSxHQURBLEVBQUFBLElBQUFGLEVBQUFyQixFQUFBcUIsSUFDQSxFQUFBRSxFQUFBLE9BQUFGLEVBQ0EsS0FBQUUsR0FBQSxpQkFBQUYsUUFBQUcsV0FBQSxPQUFBSCxFQUNBLElBQUFJLEVBQUFYLE9BQUFZLE9BQUEsTUFHQSxHQUZBMUIsRUFBQWtCLEVBQUFPLEdBQ0FYLE9BQUFDLGVBQUFVLEVBQUEsV0FBeUNULFlBQUEsRUFBQUssVUFDekMsRUFBQUUsR0FBQSxp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QTBDckQsS0FBQW9DLFlBQUFrQix5QkFFMUMsbUJBRUUsRUFBUyxDQUNUN0IsSUFBQSx3TkFNQSxrQ0FBNkJ6QixLQUFBNkMsT0FBQWpDLGlCQUM3QixrREFFQSxTQUNBMkMsRUFBSzlDLEVBQUFDLE9BQ0wzRCxPQUFLeUcsRUFBZ0IsRUFBckJ6RyxDQUFxQndHLHdFQU1WdEYsVUFBVXdGLE1BQVEsV0FDL0J6RCxLQUFLeUMsU0FBUzlELFNBQVMrRSxNQUFNLEdBQzdCMUQsS0FBS3lDLFNBQVM5RCxTQUFBcUUsVUFBb0IsRUFDbENoRCxLQUFLeUMsU0FBQTlELFNBQWVDLE9BQU0sVUFDM0JvQixLQUFBeUMsU0FBQUMsZUFBQSxHQUVEMUMsS0FBQTJDLGNBQUEsS0FDZTFFLFVBQUtrRixlQUFBLFdBQ2xCLElBQUFwRCxFQUFBQyxLQUNBMkQsRUFBVzNELFlBRVQyRCxFQUFJN0QsV0FBYzVDLElBQUcsb0JBQU1pRCxLQUFBLFNBQUF5RCxHQUMzQixJQUFJQyxHQUFXLEVBQ2ZDLEdBQUEsRUFDRUMsRUFBQUMsTUFDNkIsUUFBQUosRUFBQSxTQUFBSyxNQUVmLGNBQVpBLEVBQUF2RixLQVFELE9BUENtRixHQUFBLEVBQ0FFLEVBQU9FLEVBQUFDLFFBRUxELEVBQUF0RixTQUFBQyxTQUFzQm1CLEVBQUEwQyxTQUFBOUQsU0FBQUMsU0FFeEJrRixHQUFPLFVBS1RLLEVBQUEsT0FDQU4sR0FBZUMsRUFBQSxLQUViakIsRUFBTSxDQUNOakcsS0FBTSxTQUNOOEIsS0FBQSxZQUNBMEYsT0FBQSxRQUNFekYsU0FBQWdGLEVBQWNsQixTQUFFOUQsVUFFbEJtRixJQUNLTyxLQUFBVixFQUFBN0QsV0FBQXdFLElBQUEsb0JBQUFQLEVBQUFsQixJQUlSc0IsRUFBQUUsS0FBQVYsRUFBQTdELFdBQUF5RSxLQUFBLG1CQUFBMUIsSUFJSixPQUFBakIsUUFBQTRDLElBQUFMLE1BR0hwQyxFQTVHa0IiLCJmaWxlIjoiY29uZmlnL21vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fOyIsIiAvKipcbiAgKiBSZXR1cm5zIHRoZSByZWdpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBrZW50aWsta3NcblxuICAqIEBwYXJhbSBkYXRhc291cmNlcyBcbiAgKi9cbmZ1bmN0aW9uIGdldFJlZ2lvbihkYXRhc291cmNlczogYW55KTogc3RyaW5nIHtcbiAgbGV0IGFSZWdpb24gPSBcImRlZmF1bHRcIjtcbiAgZm9yICh2YXIgaW5kZXggaW4gZGF0YXNvdXJjZXMpIHtcbiAgICBpZiAoZGF0YXNvdXJjZXNbaW5kZXhdLnR5cGUgPT09IFwia2VudGlrLWRzXCIpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJnZXRSZWdpb246IGZvdW5kIHJlZ2lvbjogXCIgK2RhdGFzb3VyY2VzW2luZGV4XS5qc29uRGF0YS5yZWdpb24pO1xuICAgICAgLy9jb25zb2xlLmxvZyhhbGxEU1tpbmRleF0pO1xuICAgICAgYVJlZ2lvbiA9IGRhdGFzb3VyY2VzW2luZGV4XS5qc29uRGF0YS5yZWdpb247XG4gICAgICByZXR1cm4gYVJlZ2lvbjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFSZWdpb247XG59XG5cbmV4cG9ydCB7IGdldFJlZ2lvbiB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXzsiLCJpbXBvcnQgeyBhcHBFdmVudHMgfSBmcm9tICdncmFmYW5hL2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBzaG93QWxlcnQoZXJyb3IpIHtcbiAgbGV0IG1lc3NhZ2UgPSAnJztcbiAgbWVzc2FnZSArPSBlcnJvci5zdGF0dXMgPyBgKCR7ZXJyb3Iuc3RhdHVzfSkgYCA6ICcnO1xuICBtZXNzYWdlICs9IGVycm9yLnN0YXR1c1RleHQgPyBlcnJvci5zdGF0dXNUZXh0ICsgJzogJyA6ICcnO1xuICBpZiAoZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhLmVycm9yKSB7XG4gICAgbWVzc2FnZSArPSBlcnJvci5kYXRhLmVycm9yO1xuICB9IGVsc2UgaWYgKGVycm9yLmVycikge1xuICAgIG1lc3NhZ2UgKz0gZXJyb3IuZXJyO1xuICB9IGVsc2UgaWYgKF8uaXNTdHJpbmcoZXJyb3IpKSB7XG4gICAgbWVzc2FnZSArPSBlcnJvcjtcbiAgfVxuXG4gIGFwcEV2ZW50cy5lbWl0KCdhbGVydC1lcnJvcicsIFtcIkNhbid0IGNvbm5lY3QgdG8gS2VudGlrIEFQSVwiLCBtZXNzYWdlXSk7XG59XG5cbmZ1bmN0aW9uIHNob3dDdXN0b21BbGVydChtZXNzYWdlLCBleGNlcHRpb25EYXRhLCBleGNlcHRpb25UeXBlKSB7XG4gIGxldCBlcnJNZXNzYWdlID0gJyc7XG4gIGVyck1lc3NhZ2UgKz0gZXhjZXB0aW9uRGF0YS5zdGF0dXMgPyBgKCR7ZXhjZXB0aW9uRGF0YS5zdGF0dXN9KSBgIDogJyc7XG4gIGVyck1lc3NhZ2UgKz0gZXhjZXB0aW9uRGF0YS5zdGF0dXNUZXh0ID8gZXhjZXB0aW9uRGF0YS5zdGF0dXNUZXh0ICsgJzogJyA6ICcnO1xuICBpZiAoZXhjZXB0aW9uRGF0YS5kYXRhICYmIGV4Y2VwdGlvbkRhdGEuZGF0YS5lcnJvcikge1xuICAgIGVyck1lc3NhZ2UgKz0gZXhjZXB0aW9uRGF0YS5kYXRhLmVycm9yO1xuICB9IGVsc2UgaWYgKGV4Y2VwdGlvbkRhdGEuZXJyKSB7XG4gICAgZXJyTWVzc2FnZSArPSBleGNlcHRpb25EYXRhLmVycjtcbiAgfSBlbHNlIGlmIChfLmlzU3RyaW5nKGV4Y2VwdGlvbkRhdGEpKSB7XG4gICAgZXJyTWVzc2FnZSArPSBleGNlcHRpb25EYXRhO1xuICB9XG4gIGFwcEV2ZW50cy5lbWl0KGBhbGVydC0ke2V4Y2VwdGlvblR5cGV9YCwgW21lc3NhZ2UsIGVyck1lc3NhZ2VdKTtcbn1cblxuZXhwb3J0IHsgc2hvd0FsZXJ0LCBzaG93Q3VzdG9tQWxlcnQgfTtcbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgZ2V0UmVnaW9uIH0gZnJvbSBcIi4vcmVnaW9uSGVscGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBLZW50aWtBUEkge1xuICBiYXNlVXJsOiBzdHJpbmc7XG4gIHJlZ2lvbjogc3RyaW5nO1xuICBhcGlSZWFkeTogYm9vbGVhbjtcbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYmFja2VuZFNydjogYW55KSB7XG4gICAgdGhpcy5hcGlSZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMuYmFzZVVybCA9IFwiL2FwaS9wbHVnaW4tcHJveHkva2VudGlrLWFwcFwiO1xuICAgIC8vIGdldCByZWdpb24gZnJvbSBkYXRhc291cmNlXG4gICAgYmFja2VuZFNydi5nZXQoJy9hcGkvZGF0YXNvdXJjZXMnKS50aGVuKCAoYWxsRFM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWdpb24gPSBnZXRSZWdpb24oYWxsRFMpO1xuICAgICAgdGhpcy5zZXRSZWdpb24odGhpcy5yZWdpb24pO1xuICAgICAgdGhpcy5hcGlSZWFkeSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBzZXRSZWdpb24ocmVnaW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcbiAgfVxuXG4gIGFzeW5jIGdldERldmljZXMoKSB7XG4gICAgdGhpcy5iYWNrZW5kU3J2LmdldCgnL2FwaS9kYXRhc291cmNlcycpLnRoZW4oIChhbGxEUzogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlZ2lvbiA9IGdldFJlZ2lvbihhbGxEUyk7XG4gICAgICB0aGlzLnNldFJlZ2lvbih0aGlzLnJlZ2lvbik7XG4gICAgICB0aGlzLmFwaVJlYWR5ID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLl9nZXQoJy9hcGkvdjUvZGV2aWNlcycpO1xuXG4gICAgaWYgKHJlc3AuZGF0YSAmJiByZXNwLmRhdGEuZGV2aWNlcykge1xuICAgICAgcmV0dXJuIHJlc3AuZGF0YS5kZXZpY2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgZ2V0VXNlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldCgnL2FwaS92NS91c2VycycpO1xuICB9XG5cbiAgZ2V0RmllbGRWYWx1ZXMoZmllbGQ6IHN0cmluZykge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYFNFTEVDVCBESVNUSU5DVCAke2ZpZWxkfSBGUk9NIGFsbF9kZXZpY2VzIE9SREVSIEJZICR7ZmllbGR9IEFTQ2A7XG4gICAgcmV0dXJuIHRoaXMuaW52b2tlU1FMUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q3VzdG9tRGltZW5zaW9ucygpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZ2V0KCcvYXBpL3Y1L2N1c3RvbWRpbWVuc2lvbnMnKTtcbiAgICByZXR1cm4gZGF0YS5kYXRhLmN1c3RvbURpbWVuc2lvbnM7XG4gIH1cblxuICBhc3luYyBnZXRTYXZlZEZpbHRlcnMoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2dldCgnL2FwaS92NS9zYXZlZC1maWx0ZXJzJyk7XG4gICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgfVxuXG4gIGludm9rZVRvcFhEYXRhUXVlcnkocXVlcnk6IGFueSkge1xuICAgIGNvbnN0IGtlbnRpa1Y1UXVlcnkgPSB7XG4gICAgICBxdWVyaWVzOiBbeyBxdWVyeTogcXVlcnksIGJ1Y2tldEluZGV4OiAwIH1dLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fcG9zdCgnL2FwaS92NS9xdWVyeS90b3BYZGF0YScsIGtlbnRpa1Y1UXVlcnkpO1xuICB9XG5cbiAgaW52b2tlU1FMUXVlcnkocXVlcnk6IGFueSkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBxdWVyeTogcXVlcnksXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLl9wb3N0KCcvYXBpL3Y1L3F1ZXJ5L3NxbCcsIGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgX2dldCh1cmw6IHN0cmluZykge1xuICAgIC8vIGlmIHRoZSByZWdpb24gaXMgbm90IHNldCwgZ2V0IGl0IGZyb20gdGhlIGRhdGFzb3VyY2VcbiAgICBpZiAodHlwZW9mIHRoaXMucmVnaW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy9jb25zb2xlLmxvZyhcIl9nZXQ6IHRoaXMucmVnaW9uIFVOREVGSU5FRCwgZmV0Y2hpbmdcIik7XG4gICAgICBhd2FpdCB0aGlzLmJhY2tlbmRTcnYuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJykudGhlbiggKGFsbERTOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXRSZWdpb24oZ2V0UmVnaW9uKGFsbERTKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJrZW50aWtBUEk6IF9nZXQ6IEZFVENIRUQgcmVnaW9uIFwiICsgdGhpcy5yZWdpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmJhY2tlbmRTcnZcbiAgICAgIC5kYXRhc291cmNlUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogdGhpcy5iYXNlVXJsICsgXCIvXCIgKyB0aGlzLnJlZ2lvbiArIHVybCxcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yLmVycikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5lcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgX3Bvc3QodXJsOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIC8vIGlmIHRoZSByZWdpb24gaXMgbm90IHNldCwgZ2V0IGl0IGZyb20gdGhlIGRhdGFzb3VyY2VcbiAgICBpZiAodHlwZW9mIHRoaXMucmVnaW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy9jb25zb2xlLmxvZyhcImtlbnRpa0FQSS5fcG9zdDogdGhpcy5yZWdpb24gVU5ERUZJTkVELCBmZXRjaGluZ1wiKTtcbiAgICAgIGF3YWl0IHRoaXMuYmFja2VuZFNydi5nZXQoJy9hcGkvZGF0YXNvdXJjZXMnKS50aGVuKCAoYWxsRFM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNldFJlZ2lvbihnZXRSZWdpb24oYWxsRFMpKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImtlbnRpa0FQSS5fcG9zdDogRkVUQ0hFRCByZWdpb24gXCIgKyB0aGlzLnJlZ2lvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYmFja2VuZFNydlxuICAgICAgLmRhdGFzb3VyY2VSZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHVybDogdGhpcy5iYXNlVXJsICsgXCIvXCIgKyB0aGlzLnJlZ2lvbiArIHVybCxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIGlmIChlcnJvci5lcnIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IuZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgnZ3JhZmFuYS5zZXJ2aWNlcycpLnNlcnZpY2UoJ2tlbnRpa0FQSVNydicsIEtlbnRpa0FQSSk7XG4iLCJpbXBvcnQgY29uZmlnVGVtcGxhdGUgZnJvbSAnLi9jb25maWcuaHRtbCc7XG5pbXBvcnQgeyBLZW50aWtBUEkgfSBmcm9tICcuLi9kYXRhc291cmNlL2tlbnRpa0FQSSc7XG5pbXBvcnQgeyBzaG93QWxlcnQgfSBmcm9tIFwiLi4vZGF0YXNvdXJjZS9hbGVydEhlbHBlclwiO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmNsYXNzIEtlbnRpa0NvbmZpZ0N0cmwge1xuICBhcHBFZGl0Q3RybDogYW55O1xuICBhcHBNb2RlbDogYW55O1xuICBhcGlWYWxpZGF0ZWQ6IGJvb2xlYW47XG4gIGFwaUVycm9yOiBib29sZWFuO1xuICBrZW50aWs6IEtlbnRpa0FQSTtcbiAgc3RhdGljIHRlbXBsYXRlOiBhbnk7XG4gIHJlZ2lvblR5cGVzID0gW1xuICAgIHsgdmFsdWU6IFwiZGVmYXVsdFwiLCB0ZXh0OiBcIlVTIChkZWZhdWx0KVwiIH0sXG4gICAgeyB2YWx1ZTogXCJldVwiLCB0ZXh0OiBcIkVVXCIgfVxuICBdO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkaW5qZWN0b3IsIHB1YmxpYyBiYWNrZW5kU3J2OiBhbnkpIHtcbiAgICB0aGlzLmFwcEVkaXRDdHJsLnNldFByZVVwZGF0ZUhvb2sodGhpcy5wcmVVcGRhdGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hcHBFZGl0Q3RybC5zZXRQb3N0VXBkYXRlSG9vayh0aGlzLnBvc3RVcGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICBpZiAoIXRoaXMuYXBwTW9kZWwuanNvbkRhdGEpIHtcbiAgICAgIHRoaXMuYXBwTW9kZWwuanNvbkRhdGEgPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFwcE1vZGVsLnNlY3VyZUpzb25EYXRhKSB7XG4gICAgICB0aGlzLmFwcE1vZGVsLnNlY3VyZUpzb25EYXRhID0ge307XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5hcHBNb2RlbC5qc29uRGF0YS5yZWdpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmFwcE1vZGVsLmpzb25EYXRhLnJlZ2lvbiA9IFwiZGVmYXVsdFwiO1xuICAgIH1cbiAgICB0aGlzLmFwaVZhbGlkYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuYXBpRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmtlbnRpayA9IG5ldyBLZW50aWtBUEkodGhpcy5iYWNrZW5kU3J2KTtcbiAgICB0aGlzLmtlbnRpay5zZXRSZWdpb24odGhpcy5hcHBNb2RlbC5qc29uRGF0YS5yZWdpb24pO1xuICAgIGlmICh0aGlzLmFwcE1vZGVsLmVuYWJsZWQgJiYgdGhpcy5hcHBNb2RlbC5qc29uRGF0YS50b2tlblNldCkge1xuICAgICAgdGhpcy52YWxpZGF0ZUFwaUNvbm5lY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcmVVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuYXBwTW9kZWwuc2VjdXJlSnNvbkRhdGEudG9rZW4pIHtcbiAgICAgIHRoaXMuYXBwTW9kZWwuanNvbkRhdGEudG9rZW5TZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmluaXREYXRhc291cmNlKCk7XG4gIH1cblxuICBhc3luYyBwb3N0VXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5hcHBNb2RlbC5lbmFibGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy52YWxpZGF0ZUFwaUNvbm5lY3Rpb24oKTsgICAgXG4gICAgYXdhaXQgdGhpcy5hcHBFZGl0Q3RybC5pbXBvcnREYXNoYm9hcmRzKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiAnZGFzaGJvYXJkL2RiL2tlbnRpay1ob21lJyxcbiAgICAgIG1lc3NhZ2U6ICdLZW50aWsgQ29ubmVjdCBQcm8gYXBwIGluc3RhbGxlZCEnLFxuICAgIH07XG4gIH1cblxuICAvLyBtYWtlIHN1cmUgdGhhdCB3ZSBjYW4gaGl0IHRoZSBLZW50aWsgQVBJLlxuICBhc3luYyB2YWxpZGF0ZUFwaUNvbm5lY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMua2VudGlrLmdldFVzZXJzKCk7XG4gICAgICB0aGlzLmFwaVZhbGlkYXRlZCA9IHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2hvd0FsZXJ0KGUpO1xuICAgICAgdGhpcy5hcGlWYWxpZGF0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYXBpRXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuYXBwTW9kZWwuanNvbkRhdGEuZW1haWwgPSAnJztcbiAgICB0aGlzLmFwcE1vZGVsLmpzb25EYXRhLnRva2VuU2V0ID0gZmFsc2U7XG4gICAgdGhpcy5hcHBNb2RlbC5qc29uRGF0YS5yZWdpb24gPSBcImRlZmF1bHRcIjtcbiAgICB0aGlzLmFwcE1vZGVsLnNlY3VyZUpzb25EYXRhID0ge307XG4gICAgdGhpcy5hcGlWYWxpZGF0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGluaXREYXRhc291cmNlKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIC8vY2hlY2sgZm9yIGV4aXN0aW5nIGRhdGFzb3VyY2UuXG4gICAgcmV0dXJuIHNlbGYuYmFja2VuZFNydi5nZXQoJy9hcGkvZGF0YXNvdXJjZXMnKS50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgbGV0IGZvdW5kS2VudGlrRFMgPSBmYWxzZTtcbiAgICAgIGxldCB1cGRhdGVLZW50aWtEUyA9IGZhbHNlO1xuICAgICAgbGV0IGRzSUQgPSBOYU47XG4gICAgICBfLmZvckVhY2gocmVzdWx0cywgZHMgPT4ge1xuICAgICAgICAvLyB1c2UgdGhlIHR5cGVcbiAgICAgICAgaWYgKGRzLnR5cGUgPT09ICdrZW50aWstZHMnKSB7XG4gICAgICAgICAgZm91bmRLZW50aWtEUyA9IHRydWU7XG4gICAgICAgICAgZHNJRCA9IGRzLmlkO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29uZmlnLmluaXREYXRhc291cmNlOiBmb3VuZCBleGlzdGluZyBkYXRhc291cmNlIHdpdGggcmVnaW9uOiBcIiArIGRzLmpzb25EYXRhLnJlZ2lvbik7XG4gICAgICAgICAgaWYgKGRzLmpzb25EYXRhLnJlZ2lvbiAhPT0gdGhpcy5hcHBNb2RlbC5qc29uRGF0YS5yZWdpb24pIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjb25maWcuaW5pdERhdGFzb3VyY2U6IG5lZWQgdG8gdXBkYXRlIGV4aXN0aW5nIGRhdGFzb3VyY2Ugd2l0aCByZWdpb246IFwiICsgdGhpcy5hcHBNb2RlbC5qc29uRGF0YS5yZWdpb24pO1xuICAgICAgICAgICAgdXBkYXRlS2VudGlrRFMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgIGlmICghZm91bmRLZW50aWtEUyB8fCB1cGRhdGVLZW50aWtEUykge1xuICAgICAgICAvLyBjcmVhdGUgZGF0YXNvdXJjZS5cbiAgICAgICAgY29uc3Qga2VudGlrID0ge1xuICAgICAgICAgIG5hbWU6ICdrZW50aWsnLFxuICAgICAgICAgIHR5cGU6ICdrZW50aWstZHMnLFxuICAgICAgICAgIGFjY2VzczogJ3Byb3h5JyxcbiAgICAgICAgICBqc29uRGF0YTogc2VsZi5hcHBNb2RlbC5qc29uRGF0YSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHVwZGF0ZUtlbnRpa0RTKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9uZmlnLmluaXREYXRhc291cmNlOiB1cGRhdGluZyBkYXRhc291cmNlXCIpO1xuICAgICAgICAgIHByb21pc2VzLnB1c2goc2VsZi5iYWNrZW5kU3J2LnB1dChgL2FwaS9kYXRhc291cmNlcy8ke2RzSUR9YCwga2VudGlrKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNvbmZpZy5pbml0RGF0YXNvdXJjZTogcmVhdGluZyBkYXRhc291cmNlXCIpO1xuICAgICAgICAgIHByb21pc2VzLnB1c2goc2VsZi5iYWNrZW5kU3J2LnBvc3QoJy9hcGkvZGF0YXNvdXJjZXMnLCBrZW50aWspKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gdXBkYXRlIHJlcXVpcmVzIGEgUFVUIHdpdGggdGhlIGlkXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH0pO1xuICB9XG59XG5cbktlbnRpa0NvbmZpZ0N0cmwudGVtcGxhdGUgPSBjb25maWdUZW1wbGF0ZTtcblxuZXhwb3J0IHsgS2VudGlrQ29uZmlnQ3RybCBhcyBDb25maWdDdHJsIH07XG4iXSwic291cmNlUm9vdCI6IiJ9