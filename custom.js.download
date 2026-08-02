jQuery(document).ready(function($) {
  $('#_enable_readonly').each(function(){ this.checked = true; });
});

function submitForm() {
  var frm = document.getElementsByClassName('register')[0];
  frm.submit(); // Submit the form
  frm.reset();  // Reset all form data
  return false; // Prevent page refresh
}

// document.addEventListener("DOMContentLoaded", function () {
//   function updateVideoWrapperHeight() {
//       const wrapper = document.querySelector('.video-wrapper');
//       const poster = document.getElementById('video-poster');
//       const iframe = document.getElementById('vimeo-video');

//       if (!wrapper || !poster || !iframe) {
//           console.log('Elements not ready');
//           return;
//       }

//       if (iframe.style.display === 'none') {
//           wrapper.style.paddingBottom = '55%';
//       } else if (poster.style.display === 'none') {
//           wrapper.style.paddingBottom = '32.81%';
//       }
//   }
//   updateVideoWrapperHeight();
//   const poster = document.getElementById('video-poster');
//   const iframe = document.getElementById('vimeo-video');
//   if (poster && iframe) {
//       const observer = new MutationObserver(updateVideoWrapperHeight);

//       observer.observe(poster, { attributes: true });
//       observer.observe(iframe, { attributes: true });
//   }
// });
