import Component from '@ember/component';
import MD from "../../utils/metadata"

export default Component.extend({
  init: function(){
    this._super(...arguments);
    this.metaData = MD.create().getMetaViewStuff(sessionStorage.getItem('module'), "subpanel-list", "panels")
  }
});
