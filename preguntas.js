$.ajax({
   url: 'http://diegocollado.net/preguntas.html',
   type: 'GET',
   success: function(res) {
      var data = $.parseHTML(res); 
      $(data).find('.preguntas').each(function(){
          $('#preguntas2').append($(this).html());
     });

   }
 });