var dataArray = [5,11,18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.selectAll("rect")
      .data(dataArray)
      .enter().append("rect")
      .attr("height",function(d,i){return d*15;})
      .attr("width","50")
      .attr("x",function(d,i){return 60*i;})
      .attr("y",function(d,i){return 300-15*d;})
      .attr("fill","pink");

var newX = 300;
svg.selectAll("circle.first")
      .data(dataArray)
      .enter().append("circle")
      			.attr("class","first")
      			.attr("cx",function(d,i){newX+=(d*3)+(i*15);return newX;})
      			.attr("cy","100")
      			.attr("r",function(d){return d*3;})
      			.attr("fill","steelblue");


var newX = 600;
svg.selectAll("circle.second")
      .data(dataArray)
      .enter().append("circle")
      			.attr("class","second")
      			.attr("cx",function(d,i){newX+=(d*3)+(i*15);return newX;})
      			.attr("cy","100")
      			.attr("r",function(d){return d*3;})
      			.attr("fill","orange");


var newX = 300;
svg.selectAll("ellipse")
      .data(dataArray)
      .enter().append("ellipse")
      			.attr("cx",function(d,i){newX+=(d*3)+(i*15);return newX;})
      			.attr("cy","250")
      			.attr("rx",function(d){return d*3;})
      			.attr("ry",function(d){return d*2;})
      			.attr("fill","purple");

var newX = 600;
svg.selectAll("line")
      .data(dataArray)
      .enter().append("line")
      			.attr("x1",newX)
      			.attr("y1",function(d,i){return 220+i*30;})
      			.attr("x2",function(d,i){return newX+(d*15);})
      			.attr("y2",function(d,i){return 220+i*30;})
      			// .style("stroke","green")
      			.attr("stroke","blue")
      			.attr("stroke-width","2");


svg.append("text").text("Start!")
				  .attr("x",200)
				  .attr("y",400)
				  .attr("fill","blue")
				  .attr("stroke","none")
				  .attr("dominant-baseline","middle")
				  .attr("text-anchor","start")
				  .attr("font-size",30);
				  

svg.append("text").text("Hello D3!")
				  .attr("x",450)
				  .attr("y",400)
				  .attr("fill","none")
				  .attr("stroke","blue")
				  .attr("stroke-width","2")
				  .attr("dominant-baseline","middle")
				  .attr("text-anchor","middle")
				  .attr("font-size",40);
				  

svg.append("text").text("End!")
				  .attr("x",700)
				  .attr("fill","blue")
				  .attr("stroke","none")
				  .attr("dominant-baseline","middle")
				  .attr("y",400)
				  .attr("text-anchor","end")
				  .attr("font-size",30);

svg.append("line").attr("x1",200)
      			.attr("y1",400)
      			.attr("x2",220)
      			.attr("y2",400)

svg.append("line").attr("x1",450)
      			.attr("y1",400)
      			.attr("x2",500)
      			.attr("y2",400)


svg.append("line").attr("x1",700)
      			.attr("y1",400)
      			.attr("x2",720)
      			.attr("y2",400)

var textArray = ["start","Hello D3!","end"]


svg.append("text").selectAll("tspan")
				  .data(textArray)
                  .enter().append("tspan")
				  .attr("x",function(d,i){return 200+200*i;})
				  .attr("y",500)
				  .attr("fill","blue")
				  .attr("stroke","none")
				  .attr("dominant-baseline","middle")
				  .attr("text-anchor","start")
				  .attr("font-size",30)
				  .text(function(d,i){return d;})


