$(document).ready(function() {
var canvas = new fabric.Canvas('canvas');
document.getElementById('file').addEventListener("change", function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (f) {
    var data = f.target.result;                    
    fabric.Image.fromURL(data, function (img) {
      var oImg = img.set({left: 0, top: 0, angle: 0}).scale(0.9);
      canvas.add(oImg).renderAll();
    });
  };
  
  reader.readAsDataURL(file);
});

    $("#export").click(function(){
	$("#canvas").get(0).toBlob(function(blob){
		saveAs(blob, "dashboard.png");
	});
});
})