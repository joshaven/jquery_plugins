

// $.fn.triggerEvent = function(type, target) {
//  return this.triggerHandler(type, [jQuery.event.fix({ type: type, target: target })]);
// };

$(document).ready(function(){
  module("quickselect");
  
  test("should convert a select element into a text input box", function() {
    ok($('#one_to_ten').quickselect(), "quickselect failed to return true" );
  });
});