$(function(){ // won't run until the whole window has been loaded
  var peerReviewCanvas = $('#peer-review')[0];
  var peerReviewCtx = peerReviewCanvas.getContext('2d'); // treated as a 2-dimensional canvas

  for (var i =0; i < 10 ; i++) {

    peerReviewCtx.strokeText(10- i, 10, 30 + i * 20);
    peerReivewCtx.moveTo(25, 30 + i * 20);
    peerReviewCtx.lineTo(200, 30 + i * 20);

  }
  peerReviewCtx.stroke();
});

$.ajax({
  url: '/peerReview.json'
  success: function(data) {
    var categories - Object.keys(data);

    caregories.forEach(function(category, index){
      var value = data[category];
      var x = 30 + index * 10;
      var y = 30 + )10-value) * 20;
      var height = value * 20;
      peerReviewCtx.fillRect(x, y, 5, height);

    });

    categories.forEach(function(category, index){
      peerReviewCtx.strokeText(category, 100, 30 + 20 * index);
    })
  }
})
