
function fadeInAboutMe() {
    $(".headshot, .aboutMeButton").on('click', function(event) {
        fadeOutAll()
        $('.aboutMeHeadline').text('My name is Eric Nguyen')
        $('.aboutMeHeadline').fadeIn("slow")
        $('.aboutMeBio').text("I am a web developer and recent graduate of the Web\
        Development bootcamp at Thinkful (formerly known as bloc.io). I enjoy \
        coding because there are always numerous ways to arrive at a solution \
        and through time I'm striving to become more efficient in finding the \
        path of least resistance with my code.\
        It's also very gratifying after working so hard on a problem and \
        finally arriving at a solution. (Like beating a Dark Souls boss)")
        $('.aboutMeBio').append("<p><img class='headshot2' src='./images/me2.jpg' alt='Additional picture of Eric'></p>")
        $('.aboutMeBio').fadeIn("slow")
        
})}

function fadeInProjects() {
    $('.projectsButton').on('click', function(event) {
        fadeOutAll()
        $('.projectHeadline').text('PokerQuiz')
        $('.projectHeadline').fadeIn("slow")
        $('.projectInfo').text("This application utilizes HTML, CSS, and jQuery to test the users knowledge about basic \
        Texas Hold'em whilst keeping a running score count of the questions they've answered \
        correcty as well as informing the user which question they're on.")
        $('.projectInfo').append("<p><a href='https://enguyen89141.github.io/quizApp/' target='_blank'>\
        <img class='projectIcons' src='./images/pokerQuizIcon.png' \
        alt='Diamond royal flush'></a></p>")
        $('.projectInfo').fadeIn("slow")
        $('.projectIcons').fadeIn("slow")
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
    $('.contactButton').on('click', function(event) {
        fadeOutAll();
        $('.contactHeadline').text('Feel free to reach out!')
        $('.contactHeadline').fadeIn("slow")
        $('.contactInfo').append("<a href='https://www.linkedin.com/in/eric-nguyen-9b013b40' target='_blank'>\
        <img src='./images/linkedInIcon.png' alt='a link to Eric Nguyen's LinkedIn profile'></a>\
        <a href='https://github.com/enguyen89141' target='_blank'><img src='./images/gitHubIcon.png'\
        alt='a link to Eric Nguyen's GitHub profile'></a><a href='tel:702-538-4989'><img src\
        ='./images/phoneIcon.png' alt='link to call Eric Nguyen'></a>\
        <a href='mailto: enguyen89141@gmail.com'><img src='./images/emailIcon.png' alt='link to email\
        Eric Nguyen'></a>")
        $('.contactInfo').fadeIn("slow")
    })
}
fadeInContact();
fadeInProjects();
fadeInAboutMe();