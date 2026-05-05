const productList = [
  {
    id: "01",
    name: "Bún nước lèo",
    price: 35000,
    image: "../assets/images/bunnuocleo.jpeg",
    productLink: "product-detail.html",
  },
  {
    id: "02",
    name: "Phở bò Hà Nội",
    price: 45000,
    image: "../assets/images/phobo.jpeg",
    productLink: "product-detail.html",
  },
  {
    id: "03",
    name: "Bún chả",
    price: 40000,
    image: "../assets/images/buncha.jpeg",
    productLink: "product-detail.html",
  },
  {
    id: "04",
    name: "Bánh xèo miền Tây",
    price: 25000,
    image: "../assets/images/banhxeo.jpeg",
    productLink: "product-detail.html",
  },
  {
    id: "05",
    name: "Cơm tấm sườn",
    price: 35000,
    image: "../assets/images/comtam.jpeg",
    productLink: "product-detail.html",
  },
  {
    id: "06",
    name: "Bún bò Huế",
    price: 50000,
    image: "../assets/images/bunbohue.jpeg",
    productLink: "product-detail.html",
  },
  {
    id: "07",
    name: "Hủ tiếu Nam Vang",
    price: 38000,
    image: "../assets/images/hutieunamvang.jpeg",
    productLink: "product-detail.html",
  },
  {
    id: "08",
    name: "Gỏi cuốn tôm thịt",
    price: 15000,
    image: "../assets/images/goicuon.jpeg",
    productLink: "product-detail.html",
  },
  {
    id: "09",
    name: "Bánh mì thịt nướng",
    price: 20000,
    image: "../assets/images/banhmi.jpeg",
    productLink: "product-detail.html",
  },
  {
    id: "10",
    name: "Chè ba màu",
    price: 15000,
    image: "../assets/images/chebamau.jpeg",
    productLink: "product-detail.html",
  },
];

function addProduct(id, name, price, image, hyperLink)
    {
    //1-Tạo thẻ div cho toàn bộ khung
        const productItem=document.createElement("div");
        productItem.setAttribute("class","product-item col m-2");
    //2-Tạo khung gắn hình ảnh
        const productImage=document.createElement("div");
        productImage.setAttribute("class","product-image h-75 ratio ratio-1x1 overflow-hidden");
    //3-Gắn hình ảnh vào
        const Image=document.createElement("img"); 
        Image.setAttribute("src",image);
        Image.setAttribute("alt",name);
        Image.setAttribute("class", "img-fluid object-fit-cover h-100");
    //4- Gán hình vào khung
        productImage.appendChild(Image);
    //5-Tạo thẻ div thông tin 
       const productInfo=document.createElement("div");
       productInfo.setAttribute("class","product-info h25 text-center");
       //i-Tạo paragraph 1
       const productName=document.createElement("p");
       const productNameText=document.createTextNode(name);
       productName.appendChild(productNameText);
       //ii-Tạo paragraph 2
       const productPrice=document.createElement("p");
       const productPriceText=document.createTextNode(price);
       productPrice.appendChild(productPriceText);

       
       //iii- Tạo hyper link
       const productLink=document.createElement("a");
       const productLinkText=document.createTextNode("Nhấn vào đây để xem chi tiết");
       productLink.appendChild(productLinkText);
       productLink.setAttribute("href",hyperLink);
       productLink.setAttribute("class","btn btn-info")
       //iiii- Gán paragraph 1, 2 vào khung
       productInfo.appendChild(productName);
       productInfo.appendChild(productPrice);
       productInfo.appendChild(productLink);
       //6-Gán khung hình và khung thông tin vào product item
        productItem.appendChild(productImage);
        productItem.appendChild(productInfo);

        //Gắn product item vào product list
        document.getElementById("product-list").appendChild(productItem);

    }