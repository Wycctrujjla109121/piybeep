document.querySelector('#info_1').addEventListener('click', info1, true);
document.querySelector('#info_2').addEventListener('click', info2, true);
document.querySelector('#info_3').addEventListener('click', info3, true);
document.querySelector('#info_4').addEventListener('click', info4, true);
document.querySelector('#info_5').addEventListener('click', info5, true);


function info1(){
    if (document.querySelector('#info_1').classList.contains('info__collumn__text__visibility') == false)
    {
        document.querySelector('#arrow1').src = "image/icon/arrowUp.svg";
        document.querySelector('#info_1').classList.add('info__collumn__text__visibility');
    }
    else
    {
        document.querySelector('#arrow1').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_1').classList.remove('info__collumn__text__visibility');
    }
    if(document.querySelector('#info_2').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow2').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_2').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_3').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow3').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_3').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_4').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow4').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_4').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_5').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow5').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_5').classList.remove('info__collumn__text__visibility');
    }
}

function info2(){
    if (document.querySelector('#info_2').classList.contains('info__collumn__text__visibility') == false)
    {
        document.querySelector('#arrow2').src = "image/icon/arrowUp.svg";
        document.querySelector('#info_2').classList.add('info__collumn__text__visibility');
    }
    else
    {
        document.querySelector('#arrow2').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_2').classList.remove('info__collumn__text__visibility');
    }
    if(document.querySelector('#info_1').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow1').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_1').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_3').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow3').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_3').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_4').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow4').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_4').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_5').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow5').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_5').classList.remove('info__collumn__text__visibility');
    }
}

function info3(){
    if (document.querySelector('#info_3').classList.contains('info__collumn__text__visibility') == false)
    {
        document.querySelector('#arrow3').src = "image/icon/arrowUp.svg";
        document.querySelector('#info_3').classList.add('info__collumn__text__visibility');
    }
    else
    {
        document.querySelector('#arrow3').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_3').classList.remove('info__collumn__text__visibility');
    }
    if(document.querySelector('#info_2').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow2').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_2').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_1').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow1').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_1').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_4').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow4').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_4').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_5').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow5').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_5').classList.remove('info__collumn__text__visibility');
    }
}

function info4(){
    if (document.querySelector('#info_4').classList.contains('info__collumn__text__visibility') == false)
    {
        document.querySelector('#arrow4').src = "image/icon/arrowUp.svg";
        document.querySelector('#info_4').classList.add('info__collumn__text__visibility');
    }
    else
    {
        document.querySelector('#arrow4').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_4').classList.remove('info__collumn__text__visibility');
    }
    if(document.querySelector('#info_2').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow2').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_2').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_3').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow3').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_3').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_1').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow1').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_1').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_5').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow5').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_5').classList.remove('info__collumn__text__visibility');
    }
}

function info5(){
    if (document.querySelector('#info_5').classList.contains('info__collumn__text__visibility') == false)
    {
        document.querySelector('#arrow5').src = "image/icon/arrowUp.svg";
        document.querySelector('#info_5').classList.add('info__collumn__text__visibility');
    }
    else
    {
        document.querySelector('#arrow5').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_5').classList.remove('info__collumn__text__visibility');
    }
    if(document.querySelector('#info_2').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow2').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_2').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_3').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow3').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_3').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_4').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow4').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_4').classList.remove('info__collumn__text__visibility');
    }
    else if (document.querySelector('#info_1').classList.contains('info__collumn__text__visibility'))
    {
        document.querySelector('#arrow1').src = "image/icon/arrowDown.svg";
        document.querySelector('#info_1').classList.remove('info__collumn__text__visibility');
    }
}