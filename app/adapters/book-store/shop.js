import ApplicationAdapter from '../application';

export default class BookStoreShopAdapter extends ApplicationAdapter {
  host = '/book-store';

  pathForType() {
    return 'shops';
  }
}
