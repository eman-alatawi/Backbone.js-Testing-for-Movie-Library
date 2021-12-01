(function(){
    $body=$('body');

    for(var path in window.__html__){
        $body.append(window.__html__[path])
    }
}());