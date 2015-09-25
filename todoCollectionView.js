var TodoCollectionView = Backbone.View.extend({

  el: '.todo-list',

  initialize: function() {
    this.render();
    this.collection.on('add remove', function() {
      this.render();
    }, this);
  },
  
  render: function() {
    this.$el.html('<ul></ul>').append(
      this.collection.map(function(item) {
        return new TodoEntryView({model: item}).render();
      })
    );
  }
});
