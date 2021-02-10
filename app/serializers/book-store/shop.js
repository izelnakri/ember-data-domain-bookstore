import ApplicationSerializer from '../application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class BookStoreShopSerializer extends ApplicationSerializer.extend(
  EmbeddedRecordsMixin
) {
  modelNameFromPayloadKey(modelName) {
    return 'book-store/shop';
  }

  attrs = {
    owner: { embedded: 'always' },
  };
}
