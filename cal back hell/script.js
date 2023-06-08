
 
  function printfun() {
    const greet = (message = "", cb = (d) => {}) => {
      const temp = [];
      temp.push(message);
      const hell = document.getElementById('printhell');
      const textNode = document.createTextNode(message);  
      hell.appendChild(textNode);
      cb(message);
    };
  
    greet(10, () => {
      greet(9, () => {
        greet(8, () => {
          greet(7, () => {
            greet(6, () => {
              greet(5, () => {
                greet(4, () => {
                  greet(3, () => {
                    greet(2, () => {
                      greet(1, () => {
                        greet("Happy Independence Day!!!");
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  

