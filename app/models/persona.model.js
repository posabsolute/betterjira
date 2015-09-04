export default class Persona extends Backbone.Model {
	defaults(){ 
		return{
			archetype: 'Customer',
			personalInfo : {
				name: "Cedric Dugas",
				age:31,
				occupation:"Web developer"
			},
			personnality:["Jovial","Comic","Social"],
			goals:["Buy online as fast as possible"],
			Habits:["Shop at night", "Shop while at work"],
			ExpertiseLevel:{"level":10, "desctiption":"Very technical"}
		};
	}
}