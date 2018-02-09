import resume from '../../assets/resume.pdf'

const tmpl = `<div class="contact animated fadeIn">
  <div class="contact-logo">
    <a ui-sref="home"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508 574.2"><defs></defs><title>logo-white</title><path class="a" d="M-875.7,312.7c0,75.6-9.3,135.9-110.4,135.9a287,287,0,0,1-45-4.2V370.4a204.6,204.6,0,0,0,26.3,1.7c30.6,0,41.6-8.5,41.6-49.3V-125.6h87.5V312.7ZM-743.3-44.1h-90.9v-81.5H-564v81.5h-91.7V441.8h-87.5V-44.1Zm220.1,450.4c0,26.1-17.4,42.2-39.9,42.2s-39.5-17.1-39.5-42.2,16.1-42.2,39.5-42.2S-523.1,381.9-523.1,406.4Zm-69.3.3c0,18.8,12.1,32.8,29.1,32.8,20.1,0,29.8-12.1,29.8-33.2,0-18.1-11.7-32.8-29.8-32.8S-592.5,386.6-592.5,406.7Zm13.7,18.8V385.6h19.1c8,0,13.7,4,13.7,11.4,0,5.7-2.7,7.4-5.7,9,4,2,5,5.7,5,11.4,0,1.3,0,6,.7,8h-10.7a39.8,39.8,0,0,1-.7-8.7c0-5-1.3-6.7-6.4-6.7h-4.7v15.4h-10.4Zm11.1-23.1h5.4c3.3,0,5.4-1.3,5.4-4.4s-1.7-4.4-5.4-4.4h-5.4v8.7Z" transform="translate(1031.2 125.6)"/></svg></a>
    <p>ALL COPYRIGHT 2017</p>
  </div>
  <div class="contact-container">
    <!-- LINKS -->
    <div class="contact-links">
      <div class="contact-info">
        <div class="contact-info">
          <p class="title">CONTACT</p>
          <p>---</p>
          <p>p: +818.484.0904</p>
          <p>e: <a class="contact-line" href="mailto:joseph.tohdjojo@gmail.com">joseph.tohdjojo@gmail.com</a></p>
          <p>Brooklyn, NY</p>
          </div>
      </div>
      <div class="contact-social">
        <p class="title">FOLLOW ME</p>
        <p>---</p>
        <p><a class="contact-line" href="https://github.com/joseph-tohdjojo" target="_blank">GITHUB</a></p>
        <p><a class="contact-line" href="https://www.linkedin.com/in/josephtohdjojo" target="_blank">LINKED IN</a></p>
        <p><a class="contact-line" href="https://www.angel.co/joseph-toh-djojo" target="_blank">ANGEL.CO</a></p>
        <p><a class="contact-line" href="http://codepen.io/mrhamburger/" target="_blank">CODEPEN</a></p>
        <p><a class="contact-line" href="https://www.behance.net/josephtohdjojo" target="_blank">BEHANCE</a></p>
      </div>
    </div>
  </div>
  <div class="resume">
    <p><a class="contact-line" href="${resume}" target="_blank">RÉSUMÉ</a></p>
  </div>
</div>`

export default tmpl
