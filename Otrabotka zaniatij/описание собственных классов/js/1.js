function Man() {
    this.eyesCount=2;
    this.showEyes=function() {
        console.log('this: '+this);
        console.log('Eyes: '+this.eyesCount);
    }
}