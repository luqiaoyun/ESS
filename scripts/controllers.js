//专门管理控制器的模块
var appController=angular.module("appController",[]);

//定义IndexController控制器
appController.controller("IndexController",["$scope","$http",function($scope,$http){
    //测试
    $scope.notices=[{
        title:"考研讲座武安的快递费附近四分搜索框萨克斯",
        content:"hjfjfjkfkfklgalffnfslkhfseirfof;afjfl;jmcffmjcfaflafa",
        author:"万给",
        date:"2032-1-2",
    },{title:"考研讲座武安的快递费附近四分搜索框萨克斯",
        author:"万给",
        content:"sdyfhhojvshfjfhkfhocjosejfpofjfvsjvjnxogjnkvsifvlvjslfcjsofjnvksvnk",
        date:"2032-1-2",
    }];
    //获取公告的信息
    $http({
        url:"",
        method:"post",
        data:"",
    }).success(function(info){
        //获取公告的信息
        //$scope.data=info;
    })
    //定义展示内容的方法
    $scope.show=function(title,content,author,date){
        $scope.title=title;
        $scope.content=content;
        $scope.author=author;
        $scope.date=date;
        location.href="#/index/show";
    };
    //定义删除公告的方法
    $scope.deleteN=function(title){
        $http({
            url:"",
            method:"post",
            data:{
                title:title,
            }
        }).success(function(info){
            if(info==001){
                $scope.msg="删除成功";
            }else{
                $scope.msg="删除失败";
            }
        })
    };
    $scope.updateN=function(){
        $http({
            url:'',
            method:"post",
            data:{
                oldTitle:$scope.title,
                newTitle:$scope.Ntitle,
                Nauthor:$scope.Nauthor,
                newDate:$scope.Ndate,
                newContent:$scope.Ncontent,
            }
        }).success(function(info){
             if(info==001){
                $scope.msg="修改成功";
            }else{
                $scope.msg="修改失败";
            }
        })


    }
}]);



//定义majorController控制器
appController.controller("majorController",["$scope","$http",function($scope,$http){
    $scope.type=sessionStorage.getItem("type");
    console.log($scope.type);
   if(parseInt($scope.type)==0){
       //如果是学生获取学生专业的信息
       //测试
       $scope.data={
           code:"01",
           name:"信息管理与信息系统",
           goal:"创造美好的世界",
           description:"接地气 高大上收到了上到几点的生死看淡"
       };
       //根据学生的学号来获取所在专业的信息
    $http({
        url:"",
        method:"post",
        data:sessionStorage.getItem("suid")
    }).success(function(info){
        //$scope.data=info

    })
    }

}]);
//定义coursesController控制器
appController.controller("coursesController",["$scope","$http","$filter",function($scope,$http,$filter){
   
    //测试
     $scope.data=[{
         name:"信息管理",
         units:2,
         date:"2012-03-2",
       
        },
         {
         name:"信息计划",
         units:3,
         date:"2017-05-2",
        
         }];
         $scope.type=sessionStorage.getItem("type");

    $scope.Year=parseInt($filter("date")(new Date(),"yyyy"));
       

    //获取学生所选的课的课程信息
    $http({
        url:"",
        method:"post",
        data:{
            code:02,
         }
    }).success(function(info){
        //$scope.data=info;

        });

}]);

//定义scoreController控制器
appController.controller("scoreController",["$scope","$http",function($scope,$http){
    //获取登录用户的类型type
    $scope.type= sessionStorage.getItem("type");
    //如果登录的是学生，则请求获得学生全部成绩
    //如果是老师就不发送请求
    if($scope.type=="0"){
        $http({
        url:"",
        method:"post",
        data:sessionStorage.getItem("suid"),
        }).success(function(info){
            $scope.data=info;
        })
    }
    
}]);


//定义infController控制器
appController.controller("infController",["$scope","$http",function($scope,$http){
    //获取用户类型
    $scope.type=sessionStorage.getItem("type");
    //用post方式获取用户的信息
    //测试
    $scope.data={
        suid:142008080221,
        name:"李四",
        birth_day:1996,
        email:33333,
        city:"南京",
        address:"sjdhdhjd",
        major:"asaa",
    };
    $http({
        url:"",
        method:"post",
        data:{
            code:00,
        }
           
    }).success(function(info){
        console.log(info);
        //$scope.data=info;
    
    })


}]);




