$(document).ready(function() {
    // all custom jQuery will go here

    $(document).ready(function(){
        $('#a1').keyup(calculate);
        $('#a2').keyup(calculate);
    });


    function calculate(e)
    {
        $('#a3').val($('#a1').val() * $('#a2').val());
    }

    $(document).ready(function(){
        $('#volume1').keyup(calculate);
        $('#price1').keyup(calculate);
        $('#percentage1').keyup(calculate);
        $('#percentage1').keyup(calculate);
    });


    function calculate(e)
    {
        var price1 = parseFloat($("#price1").val()).toFixed(3)
        var volume1 = parseFloat($("#volume1").val())
        var percentage1 = parseFloat($("#percentage1").val())

        var result1 = price1 / (volume1 * percentage1)

        $("#ppu1").val(result1)

        //$('#ppu1').val($('#volume1').val() * $('#percentage1').val());
        //$('#ppu1').val($('#price1').val() / (($('#volume1').val() * $('#percentage1').val())));
        //var vp1 = $('#volume1').val() * $('#percentage1').val();
        //$('#ppu1').val($('#price1').val() / $(vp1).val());

    }


var myName = "Maartje";

  function sayMyName(name){
    alert("Hi," + name + "!");
  }





});
