/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the DeploymentList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param environmentSid - Environment Sid.
 */
declare function DeploymentList(version: V1, serviceSid: string, environmentSid: string): DeploymentListInstance;

interface DeploymentListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DeploymentContext;
  /**
   * create a DeploymentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: DeploymentListInstanceCreateOptions, callback?: (error: Error | null, item: DeploymentInstance) => any): Promise<DeploymentInstance>;
  /**
   * Streams DeploymentInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: DeploymentListInstanceEachOptions, callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a deployment
   *
   * @param sid - Deployment Sid.
   */
  get(sid: string): DeploymentContext;
  /**
   * Retrieve a single target page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
  /**
   * Lists DeploymentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DeploymentListInstanceOptions, callback?: (error: Error | null, items: DeploymentInstance[]) => any): Promise<DeploymentInstance[]>;
  /**
   * Retrieve a single page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DeploymentListInstancePageOptions, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property buildSid - Build Sid.
 */
interface DeploymentListInstanceCreateOptions {
  buildSid: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface DeploymentListInstanceEachOptions {
  callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface DeploymentListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface DeploymentListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface DeploymentPayload extends DeploymentResource, Page.TwilioResponsePayload {
}

interface DeploymentResource {
  account_sid: string;
  build_sid: string;
  date_created: Date;
  date_updated: Date;
  environment_sid: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface DeploymentSolution {
  environmentSid?: string;
  serviceSid?: string;
}


declare class DeploymentContext {
  /**
   * Initialize the DeploymentContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param environmentSid - Environment Sid.
   * @param sid - Deployment Sid.
   */
  constructor(version: V1, serviceSid: string, environmentSid: string, sid: string);

  /**
   * fetch a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DeploymentInstance) => any): Promise<DeploymentInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class DeploymentInstance extends SerializableClass {
  /**
   * Initialize the DeploymentContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param environmentSid - Environment Sid.
   * @param sid - Deployment Sid.
   */
  constructor(version: V1, payload: DeploymentPayload, serviceSid: string, environmentSid: string, sid: string);

  private _proxy: DeploymentContext;
  accountSid: string;
  buildSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  environmentSid: string;
  /**
   * fetch a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DeploymentInstance) => any): void;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class DeploymentPage extends Page<V1, DeploymentPayload, DeploymentResource, DeploymentInstance> {
  /**
   * Initialize the DeploymentPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: DeploymentSolution);

  /**
   * Build an instance of DeploymentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DeploymentPayload): DeploymentInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { DeploymentContext, DeploymentInstance, DeploymentList, DeploymentListInstance, DeploymentListInstanceCreateOptions, DeploymentListInstanceEachOptions, DeploymentListInstanceOptions, DeploymentListInstancePageOptions, DeploymentPage, DeploymentPayload, DeploymentResource, DeploymentSolution }
