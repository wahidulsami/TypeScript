// class chai {
//     flavour: string;
//     price:number;

// constructor(flavour:string , price: number ) {
//     this.flavour = flavour;
//     this.price = price;
// }
// }

// const maslachai = new chai("ginger" , 10)
// maslachai.flavour = "masala"

class chai {
  public flavour: string = "masala";
  private secretinergeadint = "cardmom";

  reveal() {
    return this.secretinergeadint;
  }
}

const c = new chai();
// c.reveal()

class shop {
  protected shopName = "chai sami ";
}

class branch extends shop {
  getname() {
    return this.shopName;
  }
}

class Wallet {
  #balance = 1100;

  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();

// readONly

class Cup {
  readonly capacity: number = 270;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// getter  and  suter  method

class modernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("is  to late");
    this._sugar = value;
  }
}

const d = new modernChai();
d.sugar = 4;

class chaidaw {
  static shopName = "samicode caffe";

  constructor(public flavour: string) {}
}

console.log(chaidaw.shopName);

abstract class Drink {
  abstract make(): void;
}

class amrchai extends Drink {
  make() {
    console.log("brewing  chai");
  }
}


class  heater {
    heat(){}
}

class chaiMaker {
    constructor(private heater: heater){}

make(){
    this.heater.heat
}
}