// src/app/dashboard/page.tsx


// let id: number = 5;
// let company: string = "Acme Corp";
// let isPublished: boolean = true;

// let ids: numbers[] = [1, 2, 3, 4, 5];
// let x: any = "pedro";
// let xArr: any[] = ["pedro", 0, true];

// const concatenateValues = (a: string, b: string) => {
//   return a + b;
// }

// console.log(concatenateValues("Hello", " world"));

// interface UserInterface{
//   id: number,
//   name: string,
//   age?: number;
//   greet(message: string): void;
// }

// const User: UserInterface = {
//   id: 2,
//   name: "Pedro",
//   greet(message: string): void {
//     console.log(message);
//   },
// }

// User.greet("Hello");

// if (!User.age){
//   console.log("no age"); 
// }else{
//   console.log(User.age);
// }

// type IDFieldType = string | number;

// const printID = (id: IDFieldType) => {
//   console.log("ID: " + id);
// };

// printID("id123");
// printID(456);

// interface BusinessPartner{
//   name: string;
//   creditScore: number;
// }

// interface UserIdentity{
//   id: number;
//   email: string;
// }

// type Employee = BusinessPartner & UserIdentity;
// const signContract = (employee: Employee): void => {
//   console.log("Contract signed by " + employee.name + " with email: " + employee.email);
// }

// signContract({
//   name: "Pedro", 
//   creditScore: 800, 
//   id: 34, 
//   email: "pedro@gmail.com"
// });



export default function DashboardPage() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Task 4 - Typescript Refresher</h1>
        <p>In the code here, it is a typescript refresher </p>
      </div>
    )
  }
  