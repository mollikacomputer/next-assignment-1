#typescript any type
typescript any type এ কখনো আটকয় না। আমরা ভুল টাইপের তথ্য দিলে আটকানোর কথা। তাই আমরা typescript ব্যবহার করি। এখানে তা হয় না তাই এটা ব্যবহার না করাই ভাল।
Example:
let value: any = "Hello";

value = 123;
value = true;
value.toUpperCase(); // কোনো error দেখাবে না
এখানে problem হচ্ছে:
value = 123;
value.toUpperCase();
123 number type। কিন্তু number এর toUpperCase() method নেই।
তবুও TypeScript error দিচ্ছে না
কারণ any TypeScript-এর সব safety system বন্ধ করে দেয়।
এখানে runtime এ crash হতে পারে।
কারণ number এর .length নেই।
কিন্তু TypeScript কিছুই বলছে না।

// any এর চেয়ে unknown ভাল কিছু কারণ নিচে দেওয়া হলো। unknown আপনাকে data use করার আগে check করতে বাধ্য করে।
Example:
let value: unknown = "Hello";

value.toUpperCase(); // Error
TypeScript বলবে:
“আমি জানি না এটা string নাকি অন্য কিছু।”
এখন আপনাকে আগে type check করতে হবে।

broad type থেকে specific type identify করা।
মানে TypeScript কে বুঝানো:
এটা string
এটা number
এটা array
এটা object
এরপর safe ভাবে operation করা যায়।

Example of Type Narrowing
let value: unknown = "Hello World";

if (typeof value === "string") {
console.log(value.toUpperCase());
}
এখানে:
typeof value === "string"
এই check এর মাধ্যমে TypeScript বুঝলো:
value এখন string
