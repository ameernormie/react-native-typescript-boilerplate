import * as Keychain from 'react-native-keychain';

export default class KeychainManager {
  alias: string;

  /**
   * @method constructor
   *
   * @param {string} alias
   */
  constructor(alias: string) {
    this.alias = alias;
  }

  /**
   * Gets credentials from keychain
   *
   * @method get
   *
   * @returns {Promise<UserCredentials | null>}
   */
  protected get(): Promise<Keychain.UserCredentials | null> {
    return Keychain.getInternetCredentials(this.alias).then(
      (credentials) => credentials || null,
    );
  }

  /**
   * Sets credentials in keychain
   *
   * @method set
   *
   * @param {string} username
   * @param {string} password
   *
   * @returns {Promise<void>}
   */
  protected set(username: string, password: string): Promise<void> {
    return Keychain.setInternetCredentials(this.alias, username, password);
  }

  /**
   * Clears credentials from keychain
   *
   * @method clear
   *
   * @returns {Promise<void | null>}
   */
  protected clear(): Promise<void> {
    return Keychain.resetInternetCredentials(this.alias);
  }
}
