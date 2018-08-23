/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import { SerializableClass } from '../../../../../interfaces';

type UserChannelChannelStatus = 'joined'|'invited'|'not_participating';

type UserChannelNotificationLevel = 'default'|'muted';

/**
 * @description Initialize the UserChannelList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this channel belongs to.
 * @param userSid - The unique id of the User this Channel belongs to.
 */
declare function UserChannelList(version: V2, serviceSid: string, userSid: string): UserChannelListInstance;

/**
 * Options to pass to update
 *
 * @property notificationLevel - Push notification level to be assigned to Channel of the User.
 */
interface UserChannelInstanceUpdateOptions {
  notificationLevel: UserChannelNotificationLevel;
}

interface UserChannelListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): UserChannelContext;
  /**
   * Streams UserChannelInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: UserChannelListInstanceEachOptions, callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a user_channel
   *
   * @param channelSid - The unique id of a Channel.
   */
  get(channelSid: string): UserChannelContext;
  /**
   * Retrieve a single target page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: UserChannelPage) => any): Promise<UserChannelPage>;
  /**
   * Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: UserChannelListInstanceOptions, callback?: (error: Error | null, items: UserChannelInstance[]) => any): Promise<UserChannelInstance[]>;
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: UserChannelListInstancePageOptions, callback?: (error: Error | null, items: UserChannelPage) => any): Promise<UserChannelPage>;
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
interface UserChannelListInstanceEachOptions {
  callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void;
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
interface UserChannelListInstanceOptions {
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
interface UserChannelListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface UserChannelPayload extends UserChannelResource, Page.TwilioResponsePayload {
}

interface UserChannelResource {
  account_sid: string;
  channel_sid: string;
  last_consumed_message_index: number;
  links: string;
  member_sid: string;
  notification_level: UserChannelNotificationLevel;
  service_sid: string;
  status: UserChannelChannelStatus;
  unread_messages_count: number;
  url: string;
  user_sid: string;
}

interface UserChannelSolution {
  serviceSid?: string;
  userSid?: string;
}


declare class UserChannelContext {
  /**
   * Initialize the UserChannelContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The unique id of the Service those channels belong to.
   * @param userSid - The unique id of a User.
   * @param channelSid - The unique id of a Channel.
   */
  constructor(version: V2, serviceSid: string, userSid: string, channelSid: string);

  /**
   * fetch a UserChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserChannelInstance) => any): Promise<UserChannelInstance>;
  /**
   * update a UserChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: UserChannelInstanceUpdateOptions, callback?: (error: Error | null, items: UserChannelInstance) => any): Promise<UserChannelInstance>;
}


declare class UserChannelInstance extends SerializableClass {
  /**
   * Initialize the UserChannelContext
   *
   * @property accountSid - The unique id of the Account responsible for this channel.
   * @property serviceSid - The unique id of the Service this channel belongs to.
   * @property channelSid - The unique id of a Channel.
   * @property userSid - The unique id of the User this Channel belongs to.
   * @property memberSid - The unique id of this User as a Member in this Channel.
   * @property status - The status of the User on this Channel.
   * @property lastConsumedMessageIndex - The index of the last read Message in this Channel for this User.
   * @property unreadMessagesCount - The count of unread Messages in this Channel for this User.
   * @property links - The links
   * @property url - An absolute URL for this User Channel.
   * @property notificationLevel - The notification level of the User for this Channel.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this channel belongs to.
   * @param userSid - The unique id of the User this Channel belongs to.
   * @param channelSid - The unique id of a Channel.
   */
  constructor(version: V2, payload: UserChannelPayload, serviceSid: string, userSid: string, channelSid: string);

  private _proxy: UserChannelContext;
  accountSid: string;
  channelSid: string;
  /**
   * fetch a UserChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserChannelInstance) => any): void;
  lastConsumedMessageIndex: number;
  links: string;
  memberSid: string;
  notificationLevel: UserChannelNotificationLevel;
  serviceSid: string;
  status: UserChannelChannelStatus;
  /**
   * Produce a plain JSON object version of the UserChannelInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  unreadMessagesCount: number;
  /**
   * update a UserChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: UserChannelInstanceUpdateOptions, callback?: (error: Error | null, items: UserChannelInstance) => any): void;
  url: string;
  userSid: string;
}


declare class UserChannelPage extends Page<V2, UserChannelPayload, UserChannelResource, UserChannelInstance> {
  /**
   * Initialize the UserChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: UserChannelSolution);

  /**
   * Build an instance of UserChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserChannelPayload): UserChannelInstance;
}

export { UserChannelContext, UserChannelInstance, UserChannelList, UserChannelListInstance, UserChannelListInstanceEachOptions, UserChannelListInstanceOptions, UserChannelListInstancePageOptions, UserChannelPage, UserChannelPayload, UserChannelResource, UserChannelSolution }
