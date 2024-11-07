import { models, chat } from "../v1/index.js";

const routeHandlers = {
  '/models': models,
  '/chat/completions': chat
};

// 接口分发
const inferfaceAdapater = (req, res) => {
  // Ensure the request method is POST
  // if (req.method !== 'POST') {
  //   return res.json({ message: `Not supported: ${req.method}` });
  // }

  // Parse the URL and get the path
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  const path = pathname.replace(req.baseUrl, '');

  // Handle the request based on the path
  const handler = routeHandlers[path];
  if (handler) {
    handler(req, res);
  } else {
    res.json({ message: `Not supported: ${path}` });
  }
}

export default inferfaceAdapater;