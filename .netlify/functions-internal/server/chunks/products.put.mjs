import { defineEventHandler, readBody } from 'h3';

const products_put = defineEventHandler(async (event) => {
  console.log("Hello world, I'm the Products PUT API Call and I am alive and working!");
  const body = await readBody(event);
  String(body.title);
  String(body.description);
  Number(body.blueprint_id);
  Array(body.variants);
  Number(body.print_provider_id);
  Array(body.print_areas);
  const opts = {
    url: `https://api.printify.com/v1/shops/6483145/products/${body.id}.json`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q"
    }
  };
  const updateProduct = await $fetch(opts.url, {
    method: "PUT",
    headers: opts.headers,
    body: JSON.stringify(body)
  });
  if (updateProduct.error) {
    return { error: updateProduct.error };
  }
  console.log("updateProduct.id");
  console.log(updateProduct.id);
  const newFstore = await $fetch("/api/set?col=products", { method: "POST", body: updateProduct });
  console.log("newFstore");
  console.log(newFstore);
  return { status: 200, body: updateProduct };
});

export { products_put as default };
//# sourceMappingURL=products.put.mjs.map
