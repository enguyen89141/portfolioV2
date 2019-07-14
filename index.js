function fadeOutHome() {
    $(".headshot, .aboutMeButton").on('click', function(event) {
         $('.headshot').fadeOut("fast")
        $('.homeHeadline').fadeTo("slow", 0,  function() {
            $('.homeHeadline').css('display', 'none')
            $('.aboutMeHeadline').text('My name is Eric Nguyen')
            $('.aboutMeHeadline').fadeIn("slow")
            $('.aboutMeBio').append("<p>I am a web developer and recent graduate of the Web\
            Development bootcamp at Thinkful (formerly known as bloc.io). I enjoy \
            coding because there are always numerous ways to arrive at a solution \
            and through time I'm striving to become more efficient in finding the \
            path of least resistance with my code.\
            It's also very gratifying after working so hard on a problem and \
            finally arriving at a solution. (Like beating a Dark Souls boss)</p>\
            <img class='headshot2' src='./images/me2.jpg' alt='Additional picture of Eric'>")
            $('.aboutMeBio').fadeIn("slow")
        })
})}
fadeOutHome();