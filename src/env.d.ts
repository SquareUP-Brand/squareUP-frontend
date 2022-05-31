/// <reference types="vite/client" />

declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
interface ImportMetaEnv {
  
VITE_STOREFRONT_API_GRAPHQL_ENDPOINT: string;
VITE_STOREFRONT_API_ACCESS_TOKEN: string;
}
