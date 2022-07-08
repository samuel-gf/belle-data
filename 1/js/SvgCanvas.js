class SvgCanvas{

constructor(width, height, style){
	this.width = width;
	this.height = height;
	this.margin = null;
	this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
	this.svg.setAttribute("id", "svgCanvas");
	this.svg.setAttribute("width", this.width);
	this.svg.setAttribute("height", this.height);
	this.svg.setAttribute("version", "1.1");
	this.svg.setAttribute("style", style);
	document.getElementsByTagName("body")[0].appendChild(this.svg);
}

line(id, x1, y1, x2, y2, style){
	var el = document.createElementNS("http://www.w3.org/2000/svg", "line");
	el.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	el.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
	el.setAttribute("id", id);
	el.setAttribute("x1", x1);
	el.setAttribute("y1", y1);
	el.setAttribute("x2", x2);
	el.setAttribute("y2", y2);
	el.setAttribute("style", style);
	el.setAttribute("version", "1.1");
	document.getElementById("svgCanvas").appendChild(el);
	return el;
}

rectangle(id, x, y, rx, ry, w, h, style){
	var el = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	el.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	el.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
	el.setAttribute("id", id);
	el.setAttribute("x", x);
	el.setAttribute("y", y);
	el.setAttribute("rx", rx);
	el.setAttribute("ry", ry);
	el.setAttribute("width", w);
	el.setAttribute("height", h);
	el.setAttribute("style", style);
	el.setAttribute("version", "1.1");
	document.getElementById("svgCanvas").appendChild(el);
	return el;
}

text(id, x, y, text, fill, fontSize, fontWeight, style){
	var el = document.createElementNS('http://www.w3.org/2000/svg','text');
	el.setAttribute("id",id);
	el.setAttribute("x",x);
	el.setAttribute("y",y);
	el.setAttribute("font-size",fontSize);
	el.setAttribute("font-weight",fontWeight);
	el.setAttribute("fill", fill);
	el.innerHTML = text;
	el.setAttribute("style", style);
	document.getElementById("svgCanvas").appendChild(el);
	return el;
}

image(id, x, y, w, h, src, style){
	var el = document.createElementNS("http://www.w3.org/2000/svg", "image");
	el.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	el.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
	el.setAttribute("id", id);
	el.setAttribute("version", "1.1");
	el.setAttribute("x", x);
	el.setAttribute("y", y);
	el.setAttribute("width", w);
	el.setAttribute("height", h);
	el.setAttribute("href", src);
	if (style!=null)	el.setAttribute("style", style);
	document.getElementById("svgCanvas").appendChild(el);
	return el;
}

} // Class SVG

class Point{
	constructor (x,y){
		this.x = x;
		this.y = y;
	}
}

