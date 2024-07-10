export type Modal = {
  isOpen: boolean;
  url: string;
  description: string;
};

export type HandleImageClick = ({
  url,
  description,
}: Omit<Modal, "isOpen">) => void;

export type HandleVoidFn = () => void

export type HandleSearch = (newValue: string) => void