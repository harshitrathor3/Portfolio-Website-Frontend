(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

/* Start - Skills */
function filterSkills() {
  const searchInput = document.getElementById("skill-search").value.toLowerCase();
  const skills = document.querySelectorAll("#skill-list .skill-label");

  skills.forEach(skill => {
      const skillText = skill.innerText.toLowerCase();
      if (skillText.includes(searchInput)) {
          skill.style.display = "inline-block";
      } else {
          skill.style.display = "none";
      }
  });
}

function filterByDomain(domain) {
  const skills = document.querySelectorAll("#skill-list .skill-label");

  skills.forEach(skill => {
      const skillDomain = skill.getAttribute("data-domain");

      if (domain === "all" || skillDomain === domain) {
          skill.style.display = "inline-block";
      } else {
          skill.style.display = "none";
      }
  });
}

function highlightButton(buttonElement) {
  // Get all buttons with the btn-group class
  const buttons = document.querySelectorAll(".btn-group .btn");

  // Reset all buttons to light yellow
  buttons.forEach((button) => {
    button.classList.remove("btn-warning");
    button.classList.add("btn-light-yellow");
  });

  // Set the clicked button to btn-warning
  buttonElement.classList.remove("btn-light-yellow");
  buttonElement.classList.add("btn-warning");
}
/* End - Skills */

/* Start - Resume */
$(document).ready(function() {
  // Star click event
  $('.star').on('click', function() {
      var rating = $(this).data('rating');
      $('.star').each(function(index) {
          if (index < rating) {
              $(this).addClass('filled').html('&#9733;'); // Filled star
          } else {
              $(this).removeClass('filled').html('&#9734;'); // Empty star
          }
      });
  });

  // Button click event
  $('#rateButton').on('click', function() {
      var selectedRating = $('.star.filled').length;
      alert('You rated the resume ' + selectedRating + ' out of 5');
  });
});
/* End - Resume */
