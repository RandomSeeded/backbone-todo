var TodoEntryView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'click': function() {
      this.model.killYourself();
    }
  },

  render: function() {
    return this.$el.html('<li>'+this.model.get('task')+'</li>');
  }
});
