#Javascript cho hàm sincos


```javascript
<script>
            var s = document.getElementById("hamSinCos");
            function inp(x) {
                let y = 4*Math.sin(x) + 4*Math.cos(x);
                return y
            }
            var xline = s.getContext("2d");
            xline.translate(200,200)
            xline.scale (2,2)

            for (i=-100;  i<100; i++) {
                let x = i;
                let y = inp(i);
                xline.lineTo(x,y)

                console.log(x,y);
                xline.moveTo(x,y);
            }
            xline.stroke();

        </script>
```

