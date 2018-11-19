import Component from '@ember/component';

export default Component.extend({
  actions: {
    changeMode: function() {
      sessionStorage.setItem('mode', "Create");
      window.location.reload(true);
    }
  }
});
