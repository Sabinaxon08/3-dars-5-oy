const MyObject = { name: "John", Age: 30, City: "New York", }

for (const key in MyObject) {
    if (Object.hasOwnProperty.call(MyObject, key)) {
        const element = MyObject[key];

        console.log(element)
    }
}