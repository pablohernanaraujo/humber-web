export const Palette = {
  // color names are based on https://colornamer.netlify.app/
  black: '#000000',
  brilliantTurquoise: '#00A48C',
  chimneySweep: '#283238',
  chineseNewYear: '#FF3366',
  coronetBlue: '#5B708B',
  konkikyoBlue: '#1C2042',
  vodka: '#BCBEF2',
  white: '#ffffff',
  boysenberryShadow: '#EFF4F8',
  powderPuff: '#FFEEF3',
  whiteBlue: '#CDD4DB',
  davysGrey: '#e1e7ec',
  furyRed: '#fd0201',
  captainYellow: '#9b8408',
  unburnedPink: '#fbe7e6',
  blendedLight: '#fdfae8',
};

export type PaletteType = typeof Palette;
export type KeyPalette = keyof PaletteType;
