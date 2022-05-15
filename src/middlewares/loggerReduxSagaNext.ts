const typeDispatchs = [
  {
    type: "REQUEST",
    emoji: "🌍",
    color: "\x1b[32m%s\x1b[0m",
    destiny: "---->",
  },
  {
    type: "SUCCESS",
    emoji: "🔵",
    color: "\x1b[36m%s\x1b[0m",
    destiny: "<----",
  },
  {
    type: "FAILURE",
    emoji: "🔴",
    color: "\x1b[31m%s\x1b[0m",
    destiny: "<----",
  },
  {
    type: "NONE",
    emoji: "⚪",
    color: "\x1b[37m%s\x1b[0m",
    destiny: "<--->",
  },
];

export const loggerNext =
  (currentStore: any) => (currentNext: any) => (currentAction: any) => {
    const resultNext = currentNext(currentAction);

    if (
      process.env.NODE_ENV !== "production" &&
      !currentAction.type.includes("@@") &&
      !global.window
    ) {
      const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const dispatch = typeDispatchs.find(
        (typeDispatch) =>
          currentAction.type.includes(typeDispatch.type) ||
          typeDispatch.type.includes("NONE")
      );

      if (dispatch) {
        console.log(
          `%s\x1b[0m %s \x1b[33m%s\x1b[0m %s \x1b[34m%s\x1b[0m  ${dispatch.color}  \x1b[36m%s\x1b[0m %s`,
          `${dispatch.emoji}`,
          "[",
          `${dateTimeFormat.format(Date.now())}`,
          ":",
          "SERVER DISPATCH ACTION",
          `${dispatch.destiny}`,
          `${currentAction.type}`,
          "]\n"
        );
      } else {
        console.log(
          `${dateTimeFormat.format(Date.now())} SERVER DISPATCH ACTION <---> ${
            currentAction.type
          }`
        );
      }
    }

    return resultNext;
  };
