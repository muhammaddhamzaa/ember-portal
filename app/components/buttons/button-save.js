import Component from '@ember/component';
import MD from '../../utils/metadata';

export default Component.extend({
  init: function() {
    this._super(...arguments);
    this.metaData = MD.create().getMetaViewStuff("Leads", "record", "buttons");
  },
  //    console.log(this.metaData);
  actions: {
    changeToLeads: function() {
      sessionStorage.setItem('module', "Leads");
      sessionStorage.setItem('mode', "List");
      window.location.reload(true);
    }
  }
});
