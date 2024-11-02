// standard faq section start
 function toggleFaq(element) {
     const faqItem = element.parentElement;
     const answer = faqItem.querySelector('.faq-answer');

     // Toggle the active class for rotation and expansion
     faqItem.classList.toggle('active');

     // Adjust the max-height to show or hide the answer
     if (faqItem.classList.contains('active')) {
         answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
         answer.style.maxHeight = 0;
     }
}
// standard faq section end








// pricing section start
function togglePricing() {
    const standardPrice = document.getElementById("standardPrice");
    const premiumPrice = document.getElementById("premiumPrice");

    if (document.getElementById("toggleSwitch").checked) {
        // Yearly prices
        standardPrice.innerHTML = "$0.00<span>/Yr</span>";
        premiumPrice.innerHTML = "$99.99<span>/Yr</span>";
    } else {
        // Monthly prices
        standardPrice.innerHTML = "$0.00<span>/Mo</span>";
        premiumPrice.innerHTML = "$9.99<span>/3 Mo</span>";
    }
}

function togglebtn(element) {
  const btn = element.parentElement;
  const answer = btn.querySelector('.text-details');

  btn.classList.toggle('active');

  if (btn.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
 } else {
      answer.style.maxHeight = 0;
  }
}
// pricing section end













// testimonial section start
// jQuery(document).ready(function($) {
//     "use strict";
//     //  TESTIMONIALS CAROUSEL HOOK
//     $('#customers-testimonials').owlCarousel({
//         loop: true,
//         center: true,
//         items: 3,
//         margin: 0,
//         autoplay: true,
//         dots:true,
//         autoplayTimeout: 8500,
//         smartSpeed: 450,
//         responsive: {
//           0: {
//             items: 1
//           },
//           768: {
//             items: 2
//           },
//           1170: {
//             items: 3
//           }
//         }
//     });
// });
// testimonial section end