//定义登录页面的控制器
appController.controller("loginController",["$scope","$http",function($scope,$http){

    //存储用户名和密码
    sessionStorage.setItem("suid",$scope.suid);
    sessionStorage.setItem("password",$scope.password);
    //验证登录信息并获取登录用户的类型
    $scope.login=function(){
        
        $http({
            url:"",
            method:"post",
            data:{
                suid:$scope.suid,
                password:$scope.password,
            }
        }).success(function(info){
           var status=1
            if( status==2){
               alert("用户名或密码错误");
            }else{
                sessionStorage.setItem("type",status);
                location.href="main.html"  
            }
        });
    }


}]);
//定义老师界面查询专业信息的控制器
appController.controller("major_searchController",["$scope","$http",function($scope,$http){
       //根据专业代码和专业名称查询
        //测试
    $scope.data={
        code:"01",
        name:"信息管理与信息系统",
        goal:"创造美好的世界",
        description:"接地气 高大上收到了上到几点的生死看淡"
    };
    $http({
        url:"",
        method:"post",
        data:{
            code:14,
            name:$scope.name,
            codes:$scope.code
        }
    }).success(function(info){
            //$scope.data=info;
    })

}])
//定义查询全部专业信息的控制器
appController.controller("major_currentController",["$scope","$http",function($scope,$http){
       
        //测试
    $scope.data=[{
        code:"01",
        name:"信息管理与信息系统",
        goal:"创造美好的世界",
        description:"接地气 高大上收到了上到几点的生死看淡"
    }];
    $http({
        url:"",
        method:"post",
        data:{
            code:15,   
        }
    }).success(function(info){
            //$scope.data=info;
    })

}])





//根据输入的课程名或课序号查询课程信息
appController.controller("courses_search_showController",["$scope","$http",function($scope,$http){
    //获取登录用户的类型type
    //测试
     $scope.data={
         code:"0332",
         name:"信息管理",
        units:2,
       
     };
   $http({
    url:"",
    method:"post",
    data:{
        code:$scope.code,
        name:$scope.name,
    }
   }).success(function(info){
   // $scope.data=info;
   })
}]);





appController.controller("courses_search_showController",["$scope","$http",function($scope,$http){
    //获取登录用户的类型type
    //测试
     $scope.data={
         code:"0332",
         name:"信息管理",
        units:2,
        time:"十八周",
        address:"致用1123",
        teacher:"韩老师",
     };
   $http({
    url:"",
    method:"post",
    data:{
        code:10,
        code:$scope.code,
        name:$scope.name,
    }
   }).success(function(info){
   // $scope.data=info;
   })
}]);






//定义学生成绩的控制器
appController.controller("scoreController",["$scope","$http","$filter",function($scope,$http,$filter){
    //获取登录用户的类型type
    //测试
     $scope.type=sessionStorage.getItem("type");
     $scope.data=[{
         name:"信息管理",
         units:2,
         date:"2012-03-2",
         grade:60,
        },
         {
         name:"信息计划",
         units:3,
         date:"2017-05-2",
         grade:30,
         }];
         var time="2017-5".substr(0,4);
         //获取系统时间的年份和月份
         $scope.Year=parseInt($filter("date")(new Date(),"yyyy"));
   $http({
    url:"",
    method:"post",
    data:{
        name:sessionStorage.getItem,
    }
   }).success(function(info){
   // $scope.data=info;
   })

}]);


//定义学生选课控制器
appController.controller("courses_selectController",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
    //获取登录用户的类型type
    //测试
     $scope.type=sessionStorage.getItem("type");
     $scope.data=[{
         code:"02929",
         name:"信息管理",
         units:2,
         teacher:"李老师"
        },
         {
         code:"0243",
         name:"信息计划",
         units:3,
         teacher:"李老师"
         }];
         //测试
         $scope.length=2;
         
    //获取可选的可选的课程信息    
    $http({
        url:"",
        method:"post",    
    }).success(function(info){
        //获取总共的课程的数量
        //$scope.length=info.length;
        // $scope.data=info;
    })

    //定义学生提交选课的方法
    //初始化
    var a=[2];
    var courseCode=[];
    for(var i=0;i<2;i++){
        a[i]=0;
    }
    var j=0;
    $scope.index=a;
    $scope.test=function(){
        for(var i=0;i<2;i++){
            if($scope.index[i]==1){
                courseCode[j]=$scope.data[i].code;
                j++;
            }
        }
        $http({
            url:"",
            methode:"post",
            data:{
            courseCode:courseCode,
            }
        }).success(function(info){
            if(info==001){
            $scope.msg="选课成功";
        }else{
            $scope.msg="选课失败";
        }
    })
     
    

   
   }

}]);


