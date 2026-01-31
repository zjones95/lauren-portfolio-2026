export type ImageData = {
  src: string;
  alt: string;
  variant: "square" | "wide" | "tall";
};

export interface FilePayload {
  name: string;
  url: string;
  size: string;
}
