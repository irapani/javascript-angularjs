/** Prototype Patten **/

var peopleProtto = function(){

};
	peopleProto.Prototype.age = 0;
	peopleProto.Prototype.name= 28;
	peopleProto.Prototype.city= 'OH';

peopleProto.Prototype.printPerson = function.(){
	console.log( this.name + " , " + this.age + " , " + this.city);
};
	var person1 = new peopleProto();
	person1.age = 24;
	person1.city= 'CA';
	person1.name= 'Mat';

console.log('age' in person1);