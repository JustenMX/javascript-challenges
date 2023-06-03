/*
    Create a class "Document" that extends "Permission". In the Document class,
    
    - there should be a constructor that takes in 3 arguments: 
        1. role (pass to parent constructor using "super")
        2. operation (pass to parent constructor using "super")
        3. content (store in private variable)
    - there should be a function "process()" that calls "check()" function declared in the Permission class.
    
    Instantiate from the Document class to create an object that calls "process()" with the following output:
    Scenario 1:
        const d = new Document(Permission.RolesConst.EDITOR, Permission.OperationsConst.UPDATE, "Hello content")
        d.process(); // "Allowed"
    Scenario 2:
        const d = new Document(Permission.RolesConst.READER, Permission.OperationsConst.UPDATE, "Hello content")
        d.process(); // "Blocked"
    Scenario 3:
        const d = new Document(Permission.RolesConst.OWNER, Permission.OperationsConst.DELETE, "Hello content")
        d.process(); // "Allowed"
*/

class Permission {
  // These are static constants that show what are the possible values when checking permission.
  static OperationsConst = {
    CREATE: "CREATE",
    READ: "READ",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
  };
  static RolesConst = {
    OWNER: "OWNER",
    EDITOR: "EDITOR",
    READER: "READER",
  };

  // private variables
  #role;
  #operation;

  // constructor
  constructor(role, operation) {
    if (this.constructor.name === "Permission") {
      throw new Error("This class cannot be instantiated");
    }
    this.#role = role;
    this.#operation = operation;
  }

  // function
  check() {
    const ops = this.#operation.toUpperCase();

    switch (this.#role.toUpperCase()) {
      case Permission.RolesConst.OWNER:
        return true;
      case Permission.RolesConst.EDITOR:
        if (
          ops === Permission.OperationsConst.READ ||
          ops === Permission.OperationsConst.CREATE ||
          ops === Permission.OperationsConst.UPDATE
        ) {
          return true;
        }
        return false;
      case Permission.RolesConst.READER:
        if (ops === Permission.OperationsConst.READ) {
          return true;
        }
        return false;
      default:
        return false;
    }
  }
}

// Add code here
class Document extends Permission {
  // needs to be declared in an enclosing class
  #content = null; // learned from Terence that it is good practice to declare
  constructor(role, operation, content) {
    super(role, operation);
    this.#content = content;
  }
  process() {
    const checkPermission = this.check();
    if (checkPermission) {
      return "Allowed";
    } else {
      return "Blocked";
    }
  }
}

// Test Cases

const d1 = new Document(
  Permission.RolesConst.EDITOR,
  Permission.OperationsConst.UPDATE,
  "Hello content"
);
console.log(d1.process()); // "Allowed"

const d2 = new Document(
  Permission.RolesConst.READER,
  Permission.OperationsConst.UPDATE,
  "Hello content"
);
console.log(d2.process()); // "Blocked"

const d3 = new Document(
  Permission.RolesConst.OWNER,
  Permission.OperationsConst.DELETE,
  "Hello content"
);
console.log(d3.process()); // "Allowed"
