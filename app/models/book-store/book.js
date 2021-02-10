import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BookStoreBookModel extends Model {
  @attr('string') name;

  @belongsTo('book-store/shop', { async: true }) bookStore;
  @hasMany('auth/user', { async: true }) owners;
}
