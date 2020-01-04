<?php 

    $page=$_GET['q'];

    switch($page){
        case 'login':
            require_once('./login.html');
        break;
        case 'overview':
            require_once('./overview.html');
        break;
        default:
            echo "oups";
    }

?>