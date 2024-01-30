
class Calculations{

    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be Positive ! ");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be Positive ! ");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }

    get area(){
        return this._width*this._height;
    }
}

// const calc = new Calculations("neel",-10);
const calc = new Calculations(2,3)


console.log(`The area of Rectangle is : ${calc.area}`);