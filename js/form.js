var validator;
    $(document).ready(function () {
        $.validator.setDefaults({
            debug: true

        });

        validator = $("#box-Form").validate({
            rules: {
                username: {
                    //required: true,
                    postcode : "中国",
                    required:true,
                    minlength:2,
                    maxlength:30
                  
                },
                email: {
                    required:true
                },
                "message":{  
                    required:true,
                    minlength:2,
                    maxlength:200
                }

              
            },
            messages: {
                username: {
                    required: "必须填写名字",
                    minlength: "名字最小为2位",
                    maxlength: "名字最大为30位",
                    rangelength: "名字应该在2-10位",
                    /*remote: "用户名不存在"*/
                },
                
                email:{required:"邮件地址不能为空"},

                "message":{
                    required:"留言不能为空",
                     minlength:"留言至少要2位",
                     maxlength:"留言最多200位"

                }
                
            },
             /*输入错误时输入框淡入淡出*/
            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).fadeOut().fadeIn();
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
            },
            submitHandler: function (form) {
                console.log($(form).serialize());
            }
        });
         /*自定义的名字验证方法*/
        $.validator.addMethod("postcode", function(value, element, params){
            /*var postcode = /^[0-9]{6}$/;*/
           var postcode=/^([\u4E00-\u9FA5]+|[a-zA-Z]+)$/;
            return this.optional(element) || (postcode.test(value));
        }, $.validator.format("名字应该是两位以上汉字或者字母"));

          /*自定义的email验证方法*/
         $.validator.addMethod("email", function(value, element, params){
           var email=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            return this.optional(element) || (email.test(value));
        }, $.validator.format("email格式不正确"));

        $("#check").click(function () {
            alert($("#box-Form").valid() ? "填写正确！" : "填写错误！");
        });
    });
