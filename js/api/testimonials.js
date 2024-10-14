// import { BASE_URL } from './constant';

export function fetchTestimonials(callback) {
    // console.log(`Fetching testimonials from ${BASE_URL}/home/get-testomonials`);
    $.ajax({
      url: `http://127.0.0.1:8000/home/get-testomonials`,
      method: 'GET',
      success: function (response) {
        console.log('Response received:', response);
        if (response && response.testimonials_list) {
          callback(null, response.testimonials_list);
        } else {
          callback(new Error('Invalid response format'));
        }
      },
      error: function (err) {
        console.error('Error occurred:', err);
        callback(err);
      }
    });
}