import { nanoid } from 'nanoid'
import clipboard from 'clipboardy';

let randomString = nanoid();

// copy random string to clipboard
clipboard.writeSync(randomString);

console.log(`${randomString} successfully copied to clipboard!`);