
$(function(){
    pageChange('main.html');
   
    $('header a').on('click',function(){
        event.preventDefault();
        $('header a').removeClass('active');
        $(this).addClass('active');

        let pageURL = $(this).attr('href');  //해당 주소의 페이지 url를 가져온다.
        pageChange(pageURL);
    })
        function pageChange(url){
            $('main').removeClass('active');
            // console.log(pageURL);
            setTimeout(() => {
                $('main').load(url, function(){
                    $('main').addClass('active');
                });
            },600);
        };
    
    

});