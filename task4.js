function City(name, population, country) {
	this.name = name;
	this.population = population;
	this.country = country;

	this.getPopulation = () => this.population,
	this.getCityName = () => this.name,
	this.addCitizen = () => this.population += 1 
}

const Kyiv = new City("Kyiv", 300000, "Ukraine");

console.log(Kyiv);

Kyiv.getPopulation();
Kyiv.getCityName();
Kyiv.addCitizen();

console.log(Kyiv);