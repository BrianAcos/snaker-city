

const products = {
  page: 1,
  pages: 3,
  data: [
    {
      id: "1",
      brand: "Nike",
      model: "Air Force",
      color: { name: "Blanco", code: "#000000" },
      images: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-zapatillas-DMJP7P.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-zapatillas-DMJP7P.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-zapatillas-DMJP7P.png"],
      price: 500,
      date_publish: "2022/07/21",
      date_launch: "2021/10/11",
      sizes: [{ size: 39, cuantity: 4 }, { size: 40, cuantity: 2 }, { size: 41, cuantity: 1 }, { size: 42, cuantity: 3 }, { size: 43, cuantity: 3 }, { size: 44, cuantity: 2 }],
    },
    {
      id: "2",
      brand: "Nike",
      model: "SB Blazer",
      color: { name: "Verde", code: "#008000" },
      images: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/054873c2-9877-4609-aa44-d2331175314c/sb-blazer-court-mid-zapatillas-de-skateboard-fTHj2n.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/64c994fb-6c67-490c-929e-9cffb01a40c8/sb-blazer-court-mid-zapatillas-de-skateboard-fTHj2n.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/55625f99-8a17-4772-8732-a756b08d6400/sb-blazer-court-mid-zapatillas-de-skateboard-fTHj2n.png"],
      price: 649,
      date_publish: "2022/06/25",
      date_launch: "2021/11/23",
      sizes: [{ size: 39, cuantity: 4 }, { size: 40, cuantity: 2 }, { size: 41, cuantity: 1 }, { size: 42, cuantity: 3 }, { size: 43, cuantity: 3 }, { size: 44, cuantity: 2 }],
    },
    {
      id: "3",
      brand: "Nike",
      model: "Air Max 97",
      color: { name: "Azul", code: "#" },
      images: ["https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/29113895-8c09-4a8e-a894-3918f6e4748a/fecha-de-lanzamiento-de-las-air-max%C2%A097-blueberry-do8900-100.jpg", "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/c8a08192-b008-4224-993f-e73eceaaf170/fecha-de-lanzamiento-de-las-air-max%C2%A097-blueberry-do8900-100.jpg", "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/3a179061-ab74-4ef9-9c2d-b353f45dddfd/fecha-de-lanzamiento-de-las-air-max%C2%A097-blueberry-do8900-100.jpg"],
      price: 341,
      date_publish: "2021/05/07",
      date_launch: "2020/11/10",
      sizes: [{ size: 39, cuantity: 4 }, { size: 40, cuantity: 2 }, { size: 41, cuantity: 1 }, { size: 42, cuantity: 3 }, { size: 43, cuantity: 3 }, { size: 44, cuantity: 2 }],
    },
    {
      id: "4",
      brand: "Nike",
      model: "Free Run 5.0",
      color: { name: "Azul", code: "#0000FF" },
      images: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ae85cdc-c00d-42ff-8405-08d818b092c0/free-run-5-zapatillas-de-running-asfalto-GlfMlr.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f203c370-3f54-4ce1-aab0-41d6dbf346af/free-run-5-zapatillas-de-running-asfalto-GlfMlr.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/60d1895f-8731-4736-9661-598e4e0a9bd9/free-run-5-zapatillas-de-running-asfalto-GlfMlr.png"],
      price: 435,
      date_publish: "2022/03/14",
      date_launch: "2021/12/01",
      sizes: [{ size: 39, cuantity: 4 }, { size: 40, cuantity: 2 }, { size: 41, cuantity: 1 }, { size: 42, cuantity: 3 }, { size: 43, cuantity: 3 }, { size: 44, cuantity: 2 }],
    },
    {
      id: "5",
      brand: "Nike",
      model: "Dunk Low",
      color: { name: "Negro", code: "#FFFFFF" },
      images: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ccd48dea-c0c0-48d3-9f25-75a2cda36ded/custom-nike-dunk-unlocked-by-you.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/18cb89a8-7154-4cbd-aa8e-b1673cd69040/custom-nike-dunk-unlocked-by-you.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ba5c51c4-4046-4fc8-b664-5e5f82eb3c49/custom-nike-dunk-unlocked-by-you.png"],
      price: 567,
      date_publish: "2022/05/05",
      date_launch: "2021/11/06",
      sizes: [{ size: 39, cuantity: 4 }, { size: 40, cuantity: 2 }, { size: 41, cuantity: 1 }, { size: 42, cuantity: 3 }, { size: 43, cuantity: 3 }, { size: 44, cuantity: 2 }],
    },
    {
      id: "6",
      brand: "Nike",
      model: "Air Force",
      color: { name: "Blanco", code: "#000000" },
      images: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-zapatillas-DMJP7P.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-zapatillas-DMJP7P.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-zapatillas-DMJP7P.png"],
      price: 500,
      date_publish: "2022/07/21",
      date_launch: "2021/10/11",
      sizes: [{ size: 39, cuantity: 4 }, { size: 40, cuantity: 2 }, { size: 41, cuantity: 1 }, { size: 42, cuantity: 3 }, { size: 43, cuantity: 3 }, { size: 44, cuantity: 2 }],
    },
    {
      id: "7",
      brand: "Nike",
      model: "SB Blazer",
      color: { name: "Verde", code: "#008000" },
      images: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/054873c2-9877-4609-aa44-d2331175314c/sb-blazer-court-mid-zapatillas-de-skateboard-fTHj2n.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/64c994fb-6c67-490c-929e-9cffb01a40c8/sb-blazer-court-mid-zapatillas-de-skateboard-fTHj2n.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/55625f99-8a17-4772-8732-a756b08d6400/sb-blazer-court-mid-zapatillas-de-skateboard-fTHj2n.png"],
      price: 649,
      date_publish: "2022/06/25",
      date_launch: "2021/11/23",
      sizes: [{ size: 39, cuantity: 4 }, { size: 40, cuantity: 2 }, { size: 41, cuantity: 1 }, { size: 42, cuantity: 3 }, { size: 43, cuantity: 3 }, { size: 44, cuantity: 2 }],
    },
    {
      id: "8",
      brand: "Nike",
      model: "Air Max 97",
      color: { name: "Azul", code: "#" },
      images: ["https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/29113895-8c09-4a8e-a894-3918f6e4748a/fecha-de-lanzamiento-de-las-air-max%C2%A097-blueberry-do8900-100.jpg", "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/c8a08192-b008-4224-993f-e73eceaaf170/fecha-de-lanzamiento-de-las-air-max%C2%A097-blueberry-do8900-100.jpg", "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/3a179061-ab74-4ef9-9c2d-b353f45dddfd/fecha-de-lanzamiento-de-las-air-max%C2%A097-blueberry-do8900-100.jpg"],
      price: 341,
      date_publish: "2021/05/07",
      date_launch: "2020/11/10",
      sizes: [{ size: 39, cuantity: 4 }, { size: 40, cuantity: 2 }, { size: 41, cuantity: 1 }, { size: 42, cuantity: 3 }, { size: 43, cuantity: 3 }, { size: 44, cuantity: 2 }],
    },
    {
      id: "9",
      brand: "Nike",
      model: "Free Run 5.0",
      color: { name: "Azul", code: "#0000FF" },
      images: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ae85cdc-c00d-42ff-8405-08d818b092c0/free-run-5-zapatillas-de-running-asfalto-GlfMlr.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f203c370-3f54-4ce1-aab0-41d6dbf346af/free-run-5-zapatillas-de-running-asfalto-GlfMlr.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/60d1895f-8731-4736-9661-598e4e0a9bd9/free-run-5-zapatillas-de-running-asfalto-GlfMlr.png"],
      price: 435,
      date_publish: "2022/03/14",
      date_launch: "2021/12/01",
      sizes: [{ size: 39, cuantity: 4 }, { size: 40, cuantity: 2 }, { size: 41, cuantity: 1 }, { size: 42, cuantity: 3 }, { size: 43, cuantity: 3 }, { size: 44, cuantity: 2 }],
    },
    {
      id: "10",
      brand: "Nike",
      model: "Dunk Low",
      color: { name: "Negro", code: "#FFFFFF" },
      images: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ccd48dea-c0c0-48d3-9f25-75a2cda36ded/custom-nike-dunk-unlocked-by-you.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/18cb89a8-7154-4cbd-aa8e-b1673cd69040/custom-nike-dunk-unlocked-by-you.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ba5c51c4-4046-4fc8-b664-5e5f82eb3c49/custom-nike-dunk-unlocked-by-you.png"],
      price: 567,
      date_publish: "2022/05/05",
      date_launch: "2021/11/06",
      sizes: [{ size: 39, cuantity: 4 }, { size: 40, cuantity: 2 }, { size: 41, cuantity: 1 }, { size: 42, cuantity: 3 }, { size: 43, cuantity: 3 }, { size: 44, cuantity: 2 }],
    },
  ]
}

export const fetch = async (url) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  switch (url) {
    case "https://snaker-city.com/products":
      return products;
    default:
      return null;
  }
}