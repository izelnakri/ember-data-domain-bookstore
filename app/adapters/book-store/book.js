import ApplicationAdapter from '../application';

export default class BookStoreBookAdapter extends ApplicationAdapter {
  host = '/book-store';

  pathForType() {
    return 'books';
  }
}
