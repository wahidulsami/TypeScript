function  makeChai (type: string, cups : number ) {
    return `making ${cups} cups of ${type} chai`
}


makeChai('masla' , 2)


function  getChaiPrice():number {
    return  25;
}

function makeOrder(order: string) {
if (!order) return null;
return order;
}

function logChai (): void {
    console.log("chai is ready ")
}

// void  mean no  return  value



function createChai(order: {
    type: string;
    cups: number;   
    suger?: boolean;
    size?: 'small' | 'medium' | 'large';
}) :number {
    return  3
}