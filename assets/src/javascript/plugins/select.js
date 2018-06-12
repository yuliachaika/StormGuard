'use strict';

(function($){

  /**
  * Document ready state
  */
  $( function() {

    $('.form__select').each(function(){

      var $this = $(this),
      selectOption = $this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      dur = 500;

      $this.hide();

    // Wrap all in select box
    $this.wrap('<div class="select"></div>'); //select
    // Style box
    $('<div>',{
      class: 'select__title', //select__gap
      text: 'What are you contacting us about?'
    }).insertAfter($this);
    
    var selectTitle = $this.next('.select__title');

    // Add ul list
    $('<ul>',{
      class: 'select__list'
    }).insertAfter(selectTitle);    

    var selectList = selectTitle.next('.select__list');
    // Add li - option items
    for(var i = 0; i < selectOptionLength; i++){
      $('<li>',{
        class: 'select__item',
        html: $('<span>',{
          text: selectOption.eq(i).text()
        })        
      })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
    }

    // Find all items
    var selectItem = selectList.find('li');

    selectList.slideUp(0);
    selectTitle.on('click', function(){
      if(!$(this).hasClass('select__on')){
        $(this).addClass('select__on');
        selectList.slideDown();

        selectItem.on('click', function(){
          var chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectTitle.text($(this).find('span').text());

          selectList.slideUp();
          selectTitle.removeClass('select__on');
        });
        
      } else {
        $(this).removeClass('select__on');
        selectList.slideUp();
      }
    });  

  });



 });   


})(jQuery);






