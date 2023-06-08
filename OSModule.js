const osModule = require('os')

console.log(osModule.tmpdir());
console.log(osModule.endianness());
console.log(osModule.hostname());
console.log(osModule.type());
console.log(osModule.platform());
console.log(osModule.arch());
console.log(osModule.release());
console.log(osModule.uptime());
console.log(osModule.loadavg());
console.log(osModule.cpus());
console.log(osModule.networkInterfaces());
console.log(osModule.totalmem());
console.log(osModule.freemem());