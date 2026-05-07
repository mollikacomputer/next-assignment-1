// genericFunction
generic Function ভাল করে বোঝার জন্য সাধারণ কিছু উদাহর নিম্ন দেওয়া হলঃ
const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
// const createArrayWithUserObject = (value:object)=> return [value]; প্রোগ্রামিং এ এভাবে দেওয়া সঠিক উপায় নয়।
const createArrayWithUserObject = (value: { id: number; name: string }) => {
return [value];
};
আউটপুন নিচের অংশে দেওয়া আছে।
const arrString = createArrayWithString("Apple");
const arrNumber = createArrayWithNumber(242);
const arrObj = createArrayWithUserObject({
id: 12345,
name: "Next Level Programming hero",
});

console.log(arrString)// output "Apple";
console.log(arrNumber)// output 242;
console.log(arrObj)// output {
id: 12345,
name: "Next Level Programming hero",
};

উপরের ফাংশন গুলোর কাজ সহক করার জন্য ডায়নামিক ভাবে Generic ভাবে দেখানো হলো। এখানে একটা ফাংশন লিখে একাধীক ফাশনের কাজ করা যাচ্ছে। তাই জেনেরিক ফাংশন অনেক ক্লিয়ার ও সাজানো গোছানো ভাবে রয়েছে। এখানে একটা প্যারামিটার এর জেনেরিক ফাংশন দেখানো হয়েছে।

const createArrayWithGeneric = <T>(value: T) => {
return [value];
};

নিচের Generic Tuple ফাংশনের মাধ্যমে একাধীক প্যারামিটার দিয়ে আর একটি উদাহরণ দেওয়া হলো। এখানে ডায়নামিক input এর ক্ষেত্রে string type, number type, boolean type কোন ধরণের সমস্যা করে না।

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
param1,
param2,
];
const result1 = createArrayTupleWithGeneric("Dipa Rani Roy", 2300);
const result2 = createArrayTupleWithGeneric("Shipon Kumar", false);
const result3 = createArrayTupleWithGeneric(3000, { name: "Ranjit", roll: 15 });
console.log("result 3 is here:", result1, result2, result3);

/// anther example
const addStudentToCourse = <T>(studentInfo: T) => {
return { courseName: "Next Level", ...studentInfo };
};

const student1 = {
id: 123,
name: "Sabuj",
hasPen: true,
};
const student2 = {
id: 1111,
name: "Jhankar",
hasCar: true,
isMarried: true,
};

const result4 = addStudentToCourse(student1);
console.log("student add next level project:", result4);
const result5 = addStudentToCourse(student2);
console.log("student add next level project:", result5);
