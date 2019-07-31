    function navBtnPopout () {
        let navBtn = document.getElementById('navigation-btn');
        let navPopout = document.getElementById('navigation-popout');
        navBtn.onclick = function () { 
            if (navPopout.style.opacity == 1) {
                navPopout.className = 'nav-transition';
                navPopout.style.opacity = 0;
                navPopout.style.visibility = 'hidden';
            } else {
                navPopout.className = 'nav-transition';
                navPopout.style.opacity = 1;
                navPopout.style.visibility = 'visible';
            }
        }        
    }
    navBtnPopout();
    function openPositionDescription (pos) {
        pos.style.opacity = 1;
        pos.style.visibility = 'visible';
    }
    function closePositionDescription (desc) {
        desc.style.opacity = 0;
        desc.style.visibility = 'hidden';
    }
    function showStepsContent (step) {     
        let register = document.getElementById('register');
        let interview = document.getElementById('interview');
        let contracts = document.getElementById('contracts');
        let travel = document.getElementById('travel');
        
        function showOnOff (reg,int,con,trav) {
            register.style.opacity = reg;
            interview.style.opacity = int;
            contracts.style.opacity = con;
            travel.style.opacity = trav;
    
            register.style.WebkitTransition = 'all 1s';
            register.style.msTransition = 'all 1s';
            interview.style.WebkitTransition = 'all 1s';
            interview.style.msTransition = 'all 1s';
            contracts.style.WebkitTransition = 'all 1s';
            contracts.style.msTransition = 'all 1s';
            travel.style.WebkitTransition = 'all 1s';
            travel.style.msTransition = 'all 1s';
        }
    
        if (step.getAttribute('id') == 'register') showOnOff(1,0,0,0);
        if (step.getAttribute('id') == 'interview') showOnOff(0,1,0,0);
        if (step.getAttribute('id') == 'contracts') showOnOff(0,0,1,0);
        if (step.getAttribute('id') == 'travel') showOnOff(0,0,0,1);      
    }
    function hideStepsContent(step) {
        step.style.opacity = 0;
    }
    function openTestimonialDescription (test) {
        test.style.opacity = 1;
        test.style.visibility = 'visible';
    }
    function closeTestimonialDescription (testDesc) {
        testDesc.style.opacity = 0;
        testDesc.style.visibility = 'hidden';
    }
    
    let slide = 1;
    nextSlide(slide);
    function nextSlide (n) {
        let gallSlides = document.getElementsByClassName('gallerySlides');
        let currentImgSrc = gallSlides[0].getAttribute('src');
        let imgNum = currentImgSrc.slice(8,14);
        let nextImg = '';
        let imgUrl = '';    
        
        function imageAttributes () {
            imgUrl = 'img/tke-' + nextImg + '.jpg';
            gallSlides[0].setAttribute('src',imgUrl);
            
            function setAttributes(alt,title) {
                gallSlides[0].setAttribute('alt',alt);
                gallSlides[0].setAttribute('title',title);
            }        
            if (nextImg < 8) {
                setAttributes('school','School');
            } else {
                setAttributes('chengdu-china','Chengdu,China');
            }    
        }
        
        if (n > gallSlides.length) {   
            slide = 1;
            function forwardSlide (a,b) {        
                return parseInt(a) + b;
            }        
            nextImg = forwardSlide(imgNum,slide);
            if (nextImg == '19') { // # of last image + 1
                nextImg = 1;
            }
            imageAttributes();
        }
    
        if (n < gallSlides.length) {   
            slide = 1;
            function backSlide (a,b) {        
                return parseInt(a) - b;
            }        
            nextImg = backSlide(imgNum,slide);
            if (nextImg == '0') {
                nextImg = 18; // # of last image
            }
            imageAttributes();
        }    
    }
    function runGallerySlider (n) {
        nextSlide(slide += n);
    }
    
    let slideVideo = 1;
    function nextVideoSlide (n) { 
        let vidSlides = document.getElementsByClassName('videoSlides');
        
        if (n > vidSlides.length) slideVideo = 1;
        if (n < 1) slideVideo = vidSlides.length;
        
        for (let i = 0; i < vidSlides.length; i++) {
            let imgLink = '';
            imgLink += i + 1;
            
            function iframeImgSwitch () {
                let frame = document.getElementsByTagName('iframe');
                for (let f = 0; f < frame.length; f++) {
                    if (vidSlides[i].contains(frame[f])) {
                        vidSlides[i].removeChild(frame[f]);
                        vidSlides[i].innerHTML = '<img class="videoImage" src="img/vid-' + imgLink + '.jpg" width="560" height="315">';
                    }
                }              
            }
            iframeImgSwitch();
            
            vidSlides[i].onclick = function () {
                vidSlides[i].classList.add('video-spacing');
                let link = this.getAttribute('href');
                vidSlides[i].innerHTML = '<iframe width="560" height="315" src="' + link + '?autoplay=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';                
                return false;              
            }
            vidSlides[i].style.display = 'none';
        }
        vidSlides[slideVideo - 1].style.display = 'block';  
    }
    nextVideoSlide(slideVideo);
    function runVideoSlider (n) {
        nextVideoSlide(slideVideo += n);
    }
    
    function weChatContact (e) {
        document.getElementById('weChatQR').style.display = 'block';
    }
    function closeQR () {
        document.getElementById('weChatQR').style.display = 'none';
    }