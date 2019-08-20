import { UserCredentials } from 'react-native-keychain';
import KeychainManager from 'Lib/Keychain/KeychainManager';

export const ALIAS_AUTHENTICATION = 'authentication_key';
const USERNAME_AUTHENTICATION = 'authentication_username';

export default class AuthenticationManager extends KeychainManager {
  /**
   * @method constructor
   *
   * @param {string} [alias]
   */
  constructor(alias: string = ALIAS_AUTHENTICATION) {
    super(alias);
  }

  /**
   * Gets authentication key from keychain
   *
   * @method get
   *
   * @returns {Promise<UserCredentials | null>}
   */
  get(): Promise<UserCredentials | null> {
    return super.get();
  }

  /**
   * Sets authentication key in keychain
   *
   * @method set
   *
   * @param {string} token
   *
   * @returns {Promise<void>}
   */
  set(token: string): Promise<void> {
    return super.set(USERNAME_AUTHENTICATION, token);
  }

  /**
   * Removes authentication key from keychain
   *
   * @method remove
   *
   * @returns {Promise<void>}
   */
  remove(): Promise<void> {
    return super.clear();
  }
}
