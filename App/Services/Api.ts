import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
// TODO put this url later
import AppConfig from 'Config/AppConfig';
import assign from 'lodash/assign';
import isNull from 'lodash/isNull';
import { UserCredentials } from 'react-native-keychain';
import AuthenticationManager from 'Lib/Keychain/AuthenticationManager';

/**
 * Assigns headers (Authorization) to axios config
 *
 * @method assignHeaders
 *
 * @param {AxiosRequestConfig} config
 *
 * @returns {Promise<AxiosRequestConfig>}
 */
export const assignHeaders = (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  const manager = new AuthenticationManager();

  return manager
    .get()
    .then((credentials: UserCredentials | null) =>
      // If there is no keychain entry for jwt token
      // Then it's safe to assume that we're hitting an unprotected endpoint.
      isNull(credentials)
        ? config
        : assign({}, config, {
            headers: {
              // credentials.password -> jwt token
              Authorization: `JWT ${credentials.password}`,
            },
          }),
    )
    .catch(() => config);
};

/**
 * Wraps axios (http-client)
 *
 * @param {AxiosRequestConfig}
 *
 * @returns {AxiosPromise}
 */
export default (config: AxiosRequestConfig): AxiosPromise => {
  const updatedConfig = assign({}, config, {
    /** TODO - Put api url later */
    url: `${AppConfig.BASE_URL}${config.url}`,
  });

  if (
    updatedConfig.url.includes('api/mobile/v1/user') ||
    updatedConfig.url.includes('api-token-auth')
  ) {
    // TODO : api module should not know about any urls and this should be handled outside of this module
    return axios(updatedConfig);
  }
  return assignHeaders(updatedConfig).then(
    (configWithHeaders: AxiosRequestConfig) => axios(configWithHeaders),
  );
};
