const fs = require('fs');
const path = require('path');

// Create package.json for ESM output
const esmPackageJson = {
  type: 'module'
};

// Create package.json for CJS output
const cjsPackageJson = {
  type: 'commonjs'
};

// Write package.json files
fs.writeFileSync(
  path.join(__dirname, '../dist/esm/package.json'),
  JSON.stringify(esmPackageJson, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, '../dist/cjs/package.json'),
  JSON.stringify(cjsPackageJson, null, 2)
);

console.log('✓ Created package.json files for ESM and CJS outputs');
