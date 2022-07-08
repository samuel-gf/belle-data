const offsetTextX = 10;
const offsetTextY = 18;

class Item{
constructor(n, x,y,w,h,name,color){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.name = name;
		this.color = color;
		this.rect = svg.rectangle('r'+n, x, y, 5, 5, w, h, 'fill:'+color+'; fill-opacity:1;');
		this.text = svg.text('t'+n, x+offsetTextX, y+offsetTextY, name, "white", "0.7rem", "bold", "text-align:right;");
		this.number = svg.text('n'+n, this.x+this.w, this.y, 0, "black", "0.7rem", "bold", null);
		this.val=0;
}

async change(x, y, w, h, duration){
	if (x==null) x = this.x;
	if (y==null) y = this.y;
	if (w==null) w = this.w;
	if (h==null) h = this.h;
	if (duration==null) duration=1000;
	var t0 = (new Date).getTime();
	var tf = t0+duration;
	var tt = tf-t0;
	var t = 0.0;
	var dx = x-this.x;
	var dy = y-this.y;
	var dw = w-this.w;
	var dh = h-this.h;
	const k = Math.PI/(2*tt);
	while(t<tt){
		var p = t/tt;
		this.rect.setAttribute('x', this.x+p*dx);
		this.rect.setAttribute('y', this.y+p*dy);
		this.rect.setAttribute('width', this.w+p*dw);
		this.rect.setAttribute('height', this.h+p*dh);
		this.text.setAttribute('x', this.x+offsetTextX+p*dx);
		this.text.setAttribute('y', (this.y+offsetTextY)+p*dy);
		var box = this.text.getBBox();
		if (box.width>this.w+p*dw){
			this.text.innerHTML = this.name.substring(0, 30);
		} else {
			//this.text.innerHTML = this.name;
		}
		this.number.setAttribute('x', this.x+this.w+p*(dx+dw)+5);
		this.number.setAttribute('y', this.y+p*dy+20);
		await sleep(T_PRECISION);
		t = (new Date).getTime() - t0;
	}
	this.rect.setAttribute('x', x);
	this.rect.setAttribute('y', y);
	this.rect.setAttribute('width', w);
	this.rect.setAttribute('height', h);
	this.text.setAttribute('x', x+offsetTextX);
	this.text.setAttribute('y', y+offsetTextY);
	//this.number.setAttribute('x', this.x+this.w);
	//this.number.setAttribute('y', this.y);
	if (x!=null) this.x = x;
	if (y!=null) this.y = y;
	if (w!=null) this.w = w;
	if (h!=null) this.h = h;
}

async moveTo(x, y){
	var t0 = (new Date).getTime();
	var tf = t0+2000;
	var tt = tf-t0;
	var t = 0.0;
	var dx = x-this.x;
	var dy = y-this.y;
	const k = Math.PI/(2*tt);
	while(t<tt){
		var p = t/tt;
		this.rect.setAttribute('x', this.x+p*dx);
		this.rect.setAttribute('y', this.y+p*dy);
		this.text.setAttribute('x', this.x+offsetTextX+p*dx);
		this.text.setAttribute('y', (this.y+offsetTextY)+p*dy);
		await sleep(T_PRECISION);
		t = (new Date).getTime() - t0;
	}
}

async newVal(val, duration){
	if (duration==null) duration=2000;
	var t0 = (new Date).getTime();
	var tf = t0+duration;
	var tt = tf-t0;
	var t = 0.0;
	var dn = val-this.val;
	while(t<tt){
		var p = t/tt;
		this.number.innerHTML = this.val+dn;
		await sleep(T_PRECISION*100);
		t = (new Date).getTime() - t0;
	}
}

} // End Class