//定义老师录入成绩时获取课程和学生信息的控制器
appController.controller("score_inputController",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
    //获取登录用户的类型type
    //测试
     $scope.type=sessionStorage.getItem("type");
     $scope.courses=[{
         code:"02929",
         name:"信息管理",
         units:2, 
        },
         {
         code:"0243",
         name:"信息计划",
         units:3,
         }];
         
    //获取老师所交的课程  
   $http({
    url:"",
    method:"post",    
   }).success(function(info){
       //$scope.data=info;
   });
   //点击录入成绩后获取对应课程的学生信息并跳转
   $scope.input=function(code,name){
    $rootScope.courseName=name;
     $rootScope.courseCode=code;
    //测试
    $scope.students=[{suid:22222,name:"lu"},{suid:111,name:"wang"}]
    $scope.length=2;
    $http({
        url:"",
        method:"post",
        data:{
            code:code,
        }
    }).success(function(info){
        //记录选这门课的学生数量
        //$scope.length=info.lenght;
        //$scope.student=info;
    })
    location.href="#/score/input/show"
   }
    
   //定义录入成绩提交的方法
   $scope.submit=function(){
     $scope.msg="录入成功"
       var suid=[];//定义对应学生相对应的成绩的对象数组
       var score=[];
       var date=$filter("date")(new Date(),"yy-MM-dd")
       for(var i=0;i<$scope.length;i++){
        suid[i]=$scope.students[i].suid
        score[i]=$scope.scores[i];
       };
      
       $http({
        url:"",
        method:"post",
         data:{
             code:06,
             courseCode:$rootScope.courseCode,
             suid:suid,
             grade:score,
             date:date,
             } 
       }).success(function(info){
                // if(info==001){
                //     $scope.msg="录入成功";
                // }else{
                //     $scope.msg="录入失败";
                // }
            
       })
       

        
        
  }

  //单击修改按钮时触发的方法
  $scope.update=function(code,name){
    //记录修改的是哪门课的成绩
    $rootScope.courseName=name;
    $rootScope.courseCode=code;
    //测试
    $scope.students_update=[{suid:22222,name:"lu",grade:96},{suid:111,name:"wang",grade:78}]
    $scope.length=2;
    $http({
        url:"",
        method:"post",
        data:{
            code:code,
        }
    }).success(function(info){
        //记录选这门课的学生数量
        //$scope.length=info.lenght;
        //$scope.student=info;
    })
    location.href="#/score/input/update"
   }




   //定义修改成绩提交的方法
   $scope.submit_update=function(suid,grade){
    
       var date=$filter("date")(new Date(),"yy-MM-dd");
       $scope.msg="修改成功";
       $http({
        url:"",
        method:"post",
         data:{
             code:06,
             courseCode:$rootScope.courseCode,
             suid:suid,
             grade:grade,
             date:date,
             } 
       }).success(function(info){
                // if(info==001){
                //     $scope.msg="修改成功";
                // }else{
                //     $scope.msg="修改失败";
                // }
            
       })
       

        
        
  }




}]);

//定义老师查询成绩控制器
appController.controller("score_search_showController",["$scope","$http","$filter",function($scope,$http,$filter){
    //获取登录用户的类型type
    //测试
     $scope.type=sessionStorage.getItem("type");
     $scope.data=[{
         code:"02929",
         name:"信息管理",
         units:2,
         grade:90
        },
         {
         code:"0243",
         name:"信息计划",
         units:3,
         grade:9
         }];
         
    //获取某个学生的成绩   
   $http({
    url:"",
    method:"post", 
    data:{
        suid:$scope.suid,
        name:$scope.name,
    }   
   }).success(function(info){
   // $scope.data=info;
   })

}]);














