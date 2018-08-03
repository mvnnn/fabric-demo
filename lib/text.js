var imageLoader = document.getElementById('imageLoader');
var canvas = new fabric.Canvas('canvas', {
  selection: false,
  uniScaleTransform: true
});
canvas.uniScaleTransform = true;

var appObject = function() {

  return {
    __canvas: canvas,
    __tmpgroup: {},

    addText: function() {
      var newID = (new Date()).getTime().toString().substr(5);

      var newText = document.getElementById("text").value || 'ADD';


      var text = new fabric.IText(newText, {
        fontFamily: 'arial black',
        left: 100,
        top: 100,
        myid: newID,
        objecttype: 'text'
      });

      this.__canvas.add(text);
      this.addLayer(newID, 'text');
    },
    setTextParam: function(param, value) {
      var obj = this.__canvas.getActiveObject();
      if (obj) {
        if (param == 'color') {
          obj.setColor(value);
        } else {
          obj.set(param, value);
        }
        this.__canvas.renderAll();
      }
    },
    setTextValue: function(value) {
      var obj = this.__canvas.getActiveObject();
      if (obj) {
        obj.setText(value);
        this.__canvas.renderAll();
      }
    },
    addLayer: function() {

    }

  };
}

$(document).ready(function() {

  var app = appObject();

  $('.font-change').change(function(event) {
    app.setTextParam($(this).data('type'), $(this).find('option:selected').val());
  });

  $('#font-color-change').change(function(event) {
    app.setTextParam($(this).data('type'), event.target.value);
  });

  $('#add').click(function() {
    app.addText();
  });

  $('#text-cont').keyup(function() {
    app.setTextValue($(this).val());
  })

})