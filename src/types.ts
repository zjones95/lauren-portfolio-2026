export type ImageData = {
  src: string;
  alt: string;
  variant: "square" | "wide" | "tall" | "tall-contained";
};

export interface FilePayload {
  name: string;
  url: string;
  size: string;
}
