// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

const staircase = (n) => {
    const generateWhiteSpace = (max, spaces) => {
      let temp = spaces + 1;
      let string = spaces == 0 ? "" : "\n";
      let poundString = "";
      for (let i = temp; i > 0; i--) {
        poundString += "#";
      }
      for (let i = temp; i < max; i++) {
        string += " ";
      }
      return `${string}${poundString}`;
    };
  
    let string = "";
    for (let i = 0; i < n; i++) {
      string += generateWhiteSpace(n, i);
    }
  
    return string;
  };

//   console.log(staircase(4))

