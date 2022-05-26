import {writeFileSync} from 'node:fs'

const backup = 
`const Test = () => null;

export default Test;
`;

writeFileSync("./src/routes/Test.tsx",backup);