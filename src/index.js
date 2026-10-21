export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.motivationalpenguin.com") {
      url.hostname = "motivationalpenguin.com";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
