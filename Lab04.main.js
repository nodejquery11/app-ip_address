/*
  Import the ip-cidr npm package.
  See https://www.npmjs.com/package/ip-cidr
  The ip-cidr package exports a class.
  Assign the class definition to variable IPCIDR.
*/
//const IPCIDR = require('ip-cidr');

class IpAddress {
  constructor() {
    // IAP's global log object is used to output errors, warnings, and other
    // information to the console, IAP's log files, or a Syslog server.
    // For more information, consult the Log Class guide on the Itential
    // Developer Hub https://developer.itential.io/ located
    // under Documentation -> Developer Guides -> Log Class Guide
    console.log('Starting the IpAddress product.');
  }
  /*
  This section is used to test function and log any errors.
  We will make several positive and negative tests.
*/
main() {
  // Create some test data for getFirstIpAddress(), both valid and invalid.
  let sampleCidrs = ['172.16.10.0/24', '172.16.10.0 255.255.255.0', '172.16.10.128/25', '192.168.1.216/30'];
  let sampleCidrsLen = sampleCidrs.length;
  // Create some test data for getIpv4MappedIpv6Address, both valid and invalid.
  let sampleIpv4s = [ '172.16.10.1', '172.16.10.0/24', '172.16.10.0 255.255.255.0', '172.16.256.1', '1.1.1.-1'];
  let sampleIpv4sLen = sampleIpv4s.length;

  // Iterate over sampleCidrs and pass the element's value to getFirstIpAddress().
  for (let i = 0; i < sampleCidrsLen; i++) {
    console.log(`\n--- Test Number ${i + 1} getFirstIpAddress(${sampleCidrs[i]}) ---`);
    // Call getFirstIpAddress and pass the test subnet and an anonymous callback function.
    // The callback is using the fat arrow operator: () => { }
    getFirstIpAddress(sampleCidrs[i], (data, error) => {
      // Now we are inside the callback function.
      // Display the results on the console.
      if (error) {
        console.error(`  Error returned from GET request: ${error}`);
      }
      console.log(`  Response returned from GET request: ${data}`);
    });
  }
  // Iterate over sampleIpv4s and pass the element's value to getIpv4MappedIpv6Address().
  for (let i = 0; i < sampleIpv4sLen; i++) {
    console.log(`\n--- Test Number ${i + 1} getIpv4MappedIpv6Address(${sampleIpv4s[i]}) ---`);
    // Assign the function results to a variable so we can check if a string or null was returned.
    let mappedAddress = getIpv4MappedIpv6Address(sampleIpv4s[i]);
    if( mappedAddress ) {
      console.log(`  IPv4 ${sampleIpv4s[i]} mapped to IPv6 Address: ${mappedAddress}`);
    } else {
      console.error(`  Problem converting IPv4 ${sampleIpv4s[i]} into a mapped IPv6 address.`);
    }
  }
}

}

module.exports = new IpAddress;