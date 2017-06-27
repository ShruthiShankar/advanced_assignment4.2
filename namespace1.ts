//vehicle namespace is created.
export namespace vehicle{
	export interface FourWheeler{	//export keyword sets the visibility of the interface which can be accessed in other class
		NumberOfWheels: number ;
	}

	export function displayNoOfWheels(Wheels : FourWheeler){
		return `Car has ` + Wheels.NumberOfWheels + `  number of wheels`;
	}
}