import ApplicationSerializer from '../application';

export default class AuthUserSerializer extends ApplicationSerializer {
  modelNameFromPayloadType() {
    return 'users';
  }
}
