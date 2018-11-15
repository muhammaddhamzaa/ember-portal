import Component from '@ember/component';
import MD from "../../utils/metadata.js"
export default Component.extend({

  init: function(){
    this.metaData = MD.create().getMetaViewStuff("Leads", "buttons");
    console.log(this.metaData);
  }

});
