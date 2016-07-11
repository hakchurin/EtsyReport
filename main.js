var requestSettings = {
    type: 'GET',
    dataType: 'jsonp',
    url: 'https://api.etsy.com/v2/listings/active.js?api_key=c7f2v5lrzlt6cewdoi1suyj9&keywords=shirts&includes=Images,Shop',
    success: function(response) {
      var content = $('.content');
      response.results.forEach(function(current,i,array){
console.log(response);
        var etsyItem = $('<div></div>').addClass('etsyItem');
        var etsyTitle = $('<h3></h3>');
        var etsyPhoto= $('<img src= "#">');

        etsyTitle.append(current.title);
        etsyItem.append(etsyTitle);
        etsyItem.append(current.price);
        content.append(etsyItem);
        etsyPhoto.attr('src', current.Images[0].url_170x135);
        etsyItem.append(etsyPhoto);


      });











      // var content = document.querySelector('.content');
      // response.results.forEach(function(current, i, array){
      //   $(content).append(current.title);
      //
      //
      //   var price = document.querySelector('.price');
      //   response.results.forEach(function(current,i,array){
      //     $(price).append(current.price);
      //
      //     response.results.filter(function(){
      //       return $('.items').append(content).append(price);
      //     });





          // var items = document.querySelector('.items');
          // response.results.forEach(function(current,i,array){
          //   $(items).append(content.price);
          //

            // var items = document.querySelector('.items');
          //   response.results.filter(function(item){
          //     return  $(item).content.price;
          //   });
          //
          //   console.log(items);
          //
          //
          // // });


        //
        // });

        // });


    }
};

$.ajax(requestSettings);
