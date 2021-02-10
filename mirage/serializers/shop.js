import Serializer from './application';

export default Serializer.extend({
  getHashForResource() {
    let [hash, addToIncludes] = Serializer.prototype.getHashForResource.apply(
      this,
      arguments
    );

    if (Array.isArray(hash)) {
      for (let child of hash) {
        this._adjust(child);
      }
    } else {
      this._adjust(hash);
    }

    return [hash, addToIncludes];
  },

  _adjust(shop) {
    let { schema } = this.registry;

    let ownerResource = schema.users.find(shop.owner_id);
    let [ownerHash] = this.getHashForIncludedResource(ownerResource);

    shop.owner = ownerHash.users[0];
  },
});
