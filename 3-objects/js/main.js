/*let Guy = {
    name: 'Oleg',
    lastname: 'Ovcharuk',
    age: 34,
    
    getFullName: function() {
        return this.name + ' ' + this.lastname;
    },
    
    getAge: function() {
        return this.age;
    },
    
    setAge: function(age) {
        this.age = age;
    }
}

console.log(Guy.getAge());
Guy.setAge(35);
console.log(Guy.getAge());*/




let Car = {
    marka: 'Renault',
    model: 'Megane',
    doors: 5,
    color: 'black',

    changeColor: function(newColor) {
        this.color = newColor;
    },
    getFullName: function() {
        return this.marka + ' ' + this.model;
    },

}

console.log(Car.getFullName());

console.log(Car.color);
Car.changeColor('red');
console.log(Car.color);

