declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.mp4" {
  const value: string;
  export default value;
}

declare module "*.mp3" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  import type React from "react";
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
