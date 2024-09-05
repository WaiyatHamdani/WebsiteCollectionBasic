const info = document.getElementById('rootPhoneEmail');
const element = document.createElement('div');
element.textContent = '203-492-9688 | waiyat.hamdani@gmail.com';
info.appendChild(element);




const aboutme = document.getElementById('aboutMe');
const elementaboutme = document.createElement('p');
elementaboutme.textContent = 'Waiyat is a US Army veteran and a graduate of Southern Connecticut State University (SCSU) with a bachelor’s'+
                            ' degree in Computer Science. While in college, he completed several development projects resulting in fully'+
                            ' functional prototypes. For his graduation project, he and his teammate were tasked with building a user-friendly'+
                            ' application to promote the reuse on campus of common student possessions. Waiyat used Flask Python, SQL, and Google'+
                            ' Cloud Platform to complete his tasks on the application. This project taught Waiyat to appreciate the importance of'+
                            ' being ready to make adjustments in an application based on customer’s needs. Waiyat is familiar with the principles' +
                            'of object-oriented programming as well as machine learning. For a machine learning project, he used Python’s Sklearn and'+
                            ' matplotlib to correctly sort over a hundred random Zoo animals based on their species. Waiyat’s sorting solution attained an accuracy of 97%.';
aboutme.appendChild(elementaboutme);



(function ($) {
    "use strict";


    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


})(jQuery);


    const inforesume = document.getElementById('rootPhoneEmailResume');
    const elementresume = document.createElement('div');
    elementresume.textContent = '203-492-9688 | waiyat.hamdani@gmail.com';
    info.appendChild(elementresume);

    /*

      ──────╔╗────╔╗
      ╔╦╦╦═╗╠╬╦╦═╗║╚╗
      ║║║║╬╚╣║║║╬╚╣╔╣
      ╚══╩══╩╬╗╠══╩═╝
      ───────╚═╝
  */
