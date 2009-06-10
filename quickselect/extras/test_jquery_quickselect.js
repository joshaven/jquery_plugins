// $.fn.triggerEvent = function(type, target) {
//  return this.triggerHandler(type, [jQuery.event.fix({ type: type, target: target })]);
// };

$(document).ready(function(){
  
  module("quickselect",{
    setup: function(){
      // create select for: 0-9
      $('#scrap').append('<select id="zero_to_nine"></select>');
      for(i=0;i<10;i++) { $('#zero_to_nine').append('<option value="'+i+'">'+i+'</option>'); }
      // create select for: red green blue
      $('#scrap').append('<select id="rgb"></select>');
      rgb=['','red','green','blue'];
      for(var i in rgb){ $('#rgb').append('<option value="'+i+'">'+rgb[i]+'</option>'); }
    },
    teardown: function(){$('#scrap').html('');}
    
  });
  
  test("should convert a select element into a text input box", function(){
    ok($('#zero_to_nine').quickselect(), "quickselect failed to return true" );
  });
  
  test("should create hidden input box for select", function(){
    $('select#zero_to_nine').quickselect();
    equals($('input#zero_to_nine').length, 1, "should have matched 1 instance, hidden input not found");
    equals($('input#zero_to_nine').attr('type'), 'hidden', 'type is not set to hidden');
  });
  
  test("should create quickselect in place of select", function(){
    $('select#zero_to_nine').quickselect();
    equals($('input#zero_to_nine_quickselect').length, 1, "should have matched 1 instance, quickselect not found");
  });
  
  // test("should update hidden field when option is selected", function(){
  //   equals($('#rgb').val(), '0', 'rgb select should have a default value of 0');
  //   equals($('#rgb option:selected').text(), '', 'rgb select should not have a selected option');
  //   $('#rgb').quickselect();
  //   equals($('#rgb_quickselect').text(), '', 'hidden field should not have a default value when original does not');
  //   
  //   
  //   // $("#rgb_quickselect").click(function () {
  //     $("#rgb_quickselect").focus(function(){this.value ="red";});
  //     $("body").focus();
  //   // });
  //   
  //   equals($("#rgb").val(), '1')
  //   
  // });
  
});