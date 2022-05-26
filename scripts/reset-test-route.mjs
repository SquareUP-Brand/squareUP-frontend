import {writeFileSync, existsSync} from 'node:fs'

const file = "./src/routes/Test.tsx";

const backup = 
`const Test = () => null;

export default Test;
`;

if(existsSync(file)) writeFileSync(file,backup);