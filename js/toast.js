var SkatchNotificationTriggre = document.getElementsByClassName("SkatchNotificationTriggre");
    for (var iter=0;iter < SkatchNotificationTriggre.length;iter++){
        SkatchNotificationTriggre[iter].addEventListener("click",function(e){
            var notification_target = this.getAttribute('notification-target');
            document.getElementById(notification_target).classList.add("SkatchNotificatonAppear");
            setTimeout(function(){
                document.getElementById(notification_target).classList.remove("SkatchNotificatonAppear");
            }, 5000);
    });
    }