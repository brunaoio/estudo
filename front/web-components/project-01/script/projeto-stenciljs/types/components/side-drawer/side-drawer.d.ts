export declare class SideDrawer {
  showContactInfo: boolean;
  titulo: string;
  opened: boolean;
  onCloseDrawer(): void;
  onChangeContent(content: string): void;
  open(): Promise<boolean>;
  render(): any[];
}
