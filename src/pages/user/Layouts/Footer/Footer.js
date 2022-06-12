import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
function Footer(props) {
    return (
       
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-12 col-6">
                <h6>About</h6>
                <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
              </div>
    
              <div class="col-6 col-3">
                <h6>Categories</h6>
                <ul class="footer-links">
                  <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                  <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                  <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                  <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                  <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                  <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                </ul>
              </div>
    
              <div class="col-6 col-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li><a href="http://scanfcode.com/about/">About Us</a></li>
                  <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                  <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                </ul>
              </div>
            </div>
            <hr/>
          </div>
          <div class="container d-flex justify-content-center ">
            <div class="row d-flex justify-content-center">
              <div class="col-8 col-6 col-12 d-flex justify-content-center">
                <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
             <a href="#">Scanfcode</a>.
                </p>
              </div>
    
              <div class="col-4 col-6 col-12 d-flex justify-content-center flex-row mt-3">
                <ul class="social-icons">
                  <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
                </ul>
              </div>
            </div>
          </div>
    </footer>
    );
}

export default Footer;