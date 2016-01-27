$(window).load(function(){

  // set variables
  this.hold = false;
  this.value = 50;
  var leftOffset = $(".slider").offset().left + 92;
  var topOffset = $(".slider").offset().top;

  // Set slider to defualt value and placement
  $(".slider").html(this.value);
  $(".slider").offset({top: topOffset, left: leftOffset});
  $(".slider").attr("data-content", 50);

  // detect mouse down
  $(".slider").mousedown(function (event) {
    this.hold = true;
    var val = Math.floor((event.clientX - leftOffset + 92) / 2);
    this.value = valueCorrect(val);
    $(".slider").html("");
  }.bind());

  // detect mouse up
  $(".slider").mouseup(function (event) {
    this.hold = false;
    var val = Math.floor((event.clientX - leftOffset + 92) / 2);
    this.value = valueCorrect(val);
    $(".slider").html(this.value);
  }.bind());

  // animate slider movement
  $(".slider").mousemove(function (event) {
    if (this.hold && this.value > 0 && this.value < 100) {
      $(".slider").offset({top: topOffset, left: (event.clientX - 10)});
      var val = Math.floor((event.clientX - leftOffset + 92) / 2);
      this.value = valueCorrect(val);
      $(".slider").attr("data-content", String(this.value));
    }
  }.bind());

  function valueCorrect (val) {
    if (val > 100) {
      val = 100;
    } else if (val < 0) {
      val = 0;
    }
    return val;
  }

}.bind());
