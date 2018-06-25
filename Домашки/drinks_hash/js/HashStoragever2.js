"use strict"


function Car() {
    this.num = '2345a';
    this.speed = 0;
    this.beep = function() { alert(this.num); };
    this.go = function() { this.speed=60; };
  }
  
  var car=new Car;
  
  car.beep();

