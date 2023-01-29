$( document ).ready(function() {





    $(function () {
        $("#accordion").accordion({
            collapsible: true,
        });
    }); /*Аккордеон*/


    new WOW({
            animateClass: 'animate__animated',
        }
    ).init();

    let name = $('#exampleInputName');
    let surname = $('#exampleInputSurname');
    let phone = $('#exampleInputPhone');
    let country = $('#exampleInputCountry');
    let index = $('#exampleInputIndex');
    let address = $('#exampleInputAddress');
    let btnForm = $('#btn-form');


    document.getElementById('exampleInputIndex').onkeypress = (e) => {
        let resultIndex = e.key;

        if (isNaN(parseInt(resultIndex))) {
            e.preventDefault();
        }
    }

    btnForm.click(function () {
        if (!name.val()) {
            alert("Заполните поле Имя.");
            return
        }
        if (!surname.val()) {
            alert("Заполните поле Фамилия.");
            return
        }
        if (!phone.val()) {
            alert("Заполните поле Телефон.");
            return
        }
        if (!country.val()) {
            alert("Заполните поле Страна.");
            return
        }
        if (!index.val()) {
            alert("Заполните поле Индекс.");
            return
        }
        if (index.val().length < 6 || index.val().length > 6) {
            alert("Ошибка: Индекс должен содержать 6 символов.");
            return
        }
        if (!address.val()) {
            alert("Заполните поле Адрес.");
            return
        }

        $('.open-end-order').magnificPopup({
            type: 'inline',
        });

          $('#form').css('display', 'none');


          $('#end-order').css(
              {
                  display: 'grid'
              }
          )

    });


$('#end-order__btn').click(() => {
    $('#end-order').css(
              {
                  display: 'none'
              }
          )
});


    $('.product__image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        }
    )
})




