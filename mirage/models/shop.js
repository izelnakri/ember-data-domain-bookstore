import { belongsTo, Model } from 'ember-cli-mirage';

export default Model.extend({
  owner: belongsTo('user'),
});
