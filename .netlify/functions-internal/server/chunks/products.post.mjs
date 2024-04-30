import { defineEventHandler, readBody } from 'h3';

const products_post = defineEventHandler(async (event) => {
  console.log("Hello world, I'm the Products Post API Call and I am alive and working!");
  const body = await readBody(event);
  const title = String(body.title);
  const description = String(body.description);
  const blueprint_id = Number(body.blueprint_id);
  const variants = body.variants;
  for (let i = 0; i < variants.length; i++) {
    variants[i].price = 9999;
  }
  const print_provider_id = Number(body.print_provider_id);
  const print_areas = body.print_areas;
  const opts = {
    url: "https://api.printify.com/v1/shops/6483145/products.json",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q"
    },
    body: {
      title,
      description,
      blueprint_id,
      print_provider_id,
      variants,
      print_areas
    }
  };
  console.log("I am attempting to post to the printify API shops/id/products endpoint");
  const postProduct = await $fetch(opts.url, {
    method: "POST",
    headers: opts.headers,
    body: opts.body
  });
  console.log("I have finished my attempt");
  if (postProduct.error) {
    return { error: postProduct.error };
  }
  const product = await $fetch("/api/printify/products?id=" + postProduct.id, { method: "GET" });
  if (product.error) {
    console.log(product.error);
    return { error: product.error };
  }
  console.log("Product created and fetched successfully!");
  console.log(product.id);
  for (let i = 0; i < product.variants.length; i++) {
    let newPrice = Math.ceil(product.variants[i].cost + product.variants[i].cost * 0.1 + 100);
    product.variants[i].price = newPrice;
  }
  console.log("I am now about to PUT printify products");
  const updatedProduct = await $fetch("/api/printify/products", { method: "PUT", headers: opts.headers, body: JSON.stringify(product) });
  if (updatedProduct.error) {
    return { error: updatedProduct.error };
  }
  console.log("All is looking good, we seem to have updated printify with the cost-calculated prices!");
  console.log("The put function should have also run, causing our firestore DB to update with the new product as well :D");
  return { status: 200, body: updatedProduct };
});

export { products_post as default };
//# sourceMappingURL=products.post.mjs.map
