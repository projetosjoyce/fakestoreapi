export interface IButtonData {
  label?: string;
  icon?: string;
  color: 'primary' | 'secondary',
  type:  'submit' | 'button' | 'reset'
  disabled: boolean;
  styleObject?: { [X: string]: any };
  click?: () => void
}
