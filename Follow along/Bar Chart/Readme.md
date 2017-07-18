#Simple Bar Chart with D3

1. Select "svg" tag in body
	- Not present, select "body" and append "svg"
	- Give attributes.
2. Create data array
3. Select all "rect" shapes
	- All go in select
4. Make all selections a "rect"
5. Set attributes (x,y,height,width)

_**Browser co-ordinates start from top left, go to bottom right**._

## enter() vs exit()
- No shape => All enter. _When our dataset contains more items than there are available DOM elements, the surplus data items are stored in a sub set of this selection called the enter selection._
- No data => All exit. _The exit selection contains those dom elements whose datums have left._
- Example : 3 datapoints, 4 rects => 1 in exit; none in enter



