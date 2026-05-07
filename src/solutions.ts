// solution 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  const result = numbers.filter((num) => num % 2 === 0);
  return result;
};

const reverseString = (str: string): string => {
  const letterSplit = str.split("");
  const letterReverse = letterSplit.reverse();
  const result = letterReverse.join("");
  //single line solution
  //   const result = str.split("").reverse().join("");
  return result;
};

// solution 3
const checkType = (StringOrNumber: number | string) => {
  if (typeof StringOrNumber === "number") {
    return "number";
  } else if (typeof StringOrNumber === "string") {
    return "string";
  }
};

// solution 4

const user = { id: 1, name: "John Doe", age: 21 };
const getProperty = <T>(value: T) => {
  return [value];
};

// solution 5
interface IBook {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}
// not included in true or false in direct interface so included extends
interface ReadBook extends IBook {
  isRead?: boolean;
}

const toggleReadStatus = (book: IBook, status: boolean = true): ReadBook => {
  return {
    ...book,
    isRead: status,
  };
};

const inputBook: IBook = {
  title: "Next Level Training book",
  author: "Ranjit",
  publishedYear: 2026,
};

// solution 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  // function method
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// solution 7

const getIntersection = (array1: number[], array2: number[]): number[] => {
  const numberOfSet2 = new Set(array2);
  return array1.filter((num) => numberOfSet2.has(num));
};

// output
const result = getIntersection(
  [1, 3, 5, 8, 9, 12, 16, 15],
  [16, 5, 9, 20, 30, 35, 12, 40],
);
