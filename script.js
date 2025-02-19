 $(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            sname:{
                required:true,
                minlength:3
            },
            email_add:{
                required:true,
                email:true
            },
            password:{
                minlength:6

            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"First name is required",
                minlength:"min 4 chars required"
            }
            }
        
    })
})