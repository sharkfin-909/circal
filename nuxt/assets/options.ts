export interface Options {
  label: string;
  value: any;
  tone?: string;
}
const fontSizes: Options[] = [
  { label: "8", value: "8px" },
  { label: "9", value: "9px" },
  { label: "10", value: "10px" },
  { label: "11", value: "11px" },
  { label: "12", value: "12px" },
  { label: "13", value: "13px" },
  { label: "14", value: "14px" },
  { label: "15", value: "15px" },
  { label: "16", value: "16px" },
  { label: "17", value: "17px" },
  { label: "18", value: "18px" },
  { label: "19", value: "19px" },
  { label: "20", value: "20px" },
] as const;

const borderWidths: Options[] = [
  { label: "no border", value: "0px" },
  { label: "1", value: "1px" },
  { label: "2", value: "2px" },
  { label: "3", value: "3px" },
  { label: "4", value: "4px" },
  { label: "5", value: "5px" },
  { label: "6", value: "6px" },
  { label: "7", value: "7px" },
  { label: "8", value: "8px" },
  { label: "9", value: "9px" },
  { label: "10", value: "10px" },
] as const;

const opacities: Options[] = [
  {
    label: "0% (opaque)",
    value: "1",
    tone: "1",
  },
  // {
  //   label: "10%",
  //   value: "0.9",
  //   tone: "0.8",
  // },
  {
    label: "20%",
    value: "0.8",
    tone: "0.7",
  },
  // {
  //   label: "30%",
  //   value: "0.7",
  //   tone: "0.6",
  // },
  {
    label: "40%",
    value: "0.6",
    tone: "0.5",
  },
  // {
  //   label: "50%",
  //   value: "0.5",
  //   tone: "0.4",
  // },
  {
    label: "60%",
    value: "0.4",
    tone: "0.35",
  },
  // {
  //   label: "70%",
  //   value: "0.3",
  //   tone: "0.3",
  // },
  {
    label: "80%",
    value: "0.2",
    tone: "0.2",
  },
  // {
  //   label: "90%",
  //   value: "0.1",
  //   tone: "0.1",
  // },
  {
    label: "100% (invisible)",
    value: "0",
    tone: "0",
  },
];

const fontWeights = [
  { label: "Thin", value: "100" },
  { label: "ExtraLight", value: "200" },
  { label: "Light", value: "300" },
  { label: "Regular", value: "400" },
  { label: "Medium", value: "500" },
  { label: "SemiBold", value: "600" },
  { label: "Bold", value: "700" },
  { label: "ExtraBold", value: "800" },
  { label: "Black", value: "900" },
] as const;


const avatarShapes = [
  { label: "circle", value: 2000 },
  { label: "rounded", value: 20 },
  { label: "soft corners", value: 10 },
  { label: "square", value: 2 },

];

export const selectOptions = {
  fontSizes,
  opacities,
  borderWidths,
  fontWeights,
  avatarShapes,
};
