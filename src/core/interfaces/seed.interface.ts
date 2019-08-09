export interface IndicatorSeedPropsInterface {
  isCheck: boolean;
  onChange: Function;
}

export interface IndicatorSeedStateInterface {
  isCheck: boolean
}

export interface ItemSeedPropsInterface {
  title: string; 
  buttonLabel: string;
  status: boolean; 
  onClickTime: Function; 
  onSeedChange: Function;
}

export interface ListSeedPropsInterface {
  seeds: Array<any>;
  onClickTime: Function;
  onSeedChange: Function;
}