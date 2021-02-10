import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Some shop name ${i}`;
  },

  afterCreate(shop, server) {
    let owner = server.create('user', { name: `Owner from shop#${shop.id}` });

    shop.update({ owner });
  },
});
