class Param {
    constructor (element) {
        this.name = element.value
        this.price = +element.dataset ['price'] 
        this.calories = +element.dataset ['calories']
    }
}

class Burger {
    constructor (size, add, toppings) {
        this.size = new Param (this._select (size))
        this.add = new Param (this._select (add))
        this.toppings = this._getToppings (toppings) 
    }

    _getToppings (name) {
        let result = []
        this._selectAll (name).forEach (el => {
            result.push (new Param (el))
        })
        return result
    }

    _selectAll (name) {
        return [...document.querySelectorAll (`input[name="${name}"]:checked`)]
    }

    _select (name) {
        return document.querySelector (`input[name="${name}"]:checked`)
    }

    sumPrice () {
        let result = this.size.price + this.add.price
        this.toppings.forEach (el => {
            result += el.price
        })
        return result
    }

    sumCalories () {
        let result = this.size.calories + this.add.calories
        this.toppings.forEach (el => {
            result += el.calories
        })
        return result
    }

    showSum (price, calories) {
        document.querySelector (price).innerText = this.sumPrice ()
        document.querySelector (calories).innerText = this.sumCalories ()
    }
}

window.onload = () => {	
    document.getElementById('check').addEventListener('click', () => {
        let burger = new Burger('size', 'add', 'topings');
        console.log(burger);
        burger.showSum('#price', '#calories');
    })
}
    