const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
console.log("HERE!!!!!!!!!!!!!")
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });