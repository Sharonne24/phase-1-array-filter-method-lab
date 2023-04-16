// Code your solution here

function findMatching(drivers, string) {
    const searchString = string.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {
      const driverName = driver.toLowerCase();
      return driverName === searchString;
    });
  
    return matchingDrivers;
  }
  
  function fuzzyMatch(drivers, string) {
        const matchingDrivers = drivers.filter(driver => {
          return driver.startsWith(string);
        });
      
        return matchingDrivers;
      }
      
  function matchName(drivers, string) {
        const matchingDrivers = drivers.filter(driver => {
          return driver.name === string;
        });
      
        return matchingDrivers;
      }
      


