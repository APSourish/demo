count=0
    on = 0
    x = 45
    function xy(){
        count++
        if(count!=0){
            x += 90
        }
        document.getElementById('rot').style.rotate = x+'deg'
    }

    function ab(){
        count--;
        if(count!=100){
            x -= 90
        }
        document.getElementById('rot').style.rotate = x+'deg'
    }