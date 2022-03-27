interface botM1 {
  id: number;
  config: {
    nb_assets: number;
    currency: string
  },
  buy_periodic: {
    enable: boolean;
    rsi_min: number
  },
  buy_dip: {
    enable: boolean;
    rsi_max: number;
    cool: number;
    share_reserve: number;
    share_vault: number
  },
  sell_take_profit: {
    enable: boolean;
    rsi_min: number;
    tp_share: number;
    cool: number
  },
  sell_stop_loss: {
    enable: boolean;
    threshold: number;
    cool: number
  },
  funding: {
    enable: boolean;
    dca_funding: number;
    period: string
  }
}

export default botM1;