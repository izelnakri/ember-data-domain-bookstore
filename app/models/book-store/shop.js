import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BookStoreShopModel extends Model {
  @attr('string') name;

  @belongsTo('auth/user') owner;
  @hasMany('book-store/book') books;
  @hasMany('auth/user') users;
}
