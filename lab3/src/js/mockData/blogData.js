const blogData = {
  header: "Многое Происходит,<br>Мы Ведем об Этом Блог.",
  leftCard: {
    image: { src: "./assets/img/blog1.svg", alt: "GPT-3 и OpenAI" },
    date: "Сент 26, 2021",
    title: "GPT-3 и Openai - это будущее. Давайте разберемся, как это?",
    linkText: "Читать полную статью",
  },
  rightCards: [2, 3, 4, 5].map((n) => ({
    image: { src: `./assets/img/blog${n}.svg`, alt: "GPT-3 и OpenAI" },
    date: "Сент 26, 2021",
    title: "GPT-3 и Openai - это будущее. Давайте разберемся, как это?",
    linkText: "Читать полную статью",
  })),
};

export default blogData;


