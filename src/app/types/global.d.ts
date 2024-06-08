declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module "*.svg" {
   import { FC, SVGProps } from "react";
   const content: FC<SVGProps<SVGElement>>;
   export default content;
}

declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"
declare module "*.gif"