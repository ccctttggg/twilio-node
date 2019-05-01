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
var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('DataSession', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'data_sessions': [
              {
                  'sid': 'WNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'radio_link': 'LTE',
                  'operator_mcc': '',
                  'operator_mnc': '',
                  'operator_country': '',
                  'operator_name': '',
                  'cell_id': '',
                  'cell_location_estimate': {},
                  'packets_uploaded': 0,
                  'packets_downloaded': 0,
                  'last_updated': '2015-07-30T20:00:00Z',
                  'start': '2015-07-30T20:00:00Z',
                  'end': null,
                  'imeisv': null
              },
              {
                  'sid': 'WNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'radio_link': '3G',
                  'operator_mcc': '',
                  'operator_mnc': '',
                  'operator_country': '',
                  'operator_name': '',
                  'cell_id': '',
                  'cell_location_estimate': {},
                  'packets_uploaded': 0,
                  'packets_downloaded': 0,
                  'last_updated': '2015-07-30T20:00:00Z',
                  'start': '2015-07-30T20:00:00Z',
                  'end': '2015-07-30T20:00:00Z',
                  'imeisv': '8693070314126600'
              }
          ],
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DataSessions?PageSize=50&Page=0',
              'key': 'data_sessions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DataSessions?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.wireless.v1.sims('DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .dataSessions.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'data_sessions': [
              {
                  'sid': 'WNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'radio_link': 'LTE',
                  'operator_mcc': '',
                  'operator_mnc': '',
                  'operator_country': '',
                  'operator_name': '',
                  'cell_id': '',
                  'cell_location_estimate': {},
                  'packets_uploaded': 0,
                  'packets_downloaded': 0,
                  'last_updated': '2015-07-30T20:00:00Z',
                  'start': '2015-07-30T20:00:00Z',
                  'end': null,
                  'imeisv': null
              },
              {
                  'sid': 'WNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'radio_link': '3G',
                  'operator_mcc': '',
                  'operator_mnc': '',
                  'operator_country': '',
                  'operator_name': '',
                  'cell_id': '',
                  'cell_location_estimate': {},
                  'packets_uploaded': 0,
                  'packets_downloaded': 0,
                  'last_updated': '2015-07-30T20:00:00Z',
                  'start': '2015-07-30T20:00:00Z',
                  'end': '2015-07-30T20:00:00Z',
                  'imeisv': '8693070314126600'
              }
          ],
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DataSessions?PageSize=50&Page=0',
              'key': 'data_sessions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DataSessions?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.wireless.v1.sims('DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .dataSessions.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://wireless.twilio.com/v1/Sims/<%= simSid %>/DataSessions',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'data_sessions': [
              {
                  'sid': 'WNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'radio_link': 'LTE',
                  'operator_mcc': '',
                  'operator_mnc': '',
                  'operator_country': '',
                  'operator_name': '',
                  'cell_id': '',
                  'cell_location_estimate': {},
                  'packets_uploaded': 0,
                  'packets_downloaded': 0,
                  'last_updated': '2015-07-30T20:00:00Z',
                  'start': '2015-07-30T20:00:00Z',
                  'end': null,
                  'imeisv': null
              },
              {
                  'sid': 'WNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'radio_link': '3G',
                  'operator_mcc': '',
                  'operator_mnc': '',
                  'operator_country': '',
                  'operator_name': '',
                  'cell_id': '',
                  'cell_location_estimate': {},
                  'packets_uploaded': 0,
                  'packets_downloaded': 0,
                  'last_updated': '2015-07-30T20:00:00Z',
                  'start': '2015-07-30T20:00:00Z',
                  'end': '2015-07-30T20:00:00Z',
                  'imeisv': '8693070314126600'
              }
          ],
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DataSessions?PageSize=50&Page=0',
              'key': 'data_sessions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DataSessions?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.wireless.v1.sims('DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .dataSessions.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.wireless.v1.sims('DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .dataSessions.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {simSid: 'DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://wireless.twilio.com/v1/Sims/<%= simSid %>/DataSessions')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'data_sessions': [
              {
                  'sid': 'WNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'radio_link': 'LTE',
                  'operator_mcc': '',
                  'operator_mnc': '',
                  'operator_country': '',
                  'operator_name': '',
                  'cell_id': '',
                  'cell_location_estimate': {},
                  'packets_uploaded': 0,
                  'packets_downloaded': 0,
                  'last_updated': '2015-07-30T20:00:00Z',
                  'start': '2015-07-30T20:00:00Z',
                  'end': null,
                  'imeisv': null
              },
              {
                  'sid': 'WNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'radio_link': '3G',
                  'operator_mcc': '',
                  'operator_mnc': '',
                  'operator_country': '',
                  'operator_name': '',
                  'cell_id': '',
                  'cell_location_estimate': {},
                  'packets_uploaded': 0,
                  'packets_downloaded': 0,
                  'last_updated': '2015-07-30T20:00:00Z',
                  'start': '2015-07-30T20:00:00Z',
                  'end': '2015-07-30T20:00:00Z',
                  'imeisv': '8693070314126600'
              }
          ],
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DataSessions?PageSize=50&Page=0',
              'key': 'data_sessions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DataSessions?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.wireless.v1.sims('DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .dataSessions.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
