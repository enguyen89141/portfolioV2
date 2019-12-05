
function fadeInAboutMe() {
    $(".headshot, .aboutMeButton, #aboutMe").on('click', function(event) {
        fadeOutAll()
        $('.aboutMeHeadline').text('My name is Eric Nguyen')
        $('.aboutMeHeadline').fadeIn("slow")
        $('.aboutMeBio').text("I am a web developer and recent graduate of the Web\
        Development bootcamp at Thinkful (formerly known as bloc.io). I enjoy \
        coding because there are always numerous ways to arrive at a solution \
        and through time I'm striving to become more efficient in finding the \
        path of least resistance with my code.\
        I'm looking forward to working with a company with skilled developers\
        of which are both better skilled and less skilled than myself. \
        I believe it's important to learn from others and help others learn\
        in order to gain a well rounded understanding of anything you do.\
        It's also very gratifying after working so hard on a problem and \
        finally arriving at a solution. (Like beating a Dark Souls boss)")
        $('.aboutMeBio').append("<p><img class='headshot2' src='./images/me2.jpg' alt='Additional picture of Eric'></p>")
        $('.aboutMeBio').fadeIn("slow")
        
})}

function fadeInProjects() {
    $('.projectsButton, #projects').on('click', function(event) {
        fadeOutAll()
        $('.projectHeadline').text('PokerQuiz')
        $('.projectHeadline').fadeIn("slow")
        $('.projectInfo').text("This application utilizes HTML, CSS, and jQuery to test the users knowledge about basic \
        Texas Hold'em whilst keeping a running score count of the questions they've answered \
        correctly as well as informing the user which question they're on. This was my first project as a \
        student of Bloc.io's Web Development BootCamp.")
        $('.projectInfo').append("<p><a href='https://enguyen89141.github.io/quizApp/' target='_blank'>\
        <img class='projectIcons' role='presentation' src='./images/pokerQuizIcon.png'alt='Diamond royal flush'></p> \
        <p><a href='https://enguyen89141.github.io/quizApp/' target='_blank'>Link to App</a></p>\
        <p><a href='https://github.com/enguyen89141/quizApp' target='_blank'>Link to GitHub Repository</a></p> \
        </a></p><div class='thumbnails'><a class='thumbnail'><img src='./images/poker1.png' alt='\
        screenshot of poker quiz'></a><a class='thumbnail'><img src='./images/poker2.png' alt='\
        screenshot of poker quiz'></a><a class='thumbnail'><img src='./images/poker3.png' alt='\
        screenshot of poker quiz'></a><a class='thumbnail'><img src='./images/poker4.png' alt='\
        screenshot of poker quiz'></a></div>")
        $('.projectInfo').fadeIn("slow")
        $('.projectIcons').fadeIn("slow")
        $('.projectHeadline2').text('BetterMedic')
        $('.projectHeadline2').fadeIn("slow")
        $('.projectInfo2').text("This application utilizes HTML, CSS, and jQuery to assist in medical diagnosis of the \
        user and provide them with doctors within their surrounding area. This project was intended to demonstrate \
        my knowledge and capability to work with APIs and was our 1st 'capstone' in Bloc.io's bootcamp.")
        $('.projectInfo2').append("<p><a href='https://enguyen89141.github.io/betterMedic/' target='_blank'>\
        <img class='projectIcons2' role='presentation' src='./images/desktop1.png'alt='Desktop home page'></p> \
        <p><a href='https://enguyen89141.github.io/betterMedic/' target='_blank'>Link to App</a></p>\
        <p><a href='https://github.com/enguyen89141/betterMedic' target='_blank'>Link to GitHub Repository</a></p> \
        </a></p><div class='thumbnails2'><a class='thumbnail2'><img src='./images/desktop2.png' alt='\
        screenshot of better medic'></a><a class='thumbnail2'><img src='./images/desktop3.png' alt='\
        screenshot of better medic'></a><a class='thumbnail2'><img src='./images/mobile.png' alt='\
        screenshot of better medic'></a><a class='thumbnail2'><img src='./images/mobile1.png' alt='\
        screenshot of better medic'></a></div>")
        $('.projectInfo2').fadeIn("slow")
        $('.projectIcons2').fadeIn("slow")
        handleThumbnailClicks();
    })
}

function fadeOutAll() {
    $('.headshot2').fadeOut("fast")
    $('.aboutMeBio').fadeOut("fast")
    $('.aboutMeHeadline').fadeOut("fast")
    $('.headshot').fadeOut("fast")
    $('.homeHeadline').fadeOut("fast")
    $('.projectInfo').fadeOut("fast")
    $('.projectHeadline').fadeOut("fast")
    $('.contactHeadline').fadeOut("fast")
    $('.contactInfo').fadeOut("fast")
    $('.contactInfo img').fadeOut("fast")
}

function fadeInContact() {
    $('.contactButton, #contact').on('click', function(event) {
        fadeOutAll();
        $('.contactHeadline').text('Feel free to reach out!')
        $('.contactHeadline').fadeIn("slow")
        $('.contactInfo').append("<a href='https://www.linkedin.com/in/eric-nguyen-9b013b40' target='_blank'>\
        <img src='./images/linkedInIcon.png' alt='a link to Eric Nguyen's LinkedIn profile'></a>\
        <a href='https://github.com/enguyen89141' target='_blank'><img src='./images/gitHubIcon.png'\
        alt='a link to Eric Nguyen's GitHub profile'></a>\
        <a href='mailto: enguyen89141@gmail.com'><img src='./images/emailIcon.png' alt='link to email\
        Eric Nguyen'></a>")
        $('.contactInfo').fadeIn("slow")
    })
}

function handleThumbnailClicks() {
    $('.thumbnail').on('click', function(event) {
       const imgSrc = $(this).find('img').attr('src');  
       const imgAlt = $(this).find('img').attr('alt');
      $('.projectIcons').attr('src', imgSrc).attr('alt', imgAlt);
    });
    $('.thumbnail2').on('click', function(event) {
        const imgSrc = $(this).find('img').attr('src');  
        const imgAlt = $(this).find('img').attr('alt');
       $('.projectIcons2').attr('src', imgSrc).attr('alt', imgAlt);
     });
  }
function portfolioStart() {
    fadeInContact();
    fadeInProjects();
    fadeInAboutMe();    
}

portfolioStart();