& 'C:\Program Files\gs\gs9.50\bin\gswin64c.exe' -dNOPAUSE -dBATCH -sDEVICE=pngmono -r220 -sOutputFile='pngs\hiver\hiver-%00d.png'

-dFirstPage=303 -dLastPage=303

optipng.exe *.png
