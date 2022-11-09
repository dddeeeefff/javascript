
$.ajax({
    url:'./data/data.xml',
    success:function(data){


        
        function dataPrint(t='all'){ //all은 값이 전달되지 않았을때 전달된다.
            let tag = '',src,subject,type;

            $(data).find('item').each(function(){
                src = $(this).find('src').text();
                subject = $(this).find('subject').text();
                type = $(this).find('type').text();
            
            if(t == type || t == 'all'){
                tag += `<figure>
                            <img src="${src}" alt="">
                            <figcaption>${subject}</figcaption>
                        </figure>`;
                }
        
            });
            $('.content').html(tag);
        }
        dataPrint();

            $('.tab button').on('click',function(){
                $('.tab button').removeClass('active');
                $(this).addClass('active');


                dataPrint(  $(this).text().toLowerCase()  );
            });
    }
});

//toLowerCase() 소문자 변경
//toUpperCase() 대문자 변경