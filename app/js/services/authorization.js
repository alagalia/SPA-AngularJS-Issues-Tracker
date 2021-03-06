'use strict';

trackerApp
    .factory('authService',[
        function(){

            function isLoggedUser() {
                var sessionUser = sessionStorage['userName'];
                return !!sessionUser;
            }


            function getLoggedUserName() {
                return sessionStorage['userName'];
            }

            function setLoggedUser(userName) {
                if (!!userName) {
                    sessionStorage['userName'] = user;
                }
            }

            function isAdmin() {
                 if(sessionStorage['isAdmin']== 'true'){
                     return true;
                 } else {
                     return false
                 }
            }

            return {
                isLoggedUser : isLoggedUser,
                getLoggedUserName : getLoggedUserName,
                setLoggedUser : setLoggedUser,
                isAdmin : isAdmin
            }
        }
    ]);
