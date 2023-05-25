// The Adapter design pattern allows to incompatible interface to communicate e.g an interface that takes JSON Interface => [ ADAPTER DESIGN PATTERN ] <= XML Interface

const cities = [
    {
        "name": "New York",
        "population": 2.1
    },
    {
        "name": "Buenos aires",
        "population": 3.1
    },
    {
        "name": "Los Angeles",
        "population": 4.1
    },
    {
        "name": "Las Vegas",
        "population": 5.1
    }
]

const cityToAddToCitiesObject = {
    "name": "Lagos",
    "population": 6100000000,
}

// This city population wouldn't fit into our "cities object, it needs to be converted to billions"

function toBillionAdapterFunction(obj){
    obj.population = parseFloat(obj.population/100000000)
}

// Add the adapted city to cities array

toBillionAdapterFunction(cityToAddToCitiesObject)

cities.push(cityToAddToCitiesObject)

function largestCity(arr){
    return Math.max(...arr.map((city) => city.population));
}