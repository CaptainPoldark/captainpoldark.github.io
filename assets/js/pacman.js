var pos = 0;
    const pacArray = [
        ['assets/images/pacman/PacMan1.png', 'assets/images/pacman/PacMan2.png'],
        ['assets/images/pacman/PacMan3.png', 'assets/images/pacman/PacMan4.png']
    ];
    var direction = 0;
    var focus = 0;
    var sectionWidth = window.innerWidth;

    function Run() {
        let img = document.getElementById("PacMan");
        let imgWidth = img.width
        focus = (focus + 1) % 2;
        direction = checkPageBounds(direction, imgWidth);
        img.src = pacArray[direction][focus];
        if (direction == 1) {
            pos -= 20;
            img.style.left = pos + "px";
        } else {
            pos += 20;
            img.style.left = pos + 'px';
        }
        // Use setTimeout to call Run every 200 millesecs
        //setTimeout(Run,200);
    }
    setInterval(Run,200);
    function checkPageBounds(direction, imgWidth) {
        //
        // reverse direction on hitting page bounds
        // 
        if(pos >= (sectionWidth - imgWidth)){
            direction = 1;
        }
        if(pos <= 0){
            direction = 0;
        }
        return direction;
    }