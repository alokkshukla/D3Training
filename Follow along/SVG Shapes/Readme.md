# SVG Shapes

1. Circle
	- cx, cy, r
	- _Use classes to differentiate_
2. Ellipse
	-cx, cy, rx, ry
3. Line
	- Straight only
	- x1, x2, y1, y2
	- The pair not given defaults to (0,0)
	- **Multiple ways to style**
		- attr - set attr
		- style - set style - takes precedence over attr and css
		- css - beats attribute, style>css>attr
		- avoid element level styling; use css
4. Polygon and Polyline
	- Available but no one uses
	- Use Path
5. Text
	- x, y - Lower left
	-Each character is a shape
		- "text-anchor" for horizontal, "dominant-baseline" for vertical
	- Use "tspan" instead of adding a new each time.
6. Path