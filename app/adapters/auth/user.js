import ApplicationAdapter from '../application';

export default class AuthUserAdapter extends ApplicationAdapter {
  host = '/auth';

  pathForType() {
    return 'users';
  }
}
