import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class BookStoresRoute extends Route {
  async model() {
    let [bookShops, books] = await Promise.all([
      this.store.query('book-store/shop', { filter: 'recent' }),
      // this.store.findAll('book-store/book'),
    ]);

    return RSVP.hash({
      bookShops,
      books,
    });
  }
}
