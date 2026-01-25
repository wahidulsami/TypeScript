function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(21);
wrapInArray({ flavour: "ginger" });

// ? TypeScript-এ Generics হলো এমন একটি পাওয়ারফুল ফিচার যা আপনাকে রিব্যবজেবল (Reusable)
// ? এবং টাইপ-সেফ (Type-safe) কোড লিখতে সাহায্য করে। সহজ কথায়, কোনো ফাংশন বা ক্লাস তৈরি
// ? করার সময় যদি আপনি আগে থেকে না জানেন যে সেখানে কী ধরনের ডেটা (Number, String,
// ? নাকি Object) আসবে, তখন আপনি Generics ব্যবহার করেন।

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
  // return [B , A]
}

pair("masla", 20);
pair("masala", { flabor: "ginger" });

interface box<y> {
  content: y;
}

const numberBox: box<number> = { content: 10 };
//*  const numberBoxTwo: box<string> = {content: 10}

//! real  uses  Genraics

interface ApiResponse<T> {
  status: number;
  data: T;
}

const res: ApiResponse<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};
