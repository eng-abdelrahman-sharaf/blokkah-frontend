const fontSizesAliases: any = {
    "display-2xl": "20xl",
    "display-xl": "18xl",
    "display-lg": "16xl",
    "display-md": "14xl",
    "display-sm": "12xl",
    "display-xs": "10xl",
    "text-xl": "5xl",
    "text-lg": "4xl",
    "text-md": "3xl",
    "text-sm": "2xl",
    "text-xs": "xl",
  };
  
  const oldfontSize = {
    "display-2xl": [
      (72 / 16).toString() + "rem",
      {
        lineHeight: (90 / 16).toString() + "rem",
        letterSpacing: (-2 / 16).toString() + "rem",
      },
    ],
    "display-xl": [
      (60 / 16).toString() + "rem",
      {
        lineHeight: (72 / 16).toString() + "rem",
        letterSpacing: (-2 / 16).toString() + "rem",
      },
    ],
    "display-lg": [
      (48 / 16).toString() + "rem",
      {
        lineHeight: (60 / 16).toString() + "rem",
        letterSpacing: (-2 / 16).toString() + "rem",
      },
    ],
    "display-md": [
      (36 / 16).toString() + "rem",
      {
        lineHeight: (44 / 16).toString() + "rem",
        letterSpacing: (-2 / 16).toString() + "rem",
      },
    ],
    "display-sm": [
      (30 / 16).toString() + "rem",
      {
        lineHeight: (38 / 16).toString() + "rem",
      },
    ],
    "display-xs": [
      (24 / 16).toString() + "rem",
      {
        lineHeight: (32 / 16).toString() + "rem",
      },
    ],
    "text-xl": [
      (20 / 16).toString() + "rem",
      {
        lineHeight: (30 / 16).toString() + "rem",
      },
    ],
    "text-lg": [
      (18 / 16).toString() + "rem",
      {
        lineHeight: (28 / 16).toString() + "rem",
      },
    ],
    "text-md": [
      (16 / 16).toString() + "rem",
      {
        lineHeight: (24 / 16).toString() + "rem",
      },
    ],
    "text-sm": [
      (14 / 16).toString() + "rem",
      {
        lineHeight: (20 / 16).toString() + "rem",
      },
    ],
    "text-xs": [
      (12 / 16).toString() + "rem",
      {
        lineHeight: (18 / 16).toString() + "rem",
      },
    ],
  };
  
  const newfontSize: any = {};
  
  for (const [key, value] of Object.entries(oldfontSize)) {
    newfontSize[fontSizesAliases[key]] = value;
}
  
console.log(newfontSize);