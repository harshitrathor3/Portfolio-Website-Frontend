import { fetchTestimonials } from './api/testimonials.js';




// Alert on Homepage - START
window.onload = function() {
    alert("Some features under development, Explore rest!!");
};
// Alert on Homepage - END


// Coming Soon alter box - START
function comingSoonAlert() {
    alert("This feature is coming soon. Stay tuned!!");
}
// Coming Soon alter box - END


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
// Part 1 - Resume pdf and star rating with button
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

// Part 2 - Remaining things
$(document).ready(function() {
  // Star click event for relevance and "Should Hire?"
  $('.jd-star').on('click', function() {
      var rating = $(this).data('rating');
      var parent = $(this).parent();
      parent.find('.jd-star').each(function(index) {
          if (index < rating) {
              $(this).addClass('filled').html('&#9733;'); // Filled star
          } else {
              $(this).removeClass('filled').html('&#9734;'); // Empty star
          }
      });
  });

  // Button click event for Check Match
  $('.jd-check-match').on('click', function() {
      alert('Check Match button clicked');
  });
});
/* End - Resume */


$(document).ready(function () {
    fetchTestimonials(function (err, testimonials) {
      if (err) {
        console.error('Failed to fetch testimonials:', err);
        return;
      }
  
      let carouselInner = $('#testimonial-carousel-inner');
      let isActive = true;
  
      testimonials.forEach((testimonial) => {
        let carouselItem = `<div class="item carousel-item ${isActive ? 'active' : ''} text-center">
                              <div class="img-box">
                                <img src="${testimonial.image_url}" alt="Testimonial Image" class="img-fluid testimonial-img" />
                              </div>
                              <p class="testimonial">${testimonial.feedback}</p>
                              <p class="overview"><b>${testimonial.name}</b></p>
                              <p class="position">${testimonial.designation}</p>
                              <p class="company">${testimonial.company}</p>
                            </div>`;
        carouselInner.append(carouselItem);
        isActive = false; // Only the first item should be active
      });
  
      $('#myCarousel').carousel(); // Reinitialize carousel
    });
  });

export { filterSkills, filterByDomain, highlightButton, comingSoonAlert };