export declare class Tooltip {
  texto: string;
  icon: string;
  opened: boolean;
  toogle(): Promise<boolean>;
  render(): any;
}
