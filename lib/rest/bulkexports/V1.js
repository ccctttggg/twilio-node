'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var ExportConfigurationList = require(
    './v1/exportConfiguration').ExportConfigurationList;
var ExportList = require('./v1/export').ExportList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Bulkexports
 *
 * @constructor Twilio.Bulkexports.V1
 *
 * @property {Twilio.Bulkexports.V1.ExportList} exports - exports resource
 * @property {Twilio.Bulkexports.V1.ExportConfigurationList} exportConfiguration -
 *          exportConfiguration resource
 *
 * @param {Twilio.Bulkexports} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._exports = undefined;
  this._exportConfiguration = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'exports', {
    get: function() {
      this._exports = this._exports || new ExportList(this);
      return this._exports;
    }
});

Object.defineProperty(V1.prototype,
  'exportConfiguration', {
    get: function() {
      this._exportConfiguration = this._exportConfiguration || new ExportConfigurationList(this);
      return this._exportConfiguration;
    }
});

module.exports = V1;
