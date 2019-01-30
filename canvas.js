var canvas = document.getElementById("myCanvas"),
    w = window.innerWidth,
    h = window.innerHeight,
    circles = [],
    maxSnow = 1000,
    ctx = canvas.getContext("2d");

canvas.width = w;
canvas.height = h;


 for(var i=0;i<maxSnow;i++)
        {
             circles.push({
                 x:Math.random()*w,
                 y:Math.random()*h,
                 r:Math.random()*3,
                 d:Math.random()+1
             })
            
        }

console.log(circles);
/*  ok */
function drawSnow () 
{
    ctx.clearRect(0,0,w,h);
    ctx.beginPath();
    ctx.fillStyle="white";
    for(var i = 0; i < circles.length; i++)
        {
        
            ctx.moveTo(circles[i].x,circles[i].y);
            ctx.arc(circles[i].x, circles[i].y, circles[i].r,0,2*Math.PI);
            
            
        }
            
            ctx.fill();
           moveSnow();
    
}


    var angle =0;
    
    function moveSnow()
    {
        angle += 0.01;
        for(var i=0;i<maxSnow;i++)
            {
                var s = circles[i];
              
                s.y += Math.pow(s.d,2)+1;
                s.x +=Math.sin(angle)*2;
                  
                if(s.y>h)
                    {
                        /*circles[i]  ={x:Math.random()*w,y:0,r:s.r,d:s.d}       */
                        s.y=0
                    }
                
            }
    }
    
    setInterval(drawSnow , 25);

