/// <reference types="vite/client" />
/// <reference types="@types/shopify-buy" />

declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare namespace ShopifyBuy {
  interface Product{
    handle: string;
    id: string;
  }
}
