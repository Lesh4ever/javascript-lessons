let Guy = {
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
console.log(Guy.getAge());
