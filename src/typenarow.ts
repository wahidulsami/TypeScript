function getchai(kind: string | number) {
  if (typeof kind === "string") {
    return `this  string  is ${kind} `;
  }

  return `this number is ${kind}`;
}

// truthnessy

function servchai(msg?: string) {
  if (msg) {
    return `serving  chai with  ${msg}`;
  }
  return `serving    chai `;
}

function orderchai(size: "small" | "medium" | "large") {
  if (size === "small") {
    return `small chai  ordered...`;
  }
  if (size === "medium" || size === "large") {
    return `medium chai  ordered...`;
  }

  return `chai ordered #${size}`;
}

class coffee {
  sever() {
    return "serving coffee...";
  }
}

class tea {
  sever() {
    return "serving tea...";
  }
}

function getserve(chai: coffee | tea) {
  if (chai instanceof coffee) {
    return chai.sever();
  }
}

type chaiorder = {
  type: string;
  suger: boolean;
};

function ischaiorder(obj: any): obj is chaiorder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.suger === "boolean"
  );
}

function severOrder(item: chaiorder | string) {
  if (ischaiorder(item)) {
    return `severing  ${item.type}  chai  with  suger ${item.suger}`;
  }
}

type Masalchai = { type: "masala"; spicylevel: number };
type Gingerchai = { type: "ginger"; gingerlevel: number };
type Plainchai = { type: "plain"; spicylevel: number };

type chai = Masalchai | Gingerchai | Plainchai;

function prepaerchai(order: chai) {
  switch (order.type) {
    case "masala":
      return `preparing masala chai with spicylevel ${order.spicylevel}`;
    case "ginger":
      return `preparing ginger chai with gingerlevel ${order.gingerlevel}`;
    case "plain":
      return `preparing plain chai with spicylevel ${order.spicylevel}`;
  }
}



function brew(order: Masalchai | Gingerchai ) {
if ("spicylevel"  in  order) {
    return `brewing masala chai with spicylevel ${order.spicylevel}`;   
}
}



//  arawy unkown  use


function isarrway(arr: unknown): arr is Array<any> {
    return Array.isArray(arr);
}                                                  