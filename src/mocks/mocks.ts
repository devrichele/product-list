export type Dessert = {
  title: string;
  description: string;
  image: string;
  price: string;
};

export const desserts: Dessert[] = [
  {
    title: "Bolo de Rolo",
    description:
      "Um tradicional bolo de rolo pernambucano, feito com camadas finas de massa e recheio de goiabada.",
    image:
      "https://img.freepik.com/vetores-premium/bolo-de-rolo-com-vetor-de-icone-de-comida-plana-de-desenho-animado-de-cobertura-de-morango_374761-236.jpg",
    price: "15.00",
  },
  {
    title: "Brigadeiro",
    description:
      "O famoso brigadeiro, doce de leite condensado, chocolate e granulado. Um clássico das festas brasileiras.",
    image:
      "https://media.istockphoto.com/id/1452529232/pt/vetorial/brigadeiro-traditional-brazilian-desert-latino-american-food-realistic-cartoon-illustration.jpg?s=612x612&w=0&k=20&c=nIYOWtdhN0YWhHFHIH6ghZbh7QOpgeOPQqgAIa6YtJ8=",
    price: "20.00",
  },
  {
    title: "Pavê de Chocolate",
    description:
      "Uma sobremesa deliciosa com camadas de biscoito, creme de chocolate e cobertura de chantilly.",
    image: "https://gartic.com.br/imgs/mural/se/sevenfold/pave-2.png",
    price: "16.20",
  },
  {
    title: "Quindim",
    description:
      "Doce típico do Brasil, feito com coco, gema de ovo e açúcar. Um sabor irresistível.",
    image:
      "https://media.istockphoto.com/id/1459078453/pt/vetorial/brazilian-dessert-quindim-with-coconut-flakes-latin-american-sweets-national-latin.jpg?s=612x612&w=0&k=20&c=fqbN6VaSvIIcfudHRkgQRYamvXpk1iRApBKXSLhfXgs=",
    price: "23.00",
  },
  {
    title: "Cocada",
    description:
      "Doce de coco com açúcar, que pode ser feito com coco fresco ou desidratado, crocante e delicioso.",
    image: "https://gartic.com.br/imgs/mural/xf/xfector_/cocada.png",
    price: "14.50",
  },
  {
    title: "Canjica",
    description:
      "Sobremesa de milho verde cozido com leite condensado, coco e amendoim. Uma verdadeira iguaria do nordeste.",
    image:
      "https://w7.pngwing.com/pngs/933/830/png-transparent-food-computer-icons-canjica-scalable-graphics-junina-brazilian-food-junina-brazilian-cookware-and-bakeware.png",
    price: "13.80",
  },
];
