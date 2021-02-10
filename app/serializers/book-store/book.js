import ApplicationSerializer from '../application';

export default class BookStoreBookSerializer extends ApplicationSerializer {
  modelNameFromPayloadKey(modelName) {
    return 'book-store/book';
  }
}
