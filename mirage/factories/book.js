import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Some book name ${i}`;
  },
});
