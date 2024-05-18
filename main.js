import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addstudents(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const program = async (persons) => {
    console.log("        WELCOME TO STUDENT INTERACTION OOP        ");
    do {
        const ans = await inquirer.prompt({
            name: "select",
            message: "\nWHOM YOU WOULD LIKE TO INTERACT WITH",
            type: "list",
            choices: ["Staff", "Students", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log("\nHELLO!, FEEL FREE TO ASK QUSTION.");
        }
        else if (ans.select == "Students") {
            const ans = await inquirer.prompt({
                name: "Student",
                message: "\nENTER STUDENT NAME TO INTERACT",
                type: "input"
            });
            const xtudent = persons.students.find(val => val.name == ans.Student);
            if (!xtudent) {
                const name = new Student(ans.Student);
                persons.addstudents(name);
                console.log("\nADDED A NEW STUDENT");
                console.log(`HELLO I AM ${name.name}, NICE TO MEET YOU.`);
                console.log("CURRENT STUDENT LIST:");
                console.log(persons.students);
            }
            else {
                console.log(`\nHELLO I AM ${xtudent.name}, NICE TO SEE YOU AGAIN.`);
                console.log("EXISTING STUDENT LIST:");
                console.log(persons.students);
            }
        }
        if (ans.select == "Exit") {
            console.log("\n        EXITING THE PROGRAM!!.        ");
            process.exit();
        }
    } while (true);
};
program(persons);
