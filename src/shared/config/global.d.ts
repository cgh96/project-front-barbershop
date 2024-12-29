declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __staticRouterHydrationData: any;
  }

  declare module "*.svg" {
    const content: React.FC<React.SVGProps<SVGElement>>;
    export default content;
  }
}

export {};
