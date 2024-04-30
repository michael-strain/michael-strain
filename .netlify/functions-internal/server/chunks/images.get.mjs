import { defineEventHandler, getQuery } from 'h3';

const images_get = defineEventHandler(async (event) => {
  var imageData = [];
  const opts = {
    method: "GET",
    url: "https://api.printify.com/v1/uploads.json",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q"
    }
  };
  const query = getQuery(event);
  if (query) {
    let page = 1;
    let limit = 1;
    if (query.page) {
      page = query.page;
    }
    if (query.limit) {
      limit = query.limit;
    }
    const url = `https://api.printify.com/v1/uploads.json?page=${page}&limit=${limit}`;
    imageData = await $fetch(url, {
      method: "GET",
      headers: opts.headers
    });
  } else {
    imageData = await $fetch(opts.url, {
      method: "GET",
      headers: opts.headers
    });
  }
  console.log(imageData);
  return imageData;
});

export { images_get as default };
//# sourceMappingURL=images.get.mjs.map
