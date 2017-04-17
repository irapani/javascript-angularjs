
/** Factory patten **/ 

var peopleFactory = function (name, age, state){
	var temp ={}
	temp.age = age;
	temp.name= name;
	temp.state= state;

	temp.printPerson = function(){
		console.log(this.name + " , " + this.age + " , " + this.state);
	};
		return temp;
};
	var person1 = peopleFactory ('kumar',26,'CA');
	var person2 = peopleFactory ('uday', 27, 'OH');

	person2.printPerson();
	person1.printPerson();


/** Constructor patten **/ 

var peopleConstructor = function(name,age,state){
	this.name = name;
	this.age  = age;
	this.state= state;

	this.printPerson = function(){
		console.log(this.name + " , " + this.age + " , " + this.state);
	};
};
	var person1 = new peopleConstructor('nik',23,'NC');
	var person2 = new peopleConstructor('kra',31,'NY');

	person1.printPerson();
	person2.printPerson();

/** Prototype Patten **/

var peopleProto = function(){

};

peopleProto.Prototype.age = 0;
peopleProto.Prototype.name= "no name";
peopleProto.Prototype.city= "no city";

peopleProto.Prototype.printPerson = function () {
	console.log(this.name + " , " + this.age + " , " + this.city);
};	
	var person1 = new peopleProto();
	person1.name = "kumar";
	person1.age = 26;
	person1.city = 'CA';

	person1.printPerson(); 


/** Dynamic prototype pattern **/ 

	var peopleDynamicProto = function (name, age, state){
		this.age = age;
		this.name= name;
		this.state= state;

		if (typeof this.printPerson !== 'function') {
			peopleDynamicProto.Prototype.printPerson = function(){
				console.log(this.name + " , " + this.age + " , " + this.state);
			};
		}
	};
		var person1 = new peopleDynamicProto('Max',24,'OH');

		console.log('name' in person1);
		console.log(person1.hasOwnProPerty('name'));