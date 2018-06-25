"use strict"


function HashStorage() {
    this.storage = {};
    this.addValue = function(key, value) {
        this.storage[key] = value;
    }
    this.getValue = function(key) {
        if (key in getValue) {
            return key;
        } else
        return undefined;
    }
    this.deleteValue = function(key) {
        delete value[key];
        if (value[key] == null) {
            return true;
        }
        else if (value[key] == undefined) {
            return false;
        }
    }
    this.getKeys = function() {
        return value[key];
    }
}

var drinkStorage = new HashStorage; 



function enterNameDrink() {
    drinkStorage.name = prompt('введите названи напитка');
}



