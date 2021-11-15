const createFoot = () => {
    let foot = document.querySelector('.foot')

    foot.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png "  class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">mens</li>
                <li><a href="#" class="footer-link">t-shirt</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">Shirts</a></li>
                <li><a href="#" class="footer-link">jeasns</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">Shoes</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirt</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">Shirts</a></li>
                <li><a href="#" class="footer-link">jeasns</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">Shoes</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        
        </div>
            
        
    </div>
    <p class="footer-title">about the page</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Quas numquam libero magni illu.m,
         exercitationem maxime dolores iure cupiditate fugit
          laboriosam corporis maiores ab deleniti, quisquam
           sunt tempora ipsum, repudiandae odit.</p>

   <p class="info">for help : help.clothing@gmail.com </p>
   <p class="info">Telephone : +91 100 100 101,  +91 100 100 102</p>
   <div class="footer-social-container">
       <div>
           <a href="#" class="social-links">Terms & privacy</a>
           <a href="#" class="social-links">privacy page</a>
       </div>
       <div>
        <a href="#" class="social-links">instagram</a>
        <a href="#" class="social-links">facebook</a>
        <a href="#" class="social-links">twitter</a>
       </div>
   </div>
   <p class="footer-credit"> clothing | the best one you find</p>`;
}


createFoot();