$(function(){
  var $width = $('#width');
      $height= $('#length');
      $btnCal = $('#calculate');
      $perimeter = $('#perimeter');
      $area = $('#area');

  
      $btnCal.click(function(){
        var w = Number($width.val());
        var h = Number($height.val());

    
        var p =  2 * (w + h),
            a = w * h;

        $perimeter.val(p);
        $area.val(a);
      });

})
