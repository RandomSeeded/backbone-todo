var TodoModel = Backbone.Model.extend( {
  defaults: {
    task: ""
  },
  killYourself: function() {
    this.trigger('destroy', this);
  }
});
