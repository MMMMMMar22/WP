import blog1Svg from "../assets/img/blog1.svg";
import blog2Svg from "../assets/img/blog2.svg";
import blog3Svg from "../assets/img/blog3.svg";
import blog4Svg from "../assets/img/blog4.svg";
import blog5Svg from "../assets/img/blog5.svg";

const blogData = {
  header: "Многое Происходит, Мы Ведем об Этом Блог.",
  leftCard: {
    image: { src: blog1Svg, alt: "GPT-3 и OpenAI" },
    date: "Сент 26, 2021",
    title: "GPT-3 и Openai - это будущее. Давайте разберемся, как это?",
    linkText: "Читать полную статью",
  },
  rightCards: [2, 3, 4, 5].map((n) => ({
    image: { src: `${n === 2 ? blog2Svg : n === 3 ? blog3Svg : n === 4 ? blog4Svg : blog5Svg}`, alt: "GPT-3 и OpenAI" },
    date: "Сент 26, 2021",
    title: "GPT-3 и Openai - это будущее. Давайте разберемся, как это?",
    linkText: "Читать полную статью",
  })),
};

export default blogData;