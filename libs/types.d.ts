export interface MenuProps {
  title: string;
  url: string;
  items?: { id?: number; subTitle?: string; subUrl?: string }[];
}
