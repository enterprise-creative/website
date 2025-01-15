export const database = [
  {
    id: 1,
    imageSource: "./assets/rally-bar-huddle.png",
    baseprice: 1750,
    basehours: {
      installHours: 2,
      configHours: 2,
      programingHours: 0,
      managementHours: 4,
    },
    manufacturer: "logitech",
    configuration: "conference",
    UCHardware: "Rally Bar Huddle System",
    mediaSources: {
      none: {
        name: "None",
        price: 0,
        optionHours: {
          installHours: 0,
          configHours: 0,
          programingHours: 0,
          managementHours: 0,
        },
      },
      hdmiTxRx: {
        name: "HDMI Tx/Rx",
        price: 1000,
        optionHours: {
          installHours: 2,
          configHours: 0,
          programingHours: 0,
          managementHours: 2,
        },
      },
      hdmiUsbTxRx: {
        name: "HDMI & USB Tx/Rx",
        price: 2000,
        optionHours: {
          installHours: 4,
          configHours: 0,
          programingHours: 0,
          managementHours: 4,
        },
      },
    },
    displays: {
      OfeDisplay: {
        name: "Owner Furnished Display",
        price: 700,
        optionHours: {
          installHours: 4,
          configHours: 2,
          programingHours: 0,
          managementHours: 6,
        },
      },
      CDE5530: {
        name: "Viewsonic CDE5530",
        price: 1000,
        optionHours: {
          installHours: 4,
          configHours: 0,
          programingHours: 0,
          managementHours: 4,
        },
      },
      CDE6530: {
        name: "Viewsonic CDE6530",
        price: 1400,
        optionHours: {
          installHours: 4,
          configHours: 0,
          programingHours: 0,
          managementHours: 4,
        },
      },
      CDE7530: {
        name: "Viewsonic CDE7530",
        price: 1500,
        optionHours: {
          installHours: 4,
          configHours: 0,
          programingHours: 0,
          managementHours: 4,
        },
      },
      CDE8630: {
        name: "Viewsonic CDE8630",
        price: 2800,
        optionHours: {
          installHours: 5,
          configHours: 0,
          programingHours: 0,
          managementHours: 5,
        },
      },
      CDE9830: {
        name: "Viewsonic CDE9830",
        price: 5000,
        optionHours: {
          installHours: 6,
          configHours: 0,
          programingHours: 0,
          managementHours: 6,
        },
      },
    },
    camera: {
      integrated: {
        name: "Integrated",
        price: 0,
        optionHours: {
          installHours: 0,
          configHours: 0,
          programingHours: 0,
          managementHours: 0,
        },
      },
    },
    audio: {
      integrated: {
        name: "Integrated",
        price: 0,
        optionHours: {
          installHours: 0,
          configHours: 0,
          programingHours: 0,
          managementHours: 0,
        },
      },
      rallyMic: {
        name: "Rally Mic Pod",
        price: 700,
        optionHours: {
          installHours: 3,
          configHours: 0,
          programingHours: 0,
          managementHours: 3,
        },
      },
    },
  },
];
