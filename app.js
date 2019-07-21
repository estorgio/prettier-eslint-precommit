console.log('one');
const ww = process.env.NODE_ENV.trim.toLowerCase();
if (ww === 'production') {
  console.log('Another one');
} else {
  console.log('test');
}